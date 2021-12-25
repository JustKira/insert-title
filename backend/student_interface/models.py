from django.db import models
from django.db.models.deletion import CASCADE
from ral.models import ITUser
# Create your models here.


class Student(models.Model):
    # MUST HAVE >>
    user = models.ForeignKey(ITUser, on_delete=CASCADE, null=True)
    first_name = models.TextField()
    middle_name = models.TextField()
    last_name = models.TextField()
    email = models.EmailField(unique=True)
    bio = models.TextField()
    undergraduate_year = models.IntegerField()
    phone_number = models.TextField()
    birthdate = models.DateTimeField()

    # Might be useful in categorization
    education = models.TextField(null=True, blank=True)

    # Written in the form of a list for later parsing
    work_experience = models.TextField(null=True, blank=True)
    volunteering_experience = models.TextField(null=True, blank=True)
    memberships = models.TextField(null=True, blank=True)

    # Written in the form of dictionary {language:level_of_proficiency}
    languages = models.TextField(null=True, blank=True)

    # Can be used to automatically import user repositories for portfolio auto-fill #TODO
    github_link = models.URLField(null=True, blank=True)
    # Can be used to import other fields to make profile completion easier #TODO

    linkedin_link = models.URLField(null=True, blank=True)
    # Dictionary format for later parsing
    other_website_links = models.TextField(null=True, blank=True)

    extra_info = models.TextField(null=True, blank=True)

    # Needs to be setup
    profile_image = models.ImageField(null=True, blank=True)
    resume = models.FileField(null=True, blank=True)

    # Not sure about on_delete, needs testing
    # career = models.ForeignKey(
    # 'roadmap_system.Career', on_delete=models.DO_NOTHING)

    # TODO Needs testing
    #postings = models.ManyToManyField('Posting')


class Posting(models.Model):
    # auto_now_add : time of creation
    # auto_now : updated on every save
    timestamp = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    recruiter = models.ForeignKey(
        'recruiter_interface.Recruiter', on_delete=models.DO_NOTHING)
    career = models.ForeignKey(
        'roadmap_system.Career', on_delete=models.DO_NOTHING)
    title = models.TextField()
    job_description = models.TextField()
    paid = models.BooleanField()
    salary = models.IntegerField()
    location = models.TextField()
    duration = models.TextField()
    start_date = models.DateField()
    experience = models.TextField()

    education_req = models.TextField()

    image = models.ImageField(null=True, blank=True)

    # In list form
    skills_needed = models.TextField()
    extra_requirements = models.TextField()

    # Remote or offline
    remote = models.BooleanField()

    # Quality of life addition
    location_link = models.URLField()

    # TODO Needs testing
    students = models.ManyToManyField('Student')
