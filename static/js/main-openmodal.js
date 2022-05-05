    // ...버튼 누르면 모달창 켜짐
const modal = document.getElementById("my-modal-bg");
const btnModal_1 = document.getElementsByClassName("open-modal");
// const btnModal_2 = document.getElementById("my-modal-active-btn_2");
// const btnModal_3 = document.getElementById("my-modal-active-btn_3");

btnModal_1[0].addEventListener("click", e => {
    console.log(modal)
    modal.style.display="flex";
    document.querySelector('body').classList.add('no-scroll');
});
// btnModal_2.addEventListener("click", e => {
//     modal.style.display = "flex";
//     document.querySelector('body').classList.add('no-scroll');
// });
// btnModal_3.addEventListener("click", e => {
//     modal.style.display = "flex";
//     document.querySelector('body').classList.add('no-scroll');
// });

// 모달 메뉴에서 취소버튼 누르면 꺼짐
const closeBtn = modal.querySelector(".modal_cancel_btn7")
closeBtn.addEventListener("click", e => {
    modal.style.display = "none"
    document.querySelector('body').classList.remove('no-scroll');
})
// 모달창 밖의 회색영역 클릭하면 모달 꺼짐
modal.addEventListener("click", e => {
    const evTarget = e.target
    if(evTarget.classList.contains("my-modal-bg")) {
        modal.style.display = "none"
        document.querySelector('body').classList.remove('no-scroll');

    }
})

// esc누르면 모달 꺼짐
window.addEventListener("keyup", e => {
    if(modal.style.display === "flex" && e.key === "Escape") {
        modal.style.display = "none"
        document.querySelector('body').classList.remove('no-scroll');
    }
})