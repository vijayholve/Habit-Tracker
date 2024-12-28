from django.urls import path
from . import views

urlpatterns = [
    path('', CompletedHabitsList.as_view(), name='completed-habits-list'),
]
