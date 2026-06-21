function login(){

let pass = document.querySelector("#password").value;


if(pass === "1234"){

document.querySelector("#login").style.display="none";

document.querySelector("#panel").style.display="block";


showRequests();


}else{

alert("رمز اشتباه است");

}

}



function showRequests(){


let requests = JSON.parse(localStorage.getItem("requests")) || [];


let box = document.querySelector("#requests");


document.querySelector("#count").innerHTML =
"تعداد درخواست‌ها: " + requests.length;


requests.reverse().forEach(function(item,index){


box.innerHTML += `

<div class="request-card">

<h3>${item.name}</h3>

<p>📞 ${item.phone}</p>

<p>🔧 ${item.service}</p>

<p>${item.message}</p>

<p>🕒 ${item.date}</p>

<button onclick="deleteRequest(${index})">
حذف
</button>


</div>

`;


});


}



function deleteRequest(index){


let requests = JSON.parse(localStorage.getItem("requests")) || [];


requests.splice(index,1);


localStorage.setItem(
"requests",
JSON.stringify(requests)
);


location.reload();


}
