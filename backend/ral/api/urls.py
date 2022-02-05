from django.urls import path
from . import views 
from .views import MyTokenObtainPairView

from rest_framework_simplejwt.views import(
    TokenRefreshView,
)

urlpatterns = [
    path('token/',MyTokenObtainPairView.as_view(),name="token_obtian_pair"),
    path('token/refresh',TokenRefreshView.as_view(),name="token_refresh"),
    path('user/<pk>',views.getUser,name="user"),
    path('user-create',views.userCreate,name="user-create"),
    path('user-update/<pk>',views.userUpdate,name="user-update"),
]