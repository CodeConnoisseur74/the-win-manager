from rest_framework import routers

from wins.views import CategoryViewSet, DashboardWinByCategoryViewSet, DashboardWinCompletionStatViewSet, WinViewSet

router = routers.DefaultRouter()
router.register(r'api/categories', CategoryViewSet, 'categories')
router.register(r'api/wins', WinViewSet, 'wins')
router.register('api/dashboard/wins-completion', DashboardWinCompletionStatViewSet, 'wins-completion')
router.register('api/dashboard/wins-category-distribution', DashboardWinByCategoryViewSet, 'wins-category-distribution')

urlpatterns = router.urls
