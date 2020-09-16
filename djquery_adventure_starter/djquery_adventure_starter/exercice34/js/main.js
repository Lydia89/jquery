$(document).ready(function () {
    $(".btn").click(function () {

        var nameurl = "https://restcountries.eu/rest/v2/name/"
        var nameinput = $("input:text").val();
        var concat = nameurl + nameinput
        $.ajax({
            type: "GET",
            url : concat,

            success: function (data) {

                $("#country").html(data[0].name)
                $("#capital").html(data[0].capital)

            }

        })

    });
});

