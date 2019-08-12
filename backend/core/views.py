from django.contrib.auth.models import User

# Third party import
from rest_framework import generics, mixins, parsers, renderers
from rest_framework_simplejwt import views, serializers

# Local import
from .models import ShortLink
from .serializers import ShortLinkSerializer


class ShortLinkView(generics.GenericAPIView,
                    mixins.CreateModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.RetrieveModelMixin):
    """
    Create a short link for a given full link and associate a user if given
    Retrieve full link already shortened
    :return JSON {"full_link": "https://www.google.com/", "short_link": "D88o9"}
    """
    parser_classes = (
        parsers.FormParser,
        parsers.MultiPartParser,
        parsers.JSONParser,
    )
    renderer_classes = (renderers.JSONRenderer,)
    serializer_class = ShortLinkSerializer

    def post(self, request, *args, **kwargs):
        full_link = request.data['full_link']
        if ShortLink.objects.filter(full_link=full_link).exists():
            if str(request.user) != 'AnonymousUser':
                username = str(request.user)
                user = User.objects.get(username=username)
                if ShortLink.objects.filter(full_link=full_link, users=user.id).exists():
                    return self.retrieve(request, *args, **kwargs)
                else:
                    return self.update(request, *args, **kwargs)
            else:
                return self.retrieve(request, *args, **kwargs)
        else:
            return self.create(request, *args, **kwargs)

    def get_object(self):
        return ShortLink.objects.get(full_link=self.request.data['full_link'])


class RetrieveShortLinkView(generics.RetrieveAPIView):
    """
    Retrieve the full link (to redirect to it) of a given short link
    Accept GET only
    :return JSON {"full_link": "https://www.google.com/", "short_link": "D88o9"}
    """
    parser_classes = (
        parsers.FormParser,
        parsers.MultiPartParser,
        parsers.JSONParser,
    )
    renderer_classes = (renderers.JSONRenderer,)
    serializer_class = ShortLinkSerializer

    def get_object(self):
        return ShortLink.objects.get(short_link=self.kwargs.get('short_link'))


class UserAccessTokenView(views.TokenObtainPairView):
    """
    Custom TokenObtainPairView to 'delete' the ability to access it via the backend
    :return JSON Web Token. Access & Refresh Token (User ID in payload)
    """
    parser_classes = (
        parsers.FormParser,
        parsers.MultiPartParser,
        parsers.JSONParser,
    )
    renderer_classes = (renderers.JSONRenderer,)
    serializer_class = serializers.TokenObtainPairSerializer


class UserRefreshTokenView(views.TokenRefreshView):
    """
    Custom TokenRefreshView to 'delete' the ability to access it via the backend
    :return JSON Web Token. Access Token (User ID in payload)
    """
    parser_classes = (
        parsers.FormParser,
        parsers.MultiPartParser,
        parsers.JSONParser,
    )
    renderer_classes = (renderers.JSONRenderer,)
    serializer_class = serializers.TokenRefreshSerializer
