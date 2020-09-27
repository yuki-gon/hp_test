function changestylesheet_right() {
//    let test_text_tmp;
//    test_text_tmp = document.getElementById('test_text');
//    test_text_tmp.innerHTML = '<h1>れんしゅうううう</h1>';

    document.getElementById('style-dark').disabled = true;
    document.getElementById('style-light').disabled = false;
}

function changestylesheet_dark() {
    //    let test_text_tmp;
    //    test_text_tmp = document.getElementById('test_text');
    //    test_text_tmp.innerHTML = '<h1>れんしゅうううう</h1>';

    document.getElementById('style-dark').disabled = false;
    document.getElementById('style-light').disabled = true;
    
    }

    function hensu_test3(page_no , id_name) {
        let hikisu = document.getElementById(id_name);
        if(document.getElementById('style-dark').disabled){
            //trueであれば非表示なのでdarkが非表示だからlight
            hikisu.href ="ss/ep" + page_no + ".html?hikisu=light";
        }else{
            hikisu.href ="ss/ep" + page_no + ".html?hikisu=dark";
        }
    }
    
