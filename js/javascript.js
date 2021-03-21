// alert('Funciona perfecto, capo!');

// -----------------------------------------------------------
// <<<<<<<<<<<<<<< LAS 2 FUNCIONES >>>>>>>>>>>>>>>
// -----------------------------------------------------------

// // <<<<<<<<<<<<<<<< FUNCION DEL RELOJ
// (function(){
//   // FUNCION HORAS
//   function horaJs(){
//     var fecha = new Date(),
//     horaHtml = document.getElementById('hora-js');
//     horaHtml.innerHTML = fecha.getHours();
//   }
//   setInterval(horaJs, 1000);

//   // FUNCION MINUTOS
//   function minJs(){
//     var fecha = new Date(),
//     minHtml = document.getElementById('min-js');
//     minHtml.innerHTML = fecha.getMinutes();
//   }
//   var intervaloMin = setInterval(minJs, 1000);

//   // FUNCION SEGUNDOS
//   function segJs(){
//     var fecha = new Date(),
//     segHtml = document.getElementById('seg-js');
//     segHtml.innerHTML = fecha.getSeconds();
//   }
//   var intervaloSeg = setInterval(segJs, 1000);
// }());


// // <<<<<<<<<<<<<<<< FUNCION DE LA FECHA
// (function(){
//   // DIA DE LA SEMANA
//   function diaSem(){
//     var fecha = new Date(),
//     semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
//     diaSemana = document.getElementById('dia-semana');
//     diaSemana.innerHTML = semana[fecha.getDay()];
//   }
//   var intervaloDiaSem = setInterval(diaSem, 1000);

//   // DIA DEL MES
//   function diaMes(){
//     var fecha = new Date(),
//     diaHtml = document.getElementById('dia');
//     diaHtml.innerHTML = fecha.getDate();
//   }
//   var intervaloDiaMes = setInterval(diaMes, 1000);

//   // MES DEL AÑO
//   function mes(){
//     var fecha = new Date(),
//     meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
//     mesHtml = document.getElementById('mes');
//     mesHtml.innerHTML = meses[fecha.getMonth()];
//   }
//   var intervaloMes = setInterval(mes, 1000);

//   // AÑO
//   function año(){
//     var fecha = new Date(),
//     añoHtml = document.getElementById('año');
//     añoHtml.innerHTML = fecha.getFullYear();
//   }
//   var intervaloAño = setInterval(año, 1000);
// }());


// -----------------------------------------------------------
// <<<<<<<<<<<<<<< MEGA FUNCION OPTIMIZADA??? >>>>>>>>>>>>>>>
// -----------------------------------------------------------

function horaFecha(){
  var fecha = new Date();
    // // <<<<<<<<<<<<<<<< FUNCION DE LA FECHA
  (function(){
    // FUNCION HORAS
    (function(){
      var horaHtml = document.getElementById('hora-js');
      horaHtml.innerHTML = fecha.getHours();
    }());

    // FUNCION MINUTOS
    (function minJs(){
      var minHtml = document.getElementById('min-js');
      minHtml.innerHTML = fecha.getMinutes();
    }());

    // FUNCION SEGUNDOS
    (function segJs(){
      var segHtml = document.getElementById('seg-js');
      segHtml.innerHTML = fecha.getSeconds();
    }());
  }());


  // <<<<<<<<<<<<<<<< FUNCION DE LA FECHA
  (function(){
    // DIA DE LA SEMANA
    (function(){
      var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
      diaSemana = document.getElementById('dia-semana');
      diaSemana.innerHTML = semana[fecha.getDay()];
    }());

    // DIA DEL MES
    (function(){
      var diaHtml = document.getElementById('dia');
      diaHtml.innerHTML = fecha.getDate();
    }());

    // MES DEL AÑO
    (function(){
      var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      mesHtml = document.getElementById('mes');
      mesHtml.innerHTML = meses[fecha.getMonth()];
    }());

    // AÑO
    (function(){
      var añoHtml = document.getElementById('año');
      añoHtml.innerHTML = fecha.getFullYear();
    }());
  }());
}
var intervaloHoraFecha = setInterval(horaFecha, 1000);
