from django.contrib import admin
from .models import User
from .models import Menus
from .models import Feedback

# Register your models here.

class UserAdmin(admin.ModelAdmin):
    list = ('name', 'email', 'password')

admin.site.register(User, UserAdmin)
admin.site.register(Menus, UserAdmin)
admin.site.register(Feedback, UserAdmin)

