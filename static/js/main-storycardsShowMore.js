const story_data_id_increment = document.getElementsByClassName("content_content");
const seemore_id_increment = document.getElementsByClassName("seeemore");

function isEllipsisActive(e) {
    return (e.offsetWidth < e.scrollWidth);
}

function seeeemore(id) {
    document.getElementById(id).style.display = "None";
    document.getElementById("sibal"+id.slice(-1)).style.whiteSpace = "unset";
}
for (let i = 0; i < sibal_id_increment.length; i++) {
    sibal_id_increment[i].id = "sibal" + i;
    seemore_id_increment[i].id = "seemore" + i;

    if (isEllipsisActive(document.getElementById("sibal" + i)) != true) {
        document.getElementById("seemore" + i).style.display = "None";
    }
}