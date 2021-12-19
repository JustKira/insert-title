
from django.contrib import admin
from django.urls import path ,include

# just test to render index.html
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    # test vvv
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/',include('ral.api.urls')),
    path('api/',include('student_interface.api.urls')),
]
