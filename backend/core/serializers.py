from django.conf import settings

# Third party import
from rest_framework import serializers

# Local import
from .models import ShortLink


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model: settings.AUTH_USER_MODEL
        fields = ['id', 'username']


class ShortLinkSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=False)

    class Meta:
        model = ShortLink
        fields = ['full_link', 'short_link', 'users']
        read_only_fields = ['short_link', 'users']

    def create(self, validated_data):
        user_data = validated_data.pop('users')
        shortlink = ShortLink.objects.create(**validated_data)
        settings.AUTH_USER_MODEL.objects.create(shortlink=shortlink, **user_data)
