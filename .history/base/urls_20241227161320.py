from django.urls import path
from . import views

urlpatterns = [
    path('',views.habitList,name="home-page")
]
