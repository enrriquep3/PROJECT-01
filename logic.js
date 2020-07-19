$(document).ready(function () {
    $("#submitWeather").click(function () {
      var city = $("#City").val();
  
      if (city != "") {
        $.ajax({
          url:
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=imperial" +
            "&APPID=da85022b30fdb28b5e63ee8ea0e21194",
          type: "GET",
          dataType: "jsonp",
          success: function (data) {
            var widget = show(data);
  
            console.log(data);
  
            $("#show").html(widget);
  
            $("#City").val("");
          },
        });
      }
    });
  });
  
  $("#submitWeather").click(function () {
    var city = $("#City").val();
    //create a keyword array for when there is no search term
  
    $.ajax({
      method: "GET",
      url: "https://api.unsplash.com/search/photos",
      dataType: "json",
      data: {
        client_id: "MkF77ap6Uc-Q3u-3_D4fK65-FUqQCuHt8D9CyTxzpUQ",
        // for the query take a random index to get a random search term
        query: city,
      },
      success: function (result, status) {
        $("#photo").html("");
  
        for (var i = 0; i < 1; i++) {
          //add the founded image, the thumb image and the number of likes in the first colomn.
          $("#photo").append(
            "<div id='prout' style='padding:25px 50px'><img src=" +
              result.results[i].urls.small +
              "> </div>"
          );
        }
      },
    });
  });
  
  function show(data) {
    return (
      "<h3><strong>City</strong>: " +
      data.name +
      "</h3>" +
      "<h3><strong>Country</strong>: " +
      data.sys.country +
      "</h3>" +
      "<h3><strong>Weather</strong>: " +
      data.weather[0].main +
      "</h3>" +
      "<h3><strong>Sky</strong>: " +
      data.weather[0].description +
      "</h3>" +
      "<h3><strong>Temperature</strong>: " +
      data.main.temp +
      "F" +
      "</h3>" +
     
      "<h3><strong>Humidity</strong>: " +
      data.main.humidity +
      "%" +
      "</h3>"
    );
  }
  