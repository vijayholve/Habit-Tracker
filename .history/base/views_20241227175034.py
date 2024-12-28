from django.shortcuts import render
from .models import Habit
from .form import HabitForm
def habitList(request):
    habits=Habit.objects.filter(blocked=False)
    return render(request, 'index.html', {'habits': habits})


from rest_framework import generics
from .models import HabitLog
from .serializers import HabitLogSerializer
from django.http import JsonResponse
from rest_framework.response import Response
@api_view(['GET'])
def habit_log_api(request):
    logs = HabitLog.objects.all()  # You can filter based on user if needed
    serializer = HabitLogSerializer(logs, many=True)
    return Response(serializer.data)
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