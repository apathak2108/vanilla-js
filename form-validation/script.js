document.getElementById("user-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const dropdown = document.getElementById("dropdown").value;

  let isValid = true;

  // Validation logic
  if (name === "") {
    document.getElementById("name-error").textContent = "Name is required!";
    isValid = false;
  } else {
    document.getElementById("name-error").textContent = "";
  }

  if (email === "" || !validateEmail(email)) {
    document.getElementById("email-error").textContent = "Email is required!";
    isValid = false;
  } else {
    document.getElementById("email-error").textContent = "";
  }

  if (phone === "" || !validatePhone(phone)) {
    document.getElementById("phone-error").textContent =
      "Invalid phone number!";
    isValid = false;
  } else {
    document.getElementById("phone-error").textContent = "";
  }

  if (!gender) {
    document
      .querySelector("fieldset")
      .insertAdjacentHTML(
        "beforeend",
        '<span class="error" id="gender-error">Please select a gender!</span>'
      );
    isValid = false;
  } else {
    const genderError = document.getElementById("gender-error");
    if (genderError) genderError.remove();
  }

  if (dropdown === "") {
    document.getElementById("dropdown-error").textContent =
      "Please select an option!";
    isValid = false;
  } else {
    document.getElementById("dropdown-error").textContent = "";
  }

  // Show form data as JSON if all fields are valid
  if (isValid) {
    const formData = {
      name: name,
      email: email,
      phone: phone,
      gender: gender ? gender.value : "",
      dropdown: dropdown,
    };
    document.getElementById("form-data").textContent = JSON.stringify(
      formData,
      null,
      2
    );
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  const re = /^[0-9]{10}$/;
  return re.test(String(phone));
}
