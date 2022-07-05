from django.shortcuts import render
from .serializers import UserSerializer, MenusSerializer, FeedbackSerializer
from rest_framework import viewsets
from .models import User, Menus, Feedback
from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
import os

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

class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()