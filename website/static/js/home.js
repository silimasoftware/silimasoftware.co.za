$("#hosting_info_event")
  .children()
  .on("click", function () {
    $("#hosting_info:visible").hide();
    $("#hosting_pic:visible").hide();
    $("#hosting_info").fadeIn(100);
    $("#hosting_info").html("")
  });

$("#hosting_info_event_wrapper").on("mouseleave", function () {
  $("#hosting_info").hide(10);
  setTimeout(function(){
    $("#hosting_pic:hidden").fadeIn(200);
  }, 50);
});

$("#bms_info_event")
  .children()
  .on("click", function () {
    $("#bms_info:visible").hide();
    $("#bms_pic:visible").hide();
    $("#bms_info").fadeIn(100);
    $("#bms_info").html("")
  });

$("#bms_info_event_wrapper").on("mouseleave", function () {
  $("#bms_info").hide(10);
  setTimeout(function(){
    $("#bms_pic:hidden").fadeIn(200);
  }, 50);
});

$("#dev_info_event")
  .children()
  .on("click", function () {
    $("#dev_info:visible").hide();
    $("#dev_pic:visible").hide();
    $("#dev_info").fadeIn(100);
    $("#dev_info").html("")
  });

$("#dev_info_event_wrapper").on("mouseleave", function () {
  $("#dev_info").hide(10);
  setTimeout(function(){
    $("#dev_pic:hidden").fadeIn(200);
  }, 50);
});
