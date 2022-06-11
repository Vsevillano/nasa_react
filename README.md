# nasa_react
Crear una aplicación con dos páginas con información procedente de la API de la NASA APOD (Astronomy Picture of the day)
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-09-15
A través del parámetro date se especifica el día sobre el que se obtienen los resultados.
Página 1 - Dashboard
El dashboard estará compuesto por 6 bloques correspondientes a los 6 dias anteriores partiendo de la fecha actual.
La distribución de la página será en 2 filas y 3 columnas
Los datos de cada bloque se obtienen de la respuesta a una petición GET a la API anterior.
Cada bloque debe contener los siguientes elementos:
• fecha - Correspondiente al campo "date"
• imagen - Correspondiente al campo "url"
• título - Correspondiente al campo "title"
Página 2 - Detalle
Al pulsar en un bloque, se navegará a una nueva página de detalle donde se mostrará la imagen y la descripción del texto debajo, correspondiente al campo "Explanation" de la API.
La página de detalle tendrá un botón volver para regresar al dashboard.
2. RESTRICCIONES
• Tecnológicas, nuestro planteamiento es que utilices las siguientes herramientas, pero no estamos limitados a ellas.
- Angular, rxjs
- React, redux
• Publicar en git o en cualquier repositorio en el que podamos acceder.
- ¡Nos gusta ver la evolución del código tras cada subida!
• Implementar tests unitarios.
• Principios clean clode, modularizar código, encapsulamiento de lógica y componentes.
• Cuidado de estilos CSS, se permite el uso de librerías auxiliares y preprocesadores de CSS.
• No es necesario hacer la aplicación Responsive, aunque es un plus.
