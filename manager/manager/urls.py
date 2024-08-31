from django.contrib import admin
from django.urls import path
from django.urls.conf import include

# from users.urls import urlpatterns as users_urlpatterns

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('wins.urls'))
]

# urlpatterns += users_urlpatterns
