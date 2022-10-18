from django.db import models
import uuid


class User(models.Model):
    date_joined = models.DateTimeField(verbose_name="date joined", auto_now_add=True)
    last_seen = models.DateTimeField(verbose_name="last login", auto_now=True)
    uid = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return str(self.email)