from rest_framework import serializers
from .models import User, Menus

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'password')

class MenusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menus
        fields = ('id', 'week_day', 'month_day', 'breakfast', 'lunch', 'dinner', 'url')