from django.urls import path
from . import views

urlpatterns = [
    path('recruiter',views.recruiterList, name='recruiters'),
    path('recruiter/<str:pk>',views.recruiterDetail, name='recruiter'),
    path('recruiter-create',views.recruiterCreate, name='recruiterC'),
    path('recruiter-update',views.recruiterUpdate, name='recruiterU'),
    path('recruiter-delete/<str:pk>',views.recruiterDelete, name='recruiterD'),
]
