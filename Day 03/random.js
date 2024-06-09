let btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  function generateRandomPassword(length) {
    var charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    var password = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }

  // Example usage: generate a password with length 10
  var password = generateRandomPassword(12);
  let display = (document.querySelector(".display").innerHTML = password);
});