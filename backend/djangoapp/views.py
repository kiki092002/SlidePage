from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
# Create your views here.
def recent_upload(request):
    uploads = [
        {"id": 1, "title": "Chapter 1 Slides"},
        {"id": 2, "title": "Biology Lecture"},
    ]
    return JsonResponse({'status':200,"uploads":uploads})

def todo_task(request):
    tasks = [
        {"id": 1, "task": "Review Chapter 3 Slides", "due": "Today"},
        {"id": 2, "task": "Summarize Key Concepts", "due": "Tomorrow"},
        {"id": 3, "task": "Create Study Guide", "due": "Next Week"},
    ]
    return JsonResponse({"status": 200, "tasks": tasks})