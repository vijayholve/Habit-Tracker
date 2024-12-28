from django.urls import path
from . import views

urlpatterns = [
    path("api/habit-logs/", habit_log_api, name="habit_log_api"),
]
