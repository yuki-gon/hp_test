function changestylesheet_right() {
    document.getElementById('style-dark').disabled = true;
    document.getElementById('style-light').disabled = false;
}

function changestylesheet_dark() {

    document.getElementById('style-dark').disabled = false;
    document.getElementById('style-light').disabled = true;
    
}

function hensu_test() {
    var hikisu = document.getElementById("btn-a");
    hikisu.href ="ss/ep7.html?hikisu=dark";
}

function hensu_test2(page_no) {
    let hikisu = document.getElementById("btn-b");
    if(document.getElementById('style-light').disabled){
        //trueであれば非表示なのでlightが非表示だからdark
        hikisu.href ="ss/ep" + page_no + ".html?hikisu=dark";
    }else{
        hikisu.href ="ss/ep" + page_no + ".html?hikisu=light";
    }
}

function hensu_test3(page_no) {
    let hikisu = document.getElementById("btn-c");
    if(document.getElementById('style-light').disabled){
        hikisu.href ="ss/ep" + page_no + ".html?hikisu=dark";
    }else{
        hikisu.href ="ss/ep" + page_no + ".html?hikisu=light";
    }
}
