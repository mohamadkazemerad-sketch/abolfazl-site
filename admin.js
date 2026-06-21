let requests = JSON.parse(localStorage.getItem("requests")) || [];

let box = document.querySelector("#requests");

let count = document.querySelector("#count");


count.innerHTML = 
"تعداد درخواست‌ها: " + requests.length;


requests.forEach(function(item,index){

    box.innerHTML += `

    <div class="request-card">

        <h3>${item.name}</h3>

        <p>📞 شماره: ${item.phone}</p>

        <p>🔧 خدمات: ${item.service}</p>

        <p>${item.message}</p>


        <button onclick="deleteRequest(${index})">
        حذف درخواست
        </button>


    </div>

    `;

});



function deleteRequest(index){

    requests.splice(index,1);


    localStorage.setItem(
        "requests",
        JSON.stringify(requests)
    );


    location.reload();

}
