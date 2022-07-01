from django.contrib import admin
from .models import User, Menu, Feedback

# Register your models here.

class UserAdmin(admin.ModelAdmin):
    list = ('name', 'email', 'password')

admin.site.register(User, UserAdmin)
admin.site.register(Menu, UserAdmin)
admin.site.register(Feedback, UserAdmin)
