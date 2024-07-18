let a = document.getElementById("name");
let b = document.getElementById("email");
let c = document.getElementById("password");
let d = document.getElementById("btn");
let arr = [];
d.addEventListener("click", abc);
function abc(e) {
  e.preventDefault();
  let obj = {
    name: a.value,
    email: b.value,
    password: c.value,
  };
  if (a.value == "") {
    alert("Fill the Name");
  } else if (b.value == "") {
    alert("Fill the Email");
  } else if (c.value == "") {
    alert("Fill the Password");
  } else {
    arr.push(obj);
    localStorage.setItem("one", JSON.stringify(arr));
    window.location.href = "login.html";
  }
}