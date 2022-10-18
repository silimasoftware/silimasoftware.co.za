$(function () {
  $("#content_wrapper").on("click", "button", function (event) {
    $([document.documentElement, document.body]).animate({
      scrollTop: $('#scrollMagnet').offset().top
    }, 0);
    $("button").removeClass('bg-light text-dark').addClass('text-white')
    $(this).addClass('bg-light text-dark').removeClass('text-white')
    _action = $(this).attr("action")
    _tag = $(this).attr("tag")
    $.ajax({
      type: "POST",
      data: {
        action: _action,
        tag: _tag,
        csrfmiddlewaretoken: $('input[name="csrfmiddlewaretoken"]').attr(
          "value"
        ),
      },
      dataType: "json",
      error: function (request, error) {
        console.log(arguments);
        console.log(" Failed due to error:  " + error);
      },
      success: function (data) {
        if (data) {
          $("#msg_queue").append(data.msg_list);
          $("#package_info_wrapper").html("")
          $("#product_table_wrapper").html(data.html);
        }
      },
    });
  });
});

function load_package(package) {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#product_table_wrapper").offset().top - 5
  }, 0);
  $("#" + package).addClass('bg-d1 text-white').siblings().removeClass('bg-d1 text-white')
  $("td").removeClass('bg-success')
  $("#price" + package).addClass('bg-success')

  console.log("#price" + package)
  $.ajax({
    type: "POST",
    data: {
      action: "view_product_info",
      tag: package,
      csrfmiddlewaretoken: $('input[name="csrfmiddlewaretoken"]').attr(
        "value"
      ),
    },
    dataType: "json",
    error: function (request, error) {
      console.log(arguments);
      console.log(" Failed due to error:  " + error);
    },
    success: function (data) {
      if (data) {
        $("#msg_queue").append(data.msg_list);
        $("#package_info_wrapper").html(data.html);
      }
    },
  });
}