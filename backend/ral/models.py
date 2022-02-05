from django.db import models
from django.contrib.auth.models import PermissionsMixin , AbstractBaseUser, BaseUserManager
from django.utils.translation import gettext_lazy as _
# Create your models here.


class ITU_AccountManager(BaseUserManager):

    def create_superuser(self, email, username, firstname,lastname,password, userType,**other_fields):
        other_fields.setdefault('is_staff',True)
        other_fields.setdefault('is_superuser',True)
        other_fields.setdefault('is_active',True)

        if other_fields.get('is_staff') is not True:
            raise ValueError('superuser must be assigen to is_staff=True.')

        if other_fields.get('is_superuser') is not True:
            raise ValueError('superuser must be assigen to is_superuser=True.')   

        return self.create_user(email,firstname,lastname,username,password,userType,**other_fields)    

    def create_user(self,email,firstname,lastname,username,password,userType, **other_fields):

        if not email:
            raise ValueError(_('You must provide an email address'))
         
        email = self.normalize_email(email)
        user = self.model(email=email,firstname=firstname,lastname=lastname,username=username,userType=userType,**other_fields)
        user.set_password(password)
        user.save()

        return user


class ITUser(AbstractBaseUser,PermissionsMixin):

    USERTYPES = (
        ('V','VISTOR'),
        ('A','ADMIN'),
        ('S','STUDENT'),
        ('R','RECRUITER'),
    )

    email = models.EmailField(_('email address'),unique= True, max_length=254)
    username = models.CharField(max_length=150 , unique=True)
    firstname = models.CharField(max_length=150)
    lastname = models.CharField(max_length=150)
    join_date = models.DateTimeField(auto_now_add=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    
    userType = models.CharField(max_length=256,choices=USERTYPES,default="V")
    
    #COMMON
    phone_number = models.TextField(null=True,blank=True)
    birthdate = models.DateTimeField(null=True,blank=True)
    bio = models.TextField(null=True,blank=True)

    #Student
    undergraduate_year = models.IntegerField(null=True,blank=True)
    university = models.TextField(null=True, blank=True)
    languages = models.TextField(null=True, blank=True)
    github_link = models.URLField(null=True, blank=True)
    linkedin_link = models.URLField(null=True, blank=True)
    other_website_links = models.TextField(null=True, blank=True)

    #RECRUITER
    contact_links = models.TextField(null=True,blank=True)
    is_company = models.BooleanField(null=True,blank=True)
    
    
    objects = ITU_AccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'firstname','lastname','userType']

    def __str__(self):
        return str(self.username)
    
 