$(document).ready(() => {
  // This file does a GET request to figure out total number of meals donated and maps all donors
  $.get("/api/meal_data").then(data => {
    console.log("got total meals from api");
    console.log(data);
    $("#total").text(data.total);
  });
});
