
# Examen IPMD 7 de Marzo de 2026 (con soluciones)

## Hadoop Test

Este bloque tipo test consta de 15 preguntas en las que únicamente existe una opción correcta.

### Pregunta 1

Sobre cómo almacena HDFS los archivos más pequeños que el tamaño de bloque, seleccione la respuesta correcta:
A. Comparte un mismo bloque de HDFS entre varios archivos pequeños para no desperdiciar espacio.
B. Cada archivo, aunque sea pequeño, ocupa un bloque propio, pero no se desperdicia espacio por debajo de ese bloque.
C. Los archivos más pequeños que el tamaño de bloque se almacenan únicamente en el sistema de archivos local.
D. HDFS rellena el resto del bloque con ceros y contabiliza ese espacio como desperdiciado.

Respuesta correcta: B

### Pregunta 2

¿Cuál es el propósito del DAG en Spark?
A. Optimizar consultas SQL
B. Mantener la trazabilidad y resiliencia
C. Replicar particiones
D. Ejecutar acciones inmediatamente

Respuesta correcta: B

### Pregunta 3

¿Qué caso de uso NO está indicado para Hive?
A. Realizar una agregación en SQL sobre ficheros de la base de datos operacional (transaccional) de una empresa
B. Escribir una ETL en SQL de creación de variables agregadas del informacional de clientes
C. Unir en SQL datos históricos masivos de diferentes departamentos
D. Todos los casos anteriores son adecuados para Hive

Respuesta correcta: A

### Pregunta 4

Entre los servicios big data que ofrecen las plataformas de cloud computing estudiadas (eliija la respuesta correcta):
A. Todas las plataformas proporcionan Hive como servicio gestionado.
B. Todas las plataformas proporcionan un servicio de consultas OLAP (OnLine Analytical Processing, orientado a consultas batch) gestionado.
C. Todas las plataformas proporcionan únicamente servicios de consulta OLTP.
D. Ninguna de las anteriores.

Respuesta correcta: B

### Pregunta 5

En HDFS, ¿qué fallo es menos problemático?
A. La caída de un NameNode
B. La caída de un DataNode
C. La caída de todos los NameNodes
D. Todos los fallos son igual de problemáticos

Respuesta correcta: B

### Pregunta 6

¿Cuál de estas afirmaciones es cierta respecto a Spark Structured Streaming?
A. La escritura se realiza mediante spark.write
B. Se pueden aplicar las mismas acciones de un DataFrame batch
C. Se pueden aplicar las mismas transformaciones de un DataFrame
D. Las opciones B y C son correctas

Respuesta correcta: C

### Pregunta 7

Dado un grupo de consumidores de Kafka suscritos a un topic con 3 particiones, elija la respuesta correcta:
A. Si el grupo está compuesto por 2 consumidores, uno de las particiones se queda sin leer.
B. Si el grupo está compuesto por 4 consumidores, uno de ellos estará inactivo.
C. Si el grupo está compuesto por 6 consumidores, cada partición la leerán dos consumidores.
D. Ninguna de las respuestas anteriores es correcta.

Respuesta correcta: B

### Pregunta 8

Los servicios de almacenamiento proporcionados por las plataformas de cloud computing estudiadas (elija la respuesta correcta):
A. Ofrecen un servicio equivalente a un disco duro, con un almacenamiento limitado. Llegando a este límite, es necesario contratar un nuevo servicio de almacenamiento.
B. Ofrecen un servicio equivalente a un disco duro, pero con almacenamiento ilimitado, en el que se factura por tramos de 10GB o 20GB, dependiendo de la plataforma concreta.
C. Ofrecen un servicio equivalente a un disco duro, pero con almacenamiento ilimitado, en el que se factura según el tamaño de la iinformación almacenada en cada momento.
D. Ninguna de las anteriores.

Respuesta correcta: C

### Pregunta 9

La librería Structured Streaming de Spark:

A. Ofrece las mismas transformaciones y acciones que la API estructurada para procesado en bloque.
B. No ofrece acciones, solo transformaciones.
C. Ofrece una única acción y varias transformaciones equivalentes a la de la API estructurada para procesado en bloque.
D. No ofrece transformaciones ni acciones, solo transacciones.

Respuesta correcta: C

### Pregunta 10

En una plataforma de Cloud Computing podemos...
A. Utilizar herramientas de desarrollo de software ya instaladas, y esto se conoce como IaaS.
B. Utilizar directamente las máquinas, sin nada instalado, a lo cual se le llama PaaS.
C. Utilizar software para usuarios finales ya instalado y listo para usar, y esto se conoce como SaaS.
D. Ninguna de las respuestas anteriores es correcta.

Respuesta correcta: C

### Pregunta 11

En Spark, si no cacheamos un DataFrame que utilizaremos en varias operaciones independientes...
A. Podríamos tardar más tiempo del estrictamente necesario.
B. Podríamos obtener resultados incorrectos
C. Sería imposible reconstruir las particiones perdidas si falla un nodo
D. Todas las opciones anteriores son ciertas

Respuesta correcta: A

### Pregunta 12

La herramienta Dataproc de Google Cloud...
A. Permite desplegar al vuelo un clúster que trae instaladas herramientas big data como Spark, HDFS y Kafka.
B. Permite desplegar al vuelo una base de datos relacional de Google.
C. Permite descargar HDFS y Spark para instalarlos y usarlos en nuestro ordenador portátil doméstico.
D. Ninguna de las anteriores es cierta.

Respuesta correcta: A

### Pregunta 13

Uno de los principales problemas de los RDD es que...
A. Se ejecutan siempre en el proceso driver.
B. No permiten replicación de sus particiones.
C. Sólo pueden ser manejados desde el lenguaje Scala.
D. El programador debe conocer exactamente la estructura de los objetos que lo componen.

Respuesta correcta: D

### Pregunta 14

El módulo Spark MLlib permite:
A. Agrupar y calcular agregaciones por grupos en un DataFrame.
B. Entrenar algoritmos de Machine Learning distribuidos.
C. Preprocesamiento de variables orientado al entrenamiento posterior de un modelo.
D. Las respuestas B y C son ciertas.

Respuesta correcta: D

### Pregunta 15

Elija la respuesta INCORRECTA sobre Impala:
A. Está orientado a consultas interactivas.
B. Está orientado a consultas en bloque.
C. Realiza las consultas sobre su propia red de demonios.
D. Trabaja principalmente en memoria.

Respuesta correcta: B

## Hadoop Ensayo

Este bloque consta de 5 preguntas de respuesta abierta. En cada enunciado se indica el límite de extensión de la respuesta.

### Pregunta 16

Se dispone del histórico de calificaciones de todas las actividades de evaluación (los 10 tests de autoevaluación, las tres tareas entregables, y la calificación del examen final) de todos los alumnos de Ingeniería para el Procesado Masivo de Datos de los últimos 10 años. Cada año se llevan a cabo dos convocatorias, con una media de 150 alumnos en cada convocatoria. A la dirección de la Escuela le gustaría predecir la calificación que van a tener los alumnos en el examen final antes de llevar a cabo dicho examen, a partir de sus calificaciones de las actividades de evaluación continua. Razone y justifique en menos de 4 líneas (a) si Spark MLlib sería o no una buena elección, y en caso afirmativo, (b) para qué la utilizaría exactamente en este problema. No se puntuará el apartado (a) si no se explica una justificación. (Responder en 4 líneas)  

Posible respuesta: Spark MLlib no sería una buena opción para realizar la predicción de las calificaciones debido al volumen de datos no masivo (aproximadamente 5000). Spark MLlib es una herramienta para realizar preprocesamiento y predicciones pero de forma distribuida, para datos masivos.

### Pregunta 17

Imagine que usted tiene un perfil de desarrollador de software empresarial. Está diseñando una aplicación que, en un momento dado, requiere que la voz del usuario sea transcrita a texto. Elija uno de los proveedores cloud, e indique en menos de 4 líneas cómo podría ayudarle ese proveedor a resolver este problema concreto. (Responder en 4 líneas) 

Posible respuesta: Se podría usar Google Cloud para trabajar en un cluster Dataproc para Spark que nos facilite la creación del entorno y los nodos, en este entorno trabajaríamos con Kafka y Spark Streaming que nos permita el transporte de los datos con Kafka  y el análisis o clasificación de los valores de audio en texto.

### Pregunta 18

Explicar el concepto de shuffle de datos en un cluster de ordenadores. (Responder en 2 líneas)

Posible respuesta: Es un proceso de reorganización de los datos entre diferentes nodos del cluster, pasando los datos por disco duro del emisor y receptor. Se produce al ejecutar transformaciones como GroupBy, Join, …

### Pregunta 19

Explicar en menos de 5 líneas dos casos uso CONCRETOS de ajuste de un modelo predictivo (regresión o clasificación) de manera que en uno de ellos NO sea buena idea utilizar Spark MLlib y en el otro SÍ, indicando la justificación de dicha elección. Mencionar también en cada caso la temática de los datos, en pocas palabras. (Responder en 7 líneas)

Posible respuesta:

Regresion utilizando la prediccion de precios de automoviles  en tiempo real basandose en caracteristicas del automovil y las tendecias que rigen en el mercado,aquí es ideal SparkMLlib por su capacidad de procesar grandes volumenes de datos de forma rapida y distribuida. Clasificacion para la deteccion de fraudes de transacciones de criptomonedas analizando patrones de comportamiento del cliente y transacciones a lo largo del tiempo. Pero aquí no seria la mejor opcion si se requieren tecnicas de especializadas de sobremuestreo que no esten bien soportadas por SparkMlLib. 

**Caso 1 - Temática de datos: Datos pequeños y locales para regresión lineal simple.** Cuando se tiene un conjunto de datos pequeño y local que se ajusta bien a un modelo de regresión lineal simple, utilizar Spark MLlib podría resultar innecesario y complejo. El procesamiento distribuido de Spark no aportaría beneficios significativos en este escenario, y la simplicidad de herramientas 
locales como scikit-learn sería más apropiada. 

**Caso 2 - Temática de datos: Grandes conjuntos de datos para clasificación en tiempo real.** En el caso de tener grandes conjuntos de datos para clasificación en tiempo real, como el análisis de clics en una plataforma de comercio electrónico, Spark MLlib sería beneficioso. La capacidad de procesamiento distribuido de Spark permitiría manejar eficientemente grandes volúmenes de 
datos en tiempo real, agilizando el ajuste y despliegue del modelo de clasificación de manera escalable.

### Pregunta 20

¡Enhorabuena! Acaba de crear su propia empresa orientada al procesamiento de datos de marketing de empresas de comercio online. Actualmente su cartera tiene pocos clientes pero el volumen de datos que le solicitan analizar va aumentando, y según las previsiones del equipo financiero, la cantidad de empresas que solicitarán sus servicios dentro de aproximadamente un año multiplicará por 10 a las de su cartera actual. Aplicándolo a esta situación, explique, con UNA frase para cada apartado, por qué razones pueden ayudarle los proveedores de Cloud Computing (a) en el momento actual, y (b) dentro de un año. 

Posible respuesta: En el momento actual es ideal pues no necesitas un gran desembolso para comenzar con el negocio, ya que pagas por lo que usas. Para el año que viene, si se cumplen tus expectativas, puedes escalar fácilmente. Y, tanto si se cumplen como si no, seguirás pagando sólo por lo que uses. 

### Pregunta 21

Completar el siguiente fragmento de código Python, que utiliza el paquete pyspark.

```
flights_df = spark._____\
		  .option(_____, "true")\
                  .option(_____, "true")\
                  .csv("gs://contenedor/datos/flights.csv")
# Discretizar la columna dep_time en los intervalos [0, 900),  [900, 1800), [1800, 2400)
puntos_corte = [_________________________]
discretizador = _______________(splits=__________________,
                                inputCol=____________________,
                                outputCol=___________________)

# Codificar con one hot la columna creada en el discretizador
codificador = _______________(inputCol=_______________,
                              outputCol=_______________)

#  Colapsar en columna de vectores la columna codificada con one hot y la columna Distance
colapsador = _______________(inputCols=_______________,
                             outputCol=_______________)

# Modelo de regresión lineal sin entrenar, para predecir ArrDelay
lr = LinearRegression(featuresCol=_______________, 
                      labelCol=_______________)

# Crear una pieza que una todo y entrenarla. Cuidado al orden de los stages
pieza = _______________(stages=_______________)
pieza_entrenada = __________._____(flights_df)
```

Respuesta correcta:

```
flights_df = spark.read\
		  .option(head, "true")\
                  .option(inferSchema, "true")\
                  .csv("gs://contenedor/datos/flights.csv")
# Discretizar la columna dep_time en los intervalos [0, 900),  [900, 1800), [1800, 2400)
puntos_corte = [0, 900, 1800, 2400]
discretizador = Bucketizer(splits=puntos_corte,
                                inputCol="dep_time",
                                outputCol="dep_dis")

# Codificar con one hot la columna creada en el discretizador
codificador = OneHotEncoding(inputCol="dep_dis",
                              outputCol="dep_cod")

#  Colapsar en columna de vectores la columna codificada con one hot y la columna Distance
colapsador = VectorAssembler(inputCols=["dep_cod", "Distance"],
                             outputCol="features")

# Modelo de regresión lineal sin entrenar, para predecir ArrDelay
lr = LinearRegression(featuresCol="features", 
                      labelCol="ArrDelay")

# Crear una pieza que una todo y entrenarla. Cuidado al orden de los stages
pieza = Pipeline(stages=[discretizador, codificador, colapsador, lr])
pieza_entrenada = pieza.fit(flights_df)
```
