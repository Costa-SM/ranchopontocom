from django.shortcuts import render
from .serializers import UserSerializer, MenusSerializer, FeedbackSerializer, VoteSerializer
from rest_framework import viewsets
from .models import User, Menus, Vote, Feedback

# Create your views here.
class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class MenusView(viewsets.ModelViewSet):
    serializer_class = MenusSerializer
    queryset = Menus.objects.all()

class FeedbackView(viewsets.ModelViewSet):
    serializer_class = FeedbackSerializer
    queryset = Feedback.objects.all()

class VoteView(viewsets.ModelViewSet):
    serializer_class = VoteSerializer
    queryset = Vote.objects.all()
