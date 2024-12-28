from rest_framework import serializers
from .models import HabitLog

class HabitLogSerializer(serializers.ModelSerializer):
    title = serializers.CharField(source='habit.title')

    class Meta:
        model = HabitLog
        fields = ['id', 'title', 'date', 'is_complete']