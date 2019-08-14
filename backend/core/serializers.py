from django.contrib.auth.models import User

# Third party import
from rest_framework import serializers

# Local import
from .models import ShortLink


class ShortLinkSerializer(serializers.ModelSerializer):

    class Meta:
        model = ShortLink
        fields = ['full_link', 'short_link']
        read_only_fields = ['short_link']

    def create(self, validated_data):
        shortlink = ShortLink.objects.create(**validated_data)
        if str(self.context['request'].user) != 'AnonymousUser':
            username = str(self.context['request'].user)
            shortlink.users.set(User.objects.filter(username=username))
        return shortlink

    # COMMENT / QUESTION: Is the two first lines usefull ?
    def update(self, instance, validated_data):
        instance.full_link = validated_data.get('full_link', instance.full_link)
        instance.save()
        if str(self.context['request'].user) != 'AnonymousUser':
            username = str(self.context['request'].user)
            instance.users.add(User.objects.get(username=username))
        return instance


class UserLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShortLink
        fields = ['full_link', 'short_link', 'redirect_count']
        read_only_fields = ['full_link', 'short_link', 'redirect_count']
