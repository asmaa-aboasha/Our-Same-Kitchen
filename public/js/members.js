$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    console.log("got data from api");
    console.log(data);
    $(".member-name").text(data.name);
  });

  $(".donate").on("click", function() {
    const id = $(this)[0].dataset.id;
    $.get("/api/organization/" + id).then(orgData => {
      console.log(orgData);
    });
  });
});
