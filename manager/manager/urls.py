from django.conf import settings
from django.conf.urls.static import static  # Import static helper
from django.contrib import admin
from django.urls import path, re_path
from django.urls.conf import include
from frontend import views as frontend_views
from users.urls import urlpatterns as users_urlpatterns

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', frontend_views.index),
    path('', include('wins.urls'))]

urlpatterns += users_urlpatterns
urlpatterns += [re_path(r'^.*', frontend_views.index)]
