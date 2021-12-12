# Generated by Django 4.0 on 2021-12-08 22:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Career',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('standard_skills', models.TextField()),
                ('recommended_projects', models.TextField()),
                ('soft_skills', models.TextField()),
                ('frameworks', models.TextField()),
                ('roadmap', models.TextField()),
            ],
        ),
    ]