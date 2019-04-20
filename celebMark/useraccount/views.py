from .helpers import unique_fields
from .serializers import ( 
    UserRegisterSerializer, 
    CelebRegisterSerializer, 
    BaseUserViewSerializer,
    CustomTokenObtainPairSerializer
    )
from django.shortcuts import get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.views import APIView
from useraccount.models import BaseUser, User, Celeb

# Create your views here.
class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class register_user(CreateAPIView):
    model = User
    serializer_class = UserRegisterSerializer
    permission_classes = [permissions.AllowAny, ]

class register_celeb(CreateAPIView):
    model = Celeb
    serializer_class = CelebRegisterSerializer
    permission_classes = [permissions.AllowAny, ]

@api_view(['HEAD'])
@permission_classes([permissions.AllowAny])
def check_unique(request):
    params = dict(**request.query_params)
    if len(params) == 1 and list(params.keys())[0] in unique_fields():
        key,value = params.popitem()
        value = ''.join(value)
        user = get_object_or_404(BaseUser, **{key: value})
        return Response(status=200) if user else Response(status=404)
    return Response(status=403)

class UserDetailView(APIView):
    permission_classes = [permissions.IsAuthenticated,]

    def get(self,request):
        baseuser_serializer = BaseUserViewSerializer(request.user)
        return Response(baseuser_serializer.data)