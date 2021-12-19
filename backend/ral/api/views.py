from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import RegisterSerializer, UserSerializer
from django.contrib.auth.models import User

from django.contrib.auth import authenticate

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
    ]

    return Response(routes)

@api_view(['GET'])
def getUser(request,pk):
    queryset = User.objects.get(id=pk)
    serializer = UserSerializer(queryset,many=False)
    return Response(serializer.data)

@api_view(['POST'])
def userCreate(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        User.objects.create_user(
            serializer.initial_data['username'],
            serializer.initial_data['email'],
            serializer.initial_data['password'],
        )
        return Response(serializer.data)
    else:
        return Response(serializer._errors)
