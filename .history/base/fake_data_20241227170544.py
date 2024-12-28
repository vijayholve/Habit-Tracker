from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from faker import Faker
from habit.models import Habit, HabitLog
import random

class Command(BaseCommand):
    help = 'Generate fake habits and habit logs'

    def handle(self, *args, **kwargs):
        fake = Faker()
        users = User.objects.all()
        
        
        
        # Create habits
        for _ in range(10):  # Create 10 fake habits
            user = random.choice(users)
            habit = Habit.objects.create(
                user=user,
                title=fake.word().capitalize() + ' Habit',
                description=fake.sentence(),
                is_active=True
            )
            
            # Create logs for each habit
            for _ in range(15):  # 15 logs per habit
                HabitLog.objects.create(
                    habit=habit,
                    date=fake.date_this_year(),
                    is_complete=random.choice([True, False])
                )

        print("done")
