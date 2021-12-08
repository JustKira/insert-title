from django.db import models

# Create your models here.


class CV(models.Model):
    # Code in django app
    template_code = models.IntegerField(unique=True)

    time_added = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    # In case of standardized forms:
    template_name = models.TextField()
    # List form
    institutions = models.TextField()

    # In case a recruiter wants to add a specific format so we can support it
    recruiter = models.ForeignKey(
        'recruiter_interface.Recruiter', null=True, on_delete=models.DO_NOTHING)
