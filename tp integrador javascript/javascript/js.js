
let cantidad = document.querySelector("#cantidad");
let categoria = document.querySelector("#categoria");
let total = document.querySelector("#total-pagar");
let borrar = document.querySelector("#borrar");
let resumen = document.querySelector("#resumen");

cantidad.addEventListener("input",leerTexto);
categoria.addEventListener("input",leerTexto);
total.addEventListener("input",total);
borrar.addEventListener("input",leerTexto);
resumen.addEventListener("click", aPagar);

function leerTexto(e){
    datos [e.target.id] = e.target.value;
    console.log(datos)
}

function aPagar (){
    
    if (categoria.value == "0"){
        let cantidad = document.querySelector('#cantidad').value;
        total =  (cantidad * 200);
        document.querySelector("#total-pagar-mostrar").innerHTML = total;
      
    } else if (categoria.value == "1"){
        let cantidad = document.querySelector('#cantidad').value;
        total =  (cantidad * 200) * 0.20;
        document.querySelector("#total-pagar-mostrar").innerHTML = total;
      
    }else if (categoria.value == "2"){
        let cantidad = document.querySelector('#cantidad').value;
          total =  (cantidad * 200) * 0.50;
        document.querySelector("#total-pagar-mostrar").innerHTML = total;
        
   } else if( categoria.value == "3"){
        let cantidad = document.querySelector('#cantidad').value;
        total =  (cantidad * 200) * 0.85;
        document.querySelector("#total-pagar-mostrar").innerHTML = total;
       
    }
};


