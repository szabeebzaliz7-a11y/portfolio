from django.shortcuts import render

# Create your views here.
from django.shortcuts import render,redirect
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib import messages
from django.core.mail import send_mail
from .models import ContactMessage
from django.conf import settings


def home(request):
    return render(request, "home.html")


def about(request):
    return render(request, "about.html")


def projects(request):
    return render(request, "projects.html")


def contact(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")

        # 1️⃣ Save to database
        ContactMessage.objects.create(
            name=name,
            email=email,
            message=message
        )

        # 2️⃣ Send email notification
        send_mail(
            subject=f"New Portfolio Contact from {name}",
            message=f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}",
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.EMAIL_HOST_USER],
            fail_silently=True
        )

        # 3️⃣ Success message
        messages.success(
            request,
            "Thank you for reaching out. I’ll get back to you soon."
        )

        return redirect("contact")

    return render(request, "contact.html")