from pymongo import MongoClient
from bson import objectid
from datetime import datetime
# client = MongoClient('mongodb://3.34.44.93', 27017, username="sparta", password="woowa")
client = MongoClient('localhost', 27017)
db = client.dbsparta_plus_week4








db.user.update_one({'id': 'sg'}, {'$set': {'nick': 'sunggeun'}})
all = list(db.user.find())
oid = all[0]['_id']

def decode(oid):
    """Output is a dict containing:
    {   oid: (str)  Original Object ID,
        ets: (int)  Epoch TimeStamp,
        fts: (str)  Formatted TimeStamp,
        mid: (int)  Machine ID,
        pid: (int)  Process ID,
        uid: (int)  Unique ID }"""

    out = {}
    out['oid'] = str(objectid.ObjectId(oid))
    out['ets'] = int(out['oid'][0:8], 16)
    out['mid'] = int(out['oid'][8:14], 16)
    out['pid'] = int(out['oid'][14:18], 16)
    out['uid'] = int(out['oid'][18:], 16)

    try:
        out['fts'] = datetime.fromtimestamp(out['ets'])\
            .strftime('%d %b %Y %H:%M:%S')
    except:
        pass

    print(out)  # for display
    return out

decode((oid))

print(all)

now = datetime.now()
print(now)