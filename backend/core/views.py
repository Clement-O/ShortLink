# Third party import
from rest_framework.generics import CreateAPIView, RetrieveAPIView
from rest_framework import parsers, renderers

# Local import
from .models import ShortLink
from .serializers import ShortLinkSerializer


# Handle POST
class CreateShortLinkView(CreateAPIView):
    parser_classes = (
        parsers.FormParser,
        parsers.MultiPartParser,
        parsers.JSONParser,
    )
    renderer_classes = (renderers.JSONRenderer,)
    serializer_class = ShortLinkSerializer


# Handle GET
class RetrieveShortLinkView(RetrieveAPIView):
    parser_classes = (
        parsers.FormParser,
        parsers.MultiPartParser,
        parsers.JSONParser,
    )
    renderer_classes = (renderers.JSONRenderer,)
    serializer_class = ShortLinkSerializer

    def get_object(self):
        return ShortLink.objects.get(short_link=self.kwargs.get('short_link'))

    # return object like this one
    # {
    #     "full_link": "https://www.google.com/",
    #     "short_link": "D88o9"
    # }
