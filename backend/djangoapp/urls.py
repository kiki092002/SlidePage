from django.urls import path
from . import views

urlpatterns = [
    path('recent_upload',views.recent_upload,name='recent_upload'),
    path('todo_task',views.todo_task,name='todo_task'),
]