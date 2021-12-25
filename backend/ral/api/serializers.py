

from rest_framework import serializers

from ral.models import ITUser

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = ITUser
        fields = ['id','username','email','password']

class RegisterSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)

    def create(self, validated_data):

        user = ITUser.objects.create_user(
            username=validated_data['user_name'],
            email=validated_data['email'],
            password=validated_data['password'],
        )

        return user

    class Meta:
        model = ITUser
        # Tuple of serialized model fields (see link [2])
        fields = ( "username","email", "password" )

