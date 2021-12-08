from django.db import models

# Create your models here.


class Career(models.Model):
    standard_skills = models.TextField()
    recommended_projects = models.TextField()
    soft_skills = models.TextField()
    frameworks = models.TextField()

    # TODO define structure (probably dictonary of milestones)
    roadmap = models.TextField()
