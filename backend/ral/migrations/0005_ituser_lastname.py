# Generated by Django 4.0 on 2022-01-11 14:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ral', '0004_rename_first_name_ituser_firstname'),
    ]

    operations = [
        migrations.AddField(
            model_name='ituser',
            name='lastname',
            field=models.CharField(default=-1, max_length=150),
            preserve_default=False,
        ),
    ]