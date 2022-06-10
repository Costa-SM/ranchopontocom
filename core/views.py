from django.http import HttpResponse
from django.http import JsonResponse
from utils import collection

#obj = {"email" : "matheus@gmail.com", "password" : "1234"}
collection.insert_one({"name" : "matheus", "password" : "1234"})

def page(request):
    obj = collection.find({"name"})
    return JsonResponse(obj)
