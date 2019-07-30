from django.urls import path

# Local import
from . import views

urlpatterns = [
    path(
        'create-short-link/',
        views.CreateShortLinkView.as_view(),
        name='short-link-create'
    ),
    path(
        'redirect/<short_link>/',
        views.RetrieveShortLinkView.as_view(),
        name='short-link-redirect'
    )
]