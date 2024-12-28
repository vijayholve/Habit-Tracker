from django.db import models
from django.contrib.auth.models import User
class Habit(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    title= models.CharField(max_length=100)
    description = models.TextField(null=True,blank=True)
    image=models.ImageField(upload_to="Habit_image",default="")
    is_active = models.BooleanField(default=True)
    blocked=models.BooleanField(default=False)
    def __str__(self):
        return self.title
    
class HabitLog(models.Model):
    habit= models.ForeignKey(Habit, on_delete=models.CASCADE,
                             related_name="habit")
    date= models.DateField(null=True)
    is_complete=models.BooleanField(default=False)
    def __str__(self):
        return f"{self.habit.title} - {self.date} - {self.is_complete}"
    
     