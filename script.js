const input_text = document.querySelector("#email");
const email_btn = document.querySelector("#email-btn");
const RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const textError = document.querySelector(".valid-email-req");
const input_box = document.querySelector(".input-box");
const main_container = document.querySelector(".main-container");
const success_msg = document.querySelector(".success-container");
const confirmation_id = document.querySelector(".confirmation-id");
const dismiss_btn = document.querySelector(".dismiss-btn");

email_btn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = input_text.value;
  if (email == "" || email === undefined) {
    textError.style.display = "block";
    input_box.style.border = "1px solid var(--clr-primary-red)";
  } else if (!email.match(RegEmail)) {
    textError.style.display = "block";
    input_box.style.border = "1px solid var(--clr-primary-red)";
  } else {
    textError.style.display = "none";
    main_container.style.display = "none";
    success_msg.style.display = "block";
    confirmation_id.innerHTML = email;
  }
});

dismiss_btn.addEventListener("click", () => {
  success_msg.style.display = "none";
  main_container.style.display = "grid";
  input_text.value = "";
});
