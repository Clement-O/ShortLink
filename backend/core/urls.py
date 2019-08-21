from django.urls import path

# Local import
from . import views

urlpatterns = [
    path(
        'create-short-link/',
        views.ShortLinkView.as_view(),
        name='short-link-create'
    ),
    path(
        'redirect/<short_link>/',
        views.RetrieveShortLinkView.as_view(),
        name='short-link-redirect'
    ),
    path(
        'user-link/',
        views.UserLinksView.as_view(),
        name='user-link-show'
    ),
    path(
        'token-access/',
        views.UserAccessTokenView.as_view(),
        name='user-access-token'
    ),
    path(
        'token-refresh/',
        views.UserRefreshTokenView.as_view(),
        name='user-refresh-token'
    ),
    path(
        'token-verify/',
        views.UserVerifyTokenView.as_view(),
        name='user-token-verify'
    )
]
