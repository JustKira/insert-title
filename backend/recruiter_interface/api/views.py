from student_interface.models import Student
from .serializers import RecruiterSerializer
from recruiter_interface.models import Recruiter
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

@api_view(['GET'])
def recruiterList(request):
    recruiter = Recruiter.objects.all()
    serializer = RecruiterSerializer(recruiter,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def recruiterDetail(request,pk):
    recruiter = Recruiter.objects.get(id=pk)
    serializer = RecruiterSerializer(recruiter,many=False)
    return Response(serializer.data)    

@api_view(['POST'])
def recruiterCreate(request):
    serializer = RecruiterSerializer(data=request.data) 
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def recruiterUpdate(request,pk):
    recruiter = Recruiter.objects.get(id=pk)
    serializer = RecruiterSerializer(instance=recruiter,data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data) 

@api_view(['DELETE'])
def recruiterDelete(request,pk):
    recruiter = Recruiter.objects.get(id=pk)
    recruiter.delete()
    return Response('student got deleted id='+str(pk))    