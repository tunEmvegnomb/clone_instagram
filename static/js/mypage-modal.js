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