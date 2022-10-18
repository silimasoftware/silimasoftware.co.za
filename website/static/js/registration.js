$(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    if ($('#tcc').is(':checked')) {
      email = $('#email').val();
      password = $('#password').val();
      full_name = $('#full_name').val();
      if (email == "" || password == "" || full_name == "") {
        alert("Please fill out all the fields");
      } else {
        var r = confirm("I confirm " + email + " is correct!");
        if (r == true) {
          console.log("Checked")
          $(".form-after").hide();
          $("#form-result").show();
          $("#form-result-text").html("Working on it...");
          $("#form-msg").show();
          // pretent to look busy incase email takes a sec...
          val = 0
          var loading_stuff = setInterval(function () {
            val += 1
            $(".progress-bar").css("width", val + "%").attr("aria-valuenow", val);
            if (val > 110) {
              val = 0
            }
          }, 10);
          $.ajax({
            type: "POST",
            data: {
              email_address: email,
              password: password,
              full_name: full_name,
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
              clearInterval(loading_stuff);
              if ('success' in data) {
                $("#msg_queue").append(data.msg_list);
                $("#form-result-text").hide();
                $("#form-msg").html("Instructions have been sent to <br>" + email);
                $(".login-now").html("");
              } else {
                $("#msg_queue").append(data.msg_list);
                $(".form-after").show();
                $("#form-result").hide();
                $("#form-msg").hide();
              }
            },
          });
        } else {
          alert("Please enter your email again!");
        }
      }
    } else {
      alert("Please confirm you have read the T&Cs and AUP");
    }
  });
});