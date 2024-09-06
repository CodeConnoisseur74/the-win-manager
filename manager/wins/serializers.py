from rest_framework import serializers

from wins.models import Category, Win


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
        read_only_fields = ['created_by']  # noqa: RUF012


class WinSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(read_only=True, source='category.name')
    category_color = serializers.CharField(read_only=True, source='category.color')

    class Meta:
        model = Win
        fields = '__all__'
        read_only_fields = ['created_by']  # noqa: RUF012


class DashboardWinCompletionStatSerializer(serializers.ModelSerializer):
    count = serializers.IntegerField()

    class Meta:
        model = Win
        fields = ('completed', 'count')


class DashboardWinByCategorySerializer(serializers.ModelSerializer):
    count = serializers.IntegerField()

    class Meta:
        model = Category
        fields = ('id', 'name', 'color', 'count')
