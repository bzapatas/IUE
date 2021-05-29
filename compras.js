function info() { 
    var texto = document.getElementById("cajaS1");
    var t1 = document.createElement("h2");      
    titulo="Carreras de Interes:";
    t1.innerHTML = titulo;     
    texto.appendChild(t1);
  
     if (document.carreras.sistemas.checked == true) {
       sistemas = "<h3>" + document.carreras.sistemas.value + "</h3>";
       }
    else { sistemas = "" }	
    if (document.carreras.Derecho.checked == true) {
        Derecho = "<h3>" + document.carreras.Derecho.value + "</h3>";
       }
    else { Derecho = "" }	
    if (document.carreras.Tecnologia.checked == true) {
        Tecnologia = "<h3>" + document.carreras.Tecnologia.value + "</h3>";
       }	
    else { Tecnologia = "" }	
    texto.innerHTML += sistemas + Derecho + Tecnologia}