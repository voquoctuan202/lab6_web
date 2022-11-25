function ready(){
    console.log(window.innerWidth);
    if(window.innerWidth < 600){
        document.getElementById("longtable").hidden = true;
        $('#nav1').removeClass();
        $('#nav1').addClass('menuPopup');
        $('#listHT').removeClass();
        $('#listHT').addClass('listhanhtinhshort');
        $('#HT1').removeClass();
        $('#HT1').addClass('hanhtinhshort1');
        $('#HT2').removeClass();
        $('#HT2').addClass('hanhtinhshort2');


    }else{
        document.getElementById("shorttable").hidden = true;
        $('#nav2').hide();
        $('#nav1').removeClass();
        $('#nav1').addClass('navBar');
        $('#listHT').removeClass();
        $('#listHT').addClass('listhanhtinh');
        $('#HT1').removeClass();
        $('#HT1').addClass('hanhtinh1');
        $('#HT2').removeClass();
        $('#HT2').addClass('hanhtinh2');
    }
}
function readyKH(){
	localStorage.setItem(lang, "vi-VN");
    console.log(window.innerWidth);
    if(window.innerWidth < 600){
        document.getElementById("longtable").hidden = true;
        $('#nav1').removeClass();
        $('#nav1').addClass('menuPopup');
        $('#nav2').show(); 
    }else{
        document.getElementById("shorttable").hidden = true;
        $('#nav2').hide();
        $('#nav1').removeClass();
        $('#nav1').addClass('navBar');
}
}
var d = true;
function showmenu(){
    if(d== true){
        $('#nav1').show();
        d = false;
    }else{
        $('#nav1').hide();
        d= true;
    }
    
}




