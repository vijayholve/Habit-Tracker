from django.urls import path
from . import views

urlpatterns = [
    path('api/completed-habits/', CompletedHabitsList.as_view(), name='completed-habits-list'),
]
