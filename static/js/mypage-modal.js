$(document).ready(function () {
    show_mypage()
    mypage_load()
});

// 마이페이지 불러오기
function show_mypage() {
    $.ajax({
        type: "GET",
        url: "/mypage",
        data: {},
        success: function (response) {
            // alert('mypage get')
        }
    });
}

// 마이페이지 데이터 로드
function mypage_load() {
    $.ajax({
        type: "GET",
        url: "/mypage/load",
        data: {},
        success: function (response) {
            // console.log(response)
            let rows = response['mypage_info']

            // 마이페이지 프로필 정보 불러오기
            let user_img = rows['posts']['0']['img_title']
            let user_id = rows['user_id']
            let posts_len = rows['posts'].length
            let follower_len = rows['follower'].length
            let follow_len = rows['follow'].length

            let temp_html = `<div class="mypage_profile_img">
<!--현재 로그인 계정 프로필 이미지 받아오기-->
                                        <img id="profile_img" src="${user_img}" class="rounded-circle" style="width:150px; height:150px;">
                                    </div>
<!--현재 로그인 계정의 id, 게시물 수, 팔로워 수 , 팔로잉 수 받아오기-->
                                    <div class="mypage_user_info">
                                        <div class="mypage_userID">
                                            <h2>${user_id}</h2>
                                            &emsp;<button class="profile_edit_btn">프로필 편집</button>
                                        </div>
                                        <div class="mypage_user_properties">
                                            게시물 ${posts_len}
                                            &emsp;팔로워 ${follower_len}
                                            &emsp;팔로우 ${follow_len}
                                        </div>
                                    </div>`

            $('#mypage_profile').append(temp_html)


            // 마이페이지 게시글 불러오기
            for (let i = 0; i < rows['posts'].length; i++) {
                let post_img = rows['posts'][i]['img_title']
                let post_like_len = rows['posts'][i]['like_post_ids'].length
                let post_com_len = rows['posts'][i]['comments'].length

                let temp_html_posts = `<td class="mypage_post">
                                                    <img class="mypage_post_img mypage_open_modal" src="${post_img}">
                                                    <div class="hover_text">
                                                        <i class="fa-solid fa-heart"></i>  ${post_like_len}
                                                        &emsp;<i class="fa-solid fa-comment"></i>  ${post_com_len}
                                                    </div>
                                                </td>`
                $('#mypage_posts').append(temp_html_posts)
            }


            // 마이페이지 모달 불러오기
            for (let i = 0; i < rows['posts'].length; i++) {
                let post_img = rows['posts'][i]['img_title']
                let post_article = rows['posts'][i]['article']
                let post_like_len = rows['posts'][i]['like_post_ids'].length
                let post_com_len = rows['posts'][i]['comments'].length

                let temp_html_modal = `<!--                모달 왼쪽 이미지-->
                                                    <div class="modal_leftbox">
                                                        <img class="mypage_open_modal modal_img" src="${post_img}">
                                                    </div>
                                    <!--                모달 우측 본문,댓글-->
                                                    <div class="modal_rightbox">
                                                        <div class="modal_rightbox_header">
                                                            <img src="${user_img}" class="rounded-circle" style="width:40px; height:40px;">
                                                            &ensp; ${user_id}
                                                        </div>
                                                        <hr>
                                                        <div class="modal_rightbox_body">
                                                            <img src="../static/img/test_img.jpg" class="rounded-circle" style="width:40px; height:40px;">
                                                            &ensp; ${user_id} &ensp; ${post_article}

                                                            <div class="comment_saved">
                                                            여기서부터는 댓글 기록
                                                            </div>
                                                        </div>
                                                        <hr>
                                                        <div class="modal_rightbox_cmt">
                                                            <input class="comment" placeholder="댓글달기...">
                                                            <button onclick="save_comment()" class="comment_btn">게시</button>
                                                        </div>
                                                    </div>`
                $('#mypage_modal').append(temp_html_modal)
            }

            // console.log(user_id)
            // console.log(posts_len)
            // console.log(follower_len)
            // console.log(follow_len)


            // for ( let i = 0; i < rows.length; i++) {
            //     console.log(rows[i])
            //     }
        }
    });
}

// html 모달버튼 변수 지정
const mypage_modal = document.getElementById("mypage_modal_bg");
const mypage_btnModal = document.getElementsByClassName("mypage_open_modal");

// 게시글 누르면 모달창 열림
mypage_btnModal[0].addEventListener("click", e => {
    console.log(mypage_modal)
    mypage_modal.style.display="flex";
    // document.querySelector('body').classList.add('no-scroll');
});

// 모달창에서 닫기버튼 누르면 꺼짐
const mypage_closeBtn = mypage_modal.querySelector(".mypage_modal_close")
mypage_closeBtn.addEventListener("click", e => {
    mypage_modal.style.display = "none"
    // document.querySelector('body').classList.remove('no-scroll');
})

// 모달창 밖의 회색영역 클릭하면 모달 꺼짐
mypage_modal.addEventListener("click", e => {
    const evTarget = e.target
    if(evTarget.classList.contains("mypage_modal_bg")) {
        mypage_modal.style.display = "none"
    }
})

// esc누르면 모달 꺼짐
window.addEventListener("keyup", e => {
    if(mypage_modal.style.display === "flex" && e.key === "Escape") {
        mypage_modal.style.display = "none"
    }
})