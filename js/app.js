//Funcion para cargar las animaciones de las habilidades

function cargarAnimaciones () {
  $(function() {
    $('.chart1').easyPieChart({
      size:160,
      barColor:"#ff5b00",
      scaleLength:0,
      lineWidth:10,
      tackColor:"#525151",
      lineCap:"circle",
      animate:2000,
    }) 

    $('.chart2').easyPieChart({
      size:160,
      barColor:"#ff5b00",
      scaleLength:0,
      lineWidth:10,
      tackColor:"#525151",
      lineCap:"circle",
      animate:2000,
    }) 

    $('.chart3').easyPieChart({
      size:160,
      barColor:"#ff5b00",
      scaleLength:0,
      lineWidth:10,
      tackColor:"#525151",
      lineCap:"circle",
      animate:2000,
    }) 

    $('.chart4').easyPieChart({
      size:160,
      barColor:"#ff5b00",
      scaleLength:0,
      lineWidth:10,
      tackColor:"#525151",
      lineCap:"circle",
      animate:2000,
    }) 

    $('.chart5').easyPieChart({
      size:160,
      barColor:"#ff5b00",
      scaleLength:0,
      lineWidth:10,
      tackColor:"#525151",
      lineCap:"circle",
      animate:2000,
    }) 

    $('.chart6').easyPieChart({
      size:160,
      barColor:"#ff5b00",
      scaleLength:0,
      lineWidth:10,
      tackColor:"#525151",
      lineCap:"circle",
      animate:2000,
    }) 
    
  })

}

function efectoHabilidades () {
  var skills = document.getElementById("habilidades");
  var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if(distancia_skills >= 300){
    let habilidades = document.getElementsByClassName("chart");
    habilidades[0].classList.add("chart1");
    habilidades[1].classList.add("chart2");
    habilidades[2].classList.add("chart3");
    habilidades[3].classList.add("chart4");
    habilidades[4].classList.add("chart5");
    habilidades[5].classList.add("chart6");   
    cargarAnimaciones();
  }
}

window.onscroll = function() {
  efectoHabilidades();
}

function responsiveMenu(){
  let x = document.getElementById("nav");
  if(x.className===""){
      x.className = "responsive";

    let span = document.createElement("span");
    span.innerHTML = "X";
    document.getElementById("nav").appendChild(span);

    span.onclick = function () {
      x.className = "";
      span.remove();
    }

  }else {
    x.className = "";
  }
}
