from rest_framework import serializers
from .models import User, Menu

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'password')

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = ('week_day', 'month_day', 'breakfast', 'lunch', 'dinner', 'url')