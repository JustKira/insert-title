# Generated by Django 4.0 on 2021-12-19 20:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
        ('recruiter_interface', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='recruiter',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='auth.user'),
        ),
        migrations.AlterField(
            model_name='recruiter',
            name='company_description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='recruiter',
            name='company_size',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='recruiter',
            name='contact_links',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='recruiter',
            name='industry',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='recruiter',
            name='institution_name',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='recruiter',
            name='is_company',
            field=models.BooleanField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='recruiter',
            name='verified',
            field=models.BooleanField(blank=True, null=True),
        ),
    ]
