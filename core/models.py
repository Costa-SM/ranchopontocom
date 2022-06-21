from django.db import models


class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Menu(models.Model):
    week_day = models.CharField(max_length=8)
    month_day = models.CharField(max_length=8)
    breakfast = models.CharField(max_length=200)
    lunch = models.CharField(max_length=200)
    dinner = models.CharField(max_length=200)
    url = models.CharField(max_length=200)

    def __str__(self):
        return self.week_day