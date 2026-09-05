
# Examenes Test IPMD 2025 (con soluciones)

## Modelo A

1. Una desventaja importante de HDFS es que ... 
A. No permite almacenar un archivo de tamaño superior al de cualquier disco duro del cluster 
B. No permite recuperar los datos que hubiese en un datanode si ese nodo se quemase 
C. Es volátil, es decir, lo que almacenan los datanodes se pierde pasado un tiempo 
D. No permite operaciones de modificación de ficheros existentes

Respuesta correcta: D

2. ¿Cuál de las siguientes afirmaciones sobre Impala y Hive NO es cierta? 
A. Ambas herramientas ejecutan sobre Spark 
B. Ambas herramientas son compatibles con un driver ODBC para conectarnos a ellas 
C. Ambas herramientas admiten consultas en lenguaje SQL 
D. Ambas pueden consultar datos almacenados en HDFS

Respuesta correcta: A

3. En el contexto de MapReduce, la fase "reduce" se utiliza para: 
A. Dividir los datos en bloques 
B. Ordenar los datos alfabéticamente 
C. Agrupar y agregar datos por clave 
D. Transformar los datos en pares (clave, valor) 

Respuesta correcta: C

4. Cuando tenemos un DataFrame de Spark en la variable mi_df y ejecutamos mi_df.write.parquet("/tmp/datos.parquet") ... 
A. Spark crea en la carpeta /tmp de HDFS tantos ficheros Parquet como particiones tenga el DataFrame 
B. Spark crea en la carpeta /tmp de HDFS un fichero Parquet llamado datos.parquet cuyo tamaño es igual al total del DataFrame 
C. Spark crea una nueva carpeta llamada /tmp/datos.parquet y dentro de ella se crean tantos ficheros distintos como particiones tenga el DataFrame 
D. Spark crea en la carpeta /tmp de HDFS un único fichero Parquet llamado datos.parquet formado por tantos bloques de HDFS como particiones tuviera el DataFrame 

Respuesta correcta: C

5. Hemos montado el Data Lake de una gran cadena de hipermercados de alcance internacional, y queremos empezar a explorarlos y aplicar analítica descriptiva y predictiva con los datos históricos. ¿Cuál de las siguientes tecnologías probablemente NO vamos a necesitar? 
A. Apache Spark 
B. Apache Kafka 
C. Apache Hive 
D. Una herramienta de Business Intelligence 

Respuesta correcta: B

6. ¿Cuál de los siguientes casos de uso es POCO adecuado para HDFS? 
A. Almacenar información histórica de las pólizas de una compañía aseguradora desde su creación 
B. Migrar distintas bases de datos tradicionales de una empresa de telecomunicaciones para realizar cuadros de mando sobre esos datos 
C. Almacenar la información de las pólizas de una compañía aseguradora para ser consultada por las agencias cuando interactúan con los clientes 
D. Montar el lago de datos para efectuar la analítica sobre los clientes de una empresa de energía eléctrica 

Respuesta correcta: C

7. ¿Cuál de las siguientes situaciones no es habitual en Spark Structured Streaming? 
A. Entrenar un modelo predictivo en tiempo real 
B. Refrescar una agregación que estamos guardando en una tabla 
C. Comprobar y consolidar datos recibidos en tiempo real antes de guardarlos 
D. Todas las respuestas anteriores son habituales con Spark Structured Streaming

Respuesta correcta: A

8. ¿Cuál de las siguientes tecnologías NO es un Data warehouse? 
A. Redshift 
B. Elastic Map Reduce 
C. Synapse 
D. Big Query 

Respuesta correcta: B

9. ¿Qué caso de uso NO está indicado para Hive? 
A. Realizar una agregación en SQL sobre ficheros de la base de datos operacional (transaccional) de una empresa 
B. Escribir una ETL en SQL de creación de variables agregadas del informacional de clientes 
C. Unir en SQL datos históricos masivos de diferentes departamentos 
D. Todos los casos anteriores son adecuados para Hive 

Respuesta correcta: A

10. ¿Qué es la dependencia en las etapas de un pipeline? 
A. Los estimadores siempre deben colocarse antes que los transformadores 
B. Las columnas que una etapa necesita deben haberse generado en la etapa inmediatamente anterior 
C. Los transformadores deben colocarse antes que los estimadores 
D. Las columnas creadas por una etapa pueden ser utilizadas como entrada solo por etapa(s) poasterior(es) 

Respuesta correcta: D

11. ¿Cómo utilizaría Kafka un programador de Java? 
A. Importando la dependencia de Kafka para Java en su programa 
B. Instalando Spark e invocándolo desde Java 
C. Para utilizar Kafka es necesario hacerlo desde el lenguaje Python 
D. El programador no puede utilizar Kafka directamente sino que son las herramientas cloud quienes lo invocan 

Respuesta correcta: A

12. Si un productor en Kafka configura acks=all, ¿qué implica? 
A. Mayor latencia 
B. Mayor rendimiento 
C. Entrega más rápida de mensajes 
D. Mayor riesgo de pérdida de mensajes 

Respuesta correcta: A

13. ¿Cuál de estos servicios cumple la misma finalidad que el servicio Google Big Query? 
A. Dataproc 
B. Amazon EMR 
C. Amazon S3 
D. Amazon Redshift 

Respuesta correcta: D

14. ¿Cuál de las siguientes opciones no es correcta acerca del módulo Spark Streaming? 
A. La forma de procesar los datos es en microbatches 
B. Solo tiene API para RDDs que todavía no ha sido migrada a DataFrames 
C. Gracias a Structured Streaming se puede utilizar la API estructurada definida en Spark SQL 
D. La fuente de datos más habitual cuando usamos Spark Streaming es Kafka 

Respuesta correcta: B

15. En una plataforma de Cloud Computing podemos... 
A. Utilizar herramientas de desarrollo de software ya instaladas, y esto se conoce como IaaS 
B. Utilizar directamente las máquinas, sin nada instalado, a lo cual se le llama PaaS 
C. Utilizar software para usuarios finales ya instalado y listo para usar, y esto se conoce como SaaS 
D. Ninguna de las respuestas anteriores es correcta

Respuesta correcta: C

## Modelo B

1. En HDFS, ¿qué fallo es menos problemático? 
A. La caída de un NameNode 
B. La caída de un DataNode 
C. La caída de todos los NameNodes 
D. Todos los fallos son igual de problemáticos

Respuesta correcta: B

2. Elija la respuesta INCORRECTA sobre Impala: 
A. Está orientado a consultas interactivas. 
B. Está orientado a consultas en bloque. 
C. Realiza las consultas sobre su propia red de demonios. 
D. Trabaja principalmente en memoria. 

Respuesta correcta: B

3. En Spark, si no cacheamos un DataFrame que utilizaremos en varias operaciones independientes ... 
A. Podríamos tardar más tiempo del estrictamente necesario 
B. Podríamos obtener resultados incorrectos 
C. Sería imposible reconstruir las particiones perdidas si falla un nodo 
D. Todas las opciones anteriores son ciertas

Respuesta correcta: A

4. ¿Cuál de las siguientes afirmaciones acerca de Hive y BigQuery NO es cierta? 
A. Ambos son sistemas de Data Warehouse 
B. Ambos poseen su propio motor de ejecución y no necesitan una herramienta externa para ejecutar consultas 
C. Ambas son herramientas open-source 
D. Las opciones B y C son falsas 

Respuesta correcta: D

5. Uno de los principales problemas de los RDD es que... 
A. Se ejecutan siempre en el proceso driver 
B. No permiten replicación de sus particiones 
C. Sólo pueden ser manejados desde el lenguaje Scala 
D. El programador debe conocer exactamente la estructura de los objetos que lo componen 

Respuesta correcta: D

6. Para comunicar los servicios contratados (almacenamiento, computación, base de datos...) en una plataforma de cloud computing (elija la respuesta correcta): 
A. Todos los servicios existentes en una plataforma de cloud computing para todos los usuarios de la misma están comunicados entre sí automáticamente. 
B. No es posible comunicar servicios entre sí dentro de la plataforma de cloud computing, sino que es necesario crear una red externa para comunicarlos. 
C. Cada usuario de la plataforma de cloud computing puede crear únicamente una red virtual dentro de la plataforma para conectar todos los servicios que contrate. 
D. Ninguna de las anteriores.

Respuesta correcta: D

7. Cuál de las siguientes afirmaciones sobre los servicios de cloud computing es cierta: 
A. Están diseñadas explícitamente para resolver problemas de big data y machine learning. 
B. No son una buena elección para desarrollar aplicaciones móviles. 
C. Entre las aplicaciones que más usan servicios de cloud computing están las aplicaciones IoT (Internet of Things). 
D. Ninguna de las anteriores. 

Respuesta correcta: C

8. Cuando utilizamos herramientas de cloud computing de un proveedor, ... 
A. Los desarrolladores no pueden instalar tecnologías open-source si usan la infraestructura de ese proveedor 
B. Los desarrolladores pueden usar herramientas open-source para cualquier tarea 
C. Los desarrolladores tienen que usar los servicios PaaS de ese proveedor 
D. El desarrollo debe llevarlo a cabo un equipo de desarrolladores del proveedor 

Respuesta correcta: B

9. Se quiere ajustar un modelo predictivo de análisis de sentimiento a un conjunto masivo de textos, usando Spark MLlib. Antes de entrenar el algoritmo predictivo, es necesario pre-procesarlos (dividir en palabras, quitar palabras sin significado, y codificarlas como números). Algunas de estas operaciones son estimadores y otras son transformadores. ¿Cuál sería la manera correcta de proceder? 
A. Crear estimadores y transformadores independientes, haciendo fit o transform sobre cada uno según corresponda. 
B. Crear un pipeline sólo con los estimadores, ejecutar fit sobre el pipeline y después ejecutar transform sobre los transformadores,  
C. Crear un pipeline con todos los estimadores y transformadores necesarios, y ejecutar fit sobre el pipeline. 
D. Crear un pipeline sólo con los transformadores, ejecutar fit sobre el pipeline y después usar transform sobre los estimadores. 

Respuesta correcta: C

10. Se quiere desplegar un producto big data en una plataforma de cloud computing. Por requisitos del producto, se requiere tener el mayor control posible del servidor o servidores donde se despliegue dicho producto. ¿Qué solución de las disponibles elegiría? 
A. IaaS 
B. PaaS 
C. FaaS 
D. SaaS 

Respuesta correcta: A

11. ¿Cuál de las siguientes situaciones no es habitual en Spark Structured Streaming? 
A. Entrenar un modelo predictivo en tiempo real 
B. Refrescar una agregación que estamos guardando en una tabla 
C. Comprobar y consolidar datos recibidos en tiempo real antes de guardarlos 
D. Todas las respuestas anteriores son habituales con Spark Structured Streaming 

Respuesta correcta: A

12. Al hacer resultado_df = df.withColumn("c", F.lit(3))... 
A. Spark solo materializa df si lo habíamos marcado como cacheado antes de esta línea 
B. Spark no materializa el resultado por ser una transformación 
C. Spark materializa el resultado por ser una acción 
D. Spark materializa el resultado en el momento de hacer resultado_df.cache() 

Respuesta correcta: B

13. ¿Cuál es el servicio de Azure equivalente a Amazon S3? 
A. Azure Cognitive Services 
B. Azure DataLake Storage 
C. Azure Cosmos 
D. Azure SQL Database 

Respuesta correcta: B

14. ¿Qué implica una transformación narrow en Spark? 
A. Movimientos de datos entre nodos 
B. Uso intensivo de la memoria RAM 
C. Replicación de particiones 
D. Cada partición da lugar a otra en el mismo nodo 

Respuesta correcta: D

15. Si un productor en Kafka configura acks=all, ¿qué implica? 
A. Mayor latencia 
B. Mayor rendimiento 
C. Entrega más rápida de mensajes 
D. Mayor riesgo de pérdida de mensajes

Respuesta correcta: A

## Modelo D

1. Una desventaja importante de HDFS es que ... 
E. No permite almacenar un archivo de tamaño superior al de cualquier disco duro del cluster 
F. No permite recuperar los datos que hubiese en un datanode si ese nodo se quemase 
G. Es volátil, es decir, lo que almacenan los datanodes se pierde pasado un tiempo 
H. No permite operaciones de modificación de ficheros existentes

Respuesta correcta: H

2. Seleccione la respuesta correcta sobre los dataframes de Spark: 
E. Son una estructura de datos que envuelve un RDD de objetos tipo Row. 
F. Una ventaja sobre los RDD es que los dataframes no son inmutables. 
G. No es posible acceder al RDD envuelto por un dataframe. 
H. Al igual que los RDD, los dataframes están distribuidos en almacenamiento persistente de los nodos worker. 

Respuesta correcta: E

3. ¿Qué caso de uso NO está indicado para Hive? 
E. Realizar una agregación en SQL sobre ficheros de la base de datos operacional (transaccional) de una empresa 
F. Escribir una ETL en SQL de creación de variables agregadas del informacional de clientes 
G. Unir en SQL datos históricos masivos de diferentes departamentos 
H. Todos los casos anteriores son adecuados para Hive 

Respuesta correcta: E

4. ¿Qué es lo que está replicado en Kafka? 
E. Cada topic está replicado en varios productores 
F. Cada broker está replicado en varios consumidores 
G. Cada partición está replicada en varios brokers 
H. Cada productor está replicado dentro de varios topics 

Respuesta correcta: G

5. ¿Cómo consigue Kafka la escalabilidad? 
E. Gracias a que está soportado por HDFS el cual es intrínsecamente escalable 
F. Gracias a que utiliza Spark como motor de procesamiento, y Spark es escalable al distribuir el cómputo automáticamente 
G. Gracias a que las particiones de un topic están replicadas en varios brokers y esto permite adaptarnos a un incremento de productores o de consumidores 
H. Todas las respuestas anteriores son correctas 

Respuesta correcta: G

6. ¿Qué implica una transformación narrow en Spark? 
E. Movimientos de datos entre nodos 
F. Uso intensivo de la memoria RAM 
G. Replicación de particiones 
H. Cada partición da lugar a otra en el mismo nodo 

Respuesta correcta: H

7. Se quiere desplegar una base de datos SQL en una plataforma de cloud computing. El equipo de desarrolladores es experto en diseño y gestión de bases de datos SQL, pero no es experto en administración de sistemas. ¿Qué opción de las disponibles sería la más adecuada? 
E. Usar un servicios IaaS. 
F. Usar un servicio PaaS. 
G. Usar un servicio SaaS. 
H. Usar un servicio on-premises. 

Respuesta correcta: F

8. ¿Cuál es el propósito del DAG en Spark? 
E. Optimizar consultas SQL 
F. Mantener la trazabilidad y resiliencia 
G. Replicar particiones 
H. Ejecutar acciones inmediatamente 

Respuesta correcta: F

9. ¿Qué es un executor en Apache Spark? 
E. Un nodo del clúster donde se almacenan los datos 
F. Un nodo del clúster donde se procesan los datos 
G. Un proceso de la JVM que ejecuta tareas en un nodo del clúster 
H. Un conjunto de nodos que coordinan el procesamiento 

Respuesta correcta: G

10. Cuando tenemos un DataFrame de Spark en la variable mi_df y ejecutamos mi_df.write.parquet("/tmp/datos.parquet") ... 
E. Spark crea en la carpeta /tmp de HDFS tantos ficheros Parquet como particiones tenga el DataFrame 
F. Spark crea en la carpeta /tmp de HDFS un fichero Parquet llamado datos.parquet cuyo tamaño es igual al total del DataFrame 
G. Spark crea una nueva carpeta llamada /tmp/datos.parquet y dentro de ella se crean tantos ficheros distintos como particiones tenga el DataFrame 
H. Spark crea en la carpeta /tmp de HDFS un único fichero Parquet llamado datos.parquet formado por tantos bloques de HDFS como particiones tuviera el DataFrame 
 
Respuesta correcta: G
 
11. Completa la terna: Dataproc, Azure HD Insight, ... 
E. Amazon SageMaker 
F. Amazon S3 
G. Elastic Map Reduce 
H. Ninguna de las opciones anteriores es correcta 

Respuesta correcta: G

12. ¿Cuál de las siguientes situaciones no es habitual en Spark Structured Streaming? 
E. Entrenar un modelo predictivo en tiempo real 
F. Refrescar una agregación que estamos guardando en una tabla 
G. Comprobar y consolidar datos recibidos en tiempo real antes de guardarlos 
H. Todas las respuestas anteriores son habituales con Spark Structured Streaming

Respuesta correcta: E

13. ¿Qué es la dependencia en las etapas de un pipeline? 
E. Los estimadores siempre deben colocarse antes que los transformadores 
F. Las columnas que una etapa necesita deben haberse generado en la etapa inmediatamente anterior 
G. Los transformadores deben colocarse antes que los estimadores 
H. Las columnas creadas por una etapa pueden ser utilizadas como entrada solo por etapa(s) poasterior(es) 

Respuesta correcta: H

14. ¿Cuál de las siguientes tecnologías NO es un Data warehouse? 
E. Redshift 
F. Elastic Map Reduce 
G. Synapse 
H. Big Query 

Respuesta correcta: F

15. ¿Cómo almacena la información Kafka para ser consumida? 
I. En ficheros en formato binario 
J. En el metastore 
K. En HDFS 
L. Ninguna de las repsuestas anteriores es cierta

Respuesta correcta: A

## Modelo E

1. Los mensajes que una aplicación productora envía a Kafka (seleccione la respuesta correcta): 
I. Se almacenan en el clúster de Kafka de forma indefinida y sólo se pueden borrar de forma manual. 
J. Se almacenan en memoria del clúster de Kakfa hasta que los lee el primer consumidor, y una vez leído se borran de memoria. 
K. Se almacenan en almacenamiento persistente del clúster de Kafka hasta que los lee el primer consumidor, y una vez leído se eliminan. 
L. Se almacenan en el clúster de Kafka y se eliminan tras cierto tiempo en el clúster o cuando el volumen de mensajes alcanza cierto umbral, según configuración. 

Respuesta correcta: L

2. Cuando un consumidor lee mensajes de Kafka (seleccione la respuesta correcta): 
I. Lee los mensajes en orden dentro de cada partición. 
J. Lee los mensajes en orden dentro de cada topic. 
K. Lee los mensajes en orden dentro de cada bróker. 
L. Kafka no garantiza ningún tipo de orden al consumir los mensajes.

Respuesta correcta: I

3. ¿Qué implica una transformación narrow en Spark? 
I. Movimientos de datos entre nodos 
J. Uso intensivo de la memoria RAM 
K. Replicación de particiones 
L. Cada partición da lugar a otra en el mismo nodo 

Respuesta correcta: L

4. Se quiere desplegar un producto big data en una plataforma de cloud computing. Por requisitos del producto, se requiere tener el mayor control posible del servidor o servidores donde se despliegue dicho producto. ¿Qué solución de las disponibles elegiría? 
I. IaaS 
J. PaaS 
K. FaaS 
L. SaaS 

Respuesta correcta: I

5. Para utilizar una cola de Kafka desde el lenguaje de programación Java ... 
I. Basta descargar e importar la librería de Kafka para Java, y tener previamente Kafka instalado y corriendo en un cluster 
J. Es necesario tener instalado Spark en el mismo cluster además de Kafka 
K. Es necesario tener instalado HDFS en el mismo cluster además de Kafka 
L. No es posible utilizar Kafka desde Java; es necesario hacerlo desde Python 

Respuesta correcta: I
 
6. ¿Cuál de las siguientes tecnologías es más similar a BigQuery? 
I. Apache Hive 
J. Apache Kafka 
K. Apache Spark 
L. HDFS 

Respuesta correcta: I

7. En el contexto de MapReduce, la fase "reduce" se utiliza para: 
I. Dividir los datos en bloques 
J. Ordenar los datos alfabéticamente 
K. Agrupar y agregar datos por clave 
L. Transformar los datos en pares (clave, valor) 

Respuesta correcta: K

8. ¿Por qué actualmente no se utilizan los RDDs en Spark? 
I. Porque el código es menos intuitivo y más propenso a errores por parte del programador, además de no estar optimizados, a diferencia de los DataFrames 
J. Porque los RDDs escriben los resultados en disco el resultado intermedio de los cálculos 
K. Porque no están disponibles en Python (pyspark), sino sólo en lenguaje Scala 
L. Las respuestas A y B son correctas 

Respuesta correcta: L

9. ¿Cuál de las siguientes situaciones no es habitual en Spark Structured Streaming? 
I. Entrenar un modelo predictivo en tiempo real 
J. Refrescar una agregación que estamos guardando en una tabla 
K. Comprobar y consolidar datos recibidos en tiempo real antes de guardarlos 
L. Todas las respuestas anteriores son habituales con Spark Structured Streaming 

Respuesta correcta: I

10. ¿Cómo almacena la información Kafka para ser consumida? 
I. En ficheros en formato binario 
J. En el metastore 
K. En HDFS 
L. Ninguna de las repsuestas anteriores es cierta 

Respuesta correcta: I
 
11. ¿Cuál de las siguientes tecnologías NO es un Data warehouse? 
I. Redshift 
J. Elastic Map Reduce 
K. Synapse 
L. Big Query 

Respuesta correcta: J

12. Al hacer resultado_df = df.withColumn("c", F.lit(3))... 
I. Spark solo materializa df si lo habíamos marcado como cacheado antes de esta línea 
J. Spark no materializa el resultado por ser una transformación 
K. Spark materializa el resultado por ser una acción 
L. Spark materializa el resultado en el momento de hacer resultado_df.cache() 

Respuesta correcta: L

13. Entre los servicios big data que ofrecen las plataformas de cloud computing estudiadas (elija la respuesta correcta): 
I. Todas las plataformas proporcionan Hive como servicio gestionado. 
J. Todas las plataformas proporcionan un servicio de consultas OLAP (OnLine Analytical Processing, orientado a consultas batch) gestionado. 
K. Todas las plataformas proporcionan únicamente servicios de consulta OLTP. 
L. Ninguna de las anteriores. 

Respuesta correcta: J

14. ¿Cuál de los siguientes elementos NO forma parte de la arquitectura de Impala? 
I. Apache Spark 
J. impalad 
K. Conector ODBC 
L. catalogd 

Respuesta correcta: I

15. En el sistema de ficheros HDFS, cuando se solicita la escritura de un fichero: 
M. El namenode accede a los datanodes para escribir los bloques 
N. El namenode envía el contenido de los bloques del fichero a los datanodes 
O. El cliente envía el contenido de los bloques del fichero a namenode 
P. El cliente envía el contenido de los bloques del fichero a los datanodes 

Respuesta correcta: P

