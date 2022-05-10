from pymongo import MongoClient
import datetime
import hashlib
import pprint

client = MongoClient('mongodb+srv://test:sparta@cluster0.nqwfa.mongodb.net/Cluster0?retryWrites=true&w=majority')

db = client.dbsparta_plus_week4

# pw_receive = "sample5"
#
# pw_hash = hashlib.sha256(pw_receive.encode('utf-8')).hexdigest()


users = list(db.user.find({}))

pprint.pprint(users)














doc = {
    "user_id": "sample5",
    "hashed_password": pw_hash,
    "follow": [{"follow_id": "sample1", "follow_time": "2000-05-03-11-01-55"}, {"follow_id": "sample2", "follow_time": "2010-06-23-11-11-55"}, {"follow_id": "sample3", "follow_time": "2121-11-03-03-11-55"}, {"follow_id": "sample4", "follow_time": "2000-12-23-11-14-55"}],
    "follower": [{"follower_id": "sample2", "follower_time": "2221-04-03-11-11-55"}, {"follower_id": "sample3", "follower_time": "2001-12-03-07-11-55"},{"follower_id": "sample5", "follower_time": "2000-03-23-01-01-55"}],
    "posts": [
        {
            "post_id": "alkjsdlfjlasjdf",
            "post_create_time": "2012-03-03-22-11-55",
            "post_update_time": "2012-04-03-22-11-55",
            "img_title": "https://preview.pixlr.com/images/800wm/100/1/1001433950.jpg",
            "article": "'도구'이지 모셔두는 황금송아지가 아니다. 모셔두는 것은 활동이 없다. 늘 제자리에 머문다. 그것은 죽은 것이다. 시체가 하는 말은 사변적이고 관념적",
            # "like_count": 10, # 혹은 리스트의 개수를 세는 방식
            "like_post_ids": ["sample2"],
            "comments": [
                {
                    "commenter_id": "sample3",
                    "comment_article": "야 출근 안하냐",
                    "comment_create_time": "2014-05-23-11-11-55",
                    "comment_update_time": None,
                    "like_comment": ["sample5", "sample4"],
                }


            ]

        },
        {
            "post_create_time": "2013-03-11-22-11-55",
            "post_update_time": "2013-04-20-22-11-55",
            "img_title": "https://preview.pixlr.com/images/800wm/100/1/1001433950.jpg",
            "article": "Share our collection of inspirational and famous quotes by authors you know and love. Share our Quotes of the Day on the web, Facebook, Twitter, and blogs.",
            # "like_count": 10, # 혹은 리스트의 개수를 세는 방식
            "like_post_ids": ["sample1", "sample2", "sample3"],
            "comments": [
                {
                    "commenter_id": "sample4",
                    "comment_article": "가나다라마바사",
                    "comment_create_time": "2024-05-23-11-11-22",
                    "comment_update_time": "2024-06-23-11-11-22",
                    "like_comment": ["sample2"],
                },
                {
                    "commenter_id": "sample5",
                    "comment_article": "세종대왕 납셨네",
                    "comment_create_time": "2025-05-03-11-11-22",
                    "comment_update_time": "2025-08-03-11-11-22",
                    "like_comment": [],
                }

            ]

        },
        {
            "post_create_time": "2113-03-11-22-11-55",
            "post_update_time": "2113-04-20-22-11-55",
            "img_title": "https://preview.pixlr.com/images/800wm/100/1/1001433950.jpg",
            "article": "You'll be able to find the push you need with these motivational sayings for everyday. Get inspired with these great life quotes.",
            # "like_count": 10, # 혹은 리스트의 개수를 세는 방식
            "like_post_ids": ["sample4", "sample2", "sample3"],
            "comments": [
                {
                    "commenter_id": "sample1",
                    "comment_article": "블랙커피 맛잇다",
                    "comment_create_time": "2124-05-23-11-11-42",
                    "comment_update_time": "2124-06-23-11-11-42",
                    "like_comment": ["sample2"],
                },
                {
                    "commenter_id": "sample2",
                    "comment_article": "오늘은 오늘이지 내일이 아니야",
                    "comment_create_time": "2125-05-03-11-11-32",
                    "comment_update_time": "2125-08-03-11-11-32",
                    "like_comment": [],
                }

            ]
        }
    ]
}

# db.user.insert_one(doc)


# doc = {
#     "user_id": "sample1",
#     "hashed_password": "Miller",
#     "follow": [{"follow_id": "mugcup", "follow_time": 23234}],
#     "follower": [{"follower_id": "handcream", "follower_time": 23234}],
#     "posts": [
#         {
#             "post_create_time": 1973,
#             "post_update_time": 2020,
#             "img_src": "http://www.naver.com",
#             "article": "가나다라마바사",
#             # "like_count": 10, # 혹은 리스트의 개수를 세는 방식
#             "like_post_ids": [{"like_post_id": "peter", "like_post_create_time": 2040}],
#             "comments": [
#                 {
#                     "commenter_id": "Rolls Royce",
#                     "comment_article": "오빠 사랑해요",
#                     "comment_create_time": 1111,
#                     "comment_update_time": 2222,
#                     "like_comment": [{"like_comment_id": "Julia", "like_comment_create_time": 3333}],
#                 }
#             ]
#
#         }
#     ]
# }
#
