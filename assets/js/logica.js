function mostrarForm3() {
  document.getElementById("form-comuniquemonos").style.display = "block";
} 
function mostrarForm4() {
  document.getElementById("form-reserva").style.display = "block";
} 

function recogerDatosComuniq(){
  var datosClienteComuniquemonos = {
    nombre: document.getElementById("inputNombreComuniquemonos").value,
    email: document.getElementById("inputCorreoComuniquemonos").value,
    telefono: document.getElementById("inputFonoComuniquemonos").value,
    motivoOpcion: document.getElementById("inputDespleComuniq").value,
    motivoTexto: document.getElementById("inputTextaComuniq").value,
  };
  
  if (datosClienteComuniquemonos.nombre == '' || datosClienteComuniquemonos.email == '' || datosClienteComuniquemonos.telefono == '' || datosClienteComuniquemonos.motivoTexto == '') {
    alert('Por favor complete todos los campos');
  }else{
    alert("Muchas gracias " + datosClienteComuniquemonos.nombre + ", hemos recibido su sugerencia, y enviaremos una pronta respuesta a " + datosClienteComuniquemonos.email);
  }
}

$(document).ready(function(){
  $("#botonEnviarReserva").click(function(){
    var datosClienteReserva = {
      nombre: $("#inputNombreReserva").val(),
      email: $("#inputCorreoReserva").val(),
      telefono: $("#inputFonoReserva").val(),
      fecha: $("#inputFechaReserva").val(),
      hora: $("#inputHoraReserva").val(),
      cantidadDeAsistentes: $("#inputCantAsistentesReserva").val(),
    };
    if (datosClienteReserva.nombre == '' || datosClienteReserva.email == '' || datosClienteReserva.telefono == '' || datosClienteReserva.fecha == '' || datosClienteReserva.hora == '' || datosClienteReserva.cantidadDeAsistentes == '') {
      alert('Por favor complete todos los campos');
    }else{
      alert("Estimado/a, " + datosClienteReserva.nombre + ", agradecemos por reservar con nosotros. Hemos registrado " + datosClienteReserva.cantidadDeAsistentes + " asistentes. Se ha enviado el código de confirmación al correo: " + datosClienteReserva.email + " \nGracias por preferirnos.");
    }
  });
});

$("#card-visible-gaseosas").click(function(){
  $("#card-escondida-gaseosas").show();
});
$("#card-visible-tablas").click(function(){
  $("#card-escondida-tablas").show();
});
$("#card-visible-shop").click(function(){
  $("#card-escondida-shop").show();
});
/*
$(document).ready(function(){
  $("#card-escondida-gaseosas").click(function(){
    $(this).closest("#card-escondida-gaseosas").hide();
  });
  $("#card-escondida-tablas").click(function(){
    $(this).closest("#card-escondida-tablas").hide();
  });
  $("#card-escondida-shop").click(function(){
    $(this).closest("#card-escondida-shop").hide();
  });
}); */

$(document).ready(function(){
  $(".close-btn").click(function(){
  $(this).closest(".card-escondida").hide(); 
  });

});








