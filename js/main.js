function ready(){
    console.log(window.innerWidth);
    if(window.innerWidth < 600){
        document.getElementById("longtable").hidden = true;
        $('#nav1').hide();
        $('#menupopup').hide();
        $('#listHT').removeClass();
        $('#listHT').addClass('listhanhtinhshort');
        $('#HT1').removeClass();
        $('#HT1').addClass('hanhtinhshort1');
        $('#HT2').removeClass();
        $('#HT2').addClass('hanhtinhshort2');


    }else{
        document.getElementById("shorttable").hidden = true;
        $('#nav2').hide();
        $('#menupopup').hide();
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
        $('#nav1').hide();
        $('#menupopup').hide();
    }else{
        $('#nav2').hide();
        $('#menupopup').hide();
}
}
var d = true;
function showmenu(){
    if(d== true){
        $('#menupopup').show();
        d = false;
    }else{
        $('#menupopup').hide();
        d= true;
    }
    
}




