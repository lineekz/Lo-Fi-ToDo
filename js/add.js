function open_form() {
    const open_form = document.querySelector(".add_form");
    open_form.style.display = "flex";

}
function close_form() {
    const close_form = document.querySelector(".add_form");
    close_form.style.display = "none";
    close_form.reset();

}
function add_do(){
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    
    const do_container = document.querySelector(".do_container");
    
    const new_do = document.createElement("div");
    new_do.className = "do_item";
    
    new_do.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <button class="button_form delete_button">Delete</button>
    `;
    
    do_container.appendChild(new_do);
    
    const delete_button = new_do.querySelector(".delete_button");
    delete_button.addEventListener("click", function() {
        new_do.remove();
    });
    
    close_form();
}

document.getElementById("add_new").addEventListener("click", open_form);
document.getElementById("close_button").addEventListener("click", close_form);
document.getElementById("add_button").addEventListener("click", add_do);
