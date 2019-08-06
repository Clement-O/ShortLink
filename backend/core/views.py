# Third party import
from rest_framework.generics import CreateAPIView, RetrieveAPIView
from rest_framework import parsers, renderers
from rest_framework_simplejwt.views import (TokenObtainPairView,
                                            TokenRefreshView)
from rest_framework_simplejwt.serializers import (TokenObtainPairSerializer,
                                                  TokenRefreshSerializer)

# Local import
from .models import ShortLink
from .serializers import ShortLinkSerializer


class CreateShortLinkView(CreateAPIView):
    """
    Create a short link for a given full link
    Accept POST only
    :return JSON {"full_link": "https://www.google.com/", "short_link": "D88o9"}
    """
    parser_classes = (
        parsers.FormParser,
        parsers.MultiPartParser,
        parsers.JSONParser,
    )
    renderer_classes = (renderers.JSONRenderer,)
    serializer_class = ShortLinkSerializer


class RetrieveShortLinkView(RetrieveAPIView):
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


class UserAccessTokenView(TokenObtainPairView):
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
    serializer_class = TokenObtainPairSerializer


class UserRefreshTokenView(TokenRefreshView):
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
    serializer_class = TokenRefreshSerializer
