# Generated by Django 4.0 on 2022-01-10 18:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ral', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='ituser',
            old_name='education',
            new_name='university',
        ),
        migrations.AlterField(
            model_name='ituser',
            name='phone_number',
            field=models.TextField(blank=True, null=True),
        ),
    ]