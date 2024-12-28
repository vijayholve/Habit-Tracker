from django.urls import path
from . import views

urlpatterns = [
    path('api/habit-logs/', views.CompletedHabitsList.as_view(), name='completed-habits-list'),
]
