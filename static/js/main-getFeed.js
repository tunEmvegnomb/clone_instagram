$(document).ready(function () {
    get_feed()
})

function get_feed() {
    $("#feeds").empty()

    $.ajax({
        type: "GET",
        url: "/getFeed",
        data: {},
        cache: false,
        contentType: false,
        processData: false,
        success: function (response) {
            console.log(response)
            alert('피드 불러오기!')
            let data = response['result'][0]
            console.log(data)

            // 임시로 값 선언. 맞는 값 아님
                let name = data['author_id']
                let like_cnt = data['like_post_count']
                let content = data['article']
                let post_image = data['img_title']
                console.log(post_image)
                // let num = data['index_num']

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
                        
                                                <i class="fa-solid fa-ellipsis s40 option-modal1" onclick="showOptionModal(1)"></i>
                        
                                            </div>
                                        </div>
                                    </div>
                                    <!--            4. 스토리카드 중단 div -->
                                    <div class="storycards_middle">
                                        <!--                5. 스토리카드 중단 캐러셀 div -->
                                        <div id="carousel-one" class="carousel slide" data-bs-ride="carousel">
                                            <!--                    캐러셀 인디케이터 -->
                                            <div class="carousel-indicators">
                                                <button type="button" data-bs-target="#carousel-one" data-bs-slide-to="0"
                                                        class="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="##carousel-one" data-bs-slide-to="1"
                                                        aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="##carousel-one" data-bs-slide-to="2"
                                                        aria-label="Slide 3"></button>
                        
                                            </div>
                                            <div class="carousel-inner">
                                                <!--                                캐러셀 아이템-->
                                                <div class="carousel-item active">
                                                    <img class="carousel-img post_main_picture_img d-block w-100"
                                                         src="https://trees.gamemeca.com/wp-content/uploads/2019/11/191112_diablo2_2.jpg"
                                                         alt="...">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="carousel-img post_main_picture_img d-block w-100"
                                                         src="https://i.redd.it/l5k1wclerzi61.jpg"
                                                         alt="...">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="carousel-img post_main_picture_img d-block w-100"
                                                         src="https://p4.wallpaperbetter.com/wallpaper/570/244/986/diablo-diablo-immortal-diablo-2-diablo-3-reaper-of-souls-diablo-4-hd-wallpaper-preview.jpg"
                                                         alt="...">
                                                </div>
                                            </div>
                        
                                            <!--                7. 스토리카드 중단 이미지 넘기기 아이콘 div -->
                                            <div class="storycards_middle_next"
                                                 data-bs-target="#carousel-one"
                                                 data-bs-slide="next">
                                                <i class="fa-solid fa-circle-chevron-right btn_next"></i>
                                            </div>
                                            <!--                7. 스토리카드 중단 이미지 되돌리기 아이콘 div -->
                                            <div class="storycards_middle_prev"
                                                 data-bs-target="#carousel-one"
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
                                                <div class="storycards_bottom_story_data">${content}
                                                </div>
                                                <!--                    7. 스토리카드 하단 스토리 더보기 버튼-->
                                                <div class="storycards_bottom_story_morebtn" onclick="show_me_more(this.id)">더 보기</div>
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
                                </div>`

                console.log(temp_html)
                $("#feeds").append(temp_html)
            for (i = 0; i < data.length; i++) {


            }
        }
    });
}