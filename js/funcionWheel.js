'use strict'


//CREAMOS ARRAY (UNA LISTA PERO DE JS QUE PERMITE ALMACENAR DATOS MODIFICARLOS ETC)
let listado = ["Ezekiel","Javi","Silvia","Pablo","CrisM1","Iñigo","Abraham","Arturo","CrisM2","Isidro","Paula","Angel","Clara","Edu","Luis","Jaime","Carla","Alejandra","Jairo","Julian","Juancar","Hector","Fran", "Karen"];

//CREAMOS VARIABLE Y LA DECLARAMOS PORQUE A ALGUIEN ESCUCHE DECIR QUE ES MEJOR DECLARARLA PARA EVITAR POSIBLES ERRORES
//ADEMAS LA CREAMOS AQUI FUERA PORQUE SI LA CREAS DENTRO DE UNA FUNCION LUEGO NO LA PUEDES USAR DESDE OTRA.
let muerto = 0;
let mongui;
let monguimg;
let monguimagen;
let contadorMuertos=0;

//BUCLE FOR Y CONSTANTE ELEMENT QUE ALMACENA EL VALOR DEL ARRAY EN LA VUELTA QUE ESTE.
//DECLARAMOS VARIABLE MONGUI CON EL STRING .MONGUI, LE SUMAMOS EL INDEX DE MANERA QUE NOS DA LA CLASE PARA EL QUERYSELECTOR 
//PARA PODER INTRODUCIR EL TEXTO MEDIANTE EL TEXTCONTENT (SIMILAR A INNERHTML PERO AÑADE SOLO TEXTO SIN MARCADOR HTML)
for (let index = 0; index < listado.length; index++) {
    const element = listado[index];
    mongui= '.mongui' + index; 
       
    document.querySelector(mongui).textContent = element;
   
}

//FUNCION QUE SELECCIONA LA ID #MUERTO Y LE AÑADE CON EL INNERHTML lA PERSONA DEL ARRAY QUE SALIO + EL TEXTO QUE VEMOS A LA PAGINA.
function imprimeMuerto(){
    document.querySelector("#muerto").innerHTML="<p>"+listado[muerto]+" ha sido asesinado.</p>";  
    }

//LO MISMO QUE LA ANTERIOR PERO CON EL NUMERO DE VIVOS MEDIANTE LISTADO.LENGTH
function imprimeVivos(){
    document.querySelector("#vivos").innerHTML="<p>Quedan "+listado.length+" vivos.</p>";
}

//ESTE RESET VUELVE A AÑADIR LOS VALORES INICIALES AL ARRAY, AÑADE EL TEXTO A LA ID VIVOS EN EL HTML E INTRODUCE UN PARRAFO LIMPIO EN MUERTO
function resetLista(){
    listado = ["Ezekiel","Javi","Pablo","CrisM1","Iñigo","Silvia","Abraham","Arturo","CrisM2","Isidro","Paula","Angel","Clara","Edu","Luis","Jaime","Carla","Alejandra","Jairo","Julian","Juan Carlos","Hector","Fran","Karen"];
    document.querySelector("#vivos").innerHTML="<p>El juego se ha reiniciado, vuelven a haber "+listado.length+" jugadores.</p>";
    document.querySelector("#muerto").innerHTML="<p></p>";    
}

//SACA NUMERO ALEATORIO CON MATH.RANDOM MULTIPLICADO POR EL NUMERO DE VALORES DE LA LISTA Y CON MATH.FLOOR REDONDEA
function matar(){
//A LA FUNCION MATAR LE PONGO UN IF>=1 PORQUE CUANDO SE QUEDABA VACIO EL ARRAY MATABA UNDEFINED Y QUEDABA FEO. 
    if(listado.length>=1){
    muerto = Math.floor(Math.random()*(listado.length));
    console.log(listado[muerto] + " ha sido asesinado.");
    
    mongui = '.' + listado[muerto];
    monguimg = listado[muerto];
    monguimagen = 'img/' + monguimg +'.png';
           
    cambiaImagen(mongui, monguimagen);
    imprimeMuerto();
    listado.splice(muerto, 1);
    imprimeVivos();
   
    }
    
//ESTE IF PARA QUE CUANDO NO QUEDE GENTE CAMBIE LOS QUE QUEDAN VIVOS POR ESE MENSAJE.
    if(listado.length ==0){
        
        document.querySelector("#vivos").innerHTML="<p>Esto parece la peli Soy Leyenda, no queda ni el tato.</p>";
        
    }
    };

    //FUNCION LA CUAL SOLICITA OBLIGATORIAMENTE 2 PARAMETROS (ESTAN DENTRO DEL PARENTESIS) DE MANERA QUE AL LLAMARLA
    //SI NO SE INTRODUCEN 2 VALORES TAMBIEN EN EL PARENTESIS DA ERROR Y LO QUE SE PIDE ES UNA VARIABLE CLASE Y UNA VARIABLE
    //IMAGEN QUE CONTIENE LA RUTA DE LA MISMA
    function cambiaImagen(clase, imagen) {

        document.querySelector(clase).src = imagen;
        
    }


    //FUNCIONES Y EVENTOS PARA QUE EL BOTON CAMBIE AL PULSAR
    function pulsarBoton(){
    
        document.querySelector('#boton').src = 'img/pulsadomata.png';
        
    }
    
    function soltarBoton(){
    
        document.querySelector('#boton').src = 'img/botonmata.png';
    
    }


    document.querySelector('#boton').addEventListener('mousedown', pulsarBoton);
    document.querySelector('#boton').addEventListener('mouseup', soltarBoton);
    document.querySelector('#boton').addEventListener("click", matar);


