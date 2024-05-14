
let infoForm = document.querySelector("#myForm");
let alertResponse = document.getElementById("alert");

infoForm.addEventListener("submit",  function (event) {
  event.preventDefault();

  let formData = new FormData(infoForm);
  let jsonObject={};

  formData.forEach(function(value, key){
    jsonObject[key] = value;
  })

  console.log(JSON.stringify(jsonObject))

   fetch("http://cocacoladb/send-data.php",{
    method: "POST",
    body: JSON.stringify(jsonObject)    
    })
    .then((response) => response.json())
    .then((data) => {

      console.log(data.error + " " + data.message);

      alertResponse.innerHTML=null;
      alertResponse.role = "alert";

      if(data.error == 0){
        alertResponse.classList.add("alert", "alert-success");
        alertResponse.innerHTML="User was entered successfully";
      }else{
        alertResponse.classList.add("alert", "alert-warning");
        alertResponse.innerHTML = data.message;
      }
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
});

let today = new Date().toISOString().split('T')[0];
document.getElementById("birthDate").max = today;
console.log(today);

async function getData() {
  await fetch("../../data/comuni.json")
    .then((response) => response.json())
    .then((data) => {
      printRegion(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function printRegion(data) {
  let reg = document.getElementById("reg");
  let choose = document.getElementById("chooseReg");

  choose.classList.add("d-none");

  data.forEach((element) => {
    let option = document.createElement("option");
    option.textContent = element.regione.nome;

    option.onclick = function () {
      printProvince(option.value, data);
    };

    reg.appendChild(option);
  });
}

function printProvince(selectedReg, data) {
  let prov = document.getElementById("prov");

  document.getElementById("prov").innerHTML = null;

  data.forEach((element) => {
    if (element.regione.nome == selectedReg) {
      let option = document.createElement("option");
      option.textContent = element.provincia.nome;
      prov.appendChild(option);
    }
  });
}
