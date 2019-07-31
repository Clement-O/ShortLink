from django.urls import path

# Local import
from . import views

urlpatterns = [
    path('create-short-link', views.CreateShortLinkView.as_view())
]