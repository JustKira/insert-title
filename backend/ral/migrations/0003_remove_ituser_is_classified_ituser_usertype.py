# Generated by Django 4.0 on 2022-01-10 19:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ral', '0002_rename_education_ituser_university_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ituser',
            name='is_classified',
        ),
        migrations.AddField(
            model_name='ituser',
            name='userType',
            field=models.CharField(default=-1, max_length=256),
            preserve_default=False,
        ),
    ]
