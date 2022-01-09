from django.db import models
from django.contrib.auth.models import PermissionsMixin , AbstractBaseUser, BaseUserManager
from django.db.models.expressions import F
from django.utils.translation import gettext_lazy as _
# Create your models here.


class ITU_AccountManager(BaseUserManager):

    def create_superuser(self, email, username, first_name, password, **other_fields):
        other_fields.setdefault('is_staff',True)
        other_fields.setdefault('is_superuser',True)
        other_fields.setdefault('is_active',True)

        if other_fields.get('is_staff') is not True:
            raise ValueError('superuser must be assigen to is_staff=True.')

        if other_fields.get('is_superuser') is not True:
            raise ValueError('superuser must be assigen to is_superuser=True.')   

        return self.create_user(email,username,first_name,password,**other_fields)    

    def create_user(self,first_name, username, email ,password , **other_fields):

        if not email:
            raise ValueError(_('You must provide an email address'))
         
        email = self.normalize_email(email)
        user = self.model(email=email,username=username,first_name=first_name,**other_fields)
        user.set_password(password)
        user.save()

        return user

class ITUser(AbstractBaseUser,PermissionsMixin):

    email = models.EmailField(_('email address'),unique= True, max_length=254)
    username = models.CharField(max_length=150 , unique=True)
    first_name = models.CharField(max_length=150)
    join_date = models.DateTimeField(auto_now_add=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_classified = models.BooleanField(default=False)
    
    #Recruiter
    phone_number = models.TextField(null=True,blank=True)
    birthdate = models.DateTimeField(null=True,blank=True)
    bio = models.TextField(null=True,blank=True)

    contact_links = models.TextField(null=True,blank=True)

    is_company = models.BooleanField(null=True,blank=True)

    # If is_company == True
    institution_name = models.TextField(null=True,blank=True)
    company_size = models.TextField(null=True,blank=True)
    industry = models.TextField(null=True,blank=True)
    company_description = models.TextField(null=True,blank=True)

    profile_image = models.ImageField(null=True, blank=True)

    # IMPORTANT
    verified = models.BooleanField(null=True,blank=True)

    #careers = models.ManyToManyField('roadmap_system.Career')

    #Student
    undergraduate_year = models.IntegerField(null=True,blank=True)
    # phone_number = models.TextField()
    # birthdate = models.DateTimeField(null=True, blank=True)

    # Might be useful in categorization
    university = models.TextField(null=True, blank=True)

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

    other_website_links = models.TextField(null=True, blank=True)

    extra_info = models.TextField(null=True, blank=True)
    profile_image = models.ImageField(null=True, blank=True)
    resume = models.FileField(null=True, blank=True)

    #

    objects = ITU_AccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name']

    def __str__(self):
        return str(self.username)
    
 