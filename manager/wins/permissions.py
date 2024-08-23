from rest_framework import permissions

from wins.models import Category


class WinPermission(permissions.BasePermission):
    message = 'Category not found'

    def has_permission(self, request, view):
        print(view.action)  # noqa: T201
        if view.action in ('create', 'update', 'partial_update'):
            category = request.data.get('category')
            if category is None:
                return True
            user_categories = Category.objects.filter(
                created_by=request.user).values_list('id', flat=True)
            if not category not in user_categories:
                return False

        return True
