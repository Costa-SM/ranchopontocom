from pymongo import MongoClient

cluster = MongoClient("mongodb+srv://edmsimp:fultanoMORRA@cluster0.zcl8a.mongodb.net/?retryWrites=true&w=majority")
db = cluster["ranchopontocom"]
collection = db["users"]