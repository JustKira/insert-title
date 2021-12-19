from student_interface.models import Student
from .serializers import StudentSerializer
from student_interface.models import Student
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

@api_view(['GET'])
def studentList(request):
    student = Student.objects.all()
    serializer = StudentSerializer(student,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def studentDetail(request,pk):
    student = Student.objects.get(id=pk)
    serializer = StudentSerializer(student,many=False)
    return Response(serializer.data)    

@api_view(['POST'])
def studentCreate(request):
    serializer = StudentSerializer(data=request.data) 
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def studentUpdate(request,pk):
    student = Student.objects.get(id=pk)
    serializer = StudentSerializer(instance=student,data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data) 

@api_view(['DELETE'])
def studentDelete(request,pk):
    student = Student.objects.get(id=pk)
    student.delete()
    return Response('student got deleted id='+str(pk))    