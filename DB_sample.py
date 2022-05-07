
doc = {
    # "user_num": 123,
    "user_id": "Paul",
    "hashed_password": "Miller",
    "follow": [{"follow_id": "mugcup", "follow_time": 23234}],
    "follower": [{"follower_id": "handcream", "follower_time": 23234}],
    "posts": [
        {
            "post_create_time": 1973,
            "post_update_time": 2020,
            "img_src": "http://www.naver.com",
            "article": "가나다라마바사",
            # "like_count": 10, # 혹은 리스트의 개수를 세는 방식
            "like_post_ids": [{"like_post_id": "peter", "like_post_create_time": 2040}],
            "comments": [
                {
                    "commenter_id": "Rolls Royce",
                    "comment_article": "오빠 사랑해요",
                    "comment_create_time": 1111,
                    "comment_update_time": 2222,
                    "like_comment": [{"like_comment_id": "Julia", "like_comment_create_time": 3333}],
                }
            ]

        }
    ]
}

