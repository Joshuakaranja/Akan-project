let form  = document.getElementById("Akan form")
form.addEventListener("generate Akan name",function(event){
    event.preventDefault();
    let value = document.getElementById("male").value
    value = " "
})


let akanNames = {
    male: ["kwasi" ,"kwadwo","kwabena","kwaku","yaw","kofi","kwame"]
     ["akosua","adwoa", "abenaa", "akua", "yaa", "afua" ,"ama"]
};


const name = akanNames[male][female][dayoftheweek]


const resultDiv = document.getElementById("results");
resultDiv.textContent = `akan name is ${akanNames}!`;
resultDiv.style.display = `block`

let dayoftheweek = birthdate.getElementById();
calculate.dayoftheweek (0 = sunday, 6 = saturday);


const gender = document.querySelectorAll('input[name="gender"]:checked');
if (gender.length === 0) {
    alert('please select your gender');
    return;

};

const text = gender[0].value

let button = document.getElementById("submit")
form.addEventListener("generate Akan name",function(){
    alert("enter a valid date and name")
})
