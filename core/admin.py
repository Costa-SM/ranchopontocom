from django.contrib import admin
from .models import User
from .models import Menus

# Register your models here.

class UserAdmin(admin.ModelAdmin):
    list = ('name', 'email', 'password')

admin.site.register(User, UserAdmin)
admin.site.register(Menus, UserAdmin)

