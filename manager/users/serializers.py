from django.contrib.auth import get_user_model
from djoser.serializers import SendEmailResetSerializer
from rest_framework import serializers

from users.utils import validate_g_recaptcha_response

User = get_user_model()


class CustomSendEmailResetSerializer(SendEmailResetSerializer):
    g_recaptcha_response = serializers.CharField(required=False)

    def validate(self, data):
        validated_data = validate_g_recaptcha_response(data)
        return validated_data
