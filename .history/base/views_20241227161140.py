from django.shortcuts import render
from .models import Habit
from .form import HabitForm
def habitList(request):
    habits=Habit.objects.filter(blocked=False)
    return render(request, .html', {'habits': habits})

def createHabit(request):
    form=HabitForm()
    if request.method=='POST':
        form=HabitForm(request.POST)
        if form.is_valid():
            form.save()
            return habitList(request)
        else:
            print(form.errors)
    return render(request, 'habits/create.html', {'form': form})