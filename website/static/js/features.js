$(function() {
    $('button').on('click', function() {
        ClearPage()
        $("#" + $(this).attr("id")).toggleClass('nlink-a');
        //LoadPage($(this).attr("id"))
        LoadTab($(this).attr("slug"))
    });
});

function LoadTab(_id) {
    switch (_id) {
        case "hosting":
            console.log(_id)
            $("#hosting").show();
            $("#containers").hide();
            $("#devops").hide();
            $("#analytics").hide();
            break;
        case "containers":
            console.log(_id)
            $("#containers").show();
            $("#hosting").hide();
            $("#devops").hide();
            $("#analytics").hide();
            break;
        case "devops":
            console.log(_id)
            $("#devops").show();
            $("#hosting").hide();
            $("#containers").hide();
            $("#analytics").hide();
            break;
        case "analytics":
            console.log(_id)
            $("#analytics").show();
            $("#containers").hide();
            $("#devops").hide();
            $("#hosting").hide();
            break;
        default:
    }
}

function ClearPage() {
    $("#head").hide();
    $("#hosting").hide();
    $("#devops").hide();
    $("#containers").hide();
    $("#analytics").hide();
    $("#texthead").fadeToggle(100);
    $('button').removeClass('nlink-a');
}

function LoadPage(_id) {
    $.ajax({
        url: "{% url 'hosting' %}",
        data: {
            id: _id
        },
        dataType: 'json',
        success: function(data) {
            window.setTimeout(function() { //
                $("#heading").html(data.heading).fadeIn(100);
                $("#sub").html(data.sub).fadeIn(100);
                $("#texthead").html(data.text).fadeIn(100);
            }, 100);

        },
    });
}