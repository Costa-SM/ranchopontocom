from django.shortcuts import render
from .serializers import UserSerializer, MenuSerializer, VoteSerializer
from rest_framework import viewsets
from .models import User, Menu, Vote

# Create your views here.
class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class MenuView(viewsets.ModelViewSet):
    serializer_class = MenuSerializer
    queryset = Menu.objects.all()

class VoteView(viewsets.ModelViewSet):
    serializer_class = VoteSerializer
    queryset = Vote.objects.all()