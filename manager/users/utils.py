import requests
from django.conf import settings as djSettings  # noqa: N812
from django.core import exceptions as django_exceptions
from django.core.exceptions import ValidationError
from rest_framework import serializers

error_code = 'g_recaptcha_response'
error_message = 'Invalid ReCAPTCHA, please try again'


def validate_g_recaptcha_response(data):
    try:
        if 'g_recaptcha_response' not in data:
            raise ValidationError(code=error_code, message=error_message)
        recaptcha_response = data['g_recaptcha_response']
        req_data = {'secret': djSettings.GOOGLE_RECAPTCHA_SECRET, 'response': recaptcha_response}
        r = requests.post('https://www.google.com/recaptcha/api/siteverify', data=req_data)  # noqa: S113
        result = r.json()
        if result['success']:
            return data
        raise ValidationError(code=error_code, message=error_message)
    except django_exceptions.ValidationError as e:
        raise serializers.ValidationError({'g_recaptcha_response': e.message})  # noqa: B904
