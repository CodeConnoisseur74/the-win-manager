from django.shortcuts import render
from rest_framework import viewsets

from wins.models import Category
from wins.serializers import CategorySerializer


class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()
