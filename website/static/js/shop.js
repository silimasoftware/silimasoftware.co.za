$(function () {
  $("#content_wrapper").on("submit", "#quote_form", function (event) {
    event.preventDefault();
    $(".modal").modal("hide");
    $.ajax({
      type: "POST",
      data: {
        action: $(this).attr("tag"),
        uid: $(this).attr("uid"),
        form: $(this).serialize(),
        csrfmiddlewaretoken: $('input[name="csrfmiddlewaretoken"]').attr(
          "value"
        ),
      },
      dataType: "json",
      error: function (request, error) {
        console.log(arguments);
        console.log(" Can't do because: " + error);
      },
      success: function (data) {
        $("#deploy_form")[0].reset();
        $("#msg_queue").html(data.msg_list);
        $("#content_wrapper").html(data.html);
      },
    });
  });

  $("#content_wrapper").on("click", "button", function (event) {
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
        console.log(" Can't do because: " + error);
      },
      success: function (data) {
        if (data) {
          $("#msg_queue").append(data.msg_list);
          $("#product_wrapper").html(data.html);
        }
      },
    });
  });
});