from django.forms import ModelForm
from .models import Habit
class HabitForm(ModelForm):
    class Meta:
        model= Habit
        fields = ['title', 'description', 'image', ]
        