from django.db.models import Count
from django.db.models.query_utils import Q
from django.shortcuts import render
from rest_framework import filters, permissions, viewsets
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

from wins.models import Category
from wins.permissions import WinPermission
from wins.serializers import (
    CategorySerializer,
    DashboardWinByCategorySerializer,
    DashboardWinCompletionStatSerializer,
    WinSerializer,
)

# Create your views here.


class StandardResultSetPagination(PageNumberPagination):
    page_size = 6
    page_size_query_param = 'page_size'
    max_page_size = 6


class CategoryViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]  # noqa: RUF012
    serializer_class = CategorySerializer

    def get_queryset(self):
        return self.request.user.categories.all()

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class WinViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, WinPermission]  # noqa: RUF012
    serializer_class = WinSerializer
    pagination_class = StandardResultSetPagination
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]  # noqa: RUF012
    search_fields = ['title']  # noqa: RUF012
    ordering_fields = ['completed', '-created_at']  # noqa: RUF012
    ordering = ['completed', '-created_at']  # noqa: RUF012

    # def get_queryset(self):
    #     user = self.request.user
    #     completed = self.request.query_params.get('completed')
    #     priority = self.request.query_params.get('priority')
    #     category = self.request.query_params.get('category')
    #     query_params = {}

    #     if completed is not None:
    #         query_params['completed'] = completed

    #     if priority is not None:
    #         query_params['priority'] = priority

    #     if category is not None:
    #         query_params['category'] = category

    #     return Win.objects.filter(created_by=user, **query_params)

    # def perform_create(self, serializer):
    #     serializer.save(created_by=self.request.user)


# class DashboardWinCompletionStatViewSet(viewsets.ViewSet):
#     permission_classes = [permissions.IsAuthenticated]

#     def list(self, request):
#         user = self.request.user
#         queryset = Win.objects.filter(created_by=user).values('completed').annotate(count=Count('completed'))
#         serializer = DashboardWinCompletionStatSerializer(queryset, many=True)
#         return Response(serializer.data)


# class DashboardWinByCategoryViewSet(viewsets.ViewSet):
#     permission_classes = [permissions.IsAuthenticated]

#     def list(self, request):
#         user = self.request.user
#         wins_filter = {}
#         completed = self.request.query_params.get('completed')
#         if completed is not None:
#             wins_filter['wins__completed'] = completed
#         queryset = Category.objects.filter(created_by=user).annotate(count=Count('wins', filter=Q(**wins_filter)))
#         serializer = DashboardWinByCategorySerializer(queryset, many=True)
#         return Response(serializer.data)
