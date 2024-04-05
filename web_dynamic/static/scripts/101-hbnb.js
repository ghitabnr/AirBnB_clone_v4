$(document).ready(function () {
    $("span#show_reviews").click(function () {
        var buttonText = $(this).text().trim();

        if (buttonText === "show") {
            $.ajax({
                type: "GET",
                url:
                    "http://0.0.0.0:5001/api/v1/places/" + placeId + "/reviews",
                success: function (data) {
                    data.forEach(function (review) {
                        var reviewElement =
                            "<div class='review'>" +
                            "<h3>" +
                            review.user_id +
                            "</h3>" +
                            "<p>" +
                            review.text +
                            "</p>" +
                            "</div>";
                        $("section.reviews").append(reviewElement);
                    });
                }
            });
            $(this).text("hide");
        } else {
            $("section.reviews").empty();
            $(this).text("show");
        }
    });
});
