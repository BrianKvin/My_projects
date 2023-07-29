from django.shortcuts import render

# Create your views here.

posts = [
    {
        'author': 'Kelvin Brian',
        'title': 'Blog Post 1',
        'content': 'First Blog Post',
        'date_posted': 'July 20/2023'
    },
    {
        'author': 'Spencer Onyango',
        'title': 'Blog Post 2',
        'content': 'Second Blog Post',
        'date_posted': 'July 25/2023'
    }
]

def home(request):
    context = {
        'posts': posts
    }
    return render(request, 'blog/home.html', context)

def about(request):
    return render(request, 'blog/about.html', {'title':'About'})
