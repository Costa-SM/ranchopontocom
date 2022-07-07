from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Menus(models.Model):

    # Based on rancho's real menu

    breakfast_choices = [('-------', '-------'), ('Bolo', 'Bolo'), ('Café/Leite', 'Café/Leite'), ('Mingau', 'Mingau'), ('Pães com Manteiga', 'Pães com Manteiga'), ('Prato Quente', 'Prato Quente')]

    main_choices = [('-------', '-------'), ('Almondegas ao Sugo', 'Almondegas ao Sugo'), ('Carne Assada', 'Carne Assada'), ('Carne em Cubos ao Molho Shoyu', 'Carne em Cubos ao Molho Shoyu'), ('Carne Moída com Milho', 'Carne Moída com Milho'), ('Estrogonofe de Carne', 'Estrogonofe de Carne'), ('Filé de Frango Acebolado', 'Filé de Frango Acebolado'), ('Filezinho à Parmegiana', 'Filezinho à Parmegiana'), ('Linguiça Acebolada', 'Linguiça Acebolada'), ('Lombo Assado/Molho', 'Lombo Assado/Molho'), ('Moqueca de Peixe', 'Moqueca de Peixe'), ('Peixe Frito', 'Peixe Frito'), ('Sobrecoxa Assada', 'Sobrecoxa assada'), ('Steak de Frango à Pizzaiolo', 'Steak de Frango à Pizzaiolo'), ('Torta de Frango', 'Torta de Frango')]
    side_choices = [('-------', '-------'), ('Salada', 'Salada'),  ('Arroz/Feijão', 'Arroz/Feijão'), ('Sobremesa', 'Sobremesa'), ('Refresco', 'Refresco'), ('Batara Palha', 'Batata Palha'), ('Creme de Espinafre', 'Creme de Espinafre'), ('Creme de Milho', 'Creme de Milho'), ('Farofa Rica', 'Farofa Rica'), ('Macarrão ao Molho Branco', 'Macarrão ao Molho Branco'), ('Pirão', 'Pirão')]

    week_day = models.CharField(max_length=8)
    month_day = models.CharField(max_length=8)

    breakfast_main = models.CharField(max_length=30, default="-------", choices=breakfast_choices)
    breakfast_1 = models.CharField(max_length=30, default="-------", choices=breakfast_choices)
    breakfast_2 = models.CharField(max_length=30, default="-------", choices=breakfast_choices)
    breakfast_3 = models.CharField(max_length=30, default="-------", choices=breakfast_choices)
    breakfast_4 = models.CharField(max_length=30, default="-------", choices=breakfast_choices)
    breakfast_5 = models.CharField(max_length=30, default="-------", choices=breakfast_choices)

    lunch_main = models.CharField(max_length=30, default="-------", choices=main_choices)
    lunch_1 = models.CharField(max_length=30, default="-------", choices=side_choices)
    lunch_2 = models.CharField(max_length=30, default="-------", choices=side_choices)
    lunch_3 = models.CharField(max_length=30, default="-------", choices=side_choices)
    lunch_4 = models.CharField(max_length=30, default="-------", choices=side_choices)
    lunch_5 = models.CharField(max_length=30, default="-------", choices=side_choices)

    dinner_main = models.CharField(max_length=30, default="-------", choices=main_choices)
    dinner_1 = models.CharField(max_length=30, default="-------", choices=side_choices)
    dinner_2 = models.CharField(max_length=30, default="-------", choices=side_choices)
    dinner_3 = models.CharField(max_length=30, default="-------", choices=side_choices)
    dinner_4 = models.CharField(max_length=30, default="-------", choices=side_choices)
    dinner_5 = models.CharField(max_length=30, default="-------", choices=side_choices)

    def __str__(self):
        return self.week_day

class Feedback(models.Model):
    message = models.CharField(max_length=300)
    date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.message

class Vote(models.Model):
    item1_name = models.CharField(max_length=50)
    item2_name = models.CharField(max_length=50)
    url1 = models.CharField(max_length=200)
    url2 = models.CharField(max_length=200)
    vote_quantity_1 = models.IntegerField()
    vote_quantity_2 = models.IntegerField()
    vote_users = models.JSONField(default={"users": []})

    def __str__(self):
        return (self.item1_name + ' vs. ' + self.item2_name)
