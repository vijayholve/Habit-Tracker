from django.urls import path
from . import views

urlpatterns = [
    path('', views.CompletedHabitsList.as_view(), name='completed-habits-list'),
]
