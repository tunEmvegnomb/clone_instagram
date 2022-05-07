var modal = document.getElementById("my-modal-bg");
// ...버튼 누르면 모달 번호 받아오기
function get_modal_num(btn_num) {
    const modal_name = "open-modal" + btn_num
    const btnModal = document.getElementsByClassName(modal_name);
    console.log(btnModal)
    console.log('받아온 모달 번호는 ', btn_num, ' 번 입니다');
    open_modal(btnModal)
}

// 모달 여는 함수
function open_modal(btnModal) {
    btnModal[0].addEventListener("click", e => {
        console.log('모달 접근중')
        modal.style.display = "flex";
        document.querySelector('body').classList.add('no-scroll');
    });
}


// 모달 메뉴에서 취소버튼 누르면 꺼짐
function close_modal_btn() {
    const closeBtn = modal.querySelector(".modal_cancel_btn7")
    closeBtn.addEventListener("click", e => {
        modal.style.display = "none"
        document.querySelector('body').classList.remove('no-scroll');
    })
}

// 모달창 밖의 회색영역 클릭하면 모달 꺼짐
modal.addEventListener("click", e => {
    const evTarget = e.target
    if (evTarget.classList.contains("my-modal-bg")) {
        modal.style.display = "none"
        document.querySelector('body').classList.remove('no-scroll');

    }
})


// esc누르면 모달 꺼짐
window.addEventListener("keyup", e => {
    if (modal.style.display === "flex" && e.key === "Escape") {
        modal.style.display = "none"
        document.querySelector('body').classList.remove('no-scroll');
    }
})