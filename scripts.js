
//------------------ESPECIFICA-----------------------------------------------------> V O L V E R  A R R I B A

var botonIrArriba = document.querySelector(".boton-ir-arriba");

window.onscroll = function () { mostrarBotonIrArriba() };

function mostrarBotonIrArriba() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    botonIrArriba.style.display = "block";
  } else {
    botonIrArriba.style.display = "none";
  }
}

function irArriba() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//----------------REUTILIZAR-------------------------------------------------------> H A C E R  V I S I B L E

function hacerVisible(claseObjeto) {
  let objeto = document.querySelector(claseObjeto);
  objeto.classList.toggle("es-visible");
}


//-------------------REUTILIZAR----------------------------------------------------> D E S P L E G A R   O B J E T O

function desplegarObjeto(claseObjeto) {
  let objeto = document.querySelector(claseObjeto);
  objeto.classList.toggle("objeto-desplegado");
}

//--------------------REUTILIZAR-----------------------------------------------> A C T U A L I Z A R  T E X T O

function actualizarTexto(claseObjeto, textoExistente, nuevoTexto) {
  
  var objeto = document.querySelector(claseObjeto);
  if (objeto.innerText === textoExistente) {
    objeto.innerText = nuevoTexto;
  } else {
    objeto.innerText = textoExistente;
  }
}


//-------------------REUTILIZAR------------------------------------------------> E S T A B L E C E R  A T R I B U T O

function establecerAtributo(claseObjeto, atributo, valorExistente, nuevoValor) {
  
  var objeto = document.querySelector(claseObjeto);
  var valorAtributo = objeto.getAttribute(atributo);
  if (valorAtributo === valorExistente) {
    objeto.setAttribute(atributo, nuevoValor);
  } else {
    objeto.setAttribute(atributo, valorExistente);
  }
}


//----------------------ESPECIFICA-------------------------------------------------> C A M B I A R  C O L O R  T E M A

function cambiarTema() {
  var coleccionColorClaro = document.querySelectorAll(".tema-claro");
  var coleccionColorOscuro = document.querySelectorAll(".tema-oscuro");

  for (let elementoClaro of coleccionColorClaro) {
    elementoClaro.classList.replace("tema-claro", "tema-oscuro");
  };

  for (let elementoOscuro of coleccionColorOscuro) {
    elementoOscuro.classList.replace("tema-oscuro", "tema-claro");
  };
  

  establecerAtributo('.modo-color', 'title', 'Cambiar a tema oscuro','Cambiar a tema claro');
  establecerAtributo('.img-logo-ap', 'src', '/home/usu4r10/Documentos/trabajo/Arg_Programa/02_YoProgramo/portfolio/img/ap_n.svg', 
  '/home/usu4r10/Documentos/trabajo/Arg_Programa/02_YoProgramo/portfolio/img/ap_b.svg');
}

//---------------------ESPECIFICA--------------------------------------------------> A C T I V A R  M E N U 

function activarMenuBarra() {
  hacerVisible('.barra-navegacion');
  establecerAtributo('.menu', 'title', 'Mostrar menú', 'Ocultar menú')
}
