


// ----------------SECTION IMG----------------


$(document).ready(function(){
  var num=0;
  function opaAni(count){
    $(".imgbox>li").removeClass("on");
    $(".imgbox>li:eq("+count+")").addClass("on");
}

  var autoAni = setInterval(function(){
      if(num<$(".imgbox>li").length-1) num++; else num = 0;
      opaAni(num);
  },2000)

  $(".imgbox>li").on("mouseenter", function(){
      clearInterval(autoAni);
  }).on("mouseleave",function(){
      autoAni = setInterval(function(){
      if(num<$(".imgbox>li").length-1) num++; else num = 0;
      opaAni(num);
  },2000)
  })

  $("header div.msidebar ul li a").click(function(){
    $(this).parent().find("ul.sub").slideToggle("fast");
    
  });
  $("header div.msidebar ul li a+span").click(function(){
    $(this).parent().find("ul.sub").slideToggle("fast");
    
  });

})




