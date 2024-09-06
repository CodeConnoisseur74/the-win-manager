from django.contrib import admin

from wins.models import Category, Win

# Register your models here.


class WinAdmin(admin.ModelAdmin):
    list_display = ['title']  # noqa: RUF012


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name']  # noqa: RUF012


admin.site.register(Win, WinAdmin)
admin.site.register(Category, CategoryAdmin)
