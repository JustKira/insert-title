# Generated by Django 4.0 on 2022-01-10 21:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ral', '0003_remove_ituser_is_classified_ituser_usertype'),
    ]

    operations = [
        migrations.RenameField(
            model_name='ituser',
            old_name='first_name',
            new_name='firstname',
        ),
    ]