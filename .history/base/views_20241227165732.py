from django.shortcuts import render
from .models import Habit
from .form import HabitForm
def habitList(request):
    habits=Habit.objects.filter(blocked=False)
    return render(request, 'index.html', {'habits': habits})


from rest_framework import generics
from .models import HabitLog
from .serializers import HabitLogSerializer

class CompletedHabitsList(generics.ListAPIView):
    serializer_class = HabitLogSerializer

    def get_queryset(self):
        user = self.request.user
        return HabitLog.objects.filter(habit__user=user, is_complete=True)

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