from django.shortcuts import render
from .models import Habit
from .form import HabitForm
def habitList(request):
    habits=Habit.objects.filter(blocked=False)
    return render(request, 'index.html', {'habits': habits})


from rest_framework import generics
from .models import HabitLog
from .serializers import HabitLogSerializer

def habit_log_api(request):
    if request.method == "GET":
        logs = HabitLog.objects.select_related('habit').all()
        data = [
            {
                "id": log.id,
                "title": log.habit.title,
                "date": log.date,
                "is_complete": log.is_complete,
            }
            for log in logs
        ]
        return JsonResponse(data, safe=False)

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