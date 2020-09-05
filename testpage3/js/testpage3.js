let tbtn_1 = document.getElementById("btn_1");

tbtn_1.addEventListener("click",
    function () {
        hyouji_1(); 
        hyouji_2(); 
        document.write("関数でない表示");
    }
    );

function hyouji_1() {
    document.write("クリックで表示1<br>")
}

function hyouji_2() {
    document.write("クリックで表示2<br>")
}

txt_hide('div01');

function txt_hide(tagnam1){
    document.getElementById('div01').style.display='none';
}
function txt_flip(tagnam1){
    if(document.getElementById(tagnam1)style.display == ") {
    }else{
            document.getElementById(tagnam1).style.display=";
        }
    }
