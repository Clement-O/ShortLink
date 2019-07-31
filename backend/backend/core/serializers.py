# Third party import
from rest_framework import serializers

# Local import
from .models import ShortLink

class CreateShortLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShortLink
        fields = ['full_link', 'short_link']
        read_only_fields = ['short_link']