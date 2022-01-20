$(document).ready(function(){
  $(".sidebarBtn").click(function(){
    $(".sidebar").toggleClass("active");
    $(".sidebarBtn").toggleClass("toggle");
  })
})

/* $(function(){
  $("#btn").on("click",function(){
    $("img").attr("src" ,"image/backg/back0.jpg");
  });
});  */