from django.urls import path
from django.urls.resolvers import URLPattern
from . import views 
from .views import MyTokenObtainPairView

from rest_framework_simplejwt.views import(
    TokenRefreshView,
)

urlpatterns = [
    
    path('',views.getRoutes),

    path('token',MyTokenObtainPairView.as_view(),name="token_obtian_pair"),
    path('token/refresh',TokenRefreshView.as_view(),name="token_refresh"),
    path('user',views.getUser,name="user"),
    path('user-create',views.userCreate,name="user-create"),
]