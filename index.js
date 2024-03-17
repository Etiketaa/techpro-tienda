function irASeccion(idSeccion) {
    // Obtener la sección de destino
    var seccionDestino = document.getElementById(idSeccion);
    // Hacer scroll suave hacia la sección
    seccionDestino.scrollIntoView({ behavior: 'smooth' });
  }
