
# Preguntas de los exámenes

## Asignatura "Herramientas de Visualización"

### 2020 Modelo A

1. Dado el siguiente código D3, ¿qué hace la Parte 2?
svg.selectAll("rect").data(dataset).on("mouseover", function(d) { d3.select(this).style("fill", "red"); }).on("mouseout", function() { d3.select(this).style("fill", function(d) { return "rgb(0, 0, " + (d * 10) + ")"; }); })
- A. Cuando el usuario quite el ratón de encima el objeto será más o menos azul según los datos
- B. Cuando el usuario ponga el ratón de encima el objeto cambiará de color siempre
- C. Cuando el usuario quite el ratón por encima el objeto será rojo

2. ¿Qué tipo de gráfica dibuja este código? svg.selectAll("circle").data(datos).enter().append("circle").attr("cx", function(d) { return d[0]; }).attr("cy", function(d) { return d[1]; }).attr("r", 5);
- A. Un diagrama de dispersión
- B. Un diagrama de tarta
- C. Un diagrama de barras

3. Teniendo una estructura de datos sencilla como [3,4,7,8,1] que quisiéramos utilizar para hacer un diagrama de barras con elementos div cambiando el tamaño según el valor, ¿qué código falta? d3.select("body").selectAll("div").data(dataset).enter().append("div") // QUÉ CÓDIGO FALTA AQUÍ
- A. style("size", function(d) { return d + "px"; })
- B. style("width", function(d) { return d + "px"; }).style("height", function(d) { return d + "px"; })
- C. append("width", function(d) { return d + "px"; }).append("height", function(d) { return d + "px"; })

4. En una escala lineal con estos valores: scale.domain([0,100]).range([0,10])
- A. El valor 50 en los datos correspondería al valor 5
- B. El valor 0 en los datos correspondería al valor 100
- C. El valor 100 en los datos correspondería al valor 10

5. El rango y dominio de una escala son respectivamente:
- A. El rango se refiere al intervalo de datos de entrada y el dominio a los de salida
- B. El dominio se refiere al intervalo de datos de entrada y el rango a los de salida
- C. El rango se refiere al intervalo de datos de entrada y el dominio a los del dataset

6. ¿Qué ocurre cuando ejecutas este código? .attr("height", function(d) { return d.x }) que es equivalente a .attr("height", d => d.x)
- A. Poner en el atributo x el valor de height en cada elemento
- B. Poner en el atributo height el valor de x de cada elemento
- C. Poner en el atributo d el valor de x en cada elemento con height

7. ¿Qué hace la línea 4 del siguiente código? svg.selectAll("rect").data(data).enter().append("rect").attr("x", function(d, i) { return i * (w / dataset.length); }).attr("y", 0).attr("width", w / dataset.length - 1).attr("height", function(d) { return d; });
- A. Posiciona verticalmente los elementos en proporción a w
- B. Posiciona horizontalmente los elementos en proporción a w
- C. Hace los elementos más altos según su posición en el dataset (i)

8. ¿Cómo puedes hacer desvanecer (fade-out) un elemento en D3?
- A. .transition().style("intensity", 0)
- B. .transition().style("color", "invisible")
- C. .transition().style("opacity", 0)

9. La acción d3.select("body").append("p").text("hola") necesita que en HTML:
- A. Exista la etiqueta p para añadir el texto hola
- B. Exista la clase p
- C. No importa si existe la clase p

10. Si se solicita que el tamaño de cada círculo se incremente de abajo hacia arriba (arriba más grandes y abajo más pequeños), ¿qué código deberías poner? svg.selectAll("circle").data(datos).enter().append("circle").attr("cx", function(d) { return d[0]; }).attr("cy", function(d) { return d[1]; }).attr("r", 5); // SUSTITUIR ESTA LÍNEA
- A. .attr("r", function(d) { return d[0] })
- B. .attr("r", function(d) { return d[1] })
- C. .attr("r", function(d) { return 100-d[0] })

11. ¿Qué hace el siguiente código de D3? function(d, i) { return i * 40 + "px"; }
- A. Aplica una animación del 40% a todos los elementos del gráfico
- B. Coloca cada elemento a 40 mm del anterior
- C. Calcula el 40% de cada valor de los datos
- D. Hace un cálculo dependiendo del lugar de un dato en su array

12. En este hueco: .select("circle").attr("r", _____) debe haber...
- A. Un color
- B. Un color para el borde
- C. Una longitud (px o similar)

13. ¿Cuáles son los dos métodos que acompañan a scale() en D3 para definir una escala?
- A. domain y range
- B. domain y style
- C. selectall y range
- D. style y range

14. La creación de un objeto DataTable en Google Spreadsheets con addColumn y addRows es necesaria para...
- A. La visualización de una tabla con dichos datos
- B. Cualquier tipo de visualización
- C. Solo visualizaciones de tipo barra

15. El binding o join de D3 consiste en:
- A. En añadir/cruzar información de tu dataset con los elementos HTML
- B. Añadir elementos nuevos a la visualización
- C. Eliminar elementos antiguos de la visualización

### 2020 Modelo B

1. ¿Qué tipo de gráfica dibuja este código? svg.selectAll("circle").data(datos).enter().append("circle").attr("cx", function(d) { return d[0]; }).attr("cy", function(d) { return d[1]; }).attr("r", 5);
- A. Un diagrama de dispersión
- B. Un diagrama de tarta
- C. Un diagrama de barras

2. Para hacer un diagrama de barras con elementos div cambiando la altura y ancho según los datos [3,4,7,8,1], ¿qué código falta después de .append("div")?
- A. style("size", function(d) { return d + "px"; })
- B. style("width", function(d) { return d + "px"; }).style("height", function(d) { return d + "px"; })
- C. append("width", function(d) { return d + "px"; }).append("height", function(d) { return d + "px"; })

3. ¿Cuáles son los dos métodos que acompañan a scale() en D3 para definir una escala?
- A. domain y range
- B. domain y style
- C. selectall y range
- D. style y range

4. En una escala lineal con scale.domain([0,100]).range([0,10]):
- A. El valor 50 en los datos correspondería al valor 5
- B. El valor 0 en los datos correspondería al valor 100
- C. El valor 100 en los datos correspondería al valor 10

5. El rango y dominio de una escala son respectivamente:
- A. El rango se refiere al intervalo de datos de entrada y el dominio a los de salida
- B. El dominio se refiere al intervalo de datos de entrada y el rango a los de salida
- C. El rango se refiere al intervalo de datos de entrada y el dominio a los del dataset

6. ¿Qué ocurre cuando ejecutas .attr("height", function(d) { return d.x }) o equivalente .attr("height", d => d.x)?
- A. Poner en el atributo x el valor de height en cada elemento
- B. Poner en el atributo height el valor de x de cada elemento
- C. Poner en el atributo d el valor de x en cada elemento con height

7. La creación de un objeto DataTable en Google Spreadsheets con addColumn y addRows es necesaria para...
- A. La visualización de una tabla con dichos datos
- B. Cualquier tipo de visualización
- C. Solo visualizaciones de tipo barra

8. El binding o join de D3 consiste en:
- A. En añadir/cruzar información de tu dataset con los elementos HTML
- B. Añadir elementos nuevos a la visualización
- C. Eliminar elementos antiguos de la visualización

9. ¿Qué hace la línea 4? svg.selectAll("rect").data(data).enter().append("rect").attr("x", function(d, i) { return i * (w / dataset.length); }).attr("y", 0).attr("width", w / dataset.length - 1).attr("height", function(d) { return d; });
- A. Posiciona verticalmente los elementos en proporción a w
- B. Posiciona horizontalmente los elementos en proporción a w
- C. Hace los elementos más altos según su posición en el dataset (i)

10. ¿Cómo puedes hacer desvanecer (fade-out) un elemento?
- A. .transition().style("intensity", 0)
- B. .transition().style("color", "invisible")
- C. .transition().style("opacity", 0)

11. La acción d3.select("body").append("p").text("hola") necesita que en HTML:
- A. Exista la etiqueta p para añadir el texto hola
- B. Exista la clase p
- C. No importa si existe la clase p

12. Para que el tamaño de cada círculo se incremente de abajo hacia arriba, ¿qué código usarías en la última línea?
- A. .attr("r", function(d) { return d[0] })
- B. .attr("r", function(d) { return d[1] })
- C. .attr("r", function(d) { return 100-d[0] })

13. ¿Qué hace function(d, i) { return i * 40 + "px"; } en D3?
- A. Aplica una animación del 40% a todos los elementos del gráfico
- B. Coloca cada elemento a 40 mm del anterior
- C. Calcula el 40% de cada valor de los datos
- D. Hace un cálculo dependiendo del lugar de un dato en su array

14. En el hueco .select("circle").attr("r", _____) debe haber...
- A. Un color
- B. Un color para el borde
- C. Una longitud (px o similar)

### D3.js Conceptos

1. ¿Qué método de D3 se utiliza para seleccionar todos los elementos que coincidan con un selector CSS?
- A. d3.select()
- B. d3.selectAll()
- C. d3.querySelector()
- D. d3.findAll()

2. ¿Cuál es la función del método .enter() en D3.js?
- A. Anima los elementos existentes
- B. Crea placeholders para los datos que no tienen un elemento DOM correspondiente
- C. Elimina los elementos sobrantes del DOM
- D. Enlaza los datos con el DOM directamente

3. ¿Qué método se utiliza en D3.js para cargar datos desde un archivo JSON externo?
- A. d3.load("datos.json")
- B. d3.fetch("datos.json")
- C. d3.json("datos.json")
- D. d3.read("datos.json")

4. ¿Cuál es la diferencia entre d3.select() y d3.selectAll()?
- A. select() selecciona todos los elementos, selectAll() solo el primero
- B. select() selecciona el primer elemento que coincida, selectAll() selecciona todos
- C. No hay diferencia, son sinónimos
- D. select() funciona con clases, selectAll() con IDs

5. En D3.js, ¿qué elemento SVG se usa para dibujar un rectángulo?
- A. <square>
- B. <box>
- C. <rect>
- D. <rectangle>

6. ¿Qué propiedad SVG controla la posición horizontal de un círculo?
- A. x
- B. cx
- C. left
- D. posX

7. Para crear una escala lineal en D3.js v7, ¿qué función se usa?
- A. d3.scale.linear()
- B. d3.scaleLinear()
- C. d3.linearScale()
- D. new d3.Scale("linear")

8. ¿Qué método de D3 se utiliza para crear un eje horizontal (parte inferior)?
- A. d3.axisHorizontal()
- B. d3.axisBottom()
- C. d3.xAxis()
- D. d3.axis("bottom")

9. En D3.js, ¿qué hace el método .transition()?
- A. Cambia instantáneamente los atributos de un elemento
- B. Permite animar cambios en los atributos de un elemento a lo largo del tiempo
- C. Mueve el elemento a otra posición del DOM
- D. Elimina el elemento con una animación predefinida

10. ¿Qué método se usa para especificar la duración de una transición en D3?
- A. .time(1000)
- B. .duration(1000)
- C. .speed(1000)
- D. .delay(1000)

11. ¿Para qué sirve el parámetro i en function(d, i) dentro de D3.js?
- A. Representa el identificador único del dato
- B. Representa el índice del elemento en el array de datos
- C. Representa el valor interior del dato
- D. Representa la intensidad del color

12. ¿Qué evento se usa en D3.js para detectar cuando el ratón pasa por encima de un elemento?
- A. onhover
- B. mouseover
- C. mouseenter
- D. hover

13. ¿Cuál es la forma correcta de añadir un tooltip en D3.js al pasar el ratón sobre un elemento?
- A. Usar .on("mouseover") para mostrar un div posicionado y .on("mouseout") para ocultarlo
- B. Usar el atributo HTML title en cada elemento
- C. Usar .tooltip() directamente en la selección
- D. Los tooltips no son posibles en D3.js

14. ¿Qué atributo SVG controla el radio de un círculo?
- A. radius
- B. size
- C. r
- D. d

15. ¿Qué método se usa en D3.js para eliminar elementos del DOM que ya no tienen datos asociados?
- A. .remove()
- B. .exit().remove()
- C. .delete()
- D. .detach()

16. ¿Qué es el patrón Update en D3.js (General Update Pattern)?
- A. Un patrón para actualizar la versión de D3
- B. Un patrón que gestiona la entrada (enter), actualización (update) y salida (exit) de elementos según los datos
- C. Un patrón para refrescar la página automáticamente
- D. Un patrón exclusivo para gráficos de barras

17. En D3.js, ¿cuál es la forma correcta de establecer el color de relleno de un elemento SVG?
- A. .style("background-color", "red")
- B. .attr("fill", "red") o .style("fill", "red")
- C. .attr("color", "red")
- D. .style("background", "red")

18. ¿Qué formato de datos NO puede cargar D3.js directamente con sus funciones integradas?
- A. JSON
- B. CSV
- C. TSV
- D. XLSX (Excel)

19. ¿Cuál es la función de .append() en D3.js?
- A. Añade un nuevo dato al dataset
- B. Añade un nuevo elemento hijo al elemento seleccionado
- C. Concatena texto a un elemento existente
- D. Añade una clase CSS al elemento

20. ¿Qué escala de D3.js es más apropiada para mapear categorías (datos discretos) a colores?
- A. d3.scaleLinear()
- B. d3.scaleOrdinal()
- C. d3.scaleLog()
- D. d3.scaleTime()

### Tableau Conceptos

1. En Tableau, ¿cuál es la diferencia entre una dimensión y una medida?
- A. No hay diferencia
- B. Las dimensiones son valores cualitativos/categóricos y las medidas son valores cuantitativos/numéricos
- C. Las dimensiones son valores numéricos y las medidas son valores de texto
- D. Las dimensiones se usan solo en filas y las medidas solo en columnas

2. ¿Dónde se arrastra una variable en Tableau para que determine el color de las marcas?
- A. Al estante de Filas
- B. Al estante de Columnas
- C. A la tarjeta de Marcas, en Color
- D. Al panel de Filtros

3. Para crear un gráfico de barras acumuladas en Tableau, ¿qué tipo de marca se utiliza?
- A. Círculo
- B. Barra
- C. Línea
- D. Texto

4. ¿Qué es un dashboard en Tableau?
- A. Una hoja de datos sin procesar
- B. Una colección de varias hojas de trabajo y objetos organizados en una sola vista
- C. Un tipo especial de filtro
- D. Un script de automatización

5. ¿Cómo se usa una gráfica como filtro dentro de un dashboard en Tableau?
- A. Arrastrando la variable al panel de filtros global
- B. Haciendo clic en el icono de embudo en la esquina de la gráfica dentro del dashboard
- C. No es posible usar una gráfica como filtro
- D. Exportando los datos primero

6. ¿Qué es un parámetro en Tableau?
- A. Un tipo de gráfico
- B. Un valor dinámico que puede ser controlado por el usuario y utilizado en cálculos, filtros o referencias
- C. Una variable del dataset
- D. Un tipo de conexión a datos

7. ¿Cuál es la sintaxis correcta para un campo calculado condicional en Tableau?
- A. WHEN condición DO resultado END
- B. IF condición THEN resultado ELSE alternativa END
- C. CASE condición WHEN resultado END
- D. SELECT condición FROM resultado

8. En Tableau, ¿qué tipo de filtro se aplica primero en el orden de operaciones?
- A. Filtro de dimensión
- B. Filtro de medida
- C. Filtro de contexto
- D. Filtro de tabla

9. ¿Cómo se crean grupos de campos en Tableau?
- A. Desde el menú Formato > Grupos
- B. Clic derecho en la variable > Crear > Grupo
- C. Desde el menú Datos > Nuevo grupo
- D. Arrastrando variables al panel de grupos

10. ¿Qué son las "Acciones" en un dashboard de Tableau?
- A. Macros que ejecutan código SQL
- B. Funcionalidades que permiten crear interactividad entre las hojas del dashboard (filtrar, resaltar, navegar a URLs)
- C. Animaciones predefinidas
- D. Exportaciones automáticas de datos

11. ¿Dónde se coloca una variable en Tableau para que aparezca como filas en una tabla o eje vertical en un gráfico?
- A. En el estante de Columnas
- B. En el estante de Filas
- C. En la tarjeta de Marcas
- D. En el panel de Datos

12. Para mostrar un mapa en Tableau, ¿qué tipo de datos necesita la variable geográfica?
- A. Solo coordenadas numéricas
- B. Datos con rol geográfico asignado (país, estado, ciudad, código postal)
- C. Archivos shapefile exclusivamente
- D. URLs de mapas externos

13. ¿Qué función de Tableau se usa para contar el número de registros?
- A. SUM()
- B. COUNT()
- C. COUNTD()
- D. Tanto COUNT() como COUNTD(), pero COUNTD() cuenta valores distintos

14. En Tableau, ¿cómo se añade una etiqueta a las barras de un gráfico?
- A. Clic derecho en la barra > Añadir etiqueta
- B. Arrastrando la medida a la tarjeta de Marcas en Etiqueta
- C. Desde el menú Formato > Etiquetas
- D. Las etiquetas se añaden automáticamente

15. ¿Qué significa "Mostrar filtro" en Tableau?
- A. Ocultar el filtro del panel
- B. Crear un control visual interactivo para que el usuario pueda seleccionar valores del filtro en la hoja de trabajo
- C. Aplicar el filtro a todas las hojas
- D. Exportar los filtros como imagen

16. ¿Cuál es la diferencia entre un filtro de acción y un filtro de contexto en Tableau?
- A. No hay diferencia
- B. El filtro de acción se desencadena por interacción del usuario en el dashboard, mientras que el filtro de contexto se aplica antes que otros filtros y limita los datos disponibles
- C. El filtro de contexto solo funciona con mapas
- D. El filtro de acción solo funciona con tablas

17. En Tableau, ¿cómo se crea un parámetro para que el usuario pueda elegir un valor umbral?
- A. Clic derecho en el panel de datos > Crear parámetro > Configurar tipo de datos, rango y paso
- B. Desde el menú Archivo > Nuevo parámetro
- C. Los parámetros se crean automáticamente
- D. Arrastrando una medida al panel de parámetros

18. ¿Qué es una "Hoja de trabajo" (Worksheet) en Tableau?
- A. Un archivo de datos externo
- B. Un lienzo individual donde se crea una única visualización o gráfico
- C. Un dashboard completo
- D. Una conexión a base de datos

19. ¿Cómo se puede cambiar el tipo de gráfico en Tableau?
- A. Solo desde el menú Archivo
- B. Usando el botón "Muéstrame" (Show Me) o cambiando el tipo de marca
- C. Eliminando la hoja y creando una nueva
- D. Desde las preferencias globales

20. En Tableau, ¿qué ocurre cuando se arrastra una medida continua al estante de Color?
- A. Se crea un filtro automático
- B. Se aplica una paleta de colores degradados (gradiente) proporcional al valor de la medida
- C. Se muestra un error porque las medidas no van en Color
- D. Se crea un gráfico de tarta

### Power BI Conceptos

1. ¿Cuáles son las tres vistas principales del entorno de Power BI Desktop?
- A. Datos, Modelo y Código
- B. Informe, Datos y Modelo
- C. Dashboard, Informe y Datos
- D. Visualización, Transformación y Publicación

2. ¿Qué es DAX en el contexto de Power BI?
- A. Un tipo de gráfico
- B. Un lenguaje de expresiones y fórmulas para crear cálculos personalizados
- C. Un formato de archivo de datos
- D. Una herramienta de conexión a bases de datos

3. ¿Cuál es la función DAX más básica para sumar los valores de una columna?
- A. ADD()
- B. TOTAL()
- C. SUM()
- D. SUMA()

4. En Power BI, ¿qué es un "Slicer" (Segmentador)?
- A. Un tipo de gráfico de barras
- B. Un filtro visual interactivo que permite al usuario filtrar datos seleccionando valores
- C. Una herramienta para dividir tablas
- D. Un conector de datos

5. ¿Cuál es la diferencia entre un "Informe" y un "Dashboard" en Power BI?
- A. No hay diferencia
- B. Un informe es un conjunto de visualizaciones en una o más páginas, mientras que un dashboard es una sola página con elementos fijados desde uno o varios informes
- C. Un dashboard tiene más páginas que un informe
- D. Un informe solo contiene tablas y un dashboard solo contiene gráficos

6. En Power BI, ¿qué herramienta se utiliza para transformar y limpiar datos antes de cargarlos?
- A. DAX Editor
- B. Power Query
- C. Visual Studio
- D. SQL Server Management Studio

7. ¿Qué tipo de relación entre tablas es más común en un modelo de datos de Power BI?
- A. Muchos a muchos
- B. Uno a uno
- C. Uno a muchos
- D. No se necesitan relaciones

8. ¿Qué función DAX se usa para calcular una expresión en un contexto de filtro modificado?
- A. FILTER()
- B. CALCULATE()
- C. EVALUATE()
- D. APPLY()

9. En Power BI, ¿qué es una "Medida" (Measure)?
- A. Una columna del dataset original
- B. Un cálculo dinámico creado con DAX que se evalúa en tiempo de consulta según el contexto
- C. Un tipo de gráfico
- D. Un filtro predefinido

10. ¿Qué formato de archivo nativo utiliza Power BI Desktop para guardar informes?
- A. .xlsx
- B. .pbix
- C. .pbi
- D. .twbx

11. ¿Cuál es la diferencia entre una columna calculada y una medida en Power BI?
- A. No hay diferencia
- B. Una columna calculada se almacena en la tabla y se calcula fila por fila, mientras que una medida se calcula dinámicamente según el contexto de la visualización
- C. Una medida se almacena en la tabla y una columna calculada no
- D. Las columnas calculadas solo funcionan con texto

12. En Power BI, ¿cómo se puede crear un filtro que afecte a todas las páginas del informe?
- A. Añadiendo un slicer en cada página
- B. Usando el panel de Filtros y configurando un filtro a nivel de informe
- C. No es posible crear filtros globales
- D. Exportando los datos filtrados

13. ¿Qué es un "KPI" (Key Performance Indicator) en Power BI?
- A. Un tipo de conexión de datos
- B. Una visualización que muestra el progreso de una medida respecto a un objetivo definido
- C. Un script de automatización
- D. Un formato de exportación

14. ¿Qué función DAX se usa para contar el número de filas en una tabla?
- A. COUNT()
- B. COUNTROWS()
- C. LEN()
- D. ROWS()

15. En Power BI, ¿qué tipo de visualización es más apropiada para mostrar datos geográficos?
- A. Gráfico de barras
- B. Gráfico de líneas
- C. Mapa o mapa coropléticos
- D. Tabla dinámica

16. ¿Qué es Power BI Service a diferencia de Power BI Desktop?
- A. Son lo mismo
- B. Power BI Service es la versión en la nube para compartir, colaborar y programar actualizaciones de informes
- C. Power BI Service es solo para desarrolladores
- D. Power BI Service es una versión simplificada sin gráficos

17. ¿Qué función DAX devuelve el valor máximo de una columna?
- A. MAXIMUM()
- B. MAX()
- C. TOP()
- D. HIGHEST()

18. En Power BI, ¿cómo se pueden establecer relaciones entre dos tablas?
- A. Solo arrastrando columnas manualmente en la vista de Modelo
- B. Power BI detecta relaciones automáticamente o se pueden crear manualmente en la vista de Modelo arrastrando campos entre tablas
- C. Solo mediante código DAX
- D. Las relaciones no son necesarias en Power BI

19. ¿Qué es un "Drill-through" en Power BI?
- A. Un tipo de gráfico
- B. Una funcionalidad que permite navegar desde una visualización resumida a una página de detalle, pasando el contexto del filtro
- C. Una forma de exportar datos
- D. Un tipo de conexión a datos

20. ¿Cuál es el propósito del panel de Visualizaciones en Power BI Desktop?
- A. Solo para cambiar colores
- B. Permite seleccionar el tipo de visualización, configurar los campos de datos para cada eje y aplicar formato a los gráficos
- C. Solo para filtrar datos
- D. Solo para exportar informes
