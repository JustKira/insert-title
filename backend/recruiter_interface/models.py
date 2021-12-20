from django.db import models
from django.db.models.deletion import CASCADE
from django.contrib.auth.models import User
# Create your models here.


class Recruiter(models.Model):

    user = models.ForeignKey(User,on_delete=CASCADE,null=True)
    first_name = models.TextField()
    middle_name = models.TextField()
    last_name = models.TextField()
    email = models.EmailField(unique=True)
    phone_number = models.TextField()
    birthdate = models.DateTimeField()
    bio = models.TextField()

    contact_links = models.TextField(null=True,blank=True)

    is_company = models.BooleanField(null=True,blank=True)

    # If is_company == True
    institution_name = models.TextField(null=True,blank=True)
    company_size = models.TextField(null=True,blank=True)
    industry = models.TextField(null=True,blank=True)
    company_description = models.TextField(null=True,blank=True)

    # IMPORTANT
    verified = models.BooleanField(null=True,blank=True)

    careers = models.ManyToManyField('roadmap_system.Career')
