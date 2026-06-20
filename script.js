const form = document.querySelector(".request-form form");

form.addEventListener("submit", function(e){

    e.preventDefault();


    let name = form.querySelector("input").value;

    let phone = form.querySelectorAll("input")[1].value;

    let service = form.querySelector("select").value;

    let message = form.querySelector("textarea").value;



    let text =
    "درخواست جدید تعمیرات\n\n" +
    "نام: " + name +
    "\nشماره: " + phone +
    "\nخدمات: " + service +
    "\nتوضیحات: " + message;



    window.location.href =
    "sms:09389761024?body=" + encodeURIComponent(text);


});
