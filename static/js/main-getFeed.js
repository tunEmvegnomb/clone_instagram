$(document).ready(function () {
    get_feed()
})

function get_feed() {
    $("#feeds").empty()
    $(".mw").empty()

    $.ajax({
        type: "GET",
        url: "/getFeed",
        data: {},
        cache: false,
        contentType: false,
        processData: false,
        success: function (response) {
            alert('피드 불러오기!')
            data = response['result']
            console.log(data)

            for (i = 0; i < data.length; i++) {
                name = data[i]['author_id']
                like_cnt = data[i]['like_post_count']
                content = data[i]['article']
                post_image = data[i]['post_img']
                post_id = data[i]['post_id']

                let temp_html = `<div class="wrap_storycards">
                                    <!--            4. 스토리카드 상단 div -->
                                    <div class="storycards_top">
                                        <!--                5. 스토리카드 상단 flex div -->
                                        <div class="storycards_top_flex">
                                            <!--                    6. 스토리카드 상단 프로필 -->
                                            <div class="storycards_top_profile">
                                                <!--                        7. 스토리카드 프로필 이미지 div -->
                                                <div class="storycards_top_profile_image profile_mona"></div>
                                                <!--                        7. 스토리카드 프로필 이름 div -->
                                                <div class="storycards_top_profile_name">
                                                    <!--                            8. 스토리카드 프로필 닉네임 -->
                                                    <div class="storycards_top_profile_name_nickname">${name}</div>
                                                    <!--                            8. 스토리카드 프로필 위치 -->
                                                    <div class="storycards_top_profile_name_location">스파르타코딩클럽</div>
                                                </div>
                                            </div>
                                            <!--                    6. 스토리카드 상단 옵션 div -->
                                            <div class="storycards_top_option">
                        
                                                <i class="fa-solid fa-ellipsis s40 option-modal${i + 1}" onclick="showOptionModal(${i + 1})"></i>
                        
                                            </div>
                                        </div>
                                    </div>
                                    <!--            4. 스토리카드 중단 div -->
                                    <div class="storycards_middle">
                                        <!--                5. 스토리카드 중단 캐러셀 div -->
                                        <div id="carousel-${i + 1}" class="carousel slide" data-bs-ride="carousel">
                                            <!--                    캐러셀 인디케이터 -->
                                            <div class="carousel-indicators">
                                                <button type="button" data-bs-target="#carousel-${i + 1}" data-bs-slide-to="0"
                                                        class="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="##carousel-${i + 1}" data-bs-slide-to="1"
                                                        aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="##carousel-${i + 1}" data-bs-slide-to="2"
                                                        aria-label="Slide 3"></button>
                        
                                            </div>
                                            <div class="carousel-inner">
                                                <!--                                캐러셀 아이템-->
                                                <div class="carousel-item active">
                                                    <img class="carousel-img post_main_picture_img d-block w-100"
                                                         src=${post_image}
                                                         alt="...">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="carousel-img post_main_picture_img d-block w-100"
                                                         src=${post_image}
                                                         alt="...">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="carousel-img post_main_picture_img d-block w-100"
                                                         src=${post_image}
                                                         alt="...">
                                                </div>
                                            </div>
                        
                                            <!--                7. 스토리카드 중단 이미지 넘기기 아이콘 div -->
                                            <div class="storycards_middle_next"
                                                 data-bs-target="#carousel-${i + 1}"
                                                 data-bs-slide="next">
                                                <i class="fa-solid fa-circle-chevron-right btn_next"></i>
                                            </div>
                                            <!--                7. 스토리카드 중단 이미지 되돌리기 아이콘 div -->
                                            <div class="storycards_middle_prev"
                                                 data-bs-target="#carousel-${i + 1}"
                                                 data-bs-slide="prev">
                                                <i class="fa-solid fa-circle-chevron-left btn_prev"></i>
                                            </div>
                                            <!--                7. 스토리카드 중단 태그 유저 아이콘 div -->
                                            <div class="storycards_middle_taguser">
                                                <!--                        8. 유저 아이콘 i -->
                                                <i class="fa-solid fa-circle-user s28"></i>
                                            </div>
                                            <!--                7. 스토리카드 중단 음소거 아이콘 div -->
                                            <div class="storycards_middle_muteicon">
                                                <!--                        8. 음소거 아이콘 i -->
                                                <i class="fa-solid fa-circle-xmark s28"></i>
                                            </div>
                                        </div>
                        
                                    </div>
                                    <!--            4. 스토리카드 하단 div -->
                                    <div class="storycards_bottom">
                                        <!--                5. 스토리카드 하단 아이콘즈 div -->
                                        <div class="storycards_bottom_icons">
                                            <!--                    6. 스토리카드 아이콘즈 flex div -->
                                            <div class="storycards_bottom_icons_flex">
                                                <!--                        7. 스토리카드 레프트 아이콘 div -->
                                                <div class="storycards_bottom_icons_left">
                                                    <!--                            8. 스토리카드 레프트 아이콘 하트 div -->
                                                    <div class="storycards_bottom_icons_left_heart">
                                                        <i class="fa-regular fa-heart s24"></i>
                                                    </div>
                                                    <!--                            8. 스토리카드 레프트 아이콘 코멘트 div -->
                                                    <div class="storycards_bottom_icons_left_comment">
                                                        <i class="fa-regular fa-comment s24" onclick="open_feedModal()"></i>
                                                    </div>
                                                    <!--                            8. 스토리카드 레프트 아이콘 익스플로어 div -->
                                                    <div class="storycards_bottom_icons_left_explore">
                                                        <i class="fa-regular fa-paper-plane s24"></i>
                                                    </div>
                                                </div>
                                                <!--                        7. 스토리카드 미들 아이콘 div -->
                                                <!--                        <div class="storycards_bottom_icons_middle">-->
                                                <!--                            &lt;!&ndash;                            8. 스토리카드 미들 아이콘 스테이터스 div &ndash;&gt;-->
                                                <!--                            <div class="storycards_bottom_icons_middle_status">-->
                                                <!--                                <i class="fa-solid fa-circle s6"></i>-->
                                                <!--                                <i class="fa-regular fa-circle s6"></i>-->
                                                <!--                                <i class="fa-regular fa-circle s6"></i>-->
                                                <!--                            </div>-->
                                                <!--                        </div>-->
                                                <!--                        7. 스토리카드 라이트 아이콘 div -->
                                                <div class="storycards_bottom_icons_right">
                                                    <!--                            8. 스토리카드 라이트 아이콘 북마크 div -->
                                                    <div class="storycards_bottom_icons_right_bookmark">
                                                        <i class="fa-regular fa-bookmark s24" style="width: 24px"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--                5. 스토리카드 하단 좋아요 div -->
                                        <div class="storycards_bottom_likes">
                                            <!--                    6. 스토리카드 하단 좋아요 flex div -->
                                            <div class="storycards_bottom_likes_flex">
                                                <!--                    6.스토리카드 하단 좋아요 아이콘 묶음 div -->
                                                <div class="storycards_bottom_likes_icons">
                                                    <!--                        7. 스토리카드 하단 좋아요 아이콘 1 div-->
                                                    <div class="storycards_bottom_likes_icons_icon profile_mona likes_icon1"></div>
                                                    <!--                        7. 스토리카드 하단 좋아요 아이콘 2 div-->
                                                    <div class="storycards_bottom_likes_icons_icon profile_love likes_icon2"></div>
                                                    <!--                        7. 스토리카드 하단 좋아요 아이콘 3 div-->
                                                    <div class="storycards_bottom_likes_icons_icon profile_van likes_icon3"></div>
                        
                                                </div>
                                                <!--                    7. 스토리카드 하단 좋아요 span -->
                                                <div class="storycards_bottom_likes_span">
                                                    <span class="like_user">migdracios</span>님<span class="like_count"> 외 ${like_cnt}명</span>이 좋아합니다
                                                </div>
                        
                                            </div>
                        
                                        </div>
                                        <!--                5. 스토리카드 하단 스토리 div -->
                                        <div class="storycards_bottom_story">
                                            <!--                    6. 스토리카드 하단 내용 부문 div -->
                                            <div class="storycards_bottom_story_detail">
                                                <!--                    7. 스토리카드 하단 스토리 아이디 div -->
                                                <div class="storycards_bottom_story_user">${name}</div>
                                                <!--                    7. 스토리카드 하단 스토리 내용 div -->
                                                <div class="storycards_bottom_story_data feed_desc${i + 1}">${content}
                                                </div>
                                                <!--                    7. 스토리카드 하단 스토리 더보기 버튼-->
                                                <div class="storycards_bottom_story_morebtn seeMore_btn${i + 1}" onclick="show_me_more(${i + 1})">더 보기</div>
                                            </div>
                                            <!--                    6. 스토리카드 하단 스토리 댓글보기 div -->
                                            <div class="storycards_bottom_story_viewcomment">댓글 8개 모두 보기</div>
                                            <!--                    6. 스토리카드 하단 스토리 작성일자 div-->
                                            <div class="storycards_bottom_story_post">4월 28일</div>
                                        </div>
                                        <!--                5. 스토리카드 하단 댓글 div -->
                                        <div class="storycards_bottom_comment">
                                            <!--                    6. 스토리카드 하단 댓글 flex div -->
                                            <div class="storycards_bottom_comment_flex">
                                                <!--                    7. 스토리카드 하단 댓글 이모지 추가 div -->
                                                <div class="storycards_bottom_comment_emoji">
                                                    <i class="fa-regular fa-face-smile s24"></i>
                                                </div>
                                                <!--                    7. 스토리카드 하단 댓글 인풋 div -->
                                                <div class="storycards_bottom_comment_input">
                                                    <input aria-label="입력 댓글" autocapitalize="none" placeholder="댓글 달기..." type="text">
                                                </div>
                                                <!--                    7. 스토리카드 하단 댓글 게시버튼 div -->
                                                <div class="storycards_bottom_comment_postbtn">
                                                    <!--                            8. 스토리카드 하단 댓글 게시 폰트-->
                                                    <a>게시</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="post_id" style="display: none">${post_id}</div>
                                </div>`
                $("#feeds").append(temp_html)


            }
        }
    });

    $.ajax({
        type: "GET",
        url: "/getFeed",
        data: {},
        cache: false,
        contentType: false,
        processData: false,
        success: function (response) {
            for (i = 0; i < data.length; i++) {


            }
            console.log('모달 동적 붙이기')
            let temp_html2 = `<div id="feedModalPop" class="modalPopup">
                                <div class="feedImage"></div>
                                <div class="feedContents">
                                    <div class="feedProfile">
                                        <div>
                                            <div class="profile_icon"></div>
                                            <span>${name}</span>
                                            <i class="fa-solid fa-ellipsis s40"></i>
                                        </div>
                    
                                    </div>
                                    <div class="feedInnerContent">
                                        <div>
                                            <div class="profile_icon"></div>
                                            <div class="content_inner">
                                                <span class="profile_name">${name}</span>
                                                <span>${content}</span>
                                                <p style="color: #8e8e8e; margin-top: 10px">5일</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="feedReaction">
                                        <div>
                                            <div class="reaction_icons">
                                                <button><i class="fa-regular fa-heart s24"></i></button>
                                                <button><i class="fa-regular fa-comment s24"></i></button>
                                                <button><i class="fa-regular fa-paper-plane s24"></i></button>
                                                <button style="width: 400px; padding-left: 310px"><i class="fa-regular fa-bookmark s24"></i>
                                                </button>
                                            </div>
                                            <div class="storycards_bottom_likes_flex">
                                                <div class="storycards_bottom_likes_icons">
                                                    <div class="storycards_bottom_likes_icons_icon profile_mona likes_icon1"></div>
                                                    <div class="storycards_bottom_likes_icons_icon profile_love likes_icon2"></div>
                                                    <div class="storycards_bottom_likes_icons_icon profile_van likes_icon3"></div>
                                                </div>
                                                <div class="storycards_bottom_likes_span">
                                                    <span class="like_user">GoldVedio</span>님<span class="like_count"> 외 ${like_cnt}명</span>이 좋아합니다
                                                </div>
                                            </div>
                                            <div class="reaction_date">5일전</div>
                                        </div>
                                        <div class="storycards_bottom_comment reaction_comment">
                                            <div class="storycards_bottom_comment_flex" style="margin-left: 5px">
                                                <div class="storycards_bottom_comment_emoji">
                                                    <i class="fa-regular fa-face-smile s24"></i>
                                                </div>
                                                <div class="storycards_bottom_comment_input">
                                                    <input aria-label="입력 댓글" autocapitalize="none"
                                                           placeholder="댓글 달기..." type="text" style="width: 400px">
                                                </div>
                                                <div class="storycards_bottom_comment_postbtn">
                                                    <a>게시</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <!--        화면 닫기 아이콘-->
                                <i class="fa-solid fa-xmark close" onclick="close_feedModal()"></i>
                            </div>`
            $(".mw").append(temp_html2)
        }
    });
}