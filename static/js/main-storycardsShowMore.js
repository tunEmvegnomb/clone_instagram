// // const story_data_id_increment = document.querySelectorAll(".storycards_bottom_story_data");
// const story_data_id_increment = $(".storycards_bottom_story_data").get()
// const story_morebtn_id_increment = document.getElementsByClassName("storycards_bottom_story_morebtn");
//
// console.log('test', story_morebtn_id_increment)
//
//
// function isEllipsisActive(e) {
//     return (e.offsetWidth < e.scrollWidth);
// }

//
// for (let i = 0; i < story_data_id_increment.length; i++) {
//     console.log('아이디 인크리먼트 진입')
//     story_data_id_increment[i].id = "story_data" + i;
//     story_morebtn_id_increment[i].id = "btn_show_more" + i;
//

// }
//
// function show_me_more(id) {
//     document.getElementById(id).style.display = "None";
//     document.getElementById("story_data" + id.slice(-1)).style.whiteSpace = "unset";
// }
//
//

function show_me_more(location_num) {
    let descClass = 'feed_desc' + location_num;
    let btnClass = 'seeMore_btn' + location_num;

    document.getElementsByClassName(descClass)[0].style.whiteSpace = "unset"
    document.getElementsByClassName(btnClass)[0].style.display = "none"

}