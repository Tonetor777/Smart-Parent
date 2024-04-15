from django.contrib import admin
from .models import Parent , Student, User , Teacher , Admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _

class ParentAdmin(admin.ModelAdmin):
    list_display = ['user', 'get_children_names']

    def get_children_names(self, obj):
        return ", ".join([child.first_name for child in obj.children.all()]) 

    get_children_names.short_description = 'Children'  
@admin.register(User)
class UserAdmin(BaseUserAdmin):
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        (_('Personal info'), {'fields': ('first_name', 'last_name', 'email', 'phone_number', 'role')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ( 'first_name', 'last_name', 'email', 'phone_number', 'role' , 'password1', 'password2'),
        }),
    )
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff', 'role')
    search_fields = ('username', 'email', 'first_name', 'last_name')
    ordering = ('username',)

@admin.register(Parent)
class ParentAdmin(admin.ModelAdmin):
    list_display = ('get_full_name',)
    search_fields = ('user__first_name', 'user__last_name', 'user__email')

    def get_full_name(self, obj):
        return f'{obj.user.first_name} {obj.user.last_name}'
    get_full_name.short_description = 'Parent Name'

@admin.register(Teacher)
class TeacherAdmin(admin.ModelAdmin):
    list_display = ('get_full_name',)
    search_fields = ('user__first_name', 'user__last_name', 'user__email')

    def get_full_name(self, obj):
        return f'{obj.user.first_name} {obj.user.last_name}'
    get_full_name.short_description = 'Teacher Name'

@admin.register(Admin)
class AdminAdmin(admin.ModelAdmin):
    list_display = ('get_full_name',)
    search_fields = ('user__first_name', 'user__last_name', 'user__email')

    def get_full_name(self, obj):
        return f'{obj.user.first_name} {obj.user.last_name}'
    get_full_name.short_description = 'Admin Name'
class StudentAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'gender', 'roll_number', 'grade', 'section')
    list_filter = ('gender', 'grade', 'section')
    search_fields = ('first_name', 'last_name', 'roll_number')

admin.site.register(Student, StudentAdmin)

