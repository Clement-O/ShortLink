from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

# Third party import
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Local import
from .models import ShortLink
from .serializers import CreateShortLinkSerializer


class CreateShortLinkView(APIView):
    def post(self, request, format=None):
        serializer = CreateShortLinkSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)