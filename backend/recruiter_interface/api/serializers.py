from rest_framework import serializers
from recruiter_interface.models import Recruiter

class RecruiterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recruiter
        fields = '__all__' 
