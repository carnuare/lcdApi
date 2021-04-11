
const display = document.getElementById("display");

function loadSegments() {
  let t = document.getElementById("t").value;
  let n = document.getElementById("n").value;
  
  if (t != '' && n != '') {

  fetch(`/segments?t=${t}&n=${n}`)
    .then(response => response.json())
    .then(data => {
      display.innerText = data;
    });
    
  } else {
    alert("Fill the form first!");
  }
}
