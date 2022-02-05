

from rest_framework import serializers

from ral.models import ITUser

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = ITUser
        fields = ['id','email','firstname','lastname','username','password','userType',
        #These Field arent req can be pouplated later
        'phone_number','birthdate','bio',
        #STUDENT
        'undergraduate_year','university','languages','github_link','linkedin_link','other_website_links',
        #RECRUITER
        'contact_links','is_company'
        ]

    password = serializers.CharField(write_only=True)

    def create(self, validated_data):

        user = ITUser.objects.create_user(
            
            email=validated_data['email'],
            firstname=validated_data['firstname'],
            lastname=validated_data['lastname'],
            username=validated_data['username'],
            password=validated_data['password'],
            userType=validated_data['userType'],    

        )

        return user


