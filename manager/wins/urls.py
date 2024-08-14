from rest_framework import routers

from wins.views import CategoryViewSet

router = routers.DefaultRouter()
router.register(r'api/categories', CategoryViewSet, 'categories')

urlpatterns = router.urls
