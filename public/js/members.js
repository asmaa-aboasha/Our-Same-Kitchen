$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $(".calendly-inline-widget").hide();

  $.get("/api/user_data").then(data => {
    console.log("got data from api");
    console.log(data);
    $(".member-name").text(data.name);
  });

  $(".impact").on("click", () => {
    window.location.replace("/impact");
  });

  const mealCountForm = $("form.mealInput");
  const inputMealCount = $("input#inputMealCount");

  mealCountForm.on("submit", event => {
    event.preventDefault();
    const mealData = inputMealCount.val().trim();
    if (!mealData) {
      $("#alert .msg1").text(
        "Please enter the number of meals you would like to donate."
      );
      $("#alert").fadeIn(500);
      return;
    }
    logMeal(mealData);
  });

  function logMeal(mealCount) {
    $.post("/api/meal-count", {
      mealCount: mealCount
    });
    // inputMealCount.val("");
    mealCountForm.hide();
    $(".calendly-inline-widget").show();
  }
  $(".donate").on("click", function() {
    const id = $(this)[0].dataset.id;
    window.location.replace("/schedule/" + id);
  });
});
