from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('sorter.urls')),  # Include the sorter app's URLs
]
