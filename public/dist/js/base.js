template.config('openTag','[[');
template.config('closeTag',']]');
function createMenu(data){
    var data = {
      "menu": menuData
    }
    //console.log(pageMenu);
    if("undefined" == typeof pageMenu){ 
        pageMenu = {"active":[menuData[0].id, menuData[0].list[0].id]}
    }
    data.menu.active = pageMenu.active;
    //$('.wrapper').prepend(tplArr['base'](data)); 
    console.log(data);
    var html = template('menutpl',data);
    $('.main-sidebar').html(html); 
}

$(".wrapper").wrap("<div class='load_div' style='display:none'></div>");
$("body").after('<div class="load_div_img" style="margin: 0 auto;float: none;width: 120px;position: absolute;z-index: 9999;left: 0;right: 0;top: 38%;"> <img src="http://woaap.bj.bcebos.com/20161013/1476333317.gif">&nbsp;加载中....... </div>');
window.onload = function(){
$(".load_div").show();
$(".load_div_img").hide();
}