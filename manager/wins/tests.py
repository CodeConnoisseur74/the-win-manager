import pytest
from django.contrib.auth import get_user_model

from wins.models import Category, Win

User = get_user_model()


@pytest.mark.django_db
def test_create_win():
    # Create a test user
    user = User.objects.create_user(username='testuser', password='testpass')

    # Create a test category
    category = Category.objects.create(
        name='Work',
        color='FF5733',  # Any hex color code
        created_by=user,
    )

    # Create a Win instance
    win = Win.objects.create(
        title='Finish project',
        description='Complete the project by the deadline',
        completed=False,
        priority=Win.Priority.HIGH,
        category=category,
        created_by=user,
    )

    # Assert that the Win instance was created successfully
    assert win.title == 'Finish project'  # noqa: S101
    assert win.description == 'Complete the project by the deadline'  # noqa: S101
    assert win.completed is False  # noqa: S101
    assert win.priority == Win.Priority.HIGH  # noqa: S101
    assert win.category == category  # noqa: S101
    assert win.created_by == user  # noqa: S101

    # Check that the created_at field is auto-populated
    assert win.created_at is not None  # noqa: S101
