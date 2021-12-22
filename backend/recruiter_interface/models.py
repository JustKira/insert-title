from django.db import models

# Create your models here.


class Recruiter(models.Model):

    first_name = models.TextField()
    middle_name = models.TextField()
    last_name = models.TextField()
    email = models.EmailField(unique=True)
    phone_number = models.TextField()
    birthdate = models.DateTimeField()
    bio = models.TextField()

    contact_links = models.TextField()

    is_company = models.BooleanField()

    # If is_company == True
    institution_name = models.TextField()
    company_size = models.TextField()
    industry = models.TextField()
    company_description = models.TextField()

    profile_image = models.ImageField(null=True, blank=True)

    # IMPORTANT
    verified = models.BooleanField()

    careers = models.ManyToManyField('roadmap_system.Career')
