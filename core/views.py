from django.http import HttpResponse
from django.http import JsonResponse
from utils import collection

obj = {"email" : "matheus@gmail.com", "password" : "1234"}

def page(request):
    #collection.insert_one({"name" : "matheus", "password" : "1234"})
    #obj2 = collection.find({"name"})
    return JsonResponse(obj)
