from rest_framework import viewsets
from .serializers import EventoSerializer
from .models import Evento

class EventoViewSet(viewsets.ModelViewSet):
    serializer_class = EventoSerializer
    queryset = Evento.objects.all()
