$(document).ready(function () {
    bsCustomFileInput.init()
})

function loadFile(input) {
    let file = $('#file')[0].files[0]
    let form_data = new FormData()
    form_data.append("file_give", file)

    console.log(file)

    $.ajax({
        type: "POST",
        url: "/imageUpload",
        data: form_data,
        // json을 배열로 보내려고 해서 생기는 오류 방지
        contentType: false,
        processData: false,
        success: function (response) {
            console.log(response)
            const filename = response['filename']
            const imageBody = document.getElementsByClassName("imageBody")
            const post_image = document.getElementsByClassName("post_image")
            // 애프터 업로드 모달 이미지바디에 사진 주소 변경하기
            imageBody[0].style.backgroundImage = "url(/" + filename + ")"
            post_image[0].style.backgroundImage = "url(/" + filename + ")"
            //    비포어 업로드 모달 닫기
            const beforeUpload = document.getElementById("beforeUpload");
            beforeUpload.style.display = "none"
            //    애프터 업로드 모달 열기
            const afterUpload = document.getElementById("afterUpload");
            afterUpload.style.display = "block"

        }
    });
}

function show_completePost() {
    const afterUpload = document.getElementById("afterUpload");
    afterUpload.style.display = "none"
    const completePost = document.getElementById("completePost");
    completePost.style.display = "block"

}

function complete_feedPost(){
    let feed_content = $(".text_card > textarea").val()
    let form_data = new FormData()
    form_data.append("content_give",feed_content)

    $.ajax({
        type: "POST",
        url: "/feedUpload",
        data: form_data,
        cache: false,
        contentType: false,
        processData: false,
        success: function (response) {
            alert(response["msg"])
            window.location.reload()
        }
    });
}
