import pandas as pd


doc = {
    "user_id": "Paul",
    "hashed_password": "Miller",
    "follow": [1, 2, 3],
    "follower": [1, 2, 3],
    "feeds": [
        {
            "feed_id": "Bentley",
            "time": 1973,
            "url": "http://www.naver.com",
            "feed_text": "가나다라마바사",
            "like": 10, # 혹은 리스트의 개수를 세는 방식
            "like_ids": [1, 3, 5],
            "replies": [
                {
                    "reply_id": "Rolls Royce",
                    "reply_text": "오빠 사랑해요"
                },
                {
                    "reply_id": "BMW",
                    "reply_text": "오빠 사랑해요"
                },
                {
                    "reply_id": "Benz",
                    "reply_text": "오빠 사랑해요"
                }

            ]

        }
    ]
}


df = pd.DataFrame(doc)
print(df)