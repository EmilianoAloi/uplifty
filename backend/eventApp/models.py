from django.db import models

class Evento(models.Model):
    titulo = models.CharField(max_length=50, blank=True)
    descripcion = models.TextField(blank=True)
    precio = models.DecimalField(max_digits=10, decimal_places=2, blank=True)
    fecha = models.CharField(max_length=50, blank=True)
    ubicacion = models.CharField(max_length=255, blank=True)
    
    def __str__(self):
        return self.titulo