$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const nameInput = $("input#name-input");
  const addressInput = $("input#address-input");
  const phoneInput = $("input#phone-input");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the fields are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      name: nameInput.val().trim(),
      address: addressInput.val().trim(),
      phone: phoneInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (
      !userData.name ||
      !userData.address ||
      !userData.phone ||
      !userData.email ||
      !userData.password
    ) {
      $("#alert .msg").text("No empty fields allowed.");
      $("#alert").fadeIn(500);
      return;
    }
    // If the fields are not blank, run the signUpUser function
    signUpUser(
      userData.name,
      userData.address,
      userData.phone,
      userData.email,
      userData.password
    );
    nameInput.val("");
    addressInput.val("");
    phoneInput.val("");
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(name, address, phone, email, password) {
    $.post("/api/signup", {
      name: name,
      address: address,
      phone: phone,
      email: email,
      password: password
    })
      .then(() => {
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleSignupErr);
  }

  function handleSignupErr() {
    $("#alert .msg").text(
      "This email address is already being used. Please use a different email address or proceed to log in page."
    );
    $("#alert").fadeIn(500);
  }
});
