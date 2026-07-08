1. Se ah agregado el archivo .gitignore para ignorar siertos archivos y carpetas.

2. Se han actualizado las imagenes.

3. cursos.css se ah actualizado por completo para dar una nueva vista a la pagina de cursos.

4. Explicacion que hace cada funcion de cursos.js
   1. obtenerCursosFiltrados()
      Esta función actúa como un colador. Su trabajo es revisar la lista completa de cursos y quedarse solo con los que cumplen dos condiciones:
         Que pertenezcan a la categoría que elegiste (por ejemplo, "Tecnología").
         Que incluyan las palabras que escribiste en el buscador.

   2. render()
      Esta es la función "pintora". Una vez que la primera función ya sabe cuáles cursos mostrar, esta función se encarga de dibujarlos en la pantalla. Ella:
         Crea "tarjetas" visuales para cada curso.
         Decide si debe mostrar una tabla detallada (si el curso tiene varios horarios/sedes) o una sencilla.
         Pone las fotos, títulos y descripciones en su lugar correcto.

   3. filtrar(categoria)
      Esta función es un interruptor. Cuando haces clic en un botón de categoría (por ejemplo, "Diseño"), esta función avisa al sistema: "Oye, el usuario ahora solo quiere ver cosas de Diseño". Inmediatamente después, le pide a la función "pintora" (render) que vuelva a dibujar la página con esa información.

   4. El bloque botonesFiltro.forEach(...)
      Esta parte es la conexión. Es la que "conecta" los botones físicos de tu pantalla con la función filtrar. Le dice al navegador: "Cada vez que alguien haga clic en uno de estos botones, activa el modo de filtrado".

   5. inputBusqueda.addEventListener("keyup", render)
      Esta es la función de búsqueda en tiempo real. Gracias a ella, no necesitas darle a un botón de "Buscar". Cada vez que presionas una tecla en el cuadro de texto, el sistema vuelve a dibujar la lista automáticamente para mostrarte los resultados instantáneamente.

   6. document.addEventListener('click', ...) (El efecto acordeón)
      Esta función controla el botón de "Ver más información". Se encarga de que, cuando hagas clic en ese botón, el texto extra aparezca o desaparezca y que el texto del botón cambie entre "Ver más" y "Ocultar". Es lo que hace que la página sea interactiva y no esté llena de texto todo el tiempo.

   7. render() (al final del archivo)
      Este es el botón de encendido. Se coloca al final para asegurar que, en cuanto cargues la página por primera vez, todos los cursos se muestren automáticamente sin que tengas que hacer nada.
