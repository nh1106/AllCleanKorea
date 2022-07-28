

document.querySelector('.hambtn').addEventListener('click', function () {
  document.querySelector('.msidebar').classList.add("show")
});

document.querySelector('.closebtn').addEventListener('click', function () {
  document.querySelector('.msidebar').classList.remove("show")
});

//  window.addEventListener('scroll', function(){
//   console.log(window.scrollY) 
//  });



$(document).ready(function(){
  var top = $(".top")

  top.fadeOut();
  $(window).scroll(function(){
      var sct = $(window).scrollTop();
      if(sct>200){
          top.fadeIn("slow");
      }else{
          top.fadeOut(0);
      }
  })

  top.click(function(){
      $("html, body").animate({scrollTop:0},600);
      return false;
  })
})



for ( let i = 0; i < 3; i++) {
  $('.click-btn').eq(i).on('click', function(){

    $('.tab-content').removeClass('rshow');
    $('.tab-content').eq(i).addClass('rshow');
    $('.click-btn').removeClass('border');
    $('.click-btn').eq(i).addClass('border');
  });

}

