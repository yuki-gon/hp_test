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
    