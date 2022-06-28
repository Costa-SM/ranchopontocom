from django.db import models


class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Menus(models.Model):

    breakfast_choices = [('--', '--'), ('Batata Doce', 'Batata Doce'), ('Hambúrguer', 'Hambúrguer'), ('Ovo', 'Ovo'), ('Salsicha', 'Salsicha')]
    breakfast_mingau_choices = [('--', '--'), ('Mingau de Chocolate', 'Mingau de Chocolate'), ('Mingau de Milho', 'Mingau de Milho'), ('Mingau de Morango', 'Mingau de Morango')]
    breakfast_general_choices = [('--', '--'), ('Bolo de Chocolate', 'Bolo de Chocolate'), ('Bolo de Milho', 'Bolo de Milho'), ('Café com Leite', 'Café com Leite'), ('Iogurte', 'Iogurte'), ('Pão com Manteiga', 'Pão com Manteiga')]

    week_day = models.CharField(max_length=8)
    month_day = models.CharField(max_length=8)

    breakfast_main = models.CharField(max_length=20, choices=breakfast_choices)
    breakfast_1 = models.CharField(max_length=20, default="", choices=breakfast_mingau_choices)
    breakfast_2 = models.CharField(max_length=20, default="", choices=breakfast_general_choices)
    breakfast_3 = models.CharField(max_length=20, default="", choices=breakfast_general_choices)
    breakfast_4 = models.CharField(max_length=20, default="", choices=breakfast_general_choices)
    breakfast_5 = models.CharField(max_length=20, default="", choices=breakfast_general_choices)

    lunch_main = models.CharField(max_length=20)
    lunch_1 = models.CharField(max_length=20, default="")
    lunch_2 = models.CharField(max_length=20, default="")
    lunch_3 = models.CharField(max_length=20, default="")
    lunch_4 = models.CharField(max_length=20, default="")
    lunch_5 = models.CharField(max_length=20, default="")

    dinner = models.CharField(max_length=20)
    dinner_1 = models.CharField(max_length=20, default="")
    dinner_2 = models.CharField(max_length=20, default="")
    dinner_3 = models.CharField(max_length=20, default="")
    dinner_4 = models.CharField(max_length=20, default="")
    dinner_5 = models.CharField(max_length=20, default="")

    url = models.CharField(max_length=200)

    def __str__(self):
        return self.week_day