from django.shortcuts import render
from .serializers import UserSerializer, MenusSerializer
from rest_framework import viewsets
from .models import User, Menus

# Create your views here.
class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class MenusView(viewsets.ModelViewSet):
    serializer_class = MenusSerializer
    queryset = Menus.objects.all()