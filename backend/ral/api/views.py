
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import UserSerializer
from ral.models import ITUser
from django.contrib.auth import authenticate

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['email'] = user.email
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getUser(request,pk):
    queryset = ITUser.objects.get(id=pk)
    serializer = UserSerializer(queryset,many=False)
    return Response(serializer.data)

@api_view(['POST'])
def userCreate(request):
    print(request.data)
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer._errors)

@api_view(['PATCH'])
def userUpdate(request,pk):
    user = ITUser.objects.get(id=pk)
    serializer = UserSerializer(instance = user,data=request.data,partial=True)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)
