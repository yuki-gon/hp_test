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

function hensu_test3(page_no , id_name) {
    let hikisu = document.getElementById(id_name);
    if(document.getElementById('style-dark').disabled){
        hikisu.href ="ss/ep" + page_no + ".html?hikisu=light";
    }else{
        hikisu.href ="ss/ep" + page_no + ".html?hikisu=dark";
    }
}

function hensu_test4(page_no , id_name) {
    let hikisu = document.getElementById(id_name);
    if(document.getElementById('style-dark').disabled){
        //trueであれば非表示なのでdarkが非表示だからlight
        hikisu.href ="ep" + page_no + ".html?hikisu=light";
    }else{
        hikisu.href ="ep" + page_no + ".html?hikisu=dark";
    }
}

function hensu_home(id_name){
    let hikisu = document.getElementById(id_name);
    if(document.getElementById('style-dark').disabled){
        hikisu.href="../index.html?hikisu=light";
    }else{
        hikisu.href="../index.html?hikisu=dark";
    }
}

function hensu_home2(id_name){
    let hikisu = document.getElementById(id_name);
    if(document.getElementById('style-dark').disabled){
        hikisu.href="../index.html?hikisu=light";
    }else{
        hikisu.href="../index.html?hikisu=dark";
    }
}
    
    var params = (new URL(document.location)).searchParams;
    var hikisu = params.get('hikisu');
    if (hikisu == 'dark') {
        document.write('true :', hikisu);
        document.getElementById('style-dark').disabled = false;
        document.getElementById('style-light').disabled = true;
    } else {
        document.write('false :', hikisu);
        document.getElementById('style-dark').disabled = true;
        document.getElementById('style-light').disabled = false;
    }
    