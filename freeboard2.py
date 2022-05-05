from pymongo import MongoClient
from bson import objectid
from datetime import datetime
# client = MongoClient('mongodb://3.34.44.93', 27017, username="sparta", password="woowa")






# now = datetime.timestamp()

now = ['2022-05-04 17:47:12.089689', '2021-05-04 17:47:12.089689', '2022-05-03 17:47:12.089689', '2022-05-04 13:47:12.089689',]

print(now)

now.sort()
print(now)