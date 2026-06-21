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

const requestForm = document.querySelector(".request-form form");

requestForm.addEventListener("submit", function(e){

    e.preventDefault();

    let requests =
    JSON.parse(localStorage.getItem("requests")) || [];

    let data = {

        name: requestForm.querySelector("input").value,

        phone: requestForm.querySelectorAll("input")[1].value,

        service: requestForm.querySelector("select").value,

        message: requestForm.querySelector("textarea").value

        date: new Date().toLocaleString()

    };

    requests.push(data);

    localStorage.setItem(
        "requests",
        JSON.stringify(requests)
    );

    alert("درخواست با موفقیت ثبت شد ✅");

    requestForm.reset();

});
