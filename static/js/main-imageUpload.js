$(document).ready(function () {
    bsCustomFileInput.init()
})

// function imageUpload() {
//     let file = $('#file')[0].files[0]
//
//
//     $.ajax({
//         type: "POST",
//         url: "/posting",
//         data: {'file_give': file},
//         success: function (response) {
//             console.log('response')
//         }
//     });
// }

function loadFile(input) {
    // 파일 가져오기
    const file = input.files[0];
    console.log('file 속성')


// 새로운 이미지 div 추가
//     const newImage = document.createElement("img");
//     newImage.setAttribute("class", "img");

//    이미지 source 가져오기
//      newImage.src = URL.createObjectURL(file);
//
//     console.log(newImage.src)

//    비포어 업로드 모달 닫기
    const beforeUpload = document.getElementById("beforeUpload");
    beforeUpload.style.display = "none"
//    애프터 업로드 모달 열기
    const afterUpload = document.getElementById("afterUpload");
    afterUpload.style.display = "block"
//    애프터 업로드 모달에 이미지 넣기
    const imageBody = document.getElementsByClassName("imageBody")
    imageBody.style.backgroundImage = 'url(' + file.src + ')';

}

