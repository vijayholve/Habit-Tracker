from django.urls import path
from . import views

urlpatterns = [
    path("api/habit-logs/", views.habit_log_api, name="habit_log_api"),
]
