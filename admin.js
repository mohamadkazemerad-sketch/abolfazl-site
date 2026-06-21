let requests = JSON.parse(localStorage.getItem("requests")) || [];

let box = document.querySelector("#requests");

requests.forEach(function(item){

    box.innerHTML += `
    
    <div class="request-card">

        <h3>${item.name}</h3>

        <p>شماره: ${item.phone}</p>

        <p>خدمات: ${item.service}</p>

        <p>${item.message}</p>

    </div>

    `;

});
