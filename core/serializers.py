from rest_framework import serializers
from .models import User, Menu, Vote

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'password')

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = ('week_day', 'month_day', 'breakfast', 'lunch', 'dinner', 'url')

class VoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vote
        fields = ('item_name', 'url', 'vote_quantity', 'vote_users')