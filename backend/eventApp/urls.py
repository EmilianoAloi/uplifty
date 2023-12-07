from django.urls import path, include
from rest_framework import routers
from .views import EventoViewSet

router = routers.DefaultRouter()
router.register(r'eventos', EventoViewSet, 'evento')

urlpatterns = [
    path("", include(router.urls))
]

