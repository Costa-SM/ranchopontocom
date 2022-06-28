from django.contrib import admin
from .models import User, Vote

# Register your models here.

class UserAdmin(admin.ModelAdmin):
    list = ('name', 'email', 'password')

admin.site.register(User, UserAdmin)
admin.site.register(Vote, UserAdmin)