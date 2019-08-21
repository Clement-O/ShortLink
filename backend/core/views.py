from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404

# Third party import
from rest_framework import (generics, mixins, parsers, renderers, permissions,
                            response)
from rest_framework_simplejwt import views, serializers

# Local import
from .models import ShortLink
from .serializers import ShortLinkSerializer, UserLinkSerializer


class ShortLinkView(generics.GenericAPIView,
                    mixins.CreateModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.RetrieveModelMixin):
    """
    Create a short link for a given full link and associate a user if given
    Retrieve full link already shortened
    :return JSON {"full_link": "https://www.google.com/", "short_link": "D88o9"}
    """
    permission_classes = [permissions.AllowAny]
    parser_classes = (
        parsers.FormParser,
        parsers.MultiPartParser,
        parsers.JSONParser,
    )
    renderer_classes = (renderers.JSONRenderer,)
    serializer_class = ShortLinkSerializer

    def post(self, request, *args, **kwargs):
        print(request.data)
        full_link = request.data['full_link']
        if ShortLink.objects.filter(full_link=full_link).exists():
            if str(request.user) != 'AnonymousUser':
                username = str(request.user)
                user = User.objects.get(username=username)
                if ShortLink.objects.filter(full_link=full_link,
                                            users=user.id).exists():
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
    permission_classes = [permissions.AllowAny]
    parser_classes = (
        parsers.FormParser,
        parsers.MultiPartParser,
        parsers.JSONParser,
    )
    renderer_classes = (renderers.JSONRenderer,)
    serializer_class = ShortLinkSerializer

    def get_object(self):
        obj = get_object_or_404(ShortLink, short_link=self.kwargs['short_link'])
        if obj:
            obj.add_count()
        return obj


class UserLinksView(generics.RetrieveAPIView):
    """
    Accept GET only
    :return JSON [
        {"full_link": "...", "short_link": "...", "redirect_count": "..."},
        {"full_link": "...", "short_link": "...", "redirect_count": "..."}
    ]
    """
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = (
        parsers.JSONParser,
    )
    renderer_classes = (renderers.JSONRenderer,)
    serializer_class = UserLinkSerializer

    def get_object(self):
        user = User.objects.get(username=self.request.user)
        return ShortLink.objects.all().filter(users=user.id)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, many=True)
        return response.Response(serializer.data)


class UserAccessTokenView(views.TokenObtainPairView):
    """
    Custom TokenObtainPairView to 'delete' the ability to access it via the backend
    :return JSON Web Token. Access & Refresh Token (User ID in payload)
    """
    permission_classes = [permissions.AllowAny]
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
    permission_classes = [permissions.AllowAny]
    parser_classes = (
        parsers.FormParser,
        parsers.MultiPartParser,
        parsers.JSONParser,
    )
    renderer_classes = (renderers.JSONRenderer,)
    serializer_class = serializers.TokenRefreshSerializer


class UserVerifyTokenView(views.TokenVerifyView):
    """
    Custom TokenVerifyView to 'delete' the ability to access it via the backend
    :return
    """
    permission_classes = [permissions.AllowAny]
    parser_classes = (
        parsers.FormParser,
        parsers.MultiPartParser,
        parsers.JSONParser,
    )
    renderer_classes = (renderers.JSONRenderer,)
    serializer_class = serializers.TokenVerifySerializer
