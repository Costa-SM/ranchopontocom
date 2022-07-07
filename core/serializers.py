from rest_framework import serializers
from .models import User, Menus, Feedback, Vote

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'password')

class MenusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menus
        fields = ('id', 'week_day', 'month_day', 'breakfast_main', 'breakfast_1', 'breakfast_2', 'breakfast_3', 'breakfast_4', 'breakfast_5',
        'lunch_main', 'lunch_1', 'lunch_2', 'lunch_3', 'lunch_4', 'lunch_5',
        'dinner_main', 'dinner_1', 'dinner_2', 'dinner_3', 'dinner_4', 'dinner_5')

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ('id', 'message', 'date')

class VoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vote
        fields = ('item_name', 'url', 'vote_quantity', 'vote_users')
