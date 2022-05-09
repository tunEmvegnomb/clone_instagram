



const story_data_id_increment = document.getElementsByClassName("storycards_bottom_story_data");
const story_morebtn_id_increment = document.getElementsByClassName("storycards_bottom_story_morebtn");

function isEllipsisActive(e) {
    return (e.offsetWidth < e.scrollWidth);
}

function show_me_more(id) {
    document.getElementById(id).style.display = "None";
    document.getElementById("story_data"+id.slice(-1)).style.whiteSpace = "unset";
}
for (let i = 0; i < story_data_id_increment.length; i++) {
    story_data_id_increment[i].id = "story_data" + i;
    story_morebtn_id_increment[i].id = "btn_show_more" + i;

    if (isEllipsisActive(document.getElementById("story_data" + i)) != true) {
        document.getElementById("btn_show_more" + i).style.display = "None";
    }
}