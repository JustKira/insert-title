from django.urls import path
from . import views

urlpatterns = [
    path('students',views.studentList, name='students'),
    path('student/<str:pk>',views.studentDetail, name='student'),
    path('student-create',views.studentCreate, name='studentsC'),
    path('student-update',views.studentUpdate, name='studentsU'),
    path('student-delete/<str:pk>',views.studentDelete, name='studentsD'),
]
