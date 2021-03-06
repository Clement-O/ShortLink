# Generated by Django 2.2.3 on 2019-07-30 16:56

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ShortLink',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_link', models.URLField(unique=True, validators=[django.core.validators.URLValidator])),
                ('short_link', models.CharField(max_length=5, unique=True)),
            ],
        ),
    ]
