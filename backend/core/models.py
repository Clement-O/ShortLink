import string
import random

from django.db import models
from django.core.validators import URLValidator
from django.conf import settings


class ShortLink(models.Model):
    full_link = models.URLField(validators=[URLValidator], unique=True)
    short_link = models.CharField(max_length=5, unique=True)
    users = models.ManyToManyField(settings.AUTH_USER_MODEL, blank=True,
                                   related_name='shortlinks')

    def save(self, *args, **kwargs):
        if self.pk is None:
            self.shorten_link()
        self.clean()
        super(ShortLink, self).save(*args, **kwargs)

    def shorten_link(self):
        chr = string.ascii_letters + string.digits
        rand_short_link = ''.join([random.choice(chr) for n in range(5)])
        while ShortLink.objects.filter(short_link=rand_short_link).exists():
            rand_short_link = ''.join([random.choice(chr) for n in range(5)])
        self.short_link = rand_short_link
