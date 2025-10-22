function open_form() {
    const open_form = document.querySelector(".add_form");
    open_form.style.display = "flex";

}
function close_form() {
    const close_form = document.querySelector(".add_form");
    close_form.style.display = "none";
    close_form.reset();

}

document.getElementById("add_new").addEventListener("click", open_form);
document.getElementById("close_button").addEventListener("click", close_form);