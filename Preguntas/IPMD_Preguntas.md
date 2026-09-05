
# Preguntas de los exámenes

## Asignatura "Ingeniería para el Procesado Masivo de Datos"

### 2020

1. ¿Cuál de las siguientes afirmaciones es correcta sobre las distribuciones de Hadoop?
- A. Consiste en una sandbox que corre en un gestor de máquinas virtuales
- B. Consiste en una colección de software del ecosistema Hadoop con versiones interoperables y listas para usar
- C. Es un empaquetado de herramientas y software propietario, que se distribuye siempre bajo licencia de pago

2. En el sistema de ficheros HDFS, cuando se solicita la escritura de un fichero:
- A. El namenode envía el contenido de los bloques del fichero a los datanodes
- B. El cliente envía el contenido de los bloques del fichero a namenode
- C. El cliente envía el contenido de los bloques del fichero a los datanodes

3. ¿Cuál de estas afirmaciones sobre Apache Hive es cierta?
- A. Existen versiones libres y de pago
- B. Permite consultar archivos almacenados en HDFS utilizando lenguaje SQL
- C. Requiere poseer una base de datos relacional funcionando como respaldo
- D. Las opciones a y c son correctas

4. Las acciones de Spark
- A. Devuelven un valor.
- B. Devuelven una transformación.
- C. Devuelven un RDD.

5. ¿Cuál de las siguientes afirmaciones sobre la escritura de archivos en HDFS es cierta?
- A. Se divide en bloques y se replica siempre cada bloque 3 veces
- B. Se parte en bloques que por defecto son de 128 MB, aunque el tamaño de bloque es configurable
- C. Sólo podremos escribir si hay libres tantos datanodes como bloques ocupa el fichero

6. Cuando leemos un archivo de HDFS
- A. El cliente contacta con el namenode y luego con los datanodes concretos que le ha indicado el namenode, los cuales contienen los bloques de datos necesarios
- B. El cliente solicita los datos al namenode, el cual conoce la ubicación física y es quien le va enviando al cliente cada bloque de datos
- C. El cliente contacta con los namenodes federados y todos intervienen para servir el contenido del archivo

7. Para copiar el fichero "readme.txt" desde el sistema de archivos local a HDFS podemos usar:
- A. hadoop fs -cp readme.txt /ruta/destino/hdfs/readme.txt
- B. hadoop fs -copyFromLocal readme.txt /ruta/destino/hdfs/readme.txt
- C. hadoop fs -copyToLocal readme.txt /ruta/destino/hdfs/readme.txt
- D. Las opciones a y b son correctas

8. ¿Cuál de las siguientes afirmaciones es correcta?
- A. Spark es mejor que MapReduce debido a que evita en todo momento hacer shuffle de datos en el cluster
- B. MapReduce se adapta mejor que Spark a algoritmos iterativos, por ejemplo Machine learning
- C. Las dos opciones anteriores son falsas
- D. Las dos opciones anteriores son correctas

9. En el paradigma MapReduce, la etapa reduce recibe (sólo una es correcta):
- A. Una clave y una lista con todos los valores asociados a esa clave
- B. Un valor y una lista de todas las claves que comparten ese valor
- C. Solamente las tuplas que se han generado en la fase map de ese mismo nodo

10. Un RDD:
- A. Es una lista de datos que Spark procesa en un único nodo del clúster
- B. Es una lista de datos que Spark distribuye en el clúster para su procesado
- C. Sólo se puede crear a partir de datos de HDFS

### 2021 Modelo A

1. De los siguientes comandos de HDFS, ¿cuál permite listar los ficheros del directorio movies que cuelga directamente del directorio raíz?
- A. hdfs dfs -mkdir movies
- B. hdfs dfs -mkdir /movies
- C. hdfs dfs -ls movies
- D. hdfs dfs -ls /movies

2. El mecanismo de Federación de HDFS hace referencia a:
- A. Un procedimiento de securización de datos en HDFS
- B. Una arquitectura peculiar de HDFS donde no existen namenodes
- C. Un HDFS con varios namenodes que se encargan de porciones distintas del árbol de directorios
- D. Una manera de replicar bloques entre máquinas de diferentes racks

3. Seleccione la respuesta correcta sobre Spark:
- A. Utiliza unas transformaciones y acciones que son exactamente lo mismo que los mappers y reducers, respectivamente, de MapReduce.
- B. Es más flexible que MapReduce gracias a las transformaciones y acciones de que dispone.
- C. Es menos flexible que MapReduce por las limitaciones en el uso de transformaciones y acciones.
- D. Ninguna de las respuestas anteriores es correcta.

4. ¿Cuál de los siguientes representa un caso de uso ideal para Apache Hive?
- A. Un diseñador web que necesita conectarse a una base de datos documental como MongoDB
- B. Un analista con conocimientos de SQL que quiere consultar datos estructurados almacenados en HDFS
- C. Un programador con conocimientos de MapReduce que quiere consultar imágenes y vídeos
- D. Una persona de negocio con alto conocimiento de Excel que quiere consultar muy rápidamente datos existentes en una BBDD relacional como MySQL

5. Seleccione la respuesta INCORRECTA sobre los dataframes de Spark:
- A. Una estructura de datos que encpasula dentro un RDD de objetos tipo Row.
- B. Una tabla de datos imilar a la de una base de datos relacional pero distribuida en la memoria RAM de los executors.
- C. Un tipo especial de fichero manejado por Spark.
- D. Las respuestas A y B son correctas.

6. ¿Cómo consigue Kafka la escalabilidad?
- A. Gracias a que está soportado por HDFS el cual es intrínsecamente escalable
- B. Gracias a que utiliza Spark como motor de procesamiento, y Spark es escalable al distribuir el cómputo automáticamente
- C. Gracias a que las particiones de un topic están replicadas en varios brokers y esto permite adaptarnos a un incremento de productores o de consumidores
- D. Todas las respuestas anteriores son correctas

7. La filosofía que ha motivado los Pipelines de Spark MLlib es...
- A. Que los datos con los que se hacen predicciones siempre pasen por las mismas etapas que los datos de entrenamiento
- B. Optimizar el rendimiento de los algoritmos de Machine Learning
- C. Disminuir la cantidad de memoria RAM que consumen los algoritmos
- D. Ninguna de las respuestas anteriores es correcta

8. ¿Cómo efectúa Impala las consultas?
- A. Mediante un motor de ejecución configurable que puede ser Spark, MapReduce o Tez
- B. A través de sus propios procesos demonio creados en cada máquina del cluster
- C. A través de Apache Tez al tratarse de consultas SQL interactivas
- D. A través de Apache Spark ya que los cáclulos los efectúa en memoria

9. La librería Structured Streaming de Spark:
- A. Ofrece la mismas transformaciones y acciones que la API estructurada para procesado en bloque.
- B. No ofrece acciones, solo transformaciones.
- C. Ofrece una única acción y varias transformaciones equivalentes a la de la API estructurada para procesado en bloque.
- D. No ofrece transformaciones ni acciones, solo transacciones.

10. ¿Cuál de las siguientes afirmaciones sobre Kafka es cierta?
- A. Kafka utiliza Spark como motor de ejecución
- B. Un grupo de mensajes con la misma estructura se denomina broker
- C. Es una cola distribuida para paso de mensajes de la que las aplicaciones pueden leer o escribir
- D. Las opciones B y C son correctas

### 2021 Modelo B

1. Un topic de Kafka es...
- A. La unidad mínima que está replicada en todos los brokers
- B. Un grupo de mensajes que siguen la misma estructura y pueden interpretarse igual
- C. Una replicación de los mensajes en HDFS
- D. Ninguna de las respuestas anteriores es correcta

2. Para copiar el fichero "readme.txt" desde el sistema de archivos local a HDFS podemos usar:
- A. hdfs dfs -cp readme.txt /ruta/destino/hdfs/readme.txt
- B. hdfs dfs -copyFromLocal readme.txt /ruta/destino/hdfs/readme.txt
- C. hdfs dfs -copyToLocal readme.txt /ruta/destino/hdfs/readme.txt
- D. Las opciones a y b son correctas

3. En Impala, el proceso que lleva a cabo las consultas (las planifica, las distribuye a otras máquinas, lee y escribe datos, etc) es
- A. statestored
- B. stated
- C. catalogd
- D. impalad

4. ¿Cuál de las siguientes es la principal fortaleza de Spark?
- A. Evitar en todo momento el movimiento de datos entre máquinas: Spark nunca envía datos de un nodo a otro del cluster.
- B. Ser capaz de trabajar muy fácilmente con datos no estructurados, a diferencia de Hive
- C. Ser capaz de trabajar procesando datos almacenados en HDFS, a diferencia de MapReduce
- D. Ser capaz de trabajar en memoria principal

5. ¿Cuál de las siguientes afirmaciones sobre Kafka es cierta?
- A. Kafka utiliza Spark como motor de ejecución
- B. Un grupo de mensajes con la misma estructura se denomina broker
- C. Es una cola distribuida para paso de mensajes de la que las aplicaciones pueden leer o escribir
- D. Las opciones B y C son correctas

6. Para cargar datos en un dataframe de Spark, podemos:
- A. Pedir a Spark que infiera el esquema para que asigne tipos más específicos que String, si procede.
- B. No especificar esquema ni pedir a Spark que lo infiera, para obtener el tipo más adecuado para cada campo.
- C. No especificar esquema porque la inferencia de esquema que hace el propio Spark asigna el tipo correcto automáticamente sin coste de eficiencia.
- D. Especificar explícitamente y obligatoriamente el esquema para que Spark pueda cargar los datos.

7. ¿Cuál de estas afirmaciones sobre Apache Hive es cierta?
- A. Existen versiones libres y de pago
- B. Permite consultar archivos almacenados en HDFS utilizando lenguaje SQL
- C. Requiere poseer una base de datos relacional funcionando como respaldo
- D. Las opciones a y c son correctas

8. Un transformador en Spark MLlib es...
- A. Una pieza que requiere una o varias pasadas previas por los datos para transformarlos
- B. Una pieza que está configurada y lista para transformar un DataFrame que le pasemos
- C. Un DataFrame obtenido como resultado de una predicción
- D. Una secuencia de etapas (stages)

9. La redundancia en HDFS se consigue:
- A. Usando discos de almacenamiento externos al clúster.
- B. Copiando varias réplicas de los bloques de un fichero en el mismo nodo.
- C. Copiando varias réplicas de los bloques de un fichero en diferentes nodos.
- D. Copiando una réplica de los bloques de un fichero en el namenode, y otras de backup en los datanodes.

10. ¿Cuál de las siguientes opciones no es correcta acerca del módulo Spark Streaming?
- A. La forma de procesar los datos es en microbatches
- B. Solo tiene API para RDDs que todavía no ha sido migrada a DataFrames
- C. Gracias a Structured Streaming se puede utilizar la API estructurada definida en Spark SQL
- D. La fuente de datos más habitual cuando usamos Spark Streaming es Kafka

### 2022 Modelo A Ordinaria

1. En el sistema de ficheros HDFS, cuando se solicita la escritura de un fichero:
- A. El namenode accede a los datanodes para escribir los bloques
- B. El namenode envía el contenido de los bloques del fichero a los datanodes
- C. El cliente envía el contenido de los bloques del fichero a namenode
- D. El cliente envía el contenido de los bloques del fichero a los datanodes

2. La redundancia en HDFS se consigue:
- A. Usando discos de almacenamiento externos al clúster.
- B. Copiando varias réplicas de los bloques de un fichero en el mismo nodo.
- C. Copiando varias réplicas de los bloques de un fichero en diferentes nodos.
- D. Copiando una réplica de los bloques de un fichero en el namenode, y otras de backup en los datanodes.

3. Uno de los principales problemas de los RDD es que...
- A. Se ejecutan siempre en el proceso driver
- B. No permiten replicación de sus particiones
- C. Sólo pueden ser manejados desde el lenguaje Scala
- D. El programador debe conocer exactamente la estructura de los objetos que lo componen

4. Para cargar datos en un dataframe de Spark, podemos:
- A. Pedir a Spark que infiera el esquema para que asigne tipos más específicos que String si procede.
- B. No especificar esquema ni pedir a Spark que lo infiera, para obtener el tipo más adecuado para cada campo.
- C. No especificar esquema porque la inferencia de esquema que hace el propio Spark asigna el tipo correcto automáticamente sin coste de eficiencia.
- D. Especificar explícitamente y obligatoriamente el esquema para que Spark pueda cargar los datos.

5. En Impala, el proceso que lleva a cabo las consultas (las planifica, las distribuye a otras máquinas, lee y escribe datos, etc) es
- A. statestored
- B. stated
- C. catalogd
- D. impalad

6. ¿Qué componente NO forma parte de la arquitectura de Apache Hive?
- A. Un metastore.
- B. Un compilador.
- C. Un motor de procesamiento distribuido propio.
- D. Un servidor de peticiones.

7. Los mensajes que una aplicación productora envía a Kafka (seleccione la respuesta correcta):
- A. Se almacenan en el clúster de Kafka de forma indefinida y sólo se pueden borrar de forma manual.
- B. Se almacenan en memoria del clúster de Kakfa hasta que los lee el primer consumidor, y una vez leído se borran de memoria.
- C. Se almacenan en almacenamiento persistente del clúster de Kafka hasta que los lee el primer consumidor, y una vez leído se eliminan.
- D. Se almacenan en el clúster de Kafka y se eliminan tras cierto tiempo en el clúster o cuando el volumen de mensajes alcanza cierto umbral, según configuración.

8. ¿Cuál de las siguientes afirmaciones sobre Kafka es cierta?
- A. Kafka utiliza Spark como motor de ejecución
- B. Un grupo de mensajes con la misma estructura se denomina broker
- C. Es una cola distribuida para paso de mensajes de la que las aplicaciones pueden leer o escribir
- D. Las opciones B y C son correctas

9. ¿Qué afirmación sobre los metadatos de HDFS es cierta?
- A. Se almacenan en el metastore de Hive
- B. Se almacenan en el datanode federado
- C. Son datos acerca de la ubicación física de los bloques que forman cada fichero
- D. Sólo se consultan en caso de fallo del namenode

10. HDFS está optimizado para ficheros
- A. modificados frecuentemente
- B. de tamaño grande
- C. de tamaño mediano
- D. de tamaño pequeño

11. ¿Cuál de los siguientes elementos NO forma parte de la arquitectura de Impala?
- A. Apache Spark
- B. impalad
- C. Conector ODBC
- D. catalogd

12. ¿Cuál de los siguientes casos de uso es típico de Kafka?
- A. Una web envía constantemente información sobre clicks a Spark, que calcula resúmenes en tiempo real del comportamiento de los usuarios
- B. Un científico de datos utiliza el histórico de su empresa para entrenar un modelo predictivo
- C. Un analista de negocio lanza consultas SQL sobre datos masivos almacenados en un cluster
- D. Ninguno de los casos anteriores es habitual en Kafka

13. Cuando un consumidor lee mensajes de Kafka (seleccione la respuesta correcta):
- A. Lee los mensajes en orden dentro de cada partición.
- B. Lee los mensajes en orden dentro de cada topic.
- C. Lee los mensajes en orden dentro de cada bróker.
- D. Kafka no garantiza ningún tipo de orden al consumir los mensajes.

14. Un transformador en Spark MLlib es...
- A. Una pieza que requiere una o varias pasadas previas por los datos para transformarlos
- B. Una pieza que está configurada y lista para transformar un DataFrame que le pasemos
- C. Un DataFrame obtenido como resultado de una predicción
- D. Una secuencia de etapas (stages)

15. La pieza VectorAssembler de MLlib:
- A. Es un estimador para entrenar modelos vectoriales como RandomForest
- B. Es un estimador genérico de algoritmos distribuidos
- C. Es un transformador que crea una nueva columna de tipo vector fusionando columnas existentes
- D. Es un transformador que codifica los valores de una variable categórica

16. Entre los servicios big data que ofrecen las plataformas de cloud computing estudiadas (elija la respuesta correcta):
- A. Todas las plataformas proporcionan Hive como servicio gestionado.
- B. Todas las plataformas proporcionan un servicio de consultas OLAP (OnLine Analytical Processing, orientado a consultas batch) gestionado.
- C. Todas las plataformas proporcionan únicamente servicios de consulta OLTP.
- D. Ninguna de las anteriores.

17. En cualquiera de las plataformas de cloud computing estudiadas, los recursos de computación se distribuyen a lo largo de todo el mundo. Elija la respuesta correcta:
- A. Cualquiera de los servicios disponibles se ejecutan siempre en los recursos de computación más cercanos al desarrollador.
- B. Se deben escoger los recursos de computación más cercanos a la ubicación del desarrollador, ya que sólo son accesibles desde localizaciones cercanas.
- C. Es recomendable elegir recursos de computación cercanos al desarrollador de la aplicación desplegada.
- D. Es aconsejable elegir recursos de computación cercanos a los usuarios finales de la aplicación desplegada.

18. Se quiere desplegar un producto big data en una plataforma de cloud computing. Por requisitos del producto, se requiere tener el mayor control posible del servidor o servidores donde se despliegue dicho producto. ¿Qué solución de las disponibles elegiría?
- A. IaaS
- B. PaaS
- C. FaaS
- D. SaaS

19. La herramienta Dataproc de Google Cloud...
- A. Permite desplegar al vuelo un cluster que trae instaladas herramientas big data como Spark, HDFS y Kafka
- B. Permite desplegar al vuelo una base de datos relacional de Google
- C. Permite descargar HDFS y Spark para instalarlos y usarlos en nuestro ordenador portátil doméstico
- D. Ninguna de las respuestas anteriores es cierta

20. Para utilizar una cola de Kafka desde el lenguaje de programación Java ...
- A. Basta descargar e importar la librería de Kafka para Java, y tener previamente Kafka instalado y corriendo en un cluster
- B. Es necesario tener instalado Spark en el mismo cluster además de Kafka
- C. Es necesario tener instalado HDFS en el mismo cluster además de Kafka
- D. No es posible utilizar Kafka desde Java; es necesario hacerlo desde Python

### 2022 Modelo A Extraordinaria

1. El mecanismo de Federación de HDFS hace referencia a:
- A. Un procedimiento de securización de datos en HDFS
- B. Una arquitectura peculiar de HDFS donde no existen namenodes
- C. Un HDFS con varios namenodes que se encargan de porciones distintas del árbol de directorios
- D. Una manera de replicar bloques entre máquinas de diferentes racks

2. Cuando ejecutamos una acción sobre un DataFrame en Spark...
- A. Spark crea un job para llevar a cabo esa acción
- B. Cualquier job siempre tiene como mínimo dos stages puesto que siempre habrá que mover datos
- C. Para que todos los procesadores estén siempre ocupados en alguna tarea, lo idea es que el DataFrame tenga menos particiones que CPUs totales
- D. El job creado por Spark para realizar la acción nunca tiene más de una stage porque Spark nunca mueve datos entre nodos

3. De los siguientes comandos de HDFS, ¿cuál permite listar los ficheros del directorio movies que cuelga directamente del directorio raíz?
- A. hdfs dfs -mkdir movies
- B. hdfs dfs -mkdir /movies
- C. hdfs dfs -ls movies
- D. hdfs dfs -ls /movies

4. Un RDD:
- A. Es una lista de datos que Spark procesa en un único nodo del clúster
- B. Es una lista de datos que Spark distribuye en el clúster para su procesado
- C. Sólo se puede crear a partir de Kafka
- D. Sólo se puede crear a partir de datos de HDFS

5. ¿Cuál de las siguientes afirmaciones NO es cierta respecto a los Estimadores de Spark MLlib?
- A. Siempre son modelos de Machine Learning, antes de ser entrenados
- B. Siempre poseen un método fit
- C. El método fit aplicado sobre ellos devuelve un Transformador
- D. Pueden formar parte de un Pipeline

6. Para usar la librería de procesado de flujos de datos de Spark:
- A. Se recomienda usar DStreams, basados en RDDs.
- B. Se recomienda usar streaming dataframes.
- C. Se recomienda usar RDDs con funciones específicas de streaming.
- D. Se recomienda usar Pipelines.

7. Elija la respuesta INCORRECTA sobre Impala:
- A. Está orientado a consultas interactivas.
- B. Está orientado a consultas en bloque.
- C. Realiza las consultas sobre su propia red de demonios.
- D. Trabaja principalmente en memoria.

8. ¿Qué afirmación sobre los metadatos de HDFS es cierta?
- A. Se almacenan en el metastore de Hive
- B. Se almacenan en el datanode federado
- C. Son datos acerca de la ubicación física de los bloques que forman cada fichero
- D. Sólo se consultan en caso de fallo del namenode

9. ¿Cuál de las siguientes afirmaciones sobre Impala y Hive NO es cierta?
- A. Ambas herramientas ejecutan sobre Spark
- B. Ambas herramientas son compatibles con un driver ODBC para conectarnos a ellas
- C. Ambas herramientas admiten consultas en lenguaje SQL
- D. Ambas pueden consultar datos almacenados en HDFS

10. ¿Cuál de los siguientes representa un caso de uso ideal para Apache Hive?
- A. Un diseñador web que necesita conectarse a una base de datos documental como MongoDB
- B. Un analista con conocimientos de SQL que quiere consultar datos estructurados almacenados en HDFS
- C. Un programador con conocimientos de MapReduce que quiere consultar imágenes y vídeos
- D. Una persona de negocio con alto conocimiento de Excel que quiere consultar muy rápidamente datos existentes en una BBDD relacional como MySQL

11. Seleccione la respuesta INCORRECTA sobre Apache Hive:
- A. Permite realizar consultas SQL sobre grandes conjuntos de datos distribuidos.
- B. Es una base de datos distribuida en un clúster Hadoop.
- C. Está indicado principalmente para pocesado OLAP (en bloque).
- D. Aplica el paradigma schema-on-read.

12. ¿Cuál de los siguientes casos de uso es típico de Kafka?
- A. Una web envía constantemente información sobre clicks a Spark, que calcula resúmenes en tiempo real del comportamiento de los usuarios
- B. Un científico de datos utiliza el histórico de su empresa para entrenar un modelo predictivo
- C. Un analista de negocio lanza consultas SQL sobre datos masivos almacenados en un cluster
- D. Ninguno de los casos anteriores es habitual en Kafka

13. Cuando un consumidor lee mensajes de Kafka (seleccione la respuesta correcta):
- A. Lee los mensajes en orden dentro de cada partición.
- B. Lee los mensajes en orden dentro de cada topic.
- C. Lee los mensajes en orden dentro de cada bróker.
- D. Kafka no garantiza ningún tipo de orden al consumir los mensajes.

14. ¿Cómo se relacionan Apache Spark y Apache Kafka?
- A. Spark puede leer desde y escribir en Kafka datos en tiempo real
- B. Spark puede guardar los DataFrames como tablas en el almacén de metadatos (metastore) de Kafka
- C. Kafka sólo puede funcionar en un cluster de ordenadores donde ya esté instalado Spark
- D. Spark sólo puede funcionar en un cluster de ordenadores donde ya esté instalado Kafka

15. Durante el procesamiento de datos con Spark, si un nodo falla o cae:
- A. Spark lo gestiona automáticamente y recalcula los datos necesarios en otra máquina gracias al DAG
- B. El usuario debe hacer el código robusto para detectarlo y recuperarse
- C. No es necesario recalcular porque Spark mantiene cada partición de los RDD replicada en varias máquinas
- D. El usuario debe indicar en su código una función de callback que Spark invocará en caso de caída de algún nodo

16. ¿Cómo efectúa Impala las consultas?
- A. Mediante un motor de ejecución configurable que puede ser Spark, MapReduce o Tez
- B. A través de sus propios procesos demonio creados en cada máquina del cluster
- C. A través de Apache Tez al tratarse de consultas SQL interactivas
- D. A través de Apache Spark ya que los cáclulos los efectúa en memoria

17. La filosofía que ha motivado los Pipelines de Spark MLlib es...
- A. Que los datos con los que se hacen predicciones siempre pasen por las mismas etapas que los datos de entrenamiento
- B. Optimizar el rendimiento de los algoritmos de Machine Learning
- C. Disminuir la cantidad de memoria RAM que consumen los algoritmos
- D. Ninguna de las respuestas anteriores es correcta

18. Se quiere utilizar la plataforma Google Cloud para desplegar un clúster en el que se ejecuten trabajos Spark para procesado en bloque de grandes cantidades de datos. Elija la respuesta correcta:
- A. Sólo es posible conseguir el objetivo desplegando un clúster mediante el servicio Dataproc
- B. La única forma de desplegar dicho clúster es usando varias instancias de Google Compute Engine y configurarlas manualmente para crear el clúster Spark.
- C. No es posible desplegar un clúster Spark en Google Cloud.
- D. Ninguna de las anteriores.

19. Si nos fijamos en los tres grandes proveedores de servicios de Cloud Computing en la actualidad...
- A. Cada proveedor permite desplegar exclusivamente instancias de bases de datos relacionales propietarias, de ese proveedor
- B. Sólo permiten desplegar bases de datos relacionales que sean open source, como MySQL, PostgreSQL, etc
- C. Los proveedores cloud no incluyen entre sus servicios el despliegue de bases de datos relacionales
- D. Ninguna de las opciones anteriores es cierta

20. Completa la siguiente frase: - Cuando creamos una aplicación en un notebook con Pyspark, el kernel del notebook tiene el rol de .... (1), y el procesamiento distribuido de los datos se lleva a cabo en los ... (2) que se crean en los ... (3) del cluster.
- A. (1) broker, (2) executors, (3) nodos
- B. (1) driver, (2) brokers, (3) nodos
- C. (1) broker, (2) nodos, (3) workers
- D. (1) driver, (2) executors, (3) nodos

### 2022 Modelo B Ordinaria

1. Para copiar el fichero "readme.txt" desde el sistema de archivos local a HDFS podemos usar:
- A. hdfs dfs -cp readme.txt /ruta/destino/hdfs/readme.txt
- B. hdfs dfs -copyFromLocal readme.txt /ruta/destino/hdfs/readme.txt
- C. hdfs dfs -copyToLocal readme.txt /ruta/destino/hdfs/readme.txt
- D. Las opciones a y b son correctas

2. El mecanismo de Federación de HDFS hace referencia a:
- A. Un procedimiento de securización de datos en HDFS
- B. Una arquitectura peculiar de HDFS donde no existen namenodes
- C. Un HDFS con varios namenodes que se encargan de porciones distintas del árbol de directorios
- D. Una manera de replicar bloques entre máquinas de diferentes racks

3. ¿Cuál de las siguientes es la principal fortaleza de Spark?
- A. Evitar en todo momento el movimiento de datos entre máquinas: Spark nunca envía datos de un nodo a otro del cluster.
- B. Ser capaz de trabajar muy fácilmente con datos no estructurados, a diferencia de Hive
- C. Ser capaz de trabajar procesando datos almacenados en HDFS, a diferencia de MapReduce
- D. Ser capaz de trabajar en memoria principal

4. Seleccione la respuesta INCORRECTA sobre los dataframes de Spark:
- A. Una estructura de datos que encpasula dentro un RDD de objetos tipo Row.
- B. Una tabla de datos imilar a la de una base de datos relacional pero distribuida en la memoria RAM de los executors.
- C. Un tipo especial de fichero manejado por Spark.
- D. Las respuestas A y B son correctas.

5. La librería Structured Streaming de Spark:
- A. Ofrece la mismas transformaciones y acciones que la API estructurada para procesado en bloque.
- B. No ofrece acciones, solo transformaciones.
- C. Ofrece una única acción y varias transformaciones equivalentes a la de la API estructurada para procesado en bloque.
- D. No ofrece transformaciones ni acciones, solo transacciones.

6. ¿Cuál de estas afirmaciones sobre Apache Hive es cierta?
- A. Existen versiones libres y de pago
- B. Permite consultar archivos almacenados en HDFS utilizando lenguaje SQL
- C. Requiere poseer una base de datos relacional funcionando como respaldo
- D. Las opciones a y c son correctas

7. ¿Cuál de los siguientes términos es un demonio utilizado por Impala?
- A. impalad
- B. catalogd
- C. queryd
- D. Las respuestas A y B son correctas

8. ¿Cuál de las siguientes afirmaciones sobre Kafka es cierta?
- A. Kafka utiliza Spark como motor de ejecución
- B. Un grupo de mensajes con la misma estructura se denomina broker
- C. Es una cola distribuida para paso de mensajes de la que las aplicaciones pueden leer o escribir
- D. Las opciones B y C son correctas

9. Un topic de Kafka es...
- A. La unidad mínima que está replicada en todos los brokers
- B. Un grupo de mensajes que siguen la misma estructura y pueden interpretarse igual
- C. Una replicación de los mensajes en HDFS
- D. Ninguna de las respuestas anteriores es correcta

10. ¿Cómo se relacionan Apache Spark y Apache Kafka?
- A. Spark puede leer desde y escribir en Kafka datos en tiempo real
- B. Spark puede guardar los DataFrames como tablas en el almacén de metadatos (metastore) de Kafka
- C. Kafka sólo puede funcionar en un cluster de ordenadores donde ya esté instalado Spark
- D. Spark sólo puede funcionar en un cluster de ordenadores donde ya esté instalado Kafka

### 2022 Modelo C Ordinaria

1. De los siguientes comandos de HDFS, ¿cuál permite listar los ficheros del directorio movies que cuelga directamente del directorio raíz?
- A. hdfs dfs -mkdir movies
- B. hdfs dfs -mkdir /movies
- C. hdfs dfs -ls movies
- D. hdfs dfs -ls /movies

2. ¿Qué componente de HDFS puede ser un punto único de fallo (SPOF)?
- A. Datanode
- B. Namenode
- C. Filenode
- D. Ninguna de las respuestas anteriores es correcta

3. Seleccione la respuesta correcta sobre Spark:
- A. Utiliza unas transformaciones y acciones que son exactamente lo mismo que los mappers y reducers, respectivamente, de MapReduce.
- B. Es más flexible que MapReduce gracias a las transformaciones y acciones de que dispone.
- C. Es menos flexible que MapReduce por las limitaciones en el uso de transformaciones y acciones.
- D. Ninguna de las respuestas anteriores es correcta.

4. Se precisa hacer un procesado de datos con Spark. Señale la respuesta correcta:
- A. Es mejor usar la API de RDDs, porque el motor Catalyst puede aplicar optimizaciones a los mismos.
- B. Es mejor usar la API estructurada, porque sin tener en cuenta el motor Catalyst, el plan de ejecución que crea Spark para la API estructurada es el óptimo.
- C. Los desarrolladores de Spark recomiendan usar la API estructurada porque permiten optimizar operaciones con el motor Catalyst.
- D. Es mejor usar consultas SQL desde la función sql de la SparkSession, porque el plan de ejecución resultante es más eficiente que usando las funciones de la API estructurada (filter, where, alias...).

5. Elija la respuesta INCORRECTA sobre Impala:
- A. Está orientado a consultas interactivas.
- B. Está orientado a consultas en bloque.
- C. Realiza las consultas sobre su propia red de demonios.
- D. Trabaja principalmente en memoria.

6. En Spark, si no cacheamos un DataFrame que utilizaremos en varias operaciones independientes ...
- A. Podríamos tardar más tiempo del estrictamente necesario
- B. Podríamos obtener resultados incorrectos
- C. Sería imposible reconstruir las particiones perdidas si falla un nodo
- D. Todas las opciones anteriores son ciertas

7. La filosofía que ha motivado los Pipelines de Spark MLlib es...
- A. Que los datos con los que se hacen predicciones siempre pasen por las mismas etapas que los datos de entrenamiento
- B. Optimizar el rendimiento de los algoritmos de Machine Learning
- C. Disminuir la cantidad de memoria RAM que consumen los algoritmos
- D. Ninguna de las respuestas anteriores es correcta

8. ¿Cómo efectúa Impala las consultas?
- A. Mediante un motor de ejecución configurable que puede ser Spark, MapReduce o Tez
- B. A través de sus propios procesos demonio creados en cada máquina del cluster
- C. A través de Apache Tez al tratarse de consultas SQL interactivas
- D. A través de Apache Spark ya que los cáclulos los efectúa en memoria

9. Dado un grupo de consumidores de Kafka suscritos a un topic con 3 particiones, elija la respuesta correcta:
- A. Si el grupo está compuesto por 2 consumidores, uno de las particiones se queda sin leer.
- B. Si el grupo está compuesto por 4 consumidores, uno de ellos estará inactivo.
- C. Si el grupo está compuesto por 6 consumidores, cada partición la leerán dos consumidores.
- D. Ninguna de las respuestas anteriores es correcta.

10. Seleccione la respuesta correcta sobre Spark:
- A. Utiliza unas transformaciones y acciones que son exactamente lo mismo que los mappers y reducers, respectivamente, de MapReduce.
- B. Es más flexible que MapReduce gracias a las transformaciones y acciones de que dispone.
- C. Es menos flexible que MapReduce por las limitaciones en el uso de transformaciones y acciones.
- D. Ninguna de las respuestas anteriores es correcta.

11. ¿Cómo consigue Kafka la escalabilidad?
- A. Gracias a que está soportado por HDFS el cual es intrínsecamente escalable
- B. Gracias a que utiliza Spark como motor de procesamiento, y Spark es escalable al distribuir el cómputo automáticamente
- C. Gracias a que las particiones de un topic están replicadas en varios brokers y esto permite adaptarnos a un incremento de productores o de consumidores
- D. Todas las respuestas anteriores son correctas

12. ¿Cuál de los siguientes representa un caso de uso ideal para Apache Hive?
- A. Un diseñador web que necesita conectarse a una base de datos documental como MongoDB
- B. Un analista con conocimientos de SQL que quiere consultar datos estructurados almacenados en HDFS
- C. Un programador con conocimientos de MapReduce que quiere consultar imágenes y vídeos
- D. Una persona de negocio con alto conocimiento de Excel que quiere consultar muy rápidamente datos existentes en una BBDD relacional como MySQL

13. Un DataFrame en Spark es...
- A. Una estructura de datos que encapsula dentro un RDD de objetos Row
- B. Una tabla de datos similar a la de una BD relacional pero distribuida en la memoria RAM de los executors
- C. Un tipo especial de fichero manejado por Spark
- D. Las respuestas A y B son ciertas

14. ¿Cuál de las siguientes afirmaciones es correcta?
- A. Spark nunca requiere movimiento de datos entre nodos, a diferencia de MapReduce
- B. Spark resulta más intuitivo y fácil de aprender que el paradigma MapReduce
- C. Spark no permite procesar datos en tiempo real, a diferencia de MapReduce
- D. Ninguna de las respuestas anteriores es correcta

15. Durante el procesamiento de datos en Spark, si un nodo falla:
- A. Spark lo gestiona automáticamente
- B. Hay que gestionarlo en el código de procesamiento de datos
- C. Se pierden los datos procesados

16. El proyecto Hive
- A. Es una base de datos
- B. Sirve para hacer consultas SQL
- C. No forma parte de la distribución de Cloudera
- D. Es equivalente a MapR

17. ¿Cuál de las siguientes afirmaciones sobre Impala y Hive NO es cierta?
- A. Ambas herramientas ejecutan sobre Spark
- B. Ambas herramientas son compatibles con un driver ODBC para conectarnos a ellas
- C. Ambas herramientas admiten consultas en lenguaje SQL
- D. Ambas pueden consultar datos almacenados en HDFS

18. Para comunicar los servicios contratados (almacenamiento, computación, base de datos...) en una plataforma de cloud computing (elija la respuesta correcta):
- A. Todos los servicios existentes en una plataforma de cloud computing para todos los usuarios de la misma están comunicados entre sí automáticamente.
- B. No es posible comunicar servicios entre sí dentro de la plataforma de cloud computing, sino que es necesario crear una red externa para comunicarlos.
- C. Cada usuario de la plataforma de cloud computing puede crear únicamente una red virtual dentro de la plataforma para conectar todos los servicios que contrate.
- D. Ninguna de las anteriores.

19. Cuál de las siguientes afirmaciones sobre los servicios de cloud computing es cierta:
- A. Están diseñadas explícitamente para resolver problemas de big data y machine learning.
- B. No son una buena elección para desarrollar aplicaciones móviles.
- C. Entre las aplicaciones que más usan servicios de cloud computing están las aplicaciones IoT (Internet of Things).
- D. Ninguna de las anteriores.

20. Si nos fijamos en los tres grandes proveedores de servicios de Cloud Computing en la actualidad...
- A. Cada proveedor permite desplegar exclusivamente instancias de bases de datos relacionales propietarias, de ese proveedor
- B. Sólo permiten desplegar bases de datos relacionales que sean open source, como MySQL, PostgreSQL, etc
- C. Los proveedores cloud no incluyen entre sus servicios el despliegue de bases de datos relacionales
- D. Ninguna de las opciones anteriores es cierta

### 2022 Modelo C Extraordinaria

1. De los siguientes comandos de HDFS, ¿cuál permite listar los ficheros del directorio movies que cuelga directamente del directorio raíz?
- A. hdfs dfs -mkdir movies
- B. hdfs dfs -mkdir /movies
- C. hdfs dfs -ls movies
- D. hdfs dfs -ls /movies

2. ¿Qué componente de HDFS puede ser un punto único de fallo (SPOF)?
- A. Datanode
- B. Namenode
- C. Filenode
- D. Ninguna de las respuestas anteriores es correcta

3. Seleccione la respuesta correcta sobre Spark:
- A. Utiliza unas transformaciones y acciones que son exactamente lo mismo que los mappers y reducers, respectivamente, de MapReduce.
- B. Es más flexible que MapReduce gracias a las transformaciones y acciones de que dispone.
- C. Es menos flexible que MapReduce por las limitaciones en el uso de transformaciones y acciones.
- D. Ninguna de las respuestas anteriores es correcta.

4. Se precisa hacer un procesado de datos con Spark. Señale la respuesta correcta:
- A. Es mejor usar la API de RDDs, porque el motor Catalyst puede aplicar optimizaciones a los mismos.
- B. Es mejor usar la API estructurada, porque sin tener en cuenta el motor Catalyst, el plan de ejecución que crea Spark para la API estructurada es el óptimo.
- C. Los desarrolladores de Spark recomiendan usar la API estructurada porque permiten optimizar operaciones con el motor Catalyst.
- D. Es mejor usar consultas SQL desde la función sql de la SparkSession, porque el plan de ejecución resultante es más eficiente que usando las funciones de la API estructurada (filter, where, alias...).

5. Elija la respuesta INCORRECTA sobre Impala:
- A. Está orientado a consultas interactivas.
- B. Está orientado a consultas en bloque.
- C. Realiza las consultas sobre su propia red de demonios.
- D. Trabaja principalmente en memoria.

6. En Spark, si no cacheamos un DataFrame que utilizaremos en varias operaciones independientes ...
- A. Podríamos tardar más tiempo del estrictamente necesario
- B. Podríamos obtener resultados incorrectos
- C. Sería imposible reconstruir las particiones perdidas si falla un nodo
- D. Todas las opciones anteriores son ciertas

7. La filosofía que ha motivado los Pipelines de Spark MLlib es...
- A. Que los datos con los que se hacen predicciones siempre pasen por las mismas etapas que los datos de entrenamiento
- B. Optimizar el rendimiento de los algoritmos de Machine Learning
- C. Disminuir la cantidad de memoria RAM que consumen los algoritmos
- D. Ninguna de las respuestas anteriores es correcta

8. ¿Cómo efectúa Impala las consultas?
- A. Mediante un motor de ejecución configurable que puede ser Spark, MapReduce o Tez
- B. A través de sus propios procesos demonio creados en cada máquina del cluster
- C. A través de Apache Tez al tratarse de consultas SQL interactivas
- D. A través de Apache Spark ya que los cáclulos los efectúa en memoria

9. Dado un grupo de consumidores de Kafka suscritos a un topic con 3 particiones, elija la respuesta correcta:
- A. Si el grupo está compuesto por 2 consumidores, uno de las particiones se queda sin leer.
- B. Si el grupo está compuesto por 4 consumidores, uno de ellos estará inactivo.
- C. Si el grupo está compuesto por 6 consumidores, cada partición la leerán dos consumidores.
- D. Ninguna de las respuestas anteriores es correcta.

10. ¿Cuál de las siguientes afirmaciones acerca de Hive y BigQuery NO es cierta?
- A. Ambos son sistemas de Data Warehouse
- B. Ambos poseen su propio motor de ejecución y no necesitan una herramienta externa para ejecutar consultas
- C. Ambas son herramientas open-source
- D. Las opciones B y C son falsas

11. Para comunicar los servicios contratados (almacenamiento, computación, base de datos...) en una plataforma de cloud computing (elija la respuesta correcta):
- A. Todos los servicios existentes en una plataforma de cloud computing para todos los usuarios de la misma están comunicados entre sí automáticamente.
- B. No es posible comunicar servicios entre sí dentro de la plataforma de cloud computing, sino que es necesario crear una red externa para comunicarlos.
- C. Cada usuario de la plataforma de cloud computing puede crear únicamente una red virtual dentro de la plataforma para conectar todos los servicios que contrate.
- D. Ninguna de las anteriores.

12. Seleccione la respuesta correcta sobre Spark:
- A. Utiliza unas transformaciones y acciones que son exactamente lo mismo que los mappers y reducers, respectivamente, de MapReduce.
- B. Es más flexible que MapReduce gracias a las transformaciones y acciones de que dispone.
- C. Es menos flexible que MapReduce por las limitaciones en el uso de transformaciones y acciones.
- D. Ninguna de las respuestas anteriores es correcta.

13. ¿Cómo consigue Kafka la escalabilidad?
- A. Gracias a que está soportado por HDFS el cual es intrínsecamente escalable
- B. Gracias a que utiliza Spark como motor de procesamiento, y Spark es escalable al distribuir el cómputo automáticamente
- C. Gracias a que las particiones de un topic están replicadas en varios brokers y esto permite adaptarnos a un incremento de productores o de consumidores
- D. Todas las respuestas anteriores son correctas

14. Un DataFrame en Spark es...
- A. Una estructura de datos que encapsula dentro un RDD de objetos Row
- B. Una tabla de datos similar a la de una BD relacional pero distribuida en la memoria RAM de los executors
- C. Un tipo especial de fichero manejado por Spark
- D. Las respuestas A y B son ciertas

15. ¿Cuál de las siguientes afirmaciones es correcta?
- A. Spark nunca requiere movimiento de datos entre nodos, a diferencia de MapReduce
- B. Spark resulta más intuitivo y fácil de aprender que el paradigma MapReduce
- C. Spark no permite procesar datos en tiempo real, a diferencia de MapReduce
- D. Ninguna de las respuestas anteriores es correcta

16. ¿Cuál de las siguientes afirmaciones sobre Impala y Hive NO es cierta?
- A. Ambas herramientas ejecutan sobre Spark
- B. Ambas herramientas son compatibles con un driver ODBC para conectarnos a ellas
- C. Ambas herramientas admiten consultas en lenguaje SQL
- D. Ambas pueden consultar datos almacenados en HDFS

17. Cuál de las siguientes afirmaciones sobre los servicios de cloud computing es cierta:
- A. Están diseñadas explícitamente para resolver problemas de big data y machine learning.
- B. No son una buena elección para desarrollar aplicaciones móviles.
- C. Entre las aplicaciones que más usan servicios de cloud computing están las aplicaciones IoT (Internet of Things).
- D. Ninguna de las anteriores.

18. Si nos fijamos en los tres grandes proveedores de servicios de Cloud Computing en la actualidad...
- A. Cada proveedor permite desplegar exclusivamente instancias de bases de datos relacionales propietarias, de ese proveedor
- B. Sólo permiten desplegar bases de datos relacionales que sean open source, como MySQL, PostgreSQL, etc
- C. Los proveedores cloud no incluyen entre sus servicios el despliegue de bases de datos relacionales
- D. Ninguna de las opciones anteriores es cierta

19. Cuando utilizamos herramientas de cloud computing de un proveedor, ...
- A. Los desarrolladores no pueden instalar tecnologías open-source si usan la infraestructura de ese proveedor
- B. Los desarrolladores pueden usar herramientas open-source para cualquier tarea
- C. Los desarrolladores tienen que usar los servicios PaaS de ese proveedor
- D. El desarrollo debe llevarlo a cabo un equipo de desarrolladores del proveedor

20. En una tabla manejada de Hive ...
- A. El borrado de la tabla implica el borrado de los datos
- B. El borrado de la tabla no afecta a los datos, que permanecerán en la misma ubicación
- C. Al ser manejada por Hive, las herramientas de BI no pueden acceder a esos datos
- D. Ninguna de las opciones anteriores es correcta

### 2022 Modelo D

1. Para copiar el fichero "readme.txt" desde el sistema de archivos local a HDFS podemos usar:
- A. hdfs dfs -cp readme.txt /ruta/destino/hdfs/readme.txt
- B. hdfs dfs -copyFromLocal readme.txt /ruta/destino/hdfs/readme.txt
- C. hdfs dfs -copyToLocal readme.txt /ruta/destino/hdfs/readme.txt
- D. Las opciones a y b son correctas

2. Una desventaja importante de HDFS es que ...
- A. No permite almacenar un archivo de tamaño superior al de cualquier disco duro del cluster
- B. No permite recuperar los datos que hubiese en un datanode si ese nodo se quemase
- C. Es volátil, es decir, lo que almacenan los datanodes se pierde pasado un tiempo
- D. No permite operaciones de modificación de ficheros existentes

3. ¿Cuál de las siguientes es la principal fortaleza de Spark?
- A. Evitar en todo momento el movimiento de datos entre máquinas: Spark nunca envía datos de un nodo a otro del cluster.
- B. Ser capaz de trabajar muy fácilmente con datos no estructurados, a diferencia de Hive
- C. Ser capaz de trabajar procesando datos almacenados en HDFS, a diferencia de MapReduce
- D. Ser capaz de trabajar en memoria principal

4. ¿Cuál de las siguientes afirmaciones NO es cierta respecto a los Estimadores de Spark MLlib?
- A. Siempre son modelos de Machine Learning, antes de ser entrenados
- B. Siempre poseen un método fit
- C. El método fit aplicado sobre ellos devuelve un Transformador
- D. Pueden formar parte de un Pipeline

5. Seleccione la respuesta INCORRECTA sobre los dataframes de Spark:
- A. Una estructura de datos que encpasula dentro un RDD de objetos tipo Row.
- B. Una tabla de datos imilar a la de una base de datos relacional pero distribuida en la memoria RAM de los executors.
- C. Un tipo especial de fichero manejado por Spark.
- D. Las respuestas A y B son correctas.

6. Cuando ejecutamos una acción sobre un DataFrame en Spark...
- A. Spark crea un job para llevar a cabo esa acción
- B. Cualquier job siempre tiene como mínimo dos stages puesto que siempre habrá que mover datos
- C. Para que todos los procesadores estén siempre ocupados en alguna tarea, lo idea es que el DataFrame tenga menos particiones que CPUs totales
- D. El job creado por Spark para realizar la acción nunca tiene más de una stage porque Spark nunca mueve datos entre nodos

7. ¿Cuál de estas afirmaciones sobre Apache Hive es cierta?
- A. Existen versiones libres y de pago
- B. Permite consultar archivos almacenados en HDFS utilizando lenguaje SQL
- C. Requiere poseer una base de datos relacional funcionando como respaldo
- D. Las opciones a y c son correctas

8. ¿Cuál de los siguientes términos es un demonio utilizado por Impala?
- A. impalad
- B. catalogd
- C. queryd
- D. Las respuestas A y B son correctas

9. ¿Cuál de las siguientes afirmaciones sobre Kafka es cierta?
- A. Kafka utiliza Spark como motor de ejecución
- B. Un grupo de mensajes con la misma estructura se denomina broker
- C. Es una cola distribuida para paso de mensajes de la que las aplicaciones pueden leer o escribir
- D. Las opciones B y C son correctas

10. Un topic de Kafka es...
- A. La unidad mínima que está replicada en todos los brokers
- B. Un grupo de mensajes que siguen la misma estructura y pueden interpretarse igual
- C. Una replicación de los mensajes en HDFS
- D. Ninguna de las respuestas anteriores es correcta

11. ¿Cuál de las siguientes opciones no es correcta acerca del módulo Spark Streaming?
- A. La forma de procesar los datos es en microbatches
- B. Solo tiene API para RDDs que todavía no ha sido migrada a DataFrames
- C. Gracias a Structured Streaming se puede utilizar la API estructurada definida en Spark SQL
- D. La fuente de datos más habitual cuando usamos Spark Streaming es Kafka

12. Las acciones de Spark
- A. No devuelven nada
- B. Devuelven un valor.
- C. Devuelven una transformación.
- D. Devuelven un RDD.

13. ¿Cómo efectúa Impala las consultas?
- A. Mediante un motor de ejecución configurable que puede ser Spark, MapReduce o Tez
- B. A través de sus propios procesos demonio creados en cada máquina del cluster
- C. A través de Apache Tez al tratarse de consultas SQL interactivas
- D. A través de Apache Spark ya que los cáclulos los efectúa en memoria

14. ¿Cuál de las siguientes afirmaciones sobre Impala y Hive NO es cierta?
- A. Ambas herramientas ejecutan sobre Spark
- B. Ambas herramientas son compatibles con un driver ODBC para conectarnos a ellas
- C. Ambas herramientas admiten consultas en lenguaje SQL
- D. Ambas pueden consultar datos almacenados en HDFS

15. ¿Cómo se relacionan Apache Spark y Apache Kafka?
- A. Spark puede leer desde y escribir en Kafka datos en tiempo real
- B. Spark puede guardar los DataFrames como tablas en el almacén de metadatos (metastore) de Kafka
- C. Kafka sólo puede funcionar en un cluster de ordenadores donde ya esté instalado Spark
- D. Spark sólo puede funcionar en un cluster de ordenadores donde ya esté instalado Kafka

16. ¿Qué fallo en HDFS es menos problemático?
- A. La caída de un namenode
- B. La caída de un datanode
- C. La caída de un datanode federado
- D. La caída de un executor

17. Las tecnologías de cloud computing permiten a un usuario:
- A. Especificar el servidor (máquina física) concreto donde se ejecutará su software.
- B. Especificar la configuración necesaria del servidor donde se ejecutará su software.
- C. Ejecutar su software en la configuración de servidor que obligatoriamente le asigne la plataforma.
- D. Ninguna de las anteriores.

18. En una plataforma de Cloud Computing podemos...
- A. Utilizar herramientas de desarrollo de software ya instaladas, y esto se conoce como IaaS
- B. Utilizar directamente las máquinas, sin nada instalado, a lo cual se le llama PaaS
- C. Utilizar software para usuarios finales ya instalado y listo para usar, y esto se conoce como SaaS
- D. Ninguna de las respuestas anteriores es correcta

19. ¿Cuál de los siguientes servicios de Cloud Computing NO proporciona una base de datos relacional?
- A. Azure SQL Database
- B. Amazon Relational Database Service (RDS)
- C. Azure Databricks
- D. Google Cloud SQL

20. Completa la siguiente frase: - Cuando creamos una aplicación en un notebook con Pyspark, el kernel del notebook tiene el rol de .... (1), y el procesamiento distribuido de los datos se lleva a cabo en los ... (2) que se crean en los ... (3) del cluster.
- A. (1) broker, (2) executors, (3) nodos
- B. (1) driver, (2) brokers, (3) nodos
- C. (1) broker, (2) nodos, (3) workers
- D. (1) driver, (2) executors, (3) nodos

### 2023 Modelo A Ordinaria

1. En el sistema de ficheros HDFS, cuando se solicita la escritura de un fichero:
- A. El namenode accede a los datanodes para escribir los bloques
- B. El namenode envía el contenido de los bloques del fichero a los datanodes
- C. El cliente envía el contenido de los bloques del fichero a namenode
- D. El cliente envía el contenido de los bloques del fichero a los datanodes

2. La redundancia en HDFS se consigue:
- A. Usando discos de almacenamiento externos al clúster.
- B. Copiando varias réplicas de los bloques de un fichero en el mismo nodo.
- C. Copiando varias réplicas de los bloques de un fichero en diferentes nodos.
- D. Copiando una réplica de los bloques de un fichero en el namenode, y otras de backup en los datanodes.

3. Para cargar datos en un dataframe de Spark, podemos:
- A. Pedir a Spark que infiera el esquema para que asigne tipos más específicos que String, si procede.
- B. No especificar esquema ni pedir a Spark que lo infiera, para obtener el tipo más adecuado para cada campo.
- C. No especificar esquema porque la inferencia de esquema que hace el propio Spark asigna el tipo correcto automáticamente sin coste de eficiencia.
- D. Especificar explícitamente y obligatoriamente el esquema para que Spark pueda cargar los datos.

4. En Impala, el proceso que lleva a cabo las consultas (las planifica, las distribuye a otras máquinas, lee y escribe datos, etc) es
- A. statestored
- B. stated
- C. catalogd
- D. impalad

5. Los mensajes que una aplicación productora envía a Kafka (seleccione la respuesta correcta):
- A. Se almacenan en el clúster de Kafka de forma indefinida y sólo se pueden borrar de forma manual.
- B. Se almacenan en memoria del clúster de Kakfa hasta que los lee el primer consumidor, y una vez leído se borran de memoria.
- C. Se almacenan en almacenamiento persistente del clúster de Kafka hasta que los lee el primer consumidor, y una vez leído se eliminan.
- D. Se almacenan en el clúster de Kafka y se eliminan tras cierto tiempo en el clúster o cuando el volumen de mensajes alcanza cierto umbral, según configuración.

6. ¿Cuál de las siguientes afirmaciones sobre Kafka es cierta?
- A. Kafka utiliza Spark como motor de ejecución
- B. Un grupo de mensajes con la misma estructura se denomina broker
- C. Es una cola distribuida para paso de mensajes de la que las aplicaciones pueden leer o escribir
- D. Las opciones B y C son correctas

7. ¿Qué afirmación sobre los metadatos de HDFS es cierta?
- A. Se almacenan en el metastore de Hive
- B. Se almacenan en el datanode federado
- C. Son datos acerca de la ubicación física de los bloques que forman cada fichero
- D. Sólo se consultan en caso de fallo del namenode

8. HDFS está optimizado para ficheros
- A. modificados frecuentemente
- B. de tamaño grande
- C. de tamaño mediano
- D. de tamaño pequeño

9. ¿Cuál de los siguientes casos de uso es típico de Kafka?
- A. Una web envía constantemente información sobre clicks a Spark, que calcula resúmenes en tiempo real del comportamiento de los usuarios
- B. Un científico de datos utiliza el histórico de su empresa para entrenar un modelo predictivo
- C. Un analista de negocio lanza consultas SQL sobre datos masivos almacenados en un cluster
- D. Ninguno de los casos anteriores es habitual en Kafka

10. Cuando un consumidor lee mensajes de Kafka (seleccione la respuesta correcta):
- A. Lee los mensajes en orden dentro de cada partición.
- B. Lee los mensajes en orden dentro de cada topic.
- C. Lee los mensajes en orden dentro de cada bróker.
- D. Kafka no garantiza ningún tipo de orden al consumir los mensajes.

11. La pieza VectorAssembler de MLlib:
- A. Es un estimador para entrenar modelos vectoriales como RandomForest
- B. Es un estimador genérico de algoritmos distribuidos
- C. Es un transformador que crea una nueva columna de tipo vector fusionando columnas existentes
- D. Es un transformador que codifica los valores de una variable categórica

12. Entre los servicios big data que ofrecen las plataformas de cloud computing estudiadas (elija la respuesta correcta):
- A. Todas las plataformas proporcionan Hive como servicio gestionado.
- B. Todas las plataformas proporcionan un servicio de consultas OLAP (OnLine Analytical Processing, orientado a consultas batch) gestionado.
- C. Todas las plataformas proporcionan únicamente servicios de consulta OLTP.
- D. Ninguna de las anteriores.

13. En cualquiera de las plataformas de cloud computing estudiadas, los recursos de computación se distribuyen a lo largo de todo el mundo. Elija la respuesta correcta:
- A. Cualquiera de los servicios disponibles se ejecutan siempre en los recursos de computación más cercanos al desarrollador.
- B. Se deben escoger los recursos de computación más cercanos a la ubicación del desarrollador, ya que sólo son accesibles desde localizaciones cercanas.
- C. Es recomendable elegir recursos de computación cercanos al desarrollador de la aplicación desplegada.
- D. Es aconsejable elegir recursos de computación cercanos a los usuarios finales de la aplicación desplegada.

14. Se quiere desplegar un producto big data en una plataforma de cloud computing. Por requisitos del producto, se requiere tener el mayor control posible del servidor o servidores donde se despliegue dicho producto. ¿Qué solución de las disponibles elegiría?
- A. IaaS
- B. PaaS
- C. FaaS
- D. SaaS

15. La herramienta Dataproc de Google Cloud...
- A. Permite desplegar al vuelo un cluster que trae instaladas herramientas big data como Spark, HDFS y Kafka
- B. Permite desplegar al vuelo una base de datos relacional de Google
- C. Permite descargar HDFS y Spark para instalarlos y usarlos en nuestro ordenador portátil doméstico
- D. Ninguna de las respuestas anteriores es cierta

16. Para utilizar una cola de Kafka desde el lenguaje de programación Java ...
- A. Basta descargar e importar la librería de Kafka para Java, y tener previamente Kafka instalado y corriendo en un cluster
- B. Es necesario tener instalado Spark en el mismo cluster además de Kafka
- C. Es necesario tener instalado HDFS en el mismo cluster además de Kafka
- D. No es posible utilizar Kafka desde Java; es necesario hacerlo desde Python

17. ¿Cuál de las siguientes tecnologías es más similar a BigQuery?
- A. Apache Hive
- B. Apache Kafka
- C. Apache Spark
- D. HDFS

18. ¿Por qué actualmente no se utilizan los RDDs en Spark?
- A. Porque el código es menos intuitivo y más propenso a errores por parte del programador, además de no estar optimizados, a diferencia de los DataFrames
- B. Porque los RDDs escriben los resultados en disco el resultado intermedio de los cálculos
- C. Porque no están disponibles en Python (pyspark), sino sólo en lenguaje Scala
- D. Las respuestas A y B son correctas

19. ¿Cuál es la mejor opción si queremos consultar mediante SQL un fichero masivo que ya existe y está almacenado en HDFS?
- A. Crear un transformer de MLlib para transformar la consulta SQL en trabajos distribuidos de Spark.
- B. Crear una tabla manejada de Hive para poder consultar el fichero de forma optimizada.
- C. Crear un cluster de Kafka para consultar los datos del fichero en tiempo real mediante SQL.
- D. Crear una tabla externa de Hive apuntando a la ubicación del fichero.

20. Cuando tenemos un DataFrame de Spark en la variable mi_df y ejecutamos mi_df.write.parquet("/tmp/datos.parquet") ...
- A. Spark crea en la carpeta /tmp de HDFS tantos ficheros Parquet como particiones tenga el DataFrame
- B. Spark crea en la carpeta /tmp de HDFS un fichero Parquet llamado datos.parquet cuyo tamaño es igual al total del DataFrame
- C. Spark crea una nueva carpeta llamada /tmp/datos.parquet y dentro de ella se crean tantos ficheros distintos como particiones tenga el DataFrame
- D. Spark crea en la carpeta /tmp de HDFS un único fichero Parquet llamado datos.parquet formado por tantos bloques de HDFS como particiones tuviera el DataFrame

### 2023 Modelo A Extraordinaria

1. Cuando ejecutamos una acción sobre un DataFrame en Spark...
- A. Spark crea un job para llevar a cabo esa acción
- B. Cualquier job siempre tiene como mínimo dos stages puesto que siempre habrá que mover datos
- C. Para que todos los procesadores estén siempre ocupados en alguna tarea, lo idea es que el DataFrame tenga menos particiones que CPUs totales
- D. El job creado por Spark para realizar la acción nunca tiene más de una stage porque Spark nunca mueve datos entre nodos

2. ¿Cuál de las siguientes afirmaciones NO es cierta respecto a los Estimadores de Spark MLlib?
- A. Siempre son modelos de Machine Learning, antes de ser entrenados
- B. Siempre poseen un método fit
- C. El método fit aplicado sobre ellos devuelve un Transformador
- D. Pueden formar parte de un Pipeline

3. Para usar la librería de procesado de flujos de datos de Spark:
- A. Se recomienda usar DStreams, basados en RDDs.
- B. Se recomienda usar streaming dataframes.
- C. Se recomienda usar RDDs con funciones específicas de streaming.
- D. Se recomienda usar Pipelines.

4. Elija la respuesta INCORRECTA sobre Impala:
- A. Está orientado a consultas interactivas.
- B. Está orientado a consultas en bloque.
- C. Realiza las consultas sobre su propia red de demonios.
- D. Trabaja principalmente en memoria.

5. ¿Qué afirmación sobre los metadatos de HDFS es cierta?
- A. Se almacenan en el metastore de Hive
- B. Se almacenan en el datanode federado
- C. Son datos acerca de la ubicación física de los bloques que forman cada fichero
- D. Sólo se consultan en caso de fallo del namenode

6. ¿Cuál de las siguientes afirmaciones sobre Impala y Hive NO es cierta?
- A. Ambas herramientas ejecutan sobre Spark
- B. Ambas herramientas son compatibles con un driver ODBC para conectarnos a ellas
- C. Ambas herramientas admiten consultas en lenguaje SQL
- D. Ambas pueden consultar datos almacenados en HDFS

7. Seleccione la respuesta INCORRECTA sobre Apache Hive:
- A. Permite realizar consultas SQL sobre grandes conjuntos de datos distribuidos.
- B. Es una base de datos distribuida en un clúster Hadoop.
- C. Está indicado principalmente para pocesado OLAP (en bloque).
- D. Es una tecnología de código abierto

8. ¿Cuál de los siguientes casos de uso es típico de Kafka?
- A. Una web envía constantemente información sobre clicks a Spark, que calcula resúmenes en tiempo real del comportamiento de los usuarios
- B. Un científico de datos utiliza el histórico de su empresa para entrenar un modelo predictivo
- C. Un analista de negocio lanza consultas SQL sobre datos masivos almacenados en un cluster
- D. Ninguno de los casos anteriores es habitual en Kafka

9. Cuando un consumidor lee mensajes de Kafka (seleccione la respuesta correcta):
- A. Lee los mensajes en orden dentro de cada partición.
- B. Lee los mensajes en orden dentro de cada topic.
- C. Lee los mensajes en orden dentro de cada bróker.
- D. Kafka no garantiza ningún tipo de orden al consumir los mensajes.

10. ¿Cómo se relacionan Apache Spark y Apache Kafka?
- A. Spark puede leer desde y escribir en Kafka datos en tiempo real
- B. Spark puede guardar los DataFrames como tablas en el almacén de metadatos (metastore) de Kafka
- C. Kafka sólo puede funcionar en un cluster de ordenadores donde ya esté instalado Spark
- D. Spark sólo puede funcionar en un cluster de ordenadores donde ya esté instalado Kafka

11. Durante el procesamiento de datos con Spark, si un nodo falla o cae:
- A. Spark lo gestiona automáticamente y recalcula los datos necesarios en otra máquina gracias al DAG
- B. El usuario debe hacer el código robusto para detectarlo y recuperarse
- C. No es necesario recalcular porque Spark mantiene cada partición de los RDD replicada en varias máquinas
- D. El usuario debe indicar en su código una función de callback que Spark invocará en caso de caída de algún nodo

12. ¿Cómo efectúa Impala las consultas?
- A. Mediante un motor de ejecución configurable que puede ser Spark, MapReduce o Tez
- B. A través de sus propios procesos demonio creados en cada máquina del cluster
- C. A través de Apache Tez al tratarse de consultas SQL interactivas
- D. A través de Apache Spark ya que los cáclulos los efectúa en memoria

13. La filosofía que ha motivado los Pipelines de Spark MLlib es...
- A. Que los datos con los que se hacen predicciones siempre pasen por las mismas etapas que los datos de entrenamiento
- B. Optimizar el rendimiento de los algoritmos de Machine Learning
- C. Disminuir la cantidad de memoria RAM que consumen los algoritmos
- D. Ninguna de las respuestas anteriores es correcta

14. Se quiere utilizar la plataforma Google Cloud para desplegar un clúster en el que se ejecuten trabajos Spark para procesado en bloque de grandes cantidades de datos. Elija la respuesta correcta:
- A. Sólo es posible conseguir el objetivo desplegando un clúster mediante el servicio Dataproc
- B. La única forma de desplegar dicho clúster es usando varias instancias de Google Compute Engine y configurarlas manualmente para crear el clúster Spark.
- C. No es posible desplegar un clúster Spark en Google Cloud.
- D. Ninguna de las anteriores.

15. Si nos fijamos en los tres grandes proveedores de servicios de Cloud Computing en la actualidad...
- A. Cada proveedor permite desplegar exclusivamente instancias de bases de datos relacionales propietarias, de ese proveedor
- B. Sólo permiten desplegar bases de datos relacionales que sean open source, como MySQL, PostgreSQL, etc
- C. Los proveedores cloud no incluyen entre sus servicios el despliegue de bases de datos relacionales
- D. Ninguna de las opciones anteriores es cierta

16. Completa la siguiente frase: - Cuando creamos una aplicación en un notebook con Pyspark, el kernel del notebook tiene el rol de .... (1), y el procesamiento distribuido de los datos se lleva a cabo en los ... (2) que se crean en los ... (3) del cluster.
- A. (1) broker, (2) executors, (3) nodos
- B. (1) driver, (2) brokers, (3) nodos
- C. (1) broker, (2) nodos, (3) workers
- D. (1) driver, (2) executors, (3) nodos

17. ¿Por qué actualmente no se utilizan los RDDs en Spark?
- A. Porque el código es menos intuitivo y más propenso a errores por parte del programador, además de no estar optimizados, a diferencia de los DataFrames
- B. Porque los RDDs escriben los resultados en disco el resultado intermedio de los cálculos
- C. Porque no están disponibles en Python (pyspark), sino sólo en lenguaje Scala
- D. Las respuestas A y B son correctas

18. Si la variable datos_df almacena un DataFrame de Spark, ¿qué ocurre cuando hacemos datos_df.cache() ?
- A. Spark materializa el DataFrame en ese momento
- B. Spark escribe el DataFrame en disco
- C. Spark libera el contenido del DataFrame de la memoria
- D. Spark marca el DataFrame para que no se libere cuando sea materializado

19. ¿Cuál de los siguientes casos de uso es POCO adecuado para HDFS?
- A. Almacenar información histórica de las pólizas de una compañía aseguradora desde su creación
- B. Migrar distintas bases de datos tradicionales de una empresa de telecomunicaciones para realizar cuadros de mando sobre esos datos
- C. Almacenar la información de las pólizas de una compañía aseguradora para ser consultada por las agencias cuando interactúan con los clientes
- D. Montar el lago de datos para efectuar la analítica sobre los clientes de una empresa de energía eléctrica

20. Hemos montado el Data Lake de una gran cadena de hipermercados de alcance internacional, y queremos empezar a explorarlos y aplicar analítica descriptiva y predictiva con los datos históricos. ¿Cuál de las siguientes tecnologías probablemente NO vamos a necesitar?
- A. Apache Spark
- B. Apache Kafka
- C. Apache Hive
- D. Una herramienta de Business Intelligence

### 2023 Modelo B Ordinaria

1. Una desventaja importante de HDFS es que ...
- A. No permite almacenar un archivo de tamaño superior al de cualquier disco duro del cluster
- B. No permite recuperar los datos que hubiese en un datanode si ese nodo se quemase
- C. Es volátil, es decir, lo que almacenan los datanodes se pierde pasado un tiempo
- D. No permite operaciones de modificación de ficheros existentes

2. ¿Cuál de las siguientes afirmaciones NO es cierta respecto a los Estimadores de Spark MLlib?
- A. Siempre son modelos de Machine Learning, antes de ser entrenados
- B. Siempre poseen un método fit
- C. El método fit aplicado sobre ellos devuelve un Transformador
- D. Pueden formar parte de un Pipeline

3. Seleccione la respuesta INCORRECTA sobre los dataframes de Spark:
- A. Una estructura de datos que encpasula dentro un RDD de objetos tipo Row.
- B. Una tabla de datos similar a la de una base de datos relacional pero distribuida en la memoria RAM de los executors.
- C. Un tipo especial de fichero manejado por Spark.
- D. Las respuestas A y B son correctas.

4. Cuando ejecutamos una acción sobre un DataFrame en Spark...
- A. Spark crea un job para llevar a cabo esa acción
- B. Cualquier job siempre tiene como mínimo dos stages puesto que siempre habrá que mover datos
- C. Para que todos los procesadores estén siempre ocupados en alguna tarea, lo idea es que el DataFrame tenga menos particiones que CPUs totales
- D. El job creado por Spark para realizar la acción nunca tiene más de una stage porque Spark nunca mueve datos entre nodos

5. ¿Cuál de estas afirmaciones sobre Apache Hive es cierta?
- A. Existen versiones libres y de pago
- B. Permite consultar archivos almacenados en HDFS utilizando lenguaje SQL
- C. Requiere poseer una base de datos relacional funcionando como respaldo
- D. Las opciones a y c son correctas

6. ¿Cuál de los siguientes términos es un demonio utilizado por Impala?
- A. impalad
- B. catalogd
- C. queryd
- D. Las respuestas A y B son correctas

7. ¿Cuál de las siguientes afirmaciones sobre Kafka es cierta?
- A. Kafka utiliza Spark como motor de ejecución
- B. Un grupo de mensajes con la misma estructura se denomina broker
- C. Es una cola distribuida para paso de mensajes de la que las aplicaciones pueden leer o escribir
- D. Las opciones B y C son correctas

8. Un topic de Kafka es...
- A. La unidad mínima que está replicada en todos los brokers
- B. Un grupo de mensajes que siguen la misma estructura y pueden interpretarse igual
- C. Una replicación de los mensajes en HDFS
- D. Ninguna de las respuestas anteriores es correcta

9. ¿Cuál de las siguientes opciones no es correcta acerca del módulo Spark Streaming?
- A. La forma de procesar los datos es en microbatches
- B. Solo tiene API para RDDs que todavía no ha sido migrada a DataFrames
- C. Gracias a Structured Streaming se puede utilizar la API estructurada definida en Spark SQL
- D. La fuente de datos más habitual cuando usamos Spark Streaming es Kafka

10. ¿Cómo efectúa Impala las consultas?
- A. Mediante un motor de ejecución configurable que puede ser Spark, MapReduce o Tez
- B. A través de sus propios procesos demonio creados en cada máquina del cluster
- C. A través de Apache Tez al tratarse de consultas SQL interactivas
- D. A través de Apache Spark ya que los cáclulos los efectúa en memoria

11. ¿Cuál de las siguientes afirmaciones sobre Impala y Hive NO es cierta?
- A. Ambas herramientas ejecutan sobre Spark
- B. Ambas herramientas son compatibles con un driver ODBC para conectarnos a ellas
- C. Ambas herramientas admiten consultas en lenguaje SQL
- D. Ambas pueden consultar datos almacenados en HDFS

12. ¿Cómo se relacionan Apache Spark y Apache Kafka?
- A. Spark puede leer desde y escribir en Kafka datos en tiempo real
- B. Spark puede guardar los DataFrames como tablas en el almacén de metadatos (metastore) de Kafka
- C. Kafka sólo puede funcionar en un cluster de ordenadores donde ya esté instalado Spark
- D. Spark sólo puede funcionar en un cluster de ordenadores donde ya esté instalado Kafka

13. ¿Qué fallo en HDFS es menos problemático?
- A. La caída de un namenode
- B. La caída de un datanode
- C. La caída de un datanode federado
- D. La caída de un executor

14. Las tecnologías de cloud computing permiten a un usuario:
- A. Especificar el servidor (máquina física) concreto donde se ejecutará su software.
- B. Especificar la configuración necesaria del servidor donde se ejecutará su software.
- C. Ejecutar su software en la configuración de servidor que obligatoriamente le asigne la plataforma.
- D. Ninguna de las anteriores.

15. En una plataforma de Cloud Computing podemos...
- A. Utilizar herramientas de desarrollo de software ya instaladas, y esto se conoce como IaaS
- B. Utilizar directamente las máquinas, sin nada instalado, a lo cual se le llama PaaS
- C. Utilizar software para usuarios finales ya instalado y listo para usar, y esto se conoce como SaaS
- D. Ninguna de las respuestas anteriores es correcta

16. ¿Cuál de los siguientes servicios de Cloud Computing NO proporciona una base de datos relacional?
- A. Azure SQL Database
- B. Amazon Relational Database Service (RDS)
- C. Azure Databricks
- D. Google Cloud SQL

17. Completa la siguiente frase: - Cuando creamos una aplicación en un notebook con Pyspark, el kernel del notebook tiene el rol de .... (1), y el procesamiento distribuido de los datos se lleva a cabo en los ... (2) que se crean en los ... (3) del cluster.
- A. (1) broker, (2) executors, (3) nodos
- B. (1) driver, (2) brokers, (3) nodos
- C. (1) broker, (2) nodos, (3) workers
- D. (1) driver, (2) executors, (3) nodos

18. ¿Qué sucede si en una línea de código utilizamos una acción, por ejemplo n = df.write("/mifichero.csv"), y en la siguiente línea hacemos df.cache()?
- A. Obtenemos un error porque el DataFrame ya no existe cuando llegamos a cache()
- B. El efecto beneficioso de cache no lo veremos hasta que hagamos una nueva acción sobre df
- C. Gracias a write(), el DataFrame se ha materializado, y como hemos indicado cache, permanece en memoria
- D. Ninguna de las respuestas anteriores es cierta

19. ¿Cuál de estos servicios cloud cumple la misma función que el servicio Dataproc de Google Cloud que has utilizado para desplegar un cluster de Spark?
- A. Amazon Aurora
- B. Amazon EMR (Elastic Map Reduce)
- C. Azure Cognitive Services
- D. Azure SQL Database

20. Cuando tenemos un DataFrame de Spark en la variable mi_df y ejecutamos mi_df.write.parquet("/tmp/datos.parquet") ...
- A. Spark crea en la carpeta /tmp de HDFS tantos ficheros Parquet como particiones tenga el DataFrame
- B. Spark crea en la carpeta /tmp de HDFS un fichero Parquet llamado datos.parquet cuyo tamaño es igual al total del DataFrame
- C. Spark crea una nueva carpeta llamada /tmp/datos.parquet y dentro de ella se crean tantos ficheros distintos como particiones tenga el DataFrame
- D. Spark crea en la carpeta /tmp de HDFS un único fichero Parquet llamado datos.parquet formado por tantos bloques de HDFS como particiones tuviera el DataFrame

### 2023 Modelo C Ordinaria

1. De los siguientes comandos de HDFS, ¿cuál permite listar los ficheros del directorio movies que cuelga directamente del directorio raíz?
- A. hdfs dfs -mkdir movies
- B. hdfs dfs -mkdir /movies
- C. hdfs dfs -ls movies
- D. hdfs dfs -ls /movies

2. ¿Qué componente de HDFS puede ser un punto único de fallo (SPOF)?
- A. Datanode
- B. Namenode
- C. Filenode
- D. Ninguna de las respuestas anteriores es correcta

3. Se precisa hacer un procesado de datos con Spark. Señale la respuesta correcta:
- A. Es mejor usar la API de RDDs, porque el motor Catalyst puede aplicar optimizaciones a los mismos.
- B. Es mejor usar la API estructurada, porque sin tener en cuenta el motor Catalyst, el plan de ejecución que crea Spark para la API estructurada es el óptimo.
- C. Los desarrolladores de Spark recomiendan usar la API estructurada porque permiten optimizar operaciones con el motor Catalyst.
- D. Es mejor usar consultas SQL desde la función sql de la SparkSession, porque el plan de ejecución resultante es más eficiente que usando las funciones de la API estructurada (filter, where, alias...).

4. Elija la respuesta INCORRECTA sobre Impala:
- A. Está orientado a consultas interactivas.
- B. Está orientado a consultas en bloque.
- C. Realiza las consultas sobre su propia red de demonios.
- D. Trabaja principalmente en memoria.

5. En Spark, si no cacheamos un DataFrame que utilizaremos en varias operaciones independientes ...
- A. Podríamos tardar más tiempo del estrictamente necesario
- B. Podríamos obtener resultados incorrectos
- C. Sería imposible reconstruir las particiones perdidas si falla un nodo
- D. Todas las opciones anteriores son ciertas

6. ¿Cómo efectúa Impala las consultas?
- A. Mediante un motor de ejecución configurable que puede ser Spark, MapReduce o Tez
- B. A través de sus propios procesos demonio creados en cada máquina del cluster
- C. A través de Apache Tez al tratarse de consultas SQL interactivas
- D. A través de Apache Spark ya que los cáclulos los efectúa en memoria

7. ¿Cuál de las siguientes afirmaciones acerca de Hive y BigQuery NO es cierta?
- A. Ambos son sistemas de Data Warehouse
- B. Ambos poseen su propio motor de ejecución y no necesitan una herramienta externa para ejecutar consultas
- C. Ambas son herramientas open-source
- D. Las opciones B y C son falsas

8. Para comunicar los servicios contratados (almacenamiento, computación, base de datos...) en una plataforma de cloud computing (elija la respuesta correcta):
- A. Todos los servicios existentes en una plataforma de cloud computing para todos los usuarios de la misma están comunicados entre sí automáticamente.
- B. No es posible comunicar servicios entre sí dentro de la plataforma de cloud computing, sino que es necesario crear una red externa para comunicarlos.
- C. Cada usuario de la plataforma de cloud computing puede crear únicamente una red virtual dentro de la plataforma para conectar todos los servicios que contrate.
- D. Ninguna de las anteriores.

9. Seleccione la respuesta correcta sobre Spark:
- A. Utiliza unas transformaciones y acciones que son exactamente lo mismo que los mappers y reducers, respectivamente, de MapReduce.
- B. Es más flexible que MapReduce gracias a las transformaciones y acciones de que dispone.
- C. Es menos flexible que MapReduce por las limitaciones en el uso de transformaciones y acciones.
- D. Ninguna de las respuestas anteriores es correcta.

10. ¿Cómo consigue Kafka la escalabilidad?
- A. Gracias a que está soportado por HDFS el cual es intrínsecamente escalable
- B. Gracias a que utiliza Spark como motor de procesamiento, y Spark es escalable al distribuir el cómputo automáticamente
- C. Gracias a que las particiones de un topic están replicadas en varios brokers y esto permite adaptarnos a un incremento de productores o de consumidores
- D. Todas las respuestas anteriores son correctas

11. Un DataFrame en Spark es...
- A. Una estructura de datos que encapsula dentro un RDD de objetos Row
- B. Una tabla de datos similar a la de una BD relacional pero distribuida en la memoria RAM de los executors
- C. Un tipo especial de fichero manejado por Spark
- D. Las respuestas A y B son ciertas

12. ¿Cuál de las siguientes afirmaciones es correcta?
- A. Spark nunca requiere movimiento de datos entre nodos, a diferencia de MapReduce
- B. Spark resulta más intuitivo y fácil de aprender que el paradigma MapReduce
- C. Spark no permite procesar datos en tiempo real, a diferencia de MapReduce
- D. Ninguna de las respuestas anteriores es correcta

13. ¿Cuál de las siguientes afirmaciones sobre Impala y Hive NO es cierta?
- A. Ambas herramientas ejecutan sobre Spark
- B. Ambas herramientas son compatibles con un driver ODBC para conectarnos a ellas
- C. Ambas herramientas admiten consultas en lenguaje SQL
- D. Ambas pueden consultar datos almacenados en HDFS

14. Cuál de las siguientes afirmaciones sobre los servicios de cloud computing es cierta:
- A. Están diseñadas explícitamente para resolver problemas de big data y machine learning.
- B. No son una buena elección para desarrollar aplicaciones móviles.
- C. Entre las aplicaciones que más usan servicios de cloud computing están las aplicaciones IoT (Internet of Things).
- D. Ninguna de las anteriores.

15. Si nos fijamos en los tres grandes proveedores de servicios de Cloud Computing en la actualidad...
- A. Cada proveedor permite desplegar exclusivamente instancias de bases de datos relacionales propietarias, de ese proveedor
- B. Sólo permiten desplegar bases de datos relacionales que sean open source, como MySQL, PostgreSQL, etc
- C. Los proveedores cloud no incluyen entre sus servicios el despliegue de bases de datos relacionales
- D. Ninguna de las opciones anteriores es cierta

16. Cuando utilizamos herramientas de cloud computing de un proveedor, ...
- A. Los desarrolladores no pueden instalar tecnologías open-source si usan la infraestructura de ese proveedor
- B. Los desarrolladores pueden usar herramientas open-source para cualquier tarea
- C. Los desarrolladores tienen que usar los servicios PaaS de ese proveedor
- D. El desarrollo debe llevarlo a cabo un equipo de desarrolladores del proveedor

17. En una tabla manejada de Hive ...
- A. El borrado de la tabla implica el borrado de los datos
- B. El borrado de la tabla no afecta a los datos, que permanecerán en la misma ubicación
- C. Al ser manejada por Hive, las herramientas de BI no pueden acceder a esos datos
- D. Ninguna de las opciones anteriores es correcta

18. Se quiere ajustar un modelo predictivo de análisis de sentimiento a un conjunto masivo de textos, usando Spark MLlib. Antes de entrenar el algoritmo predictivo, es necesario pre-procesarlos (dividir en palabras, quitar palabras sin significado, y codificarlas como números). Algunas de estas operaciones son estimadores y otras son transformadores. ¿Cuál sería la manera correcta de proceder?
- A. Crear estimadores y transformadores independientes, haciendo fit o transform sobre cada uno según corresponda.
- B. Crear un pipeline sólo con los estimadores, ejecutar fit sobre el pipeline y después ejecutar transform sobre los transformadores,
- C. Crear un pipeline con todos los estimadores y transformadores necesarios, y ejecutar fit sobre el pipeline.
- D. Crear un pipeline sólo con los transformadores, ejecutar fit sobre el pipeline y después usar transform sobre los estimadores.

19. ¿Cómo utilizaría Kafka un programador de Java?
- A. Importando la dependencia de Kafka para Java en su programa
- B. Necesita primero instalar Spark e invocarlo desde Java
- C. Para utilizar Kafka es necesario hacerlo desde el lenguaje Python
- D. El programador no puede utilizar Kafka directamente sino que son las herramientas cloud quienes lo invocan

20. ¿Qué sucede si en una línea de código utilizamos una acción, por ejemplo n = df.write("/mifichero.csv"), y en la siguiente línea hacemos df.cache()?
- A. Obtenemos un error porque el DataFrame ya no existe cuando llegamos a cache()
- B. El efecto beneficioso de cache no lo veremos hasta que hagamos una nueva acción sobre df
- C. Gracias a write(), el DataFrame se ha materializado, y como hemos indicado cache, permanece en memoria
- D. Ninguna de las respuestas anteriores es cierta

### 2023 Modelo C Extraordinaria

1. Una desventaja importante de HDFS es que ...
- A. No permite almacenar un archivo de tamaño superior al de cualquier disco duro del cluster
- B. No permite recuperar los datos que hubiese en un datanode si ese nodo se quemase
- C. Es volátil, es decir, lo que almacenan los datanodes se pierde pasado un tiempo
- D. No permite operaciones de modificación de ficheros existentes

2. ¿Cuál de las siguientes afirmaciones NO es cierta respecto a los Estimadores de Spark MLlib?
- A. Siempre son modelos de Machine Learning, antes de ser entrenados
- B. Siempre poseen un método fit
- C. El método fit aplicado sobre ellos devuelve un Transformador
- D. Pueden formar parte de un Pipeline

3. Seleccione la respuesta INCORRECTA sobre los dataframes de Spark:
- A. Una estructura de datos que encpasula dentro un RDD de objetos tipo Row.
- B. Una tabla de datos imilar a la de una base de datos relacional pero distribuida en la memoria RAM de los executors.
- C. Un tipo especial de fichero manejado por Spark.
- D. Las respuestas A y B son correctas.

4. Cuando ejecutamos una acción sobre un DataFrame en Spark...
- A. Spark crea un job para llevar a cabo esa acción
- B. Cualquier job siempre tiene como mínimo dos stages puesto que siempre habrá que mover datos
- C. Para que todos los procesadores estén siempre ocupados en alguna tarea, lo idea es que el DataFrame tenga menos particiones que CPUs totales
- D. El job creado por Spark para realizar la acción nunca tiene más de una stage porque Spark nunca mueve datos entre nodos

5. ¿Cuál de estas afirmaciones sobre Apache Hive es cierta?
- A. Existen versiones libres y de pago
- B. Permite consultar archivos almacenados en HDFS utilizando lenguaje SQL
- C. Requiere poseer una base de datos relacional funcionando como respaldo
- D. Las opciones a y c son correctas

6. ¿Cuál de las siguientes afirmaciones sobre Kafka es cierta?
- A. Kafka utiliza Spark como motor de ejecución
- B. Un grupo de mensajes con la misma estructura se denomina broker
- C. Es una cola distribuida para paso de mensajes de la que las aplicaciones pueden leer o escribir
- D. Las opciones B y C son correctas

7. Un topic de Kafka es...
- A. La unidad mínima que está replicada en todos los brokers
- B. Un grupo de mensajes que siguen la misma estructura y pueden interpretarse igual
- C. Una replicación de los mensajes en HDFS
- D. Ninguna de las respuestas anteriores es correcta

8. ¿Cuál de las siguientes opciones no es correcta acerca del módulo Spark Streaming?
- A. La forma de procesar los datos es en microbatches
- B. Solo tiene API para RDDs que todavía no ha sido migrada a DataFrames
- C. Gracias a Structured Streaming se puede utilizar la API estructurada definida en Spark SQL
- D. La fuente de datos más habitual cuando usamos Spark Streaming es Kafka

9. ¿Cómo efectúa Impala las consultas?
- A. Mediante un motor de ejecución configurable que puede ser Spark, MapReduce o Tez
- B. A través de sus propios procesos demonio creados en cada máquina del cluster
- C. A través de Apache Tez al tratarse de consultas SQL interactivas
- D. A través de Apache Spark ya que los cáclulos los efectúa en memoria

10. ¿Cuál de las siguientes afirmaciones sobre Impala y Hive NO es cierta?
- A. Ambas herramientas ejecutan sobre Spark
- B. Ambas herramientas son compatibles con un driver ODBC para conectarnos a ellas
- C. Ambas herramientas admiten consultas en lenguaje SQL
- D. Ambas pueden consultar datos almacenados en HDFS

11. ¿Cómo se relacionan Apache Spark y Apache Kafka?
- A. Spark puede leer desde y escribir en Kafka datos en tiempo real
- B. Spark puede guardar los DataFrames como tablas en el almacén de metadatos (metastore) de Kafka
- C. Kafka sólo puede funcionar en un cluster de ordenadores donde ya esté instalado Spark
- D. Spark sólo puede funcionar en un cluster de ordenadores donde ya esté instalado Kafka

12. ¿Qué fallo en HDFS es menos problemático?
- A. La caída de un namenode
- B. La caída de un datanode
- C. La caída de un datanode federado
- D. La caída de un executor

13. En una plataforma de Cloud Computing podemos...
- A. Utilizar herramientas de desarrollo de software ya instaladas, y esto se conoce como IaaS
- B. Utilizar directamente las máquinas, sin nada instalado, a lo cual se le llama PaaS
- C. Utilizar software para usuarios finales ya instalado y listo para usar, y esto se conoce como SaaS
- D. Ninguna de las respuestas anteriores es correcta

14. ¿Cuál de los siguientes servicios de Cloud Computing NO proporciona una base de datos relacional?
- A. Azure SQL Database
- B. Amazon Relational Database Service (RDS)
- C. Azure Databricks
- D. Google Cloud SQL

15. Completa la siguiente frase: - Cuando creamos una aplicación en un notebook con Pyspark, el kernel del notebook tiene el rol de .... (1), y el procesamiento distribuido de los datos se lleva a cabo en los ... (2) que se crean en los ... (3) del cluster.
- A. (1) broker, (2) executors, (3) nodos
- B. (1) driver, (2) brokers, (3) nodos
- C. (1) broker, (2) nodos, (3) workers
- D. (1) driver, (2) executors, (3) nodos

16. ¿Qué sucede si en una línea de código utilizamos una acción, por ejemplo n = df.write("/mifichero.csv"), y en la siguiente línea hacemos df.cache()?
- A. Obtenemos un error porque el DataFrame ya no existe cuando llegamos a cache()
- B. El efecto beneficioso de cache no lo veremos hasta que hagamos una nueva acción sobre df
- C. Gracias a write(), el DataFrame se ha materializado, y como hemos indicado cache, permanece en memoria
- D. Ninguna de las respuestas anteriores es cierta

17. ¿Cuál de estos servicios cloud cumple la misma función que el servicio Dataproc de Google Cloud que has utilizado para desplegar un cluster de Spark?
- A. Amazon Aurora
- B. Amazon EMR (Elastic Map Reduce)
- C. Azure Cognitive Services
- D. Azure SQL Database

18. Cuando tenemos un DataFrame de Spark en la variable mi_df y ejecutamos mi_df.write.parquet("/tmp/datos.parquet") ...
- A. Spark crea en la carpeta /tmp de HDFS tantos ficheros Parquet como particiones tenga el DataFrame
- B. Spark crea en la carpeta /tmp de HDFS un fichero Parquet llamado datos.parquet cuyo tamaño es igual al total del DataFrame
- C. Spark crea una nueva carpeta llamada /tmp/datos.parquet y dentro de ella se crean tantos ficheros distintos como particiones tenga el DataFrame
- D. Spark crea en la carpeta /tmp de HDFS un único fichero Parquet llamado datos.parquet formado por tantos bloques de HDFS como particiones tuviera el DataFrame

19. Hemos montado el Data Lake de una gran cadena de hipermercados de alcance internacional, y queremos empezar a explorarlos y aplicar analítica descriptiva y predictiva con los datos históricos. ¿Cuál de las siguientes tecnologías probablemente NO vamos a necesitar?
- A. Apache Spark
- B. Apache Kafka
- C. Apache Hive
- D. Una herramienta de Business Intelligence

20. ¿Cuál de los siguientes casos de uso es POCO adecuado para HDFS?
- A. Almacenar información histórica de las pólizas de una compañía aseguradora desde su creación
- B. Migrar distintas bases de datos tradicionales de una empresa de telecomunicaciones para realizar cuadros de mando sobre esos datos
- C. Almacenar la información de las pólizas de una compañía aseguradora para ser consultada por las agencias cuando interactúan con los clientes
- D. Montar el lago de datos para efectuar la analítica sobre los clientes de una empresa de energía eléctrica

### 2023 Modelo D Ordinaria

1. ¿Qué afirmación sobre los metadatos de HDFS es cierta?
- A. Se almacenan en el metastore de Hive
- B. Se almacenan en el datanode federado
- C. Son datos acerca de la ubicación física de los bloques que forman cada fichero
- D. Sólo se consultan en caso de fallo del namenode

2. En el sistema de ficheros HDFS, cuando se solicita la lectura de un fichero:
- A. Es el cliente quien proporciona los metadatos al namenode
- B. Es el namenode quien proporciona los metadatos al cliente
- C. Es el namenode quien proporciona los bloques del fichero al cliente
- D. Es el datanode quien proporciona los metadatos al cliente

3. Durante el procesamiento de datos con Spark, si un nodo falla o cae:
- A. Spark lo gestiona automáticamente y recalcula los datos necesarios en otra máquina gracias al DAG
- B. El usuario debe hacer el código robusto para detectarlo y recuperarse
- C. No es necesario recalcular porque Spark mantiene cada partición de los RDD replicada en varias máquinas
- D. El usuario debe indicar en su código una función de callback que Spark invocará en caso de caída de algún nodo

4. Una desventaja importante de HDFS es que ...
- A. No permite almacenar un archivo de tamaño superior al de cualquier disco duro del cluster
- B. No permite recuperar los datos que hubiese en un datanode si ese nodo se quemase
- C. Es volátil, es decir, lo que almacenan los datanodes se pierde pasado un tiempo
- D. No permite operaciones de modificación de ficheros existentes

5. Seleccione la respuesta correcta sobre los dataframes de Spark:
- A. Son una estructura de datos que envuelve un RDD de objetos tipo Row.
- B. Una ventaja sobre los RDD es que los dataframes no son inmutables.
- C. No es posible acceder al RDD envuelto por un dataframe.
- D. Al igual que los RDD, los dataframes están distribuidos en almacenamiento persistente de los nodos worker.

6. ¿Cuál de las siguientes opciones no es correcta acerca del módulo Spark Streaming?
- A. La forma de procesar los datos es en microbatches
- B. Solo tiene API para RDDs que todavía no ha sido migrada a DataFrames
- C. Gracias a Structured Streaming se puede utilizar la API estructurada definida en Spark SQL
- D. La fuente de datos más habitual cuando usamos Spark Streaming es Kafka

7. Seleccione la respuesta INCORRECTA sobre Apache Hive:
- A. Permite realizar consultas SQL sobre grandes conjuntos de datos distribuidos.
- B. Es una base de datos distribuida en un clúster Hadoop.
- C. Está indicado principalmente para pocesado OLAP (en bloque).
- D. Aplica el paradigma schema-on-read.

8. ¿Qué es lo que está replicado en Kafka?
- A. Cada topic está replicado en varios productores
- B. Cada broker está replicado en varios consumidores
- C. Cada partición está replicada en varios brokers
- D. Cada productor está replicado dentro de varios topics

9. ¿Cuál de las siguientes afirmaciones sobre Kafka es cierta?
- A. Kafka utiliza Spark como motor de ejecución
- B. Un grupo de mensajes con la misma estructura se denomina broker
- C. Es una cola distribuida para paso de mensajes de la que las aplicaciones pueden leer o escribir
- D. Las opciones B y C son correctas

10. HDFS está optimizado para ficheros
- A. modificados frecuentemente
- B. de tamaño grande
- C. de tamaño mediano
- D. de tamaño pequeño

11. En Impala, el proceso que lleva a cabo las consultas (las planifica, las distribuye a otras máquinas, lee y escribe datos, etc) es
- A. statestored
- B. stated
- C. catalogd
- D. impalad

12. Las transformaciones de Spark
- A. No devuelven nada
- B. Devuelven otras transformaciones.
- C. Devuelven un RDD.
- D. Devuelven un valor.

13. ¿Cómo consigue Kafka la escalabilidad?
- A. Gracias a que está soportado por HDFS el cual es intrínsecamente escalable
- B. Gracias a que utiliza Spark como motor de procesamiento, y Spark es escalable al distribuir el cómputo automáticamente
- C. Gracias a que las particiones de un topic están replicadas en varios brokers y esto permite adaptarnos a un incremento de productores o de consumidores
- D. Todas las respuestas anteriores son correctas

14. Se quiere desplegar una base de datos SQL en una plataforma de cloud computing. El equipo de desarrolladores es experto en diseño y gestión de bases de datos SQL, pero no es experto en administración de sistemas. ¿Qué opción de las disponibles sería la más adecuada?
- A. Usar un servicios IaaS.
- B. Usar un servicio PaaS.
- C. Usar un servicio SaaS.
- D. Usar un servicio on-premises.

15. Cuál de los siguientes servicios de seguridad NO ofrecen las plataformas de cloud computing estudiadas:
- A. Responsabilidad sobre los datos de la aplicación
- B. Gestión de identidad.
- C. Control de acceso.
- D. Autenticación y autorización.

16. Cuál de las siguientes NO es una ventaja de los servicios de cloud computing:
- A. Acceso físico a las máquinas que proporcionan el servicio.
- B. Elasticidad.
- C. Alta disponibilidad del servicio.
- D. Robustez ante fallos.

17. En Spark, si no cacheamos un DataFrame que utilizaremos en varias operaciones independientes ...
- A. Podríamos tardar más tiempo del estrictamente necesario
- B. Podríamos obtener resultados incorrectos
- C. Sería imposible reconstruir las particiones perdidas si falla un nodo
- D. Todas las opciones anteriores son ciertas

18. El proceso que se crea en cada nodo del cluster al arrancar una aplicación con Spark se denomina...
- A. Worker
- B. Datanode
- C. Executor
- D. Broker

19. ¿Cuál de las siguientes tecnologías es más similar a BigQuery?
- A. Apache Hive
- B. Apache Kafka
- C. Apache Spark
- D. HDFS

20. Cuando tenemos un DataFrame de Spark en la variable mi_df y ejecutamos mi_df.write.parquet("/tmp/datos.parquet") ...
- A. Spark crea en la carpeta /tmp de HDFS tantos ficheros Parquet como particiones tenga el DataFrame
- B. Spark crea en la carpeta /tmp de HDFS un fichero Parquet llamado datos.parquet cuyo tamaño es igual al total del DataFrame
- C. Spark crea una nueva carpeta llamada /tmp/datos.parquet y dentro de ella se crean tantos ficheros distintos como particiones tenga el DataFrame
- D. Spark crea en la carpeta /tmp de HDFS un único fichero Parquet llamado datos.parquet formado por tantos bloques de HDFS como particiones tuviera el DataFrame

### 2024 Modelo A Ordinaria

1. Cuando ejecutamos una acción sobre un DataFrame en Spark...
- A. Spark crea un job para llevar a cabo esa acción
- B. Cualquier job siempre tiene como mínimo dos stages puesto que siempre habrá que mover datos
- C. Para que todos los procesadores estén siempre ocupados en alguna tarea, lo idea es que el DataFrame tenga menos particiones que CPUs totales
- D. El job creado por Spark para realizar la acción nunca tiene más de una stage porque Spark nunca mueve datos entre nodos

2. ¿Cuál de las siguientes afirmaciones NO es cierta respecto a los Estimadores de Spark MLlib?
- A. Siempre son modelos de Machine Learning, antes de ser entrenados
- B. Siempre poseen un método fit
- C. El método fit aplicado sobre ellos devuelve un Transformador
- D. Pueden formar parte de un Pipeline

3. Para usar la librería de procesado de flujos de datos de Spark:
- A. Se recomienda usar DStreams, basados en RDDs.
- B. Se recomienda usar streaming dataframes.
- C. Se recomienda usar RDDs con funciones específicas de streaming.
- D. Se recomienda usar Pipelines.

4. Elija la respuesta INCORRECTA sobre Impala:
- A. Está orientado a consultas interactivas.
- B. Está orientado a consultas en bloque.
- C. Realiza las consultas sobre su propia red de demonios.
- D. Trabaja principalmente en memoria.

5. ¿Cuál de las siguientes afirmaciones sobre Impala y Hive NO es cierta?
- A. Ambas herramientas ejecutan sobre Spark
- B. Ambas herramientas son compatibles con un driver ODBC para conectarnos a ellas
- C. Ambas herramientas admiten consultas en lenguaje SQL
- D. Ambas pueden consultar datos almacenados en HDFS

6. Seleccione la respuesta INCORRECTA sobre Apache Hive:
- A. Permite realizar consultas SQL sobre grandes conjuntos de datos distribuidos.
- B. Es una base de datos distribuida en un clúster Hadoop.
- C. Está indicado principalmente para pocesado OLAP (en bloque).
- D. Es una tecnología de código abierto

7. ¿Cuál de los siguientes casos de uso es típico de Kafka?
- A. Una web envía constantemente información sobre clicks a Spark, que calcula resúmenes en tiempo real del comportamiento de los usuarios
- B. Un científico de datos utiliza el histórico de su empresa para entrenar un modelo predictivo
- C. Un analista de negocio lanza consultas SQL sobre datos masivos almacenados en un cluster
- D. Ninguno de los casos anteriores es habitual en Kafka

8. Cuando un consumidor lee mensajes de Kafka (seleccione la respuesta correcta):
- A. Lee los mensajes en orden dentro de cada partición.
- B. Lee los mensajes en orden dentro de cada topic.
- C. Lee los mensajes en orden dentro de cada bróker.
- D. Kafka no garantiza ningún tipo de orden al consumir los mensajes.

9. ¿Cómo se relacionan Apache Spark y Apache Kafka?
- A. Spark puede leer desde y escribir en Kafka datos en tiempo real
- B. Spark puede guardar los DataFrames como tablas en el almacén de metadatos (metastore) de Kafka
- C. Kafka sólo puede funcionar en un cluster de ordenadores donde ya esté instalado Spark
- D. Spark sólo puede funcionar en un cluster de ordenadores donde ya esté instalado Kafka

10. Durante el procesamiento de datos con Spark, si un nodo falla o cae:
- A. Spark lo gestiona automáticamente y recalcula los datos necesarios en otra máquina gracias al DAG
- B. El usuario debe hacer el código robusto para detectarlo y recuperarse
- C. No es necesario recalcular porque Spark mantiene cada partición de los RDD replicada en varias máquinas
- D. El usuario debe indicar en su código una función de callback que Spark invocará en caso de caída de algún nodo

11. ¿Cómo efectúa Impala las consultas?
- A. Mediante un motor de ejecución configurable que puede ser Spark, MapReduce o Tez
- B. A través de sus propios procesos demonio creados en cada máquina del cluster
- C. A través de Apache Tez al tratarse de consultas SQL interactivas
- D. A través de Apache Spark ya que los cáclulos los efectúa en memoria

12. La filosofía que ha motivado los Pipelines de Spark MLlib es...
- A. Que los datos con los que se hacen predicciones siempre pasen por las mismas etapas que los datos de entrenamiento
- B. Optimizar el rendimiento de los algoritmos de Machine Learning
- C. Disminuir la cantidad de memoria RAM que consumen los algoritmos
- D. Ninguna de las respuestas anteriores es correcta

13. Se quiere utilizar la plataforma Google Cloud para desplegar un clúster en el que se ejecuten trabajos Spark para procesado en bloque de grandes cantidades de datos. Elija la respuesta correcta:
- A. Sólo es posible conseguir el objetivo desplegandO un clúster mediante el servicio Dataproc
- B. La única forma de desplegar dicho clúster es usando varias instancias de Google Compute Engine y configurarlas manualmente para crear el clúster Spark.
- C. No es posible desplegar un clúster Spark en Google Cloud.
- D. Ninguna de las anteriores.

14. Si nos fijamos en los tres grandes proveedores de servicios de Cloud Computing en la actualidad...
- A. Cada proveedor permite desplegar exclusivamente instancias de bases de datos relacionales propietarias, de ese proveedor
- B. Sólo permiten desplegar bases de datos relacionales que sean open source, como MySQL, PostgreSQL, etc
- C. Los proveedores cloud no incluyen entre sus servicios el despliegue de bases de datos relacionales
- D. Ninguna de las opciones anteriores es cierta

15. Completa la siguiente frase: - Cuando creamos una aplicación en un notebook con Pyspark, el kernel del notebook tiene el rol de .... (1), y el procesamiento distribuido de los datos se lleva a cabo en los ... (2) que se crean en los ... (3) del cluster.
- A. (1) broker, (2) executors, (3) nodos
- B. (1) driver, (2) brokers, (3) nodos
- C. (1) broker, (2) nodos, (3) workers
- D. (1) driver, (2) executors, (3) nodos

16. ¿Por qué actualmente no se utilizan los RDDs en Spark?
- A. Porque el código es menos intuitivo y más propenso a errores por parte del programador, además de no estar optimizados, a diferencia de los DataFrames
- B. Porque los RDDs escriben los resultados en disco el resultado intermedio de los cálculos
- C. Porque no están disponibles en Python (pyspark), sino sólo en lenguaje Scala
- D. Las respuestas A y B son correctas

17. Si la variable datos_df almacena un DataFrame de Spark, ¿qué ocurre cuando hacemos datos_df.cache() ?
- A. Spark materializa el DataFrame en ese momento
- B. Spark escribe el DataFrame en disco
- C. Spark libera el contenido del DataFrame de la memoria
- D. Spark marca el DataFrame para que no se libere cuando sea materializado (duda)

18. ¿Cuál de los siguientes casos de uso es POCO adecuado para HDFS?
- A. Almacenar información histórica de las pólizas de una compañía aseguradora desde su creación
- B. Migrar distintas bases de datos tradicionales de una empresa de telecomunicaciones para realizar cuadros de mando sobre esos datos
- C. Almacenar la información de las pólizas de una compañía aseguradora para ser consultada por las agencias cuando interactúan con los clientes
- D. Montar el lago de datos para efectuar la analítica sobre los clientes de una empresa de energía eléctrica

19. Hemos montado el Data Lake de una gran cadena de hipermercados de alcance internacional, y queremos empezar a explorarlos y aplicar analítica descriptiva y predictiva con los datos históricos. ¿Cuál de las siguientes tecnologías probablemente NO vamos a necesitar?
- A. Apache Spark
- B. Apache Kafka
- C. Apache Hive
- D. Una herramienta de Business Intelligence

20. ¿Qué tecnologías se asimilan a Apache Hive?
- A. Amazon Redshift, Cloud SQL, Azure SQL Database
- B. Amazon EMR, Google Cloud Dataproc, Azure Databricks
- C. Amazon S3, Google BigQuery, Azure DataLake Storage
- D. Amazon Redshift, Google BigQuery, Azure Synapse

### 2024 Modelo B Ordinaria

1. ¿Qué componente de HDFS puede ser un punto único de fallo (SPOF)?
- A. Datanode
- B. Namenode
- C. Filenode
- D. Ninguna de las respuestas anteriores es correcta

2. Se precisa hacer un procesado de datos con Spark. Señale la respuesta correcta:
- A. Es mejor usar la API de RDDs, porque el motor Catalyst puede aplicar optimizaciones a los mismos.
- B. Es mejor usar la API estructurada, porque sin tener en cuenta el motor Catalyst, el plan de ejecución que crea Spark para la API estructurada es el óptimo.
- C. Los desarrolladores de Spark recomiendan usar la API estructurada porque permiten optimizar operaciones con el motor Catalyst.
- D. Es mejor usar consultas SQL desde la función sql de la SparkSession, porque el plan de ejecución resultante es más eficiente que usando las funciones de la API estructurada (filter, where, alias...).

3. Elija la respuesta INCORRECTA sobre Impala:
- A. Está orientado a consultas interactivas.
- B. Está orientado a consultas en bloque.
- C. Realiza las consultas sobre su propia red de demonios.
- D. Trabaja principalmente en memoria.

4. En Spark, si no cacheamos un DataFrame que utilizaremos en varias operaciones independientes ...
- A. Podríamos tardar más tiempo del estrictamente necesario
- B. Podríamos obtener resultados incorrectos
- C. Sería imposible reconstruir las particiones perdidas si falla un nodo
- D. Todas las opciones anteriores son ciertas

5. ¿Cómo efectúa Impala las consultas?
- A. Mediante un motor de ejecución configurable que puede ser Spark, MapReduce o Tez
- B. A través de sus propios procesos demonio creados en cada máquina del cluster
- C. A través de Apache Tez al tratarse de consultas SQL interactivas
- D. A través de Apache Spark ya que los cáclulos los efectúa en memoria

6. ¿Cuál de las siguientes afirmaciones acerca de Hive y BigQuery NO es cierta?
- A. Ambos son sistemas de Data Warehouse
- B. Ambos poseen su propio motor de ejecución y no necesitan una herramienta externa para ejecutar consultas
- C. Ambas son herramientas open-source
- D. Las opciones B y C son falsas

7. Para comunicar los servicios contratados (almacenamiento, computación, base de datos...) en una plataforma de cloud computing (elija la respuesta correcta):
- A. Todos los servicios existentes en una plataforma de cloud computing para todos los usuarios de la misma están comunicados entre sí automáticamente.
- B. No es posible comunicar servicios entre sí dentro de la plataforma de cloud computing, sino que es necesario crear una red externa para comunicarlos.
- C. Cada usuario de la plataforma de cloud computing puede crear únicamente una red virtual dentro de la plataforma para conectar todos los servicios que contrate.
- D. Ninguna de las anteriores.

8. ¿Cómo consigue Kafka la escalabilidad?
- A. Gracias a que está soportado por HDFS el cual es intrínsecamente escalable
- B. Gracias a que utiliza Spark como motor de procesamiento, y Spark es escalable al distribuir el cómputo automáticamente
- C. Gracias a que las particiones de un topic están replicadas en varios brokers y esto permite adaptarnos a un incremento de productores o de consumidores
- D. Todas las respuestas anteriores son correctas

9. ¿Cuál de las siguientes afirmaciones es correcta?
- A. Spark nunca requiere movimiento de datos entre nodos, a diferencia de MapReduce
- B. Spark resulta más intuitivo y fácil de aprender que el paradigma MapReduce
- C. Spark no permite procesar datos en tiempo real, a diferencia de MapReduce
- D. Ninguna de las respuestas anteriores es correcta

10. ¿Cuál de las siguientes afirmaciones sobre Impala y Hive NO es cierta?
- A. Ambas herramientas ejecutan sobre Spark
- B. Ambas herramientas son compatibles con un driver ODBC para conectarnos a ellas
- C. Ambas herramientas admiten consultas en lenguaje SQL
- D. Ambas pueden consultar datos almacenados en HDFS

11. Cuál de las siguientes afirmaciones sobre los servicios de cloud computing es cierta:
- A. Están diseñadas explícitamente para resolver problemas de big data y machine learning.
- B. No son una buena elección para desarrollar aplicaciones móviles.
- C. Entre las aplicaciones que más usan servicios de cloud computing están las aplicaciones IoT (Internet of Things).
- D. Ninguna de las anteriores.

12. Si nos fijamos en los tres grandes proveedores de servicios de Cloud Computing en la actualidad...
- A. Cada proveedor permite desplegar exclusivamente instancias de bases de datos relacionales propietarias, de ese proveedor
- B. Sólo permiten desplegar bases de datos relacionales que sean open source, como MySQL, PostgreSQL, etc
- C. Los proveedores cloud no incluyen entre sus servicios el despliegue de bases de datos relacionales
- D. Ninguna de las opciones anteriores es cierta

13. Cuando utilizamos herramientas de cloud computing de un proveedor, ...
- A. Los desarrolladores no pueden instalar tecnologías open-source si usan la infraestructura de ese proveedor
- B. Los desarrolladores pueden usar herramientas open-source para cualquier tarea
- C. Los desarrolladores tienen que usar los servicios PaaS de ese proveedor
- D. El desarrollo debe llevarlo a cabo un equipo de desarrolladores del proveedor

14. En una tabla manejada de Hive ...
- A. El borrado de la tabla implica el borrado de los datos
- B. El borrado de la tabla no afecta a los datos, que permanecerán en la misma ubicación
- C. Al ser manejada por Hive, las herramientas de BI no pueden acceder a esos datos
- D. Ninguna de las opciones anteriores es correcta

15. Se quiere ajustar un modelo predictivo de análisis de sentimiento a un conjunto masivo de textos, usando Spark MLlib. Antes de entrenar el algoritmo predictivo, es necesario pre-procesarlos (dividir en palabras, quitar palabras sin significado, y codificarlas como números). Algunas de estas operaciones son estimadores y otras son transformadores. ¿Cuál sería la manera correcta de proceder?
- A. Crear estimadores y transformadores independientes, haciendo fit o transform sobre cada uno según corresponda.
- B. Crear un pipeline sólo con los estimadores, ejecutar fit sobre el pipeline y después ejecutar transform sobre los transformadores,
- C. Crear un pipeline con todos los estimadores y transformadores necesarios, y ejecutar fit sobre el pipeline.
- D. Crear un pipeline sólo con los transformadores, ejecutar fit sobre el pipeline y después usar transform sobre los estimadores.

16. ¿Cómo utilizaría Kafka un programador de Java?
- A. Importando la dependencia de Kafka para Java en su programa
- B. Necesita primero instalar Spark e invocarlo desde Java
- C. Para utilizar Kafka es necesario hacerlo desde el lenguaje Python
- D. El programador no puede utilizar Kafka directamente sino que son las herramientas cloud quienes lo invocan

17. ¿Qué sucede si en una línea de código utilizamos una acción, por ejemplo n = df.write("/mifichero.csv"), y en la siguiente línea hacemos df.cache()?
- A. Obtenemos un error porque el DataFrame ya no existe cuando llegamos a cache()
- B. El efecto beneficioso de cache no lo veremos hasta que hagamos una nueva acción sobre df
- C. Gracias a write(), el DataFrame se ha materializado, y como hemos indicado cache, permanece en memoria
- D. Ninguna de las respuestas anteriores es cierta

18. Hemos montado el Data Lake de una gran cadena de hipermercados de alcance internacional, y queremos empezar a explorarlos y aplicar analítica descriptiva y predictiva con los datos históricos. ¿Cuál de las siguientes tecnologías probablemente NO vamos a necesitar?
- A. Apache Spark
- B. Apache Kafka
- C. Apache Hive
- D. Una herramienta de Business Intelligence

19. Se quiere desplegar un producto big data en una plataforma de cloud computing. Por requisitos del producto, se requiere tener el mayor control posible del servidor o servidores donde se despliegue dicho producto. ¿Qué solución de las disponibles elegiría?
- A. IaaS
- B. PaaS
- C. FaaS
- D. SaaS

20. ¿Cuál de las siguientes situaciones no es habitual en Spark Structured Streaming?
- A. Entrenar un modelo predictivo en tiempo real
- B. Refrescar una agregación que estamos guardando en una tabla
- C. Comprobar y consolidar datos recibidos en tiempo real antes de guardarlos
- D. Todas las respuestas anteriores son habituales con Spark Structured Streaming

### 2024 Modelo D Ordinaria

1. En el sistema de ficheros HDFS, cuando se solicita la lectura de un fichero:
- A. Es el cliente quien proporciona los metadatos al namenode
- B. Es el namenode quien proporciona los metadatos al cliente
- C. Es el namenode quien proporciona los bloques del fichero al cliente
- D. Es el datanode quien proporciona los metadatos al cliente

2. Durante el procesamiento de datos con Spark, si un nodo falla o cae:
- A. Spark lo gestiona automáticamente y recalcula los datos necesarios en otra máquina gracias al DAG
- B. El usuario debe hacer el código robusto para detectarlo y recuperarse
- C. No es necesario recalcular porque Spark mantiene cada partición de los RDD replicada en varias máquinas
- D. El usuario debe indicar en su código una función de callback que Spark invocará en caso de caída de algún nodo

3. Una desventaja importante de HDFS es que ...
- A. No permite almacenar un archivo de tamaño superior al de cualquier disco duro del cluster
- B. No permite recuperar los datos que hubiese en un datanode si ese nodo se quemase
- C. Es volátil, es decir, lo que almacenan los datanodes se pierde pasado un tiempo
- D. No permite operaciones de modificación de ficheros existentes

4. Seleccione la respuesta correcta sobre los dataframes de Spark:
- A. Son una estructura de datos que envuelve un RDD de objetos tipo Row.
- B. Una ventaja sobre los RDD es que los dataframes no son inmutables.
- C. No es posible acceder al RDD envuelto por un dataframe.
- D. Al igual que los RDD, los dataframes están distribuidos en almacenamiento persistente de los nodos worker.

5. ¿Cuál de las siguientes opciones no es correcta acerca del módulo Spark Streaming?
- A. La forma de procesar los datos es en microbatches
- B. Solo tiene API para RDDs que todavía no ha sido migrada a DataFrames
- C. Gracias a Structured Streaming se puede utilizar la API estructurada definida en Spark SQL
- D. La fuente de datos más habitual cuando usamos Spark Streaming es Kafka

6. Seleccione la respuesta INCORRECTA sobre Apache Hive:
- A. Permite realizar consultas SQL sobre grandes conjuntos de datos distribuidos.
- B. Es una base de datos distribuida en un clúster Hadoop.
- C. Está indicado principalmente para pocesado OLAP (en bloque).
- D. Es una tecnología de código abierto

7. ¿Qué es lo que está replicado en Kafka?
- A. Cada topic está replicado en varios productores
- B. Cada broker está replicado en varios consumidores
- C. Cada partición está replicada en varios brokers
- D. Cada productor está replicado dentro de varios topics

8. ¿Cuál de las siguientes afirmaciones sobre Kafka es cierta?
- A. Kafka utiliza Spark como motor de ejecución
- B. Un grupo de mensajes con la misma estructura se denomina broker
- C. Es una cola distribuida para paso de mensajes de la que las aplicaciones pueden leer o escribir
- D. Las opciones B y C son correctas

9. En Impala, el proceso que lleva a cabo las consultas (las planifica, las distribuye a otras máquinas, lee y escribe datos, etc) es
- A. statestored
- B. stated
- C. catalogd
- D. impalad

10. Las transformaciones de Spark
- A. No devuelven nada
- B. Devuelven otras transformaciones.
- C. Devuelven un RDD.
- D. Devuelven un valor.

11. ¿Cómo consigue Kafka la escalabilidad?
- A. Gracias a que está soportado por HDFS el cual es intrínsecamente escalable
- B. Gracias a que utiliza Spark como motor de procesamiento, y Spark es escalable al distribuir el cómputo automáticamente
- C. Gracias a que las particiones de un topic están replicadas en varios brokers y esto permite adaptarnos a un incremento de productores o de consumidores
- D. Todas las respuestas anteriores son correctas

12. Se quiere desplegar una base de datos SQL en una plataforma de cloud computing. El equipo de desarrolladores es experto en diseño y gestión de bases de datos SQL, pero no es experto en administración de sistemas. ¿Qué opción de las disponibles sería la más adecuada?
- A. Usar un servicios IaaS.
- B. Usar un servicio PaaS.
- C. Usar un servicio SaaS.
- D. Usar un servicio on-premises.

13. Cuál de los siguientes servicios de seguridad NO ofrecen las plataformas de cloud computing estudiadas:
- A. Responsabilidad sobre los datos de la aplicación
- B. Gestión de identidad.
- C. Control de acceso.
- D. Autenticación y autorización.

14. Cuál de las siguientes NO es una ventaja de los servicios de cloud computing:
- A. Acceso físico a las máquinas que proporcionan el servicio.
- B. Elasticidad.
- C. Alta disponibilidad del servicio.
- D. Robustez ante fallos.

15. En Spark, si no cacheamos un DataFrame que utilizaremos en varias operaciones independientes ...
- A. Podríamos tardar más tiempo del estrictamente necesario
- B. Podríamos obtener resultados incorrectos
- C. Sería imposible reconstruir las particiones perdidas si falla un nodo
- D. Todas las opciones anteriores son ciertas

16. El proceso que se crea en cada nodo del cluster al arrancar una aplicación con Spark se denomina...
- A. Worker
- B. Datanode
- C. Executor
- D. Broker

17. Cuando tenemos un DataFrame de Spark en la variable mi_df y ejecutamos mi_df.write.parquet("/tmp/datos.parquet") ...
- A. Spark crea en la carpeta /tmp de HDFS tantos ficheros Parquet como particiones tenga el DataFrame
- B. Spark crea en la carpeta /tmp de HDFS un fichero Parquet llamado datos.parquet cuyo tamaño es igual al total del DataFrame
- C. Spark crea una nueva carpeta llamada /tmp/datos.parquet y dentro de ella se crean tantos ficheros distintos como particiones tenga el DataFrame
- D. Spark crea en la carpeta /tmp de HDFS un único fichero Parquet llamado datos.parquet formado por tantos bloques de HDFS como particiones tuviera el DataFrame

18. Completa la terna: Dataproc, Azure HD Insight, ...
- A. Amazon SageMaker
- B. Amazon S3
- C. Elastic Map Reduce
- D. Ninguna de las opciones anteriores es correcta

19. ¿Cuál de las siguientes situaciones no es habitual en Spark Structured Streaming?
- A. Entrenar un modelo predictivo en tiempo real
- B. Refrescar una agregación que estamos guardando en una tabla
- C. Comprobar y consolidar datos recibidos en tiempo real antes de guardarlos
- D. Todas las respuestas anteriores son habituales con Spark Structured Streaming

20. Hemos montado el Data Lake de una gran cadena de hipermercados de alcance internacional, y queremos empezar a explorarlos y aplicar analítica descriptiva y predictiva con los datos históricos. ¿Cuál de las siguientes tecnologías probablemente NO vamos a necesitar?
- A. Apache Spark
- B. Apache Kafka
- C. Apache Hive
- D. Una herramienta de Business Intelligence

### 2024 Modelo E Ordinaria

1. En el sistema de ficheros HDFS, cuando se solicita la escritura de un fichero:
- A. El namenode accede a los datanodes para escribir los bloques
- B. El namenode envía el contenido de los bloques del fichero a los datanodes
- C. El cliente envía el contenido de los bloques del fichero a namenode
- D. El cliente envía el contenido de los bloques del fichero a los datanodes

2. Para cargar datos en un dataframe de Spark, podemos:
- A. Pedir a Spark que infiera el esquema para que asigne tipos más específicos que String, si procede.
- B. No especificar esquema ni pedir a Spark que lo infiera, para obtener el tipo más adecuado para cada campo.
- C. No especificar esquema porque la inferencia de esquema que hace el propio Spark asigna el tipo correcto automáticamente sin coste de eficiencia.
- D. Especificar explícitamente y obligatoriamente el esquema para que Spark pueda cargar los datos.

3. En Impala, el proceso que lleva a cabo las consultas (las planifica, las distribuye a otras máquinas, lee y escribe datos, etc) es
- A. statestored
- B. stated
- C. catalogd
- D. impalad

4. Los mensajes que una aplicación productora envía a Kafka (seleccione la respuesta correcta):
- A. Se almacenan en el clúster de Kafka de forma indefinida y sólo se pueden borrar de forma manual.
- B. Se almacenan en memoria del clúster de Kakfa hasta que los lee el primer consumidor, y una vez leído se borran de memoria.
- C. Se almacenan en almacenamiento persistente del clúster de Kafka hasta que los lee el primer consumidor, y una vez leído se eliminan.
- D. Se almacenan en el clúster de Kafka y se eliminan tras cierto tiempo en el clúster o cuando el volumen de mensajes alcanza cierto umbral, según configuración.

5. ¿Cuál de las siguientes afirmaciones sobre Kafka es cierta?
- A. Kafka utiliza Spark como motor de ejecución
- B. Un grupo de mensajes con la misma estructura se denomina broker
- C. Es una cola distribuida para paso de mensajes de la que las aplicaciones pueden leer o escribir
- D. Las opciones B y C son correctas

6. Cuando un consumidor lee mensajes de Kafka (seleccione la respuesta correcta):
- A. Lee los mensajes en orden dentro de cada partición.
- B. Lee los mensajes en orden dentro de cada topic.
- C. Lee los mensajes en orden dentro de cada bróker.
- D. Kafka no garantiza ningún tipo de orden al consumir los mensajes.

7. La pieza VectorAssembler de MLlib:
- A. Es un estimador para entrenar modelos vectoriales como RandomForest
- B. Es un estimador genérico de algoritmos distribuidos
- C. Es un transformador que crea una nueva columna de tipo vector fusionando columnas existentes
- D. Es un transformador que codifica los valores de una variable categórica

8. Entre los servicios big data que ofrecen las plataformas de cloud computing estudiadas (elija la respuesta correcta):
- A. Todas las plataformas proporcionan Hive como servicio gestionado.
- B. Todas las plataformas proporcionan un servicio de consultas OLAP (OnLine Analytical Processing, orientado a consultas batch) gestionado.
- C. Todas las plataformas proporcionan únicamente servicios de consulta OLTP.
- D. Ninguna de las anteriores.

9. En cualquiera de las plataformas de cloud computing estudiadas, los recursos de computación se distribuyen a lo largo de todo el mundo. Elija la respuesta correcta:
- A. Cualquiera de los servicios disponibles se ejecutan siempre en los recursos de computación más cercanos al desarrollador.
- B. Se deben escoger los recursos de computación más cercanos a la ubicación del desarrollador, ya que sólo son accesibles desde localizaciones cercanas.
- C. Es recomendable elegir recursos de computación cercanos al desarrollador de la aplicación desplegada.
- D. Es aconsejable elegir recursos de computación cercanos a los usuarios finales de la aplicación desplegada.

10. Se quiere desplegar un producto big data en una plataforma de cloud computing. Por requisitos del producto, se requiere tener el mayor control posible del servidor o servidores donde se despliegue dicho producto. ¿Qué solución de las disponibles elegiría?
- A. IaaS
- B. PaaS
- C. FaaS
- D. SaaS

11. La herramienta Dataproc de Google Cloud...
- A. Permite desplegar al vuelo un cluster que trae instaladas herramientas big data como Spark, HDFS y Kafka
- B. Permite desplegar al vuelo una base de datos relacional de Google
- C. Permite descargar HDFS y Spark para instalarlos y usarlos en nuestro ordenador portátil doméstico
- D. Ninguna de las respuestas anteriores es cierta

12. Para utilizar una cola de Kafka desde el lenguaje de programación Java ...
- A. Basta descargar e importar la librería de Kafka para Java, y tener previamente Kafka instalado y corriendo en un cluster
- B. Es necesario tener instalado Spark en el mismo cluster además de Kafka
- C. Es necesario tener instalado HDFS en el mismo cluster además de Kafka
- D. No es posible utilizar Kafka desde Java; es necesario hacerlo desde Python

13. ¿Cuál de las siguientes tecnologías es más similar a BigQuery?
- A. HIVE
- B. Apache Kafka
- C. Apache Spark
- D. HDFS

14. ¿Por qué actualmente no se utilizan los RDDs en Spark?
- A. Porque el código es menos intuitivo y más propenso a errores por parte del programador, además de no estar optimizados, a diferencia de los DataFrames
- B. Porque los RDDs escriben los resultados en disco el resultado intermedio de los cálculos
- C. Porque no están disponibles en Python (pyspark), sino sólo en lenguaje Scala
- D. Las respuestas A y B son correctas

15. ¿Cuál es la mejor opción si queremos consultar mediante SQL un fichero masivo que ya existe y está almacenado en HDFS?
- A. Crear un transformer de MLlib para transformar la consulta SQL en trabajos distribuidos de Spark.
- B. Crear una tabla manejada de Hive para poder consultar el fichero de forma optimizada.
- C. Crear un cluster de Kafka para consultar los datos del fichero en tiempo real mediante SQL.
- D. Crear una tabla externa de Hive apuntando a la ubicación del fichero.

16. Cuando tenemos un DataFrame de Spark en la variable mi_df y ejecutamos mi_df.write.parquet("/tmp/datos.parquet") ...
- A. Spark crea en la carpeta /tmp de HDFS tantos ficheros Parquet como particiones tenga el DataFrame
- B. Spark crea en la carpeta /tmp de HDFS un fichero Parquet llamado datos.parquet cuyo tamaño es igual al total del DataFrame
- C. Spark crea una nueva carpeta llamada /tmp/datos.parquet y dentro de ella se crean tantos ficheros distintos como particiones tenga el DataFrame
- D. Spark crea en la carpeta /tmp de HDFS un único fichero Parquet llamado datos.parquet formado por tantos bloques de HDFS como particiones tuviera el DataFrame

17. En Spark, si no cacheamos un DataFrame que utilizaremos en varias operaciones independientes ...
- A. Podríamos tardar más tiempo del estrictamente necesario
- B. Podríamos obtener resultados incorrectos
- C. Sería imposible reconstruir las particiones perdidas si falla un nodo
- D. Todas las opciones anteriores son ciertas

18. Se quiere desplegar una base de datos SQL en una plataforma de cloud computing. El equipo de desarrolladores es experto en diseño y gestión de bases de datos SQL, pero no es experto en administración de sistemas. ¿Qué opción de las disponibles sería la más adecuada?
- A. Usar un servicios IaaS.
- B. Usar un servicio PaaS.
- C. Usar un servicio SaaS.
- D. Usar un servicio on-premises.

19. ¿Cuál de las siguientes situaciones no es habitual en Spark Structured Streaming?
- A. Entrenar un modelo predictivo en tiempo real
- B. Refrescar una agregación que estamos guardando en una tabla
- C. Comprobar y consolidar datos recibidos en tiempo real antes de guardarlos
- D. Todas las respuestas anteriores son habituales con Spark Structured Streaming

20. ¿Cómo se relacionan Spark y Kafka?
- A. Kafka puede escribir en Spark para procesar en tiempo real
- B. Spark puede escribir en Kafka datos calculados en tiempo real
- C. Spark puede leer de Kafka datos que transporta en tiempo real
- D. Las opciones B y C son correctas

### 2025 Modelo A

1. Una desventaja importante de HDFS es que ...
- A. No permite almacenar un archivo de tamaño superior al de cualquier disco duro del cluster
- B. No permite recuperar los datos que hubiese en un datanode si ese nodo se quemase
- C. Es volátil, es decir, lo que almacenan los datanodes se pierde pasado un tiempo
- D. No permite operaciones de modificación de ficheros existentes

2. ¿Cuál de las siguientes afirmaciones sobre Impala y Hive NO es cierta?
- A. Ambas herramientas ejecutan sobre Spark
- B. Ambas herramientas son compatibles con un driver ODBC para conectarnos a ellas
- C. Ambas herramientas admiten consultas en lenguaje SQL
- D. Ambas pueden consultar datos almacenados en HDFS

3. En el contexto de MapReduce, la fase "reduce" se utiliza para:
- A. Dividir los datos en bloques
- B. Ordenar los datos alfabéticamente
- C. Agrupar y agregar datos por clave
- D. Transformar los datos en pares (clave, valor)

4. Cuando tenemos un DataFrame de Spark en la variable mi_df y ejecutamos mi_df.write.parquet("/tmp/datos.parquet") ...
- A. Spark crea en la carpeta /tmp de HDFS tantos ficheros Parquet como particiones tenga el DataFrame
- B. Spark crea en la carpeta /tmp de HDFS un fichero Parquet llamado datos.parquet cuyo tamaño es igual al total del DataFrame
- C. Spark crea una nueva carpeta llamada /tmp/datos.parquet y dentro de ella se crean tantos ficheros distintos como particiones tenga el DataFrame
- D. Spark crea en la carpeta /tmp de HDFS un único fichero Parquet llamado datos.parquet formado por tantos bloques de HDFS como particiones tuviera el DataFrame

5. Hemos montado el Data Lake de una gran cadena de hipermercados de alcance internacional, y queremos empezar a explorarlos y aplicar analítica descriptiva y predictiva con los datos históricos. ¿Cuál de las siguientes tecnologías probablemente NO vamos a necesitar?
- A. Apache Spark
- B. Apache Kafka
- C. Apache Hive
- D. Una herramienta de Business Intelligence

6. ¿Cuál de los siguientes casos de uso es POCO adecuado para HDFS?
- A. Almacenar información histórica de las pólizas de una compañía aseguradora desde su creación
- B. Migrar distintas bases de datos tradicionales de una empresa de telecomunicaciones para realizar cuadros de mando sobre esos datos
- C. Almacenar la información de las pólizas de una compañía aseguradora para ser consultada por las agencias cuando interactúan con los clientes
- D. Montar el lago de datos para efectuar la analítica sobre los clientes de una empresa de energía eléctrica

7. ¿Cuál de las siguientes situaciones no es habitual en Spark Structured Streaming?
- A. Entrenar un modelo predictivo en tiempo real
- B. Refrescar una agregación que estamos guardando en una tabla
- C. Comprobar y consolidar datos recibidos en tiempo real antes de guardarlos
- D. Todas las respuestas anteriores son habituales con Spark Structured Streaming

8. ¿Cuál de las siguientes tecnologías NO es un Data warehouse?
- A. Redshift
- B. Elastic Map Reduce
- C. Synapse
- D. Big Query

9. ¿Qué caso de uso NO está indicado para Hive?
- A. Realizar una agregación en SQL sobre ficheros de la base de datos operacional (transaccional) de una empresa
- B. Escribir una ETL en SQL de creación de variables agregadas del informacional de clientes
- C. Unir en SQL datos históricos masivos de diferentes departamentos
- D. Todos los casos anteriores son adecuados para Hive

10. ¿Qué es la dependencia en las etapas de un pipeline?
- A. Los estimadores siempre deben colocarse antes que los transformadores
- B. Las columnas que una etapa necesita deben haberse generado en la etapa inmediatamente anterior
- C. Los transformadores deben colocarse antes que los estimadores
- D. Las columnas creadas por una etapa pueden ser utilizadas como entrada solo por etapa(s) poasterior(es)

11. ¿Cómo utilizaría Kafka un programador de Java?
- A. Importando la dependencia de Kafka para Java en su programa
- B. Instalando Spark e invocándolo desde Java
- C. Para utilizar Kafka es necesario hacerlo desde el lenguaje Python
- D. El programador no puede utilizar Kafka directamente sino que son las herramientas cloud quienes lo invocan

12. Si un productor en Kafka configura acks=all, ¿qué implica?
- A. Mayor latencia
- B. Mayor rendimiento
- C. Entrega más rápida de mensajes
- D. Mayor riesgo de pérdida de mensajes

13. ¿Cuál de estos servicios cumple la misma finalidad que el servicio Google Big Query?
- A. Dataproc
- B. Amazon EMR
- C. Amazon S3
- D. Amazon Redshift

14. ¿Cuál de las siguientes opciones no es correcta acerca del módulo Spark Streaming?
- A. La forma de procesar los datos es en microbatches
- B. Solo tiene API para RDDs que todavía no ha sido migrada a DataFrames
- C. Gracias a Structured Streaming se puede utilizar la API estructurada definida en Spark SQL
- D. La fuente de datos más habitual cuando usamos Spark Streaming es Kafka

15. En una plataforma de Cloud Computing podemos...
- A. Utilizar herramientas de desarrollo de software ya instaladas, y esto se conoce como IaaS
- B. Utilizar directamente las máquinas, sin nada instalado, a lo cual se le llama PaaS
- C. Utilizar software para usuarios finales ya instalado y listo para usar, y esto se conoce como SaaS
- D. Ninguna de las respuestas anteriores es correcta

### 2025 Modelo B

1. En HDFS, ¿qué fallo es menos problemático?
- A. La caída de un NameNode
- B. La caída de un DataNode
- C. La caída de todos los NameNodes
- D. Todos los fallos son igual de problemáticos

2. Elija la respuesta INCORRECTA sobre Impala:
- A. Está orientado a consultas interactivas.
- B. Está orientado a consultas en bloque.
- C. Realiza las consultas sobre su propia red de demonios.
- D. Trabaja principalmente en memoria.

3. En Spark, si no cacheamos un DataFrame que utilizaremos en varias operaciones independientes ...
- A. Podríamos tardar más tiempo del estrictamente necesario
- B. Podríamos obtener resultados incorrectos
- C. Sería imposible reconstruir las particiones perdidas si falla un nodo
- D. Todas las opciones anteriores son ciertas

4. ¿Cuál de las siguientes afirmaciones acerca de Hive y BigQuery NO es cierta?
- A. Ambos son sistemas de Data Warehouse
- B. Ambos poseen su propio motor de ejecución y no necesitan una herramienta externa para ejecutar consultas
- C. Ambas son herramientas open-source
- D. Las opciones B y C son falsas

5. Uno de los principales problemas de los RDD es que...
- A. Se ejecutan siempre en el proceso driver
- B. No permiten replicación de sus particiones
- C. Sólo pueden ser manejados desde el lenguaje Scala
- D. El programador debe conocer exactamente la estructura de los objetos que lo componen

6. Para comunicar los servicios contratados (almacenamiento, computación, base de datos...) en una plataforma de cloud computing (elija la respuesta correcta):
- A. Todos los servicios existentes en una plataforma de cloud computing para todos los usuarios de la misma están comunicados entre sí automáticamente.
- B. No es posible comunicar servicios entre sí dentro de la plataforma de cloud computing, sino que es necesario crear una red externa para comunicarlos.
- C. Cada usuario de la plataforma de cloud computing puede crear únicamente una red virtual dentro de la plataforma para conectar todos los servicios que contrate.
- D. Ninguna de las anteriores.

7. Cuál de las siguientes afirmaciones sobre los servicios de cloud computing es cierta:
- A. Están diseñadas explícitamente para resolver problemas de big data y machine learning.
- B. No son una buena elección para desarrollar aplicaciones móviles.
- C. Entre las aplicaciones que más usan servicios de cloud computing están las aplicaciones IoT (Internet of Things).
- D. Ninguna de las anteriores.

8. Cuando utilizamos herramientas de cloud computing de un proveedor, ...
- A. Los desarrolladores no pueden instalar tecnologías open-source si usan la infraestructura de ese proveedor
- B. Los desarrolladores pueden usar herramientas open-source para cualquier tarea
- C. Los desarrolladores tienen que usar los servicios PaaS de ese proveedor
- D. El desarrollo debe llevarlo a cabo un equipo de desarrolladores del proveedor

9. Se quiere ajustar un modelo predictivo de análisis de sentimiento a un conjunto masivo de textos, usando Spark MLlib. Antes de entrenar el algoritmo predictivo, es necesario pre-procesarlos (dividir en palabras, quitar palabras sin significado, y codificarlas como números). Algunas de estas operaciones son estimadores y otras son transformadores. ¿Cuál sería la manera correcta de proceder?
- A. Crear estimadores y transformadores independientes, haciendo fit o transform sobre cada uno según corresponda.
- B. Crear un pipeline sólo con los estimadores, ejecutar fit sobre el pipeline y después ejecutar transform sobre los transformadores,
- C. Crear un pipeline con todos los estimadores y transformadores necesarios, y ejecutar fit sobre el pipeline.
- D. Crear un pipeline sólo con los transformadores, ejecutar fit sobre el pipeline y después usar transform sobre los estimadores.

10. Se quiere desplegar un producto big data en una plataforma de cloud computing. Por requisitos del producto, se requiere tener el mayor control posible del servidor o servidores donde se despliegue dicho producto. ¿Qué solución de las disponibles elegiría?
- A. IaaS
- B. PaaS
- C. FaaS
- D. SaaS

11. ¿Cuál de las siguientes situaciones no es habitual en Spark Structured Streaming?
- A. Entrenar un modelo predictivo en tiempo real
- B. Refrescar una agregación que estamos guardando en una tabla
- C. Comprobar y consolidar datos recibidos en tiempo real antes de guardarlos
- D. Todas las respuestas anteriores son habituales con Spark Structured Streaming

12. Al hacer resultado_df = df.withColumn("c", F.lit(3))...
- A. Spark solo materializa df si lo habíamos marcado como cacheado antes de esta línea
- B. Spark no materializa el resultado por ser una transformación
- C. Spark materializa el resultado por ser una acción
- D. Spark materializa el resultado en el momento de hacer resultado_df.cache()

13. ¿Cuál es el servicio de Azure equivalente a Amazon S3?
- A. Azure Cognitive Services
- B. Azure DataLake Storage
- C. Azure Cosmos
- D. Azure SQL Database

14. ¿Qué implica una transformación narrow en Spark?
- A. Movimientos de datos entre nodos
- B. Uso intensivo de la memoria RAM
- C. Replicación de particiones
- D. Cada partición da lugar a otra en el mismo nodo

15. Si un productor en Kafka configura acks=all, ¿qué implica?
- A. Mayor latencia
- B. Mayor rendimiento
- C. Entrega más rápida de mensajes
- D. Mayor riesgo de pérdida de mensajes

### 2025 Modelo D

1. Una desventaja importante de HDFS es que ...
- A. No permite almacenar un archivo de tamaño superior al de cualquier disco duro del cluster
- B. No permite recuperar los datos que hubiese en un datanode si ese nodo se quemase
- C. Es volátil, es decir, lo que almacenan los datanodes se pierde pasado un tiempo
- D. No permite operaciones de modificación de ficheros existentes

2. Seleccione la respuesta correcta sobre los dataframes de Spark:
- A. Son una estructura de datos que envuelve un RDD de objetos tipo Row.
- B. Una ventaja sobre los RDD es que los dataframes no son inmutables.
- C. No es posible acceder al RDD envuelto por un dataframe.
- D. Al igual que los RDD, los dataframes están distribuidos en almacenamiento persistente de los nodos worker.

3. ¿Qué caso de uso NO está indicado para Hive?
- A. Realizar una agregación en SQL sobre ficheros de la base de datos operacional (transaccional) de una empresa
- B. Escribir una ETL en SQL de creación de variables agregadas del informacional de clientes
- C. Unir en SQL datos históricos masivos de diferentes departamentos
- D. Todos los casos anteriores son adecuados para Hive

4. ¿Qué es lo que está replicado en Kafka?
- A. Cada topic está replicado en varios productores
- B. Cada broker está replicado en varios consumidores
- C. Cada partición está replicada en varios brokers
- D. Cada productor está replicado dentro de varios topics

5. ¿Cómo consigue Kafka la escalabilidad?
- A. Gracias a que está soportado por HDFS el cual es intrínsecamente escalable
- B. Gracias a que utiliza Spark como motor de procesamiento, y Spark es escalable al distribuir el cómputo automáticamente
- C. Gracias a que las particiones de un topic están replicadas en varios brokers y esto permite adaptarnos a un incremento de productores o de consumidores
- D. Todas las respuestas anteriores son correctas

6. ¿Qué implica una transformación narrow en Spark?
- A. Movimientos de datos entre nodos
- B. Uso intensivo de la memoria RAM
- C. Replicación de particiones
- D. Cada partición da lugar a otra en el mismo nodo

7. Se quiere desplegar una base de datos SQL en una plataforma de cloud computing. El equipo de desarrolladores es experto en diseño y gestión de bases de datos SQL, pero no es experto en administración de sistemas. ¿Qué opción de las disponibles sería la más adecuada?
- A. Usar un servicios IaaS.
- B. Usar un servicio PaaS.
- C. Usar un servicio SaaS.
- D. Usar un servicio on-premises.

8. ¿Cuál es el propósito del DAG en Spark?
- A. Optimizar consultas SQL
- B. Mantener la trazabilidad y resiliencia
- C. Replicar particiones
- D. Ejecutar acciones inmediatamente

9. ¿Qué es un executor en Apache Spark?
- A. Un nodo del clúster donde se almacenan los datos
- B. Un nodo del clúster donde se procesan los datos
- C. Un proceso de la JVM que ejecuta tareas en un nodo del clúster
- D. Un conjunto de nodos que coordinan el procesamiento

10. Cuando tenemos un DataFrame de Spark en la variable mi_df y ejecutamos mi_df.write.parquet("/tmp/datos.parquet") ...
- A. Spark crea en la carpeta /tmp de HDFS tantos ficheros Parquet como particiones tenga el DataFrame
- B. Spark crea en la carpeta /tmp de HDFS un fichero Parquet llamado datos.parquet cuyo tamaño es igual al total del DataFrame
- C. Spark crea una nueva carpeta llamada /tmp/datos.parquet y dentro de ella se crean tantos ficheros distintos como particiones tenga el DataFrame
- D. Spark crea en la carpeta /tmp de HDFS un único fichero Parquet llamado datos.parquet formado por tantos bloques de HDFS como particiones tuviera el DataFrame

11. Completa la terna: Dataproc, Azure HD Insight, ...
- A. Amazon SageMaker
- B. Amazon S3
- C. Elastic Map Reduce
- D. Ninguna de las opciones anteriores es correcta

12. ¿Cuál de las siguientes situaciones no es habitual en Spark Structured Streaming?
- A. Entrenar un modelo predictivo en tiempo real
- B. Refrescar una agregación que estamos guardando en una tabla
- C. Comprobar y consolidar datos recibidos en tiempo real antes de guardarlos
- D. Todas las respuestas anteriores son habituales con Spark Structured Streaming

13. ¿Qué es la dependencia en las etapas de un pipeline?
- A. Los estimadores siempre deben colocarse antes que los transformadores
- B. Las columnas que una etapa necesita deben haberse generado en la etapa inmediatamente anterior
- C. Los transformadores deben colocarse antes que los estimadores
- D. Las columnas creadas por una etapa pueden ser utilizadas como entrada solo por etapa(s) poasterior(es)

14. ¿Cuál de las siguientes tecnologías NO es un Data warehouse?
- A. Redshift
- B. Elastic Map Reduce
- C. Synapse
- D. Big Query

15. ¿Cómo almacena la información Kafka para ser consumida?
- A. En ficheros en formato binario
- B. En el metastore
- C. En HDFS
- D. Ninguna de las repsuestas anteriores es cierta

### 2025 Modelo E

1. Los mensajes que una aplicación productora envía a Kafka (seleccione la respuesta correcta):
- A. Se almacenan en el clúster de Kafka de forma indefinida y sólo se pueden borrar de forma manual.
- B. Se almacenan en memoria del clúster de Kakfa hasta que los lee el primer consumidor, y una vez leído se borran de memoria.
- C. Se almacenan en almacenamiento persistente del clúster de Kafka hasta que los lee el primer consumidor, y una vez leído se eliminan.
- D. Se almacenan en el clúster de Kafka y se eliminan tras cierto tiempo en el clúster o cuando el volumen de mensajes alcanza cierto umbral, según configuración.

2. Cuando un consumidor lee mensajes de Kafka (seleccione la respuesta correcta):
- A. Lee los mensajes en orden dentro de cada partición.
- B. Lee los mensajes en orden dentro de cada topic.
- C. Lee los mensajes en orden dentro de cada bróker.
- D. Kafka no garantiza ningún tipo de orden al consumir los mensajes.

3. ¿Qué implica una transformación narrow en Spark?
- A. Movimientos de datos entre nodos
- B. Uso intensivo de la memoria RAM
- C. Replicación de particiones
- D. Cada partición da lugar a otra en el mismo nodo

4. Se quiere desplegar un producto big data en una plataforma de cloud computing. Por requisitos del producto, se requiere tener el mayor control posible del servidor o servidores donde se despliegue dicho producto. ¿Qué solución de las disponibles elegiría?
- A. IaaS
- B. PaaS
- C. FaaS
- D. SaaS

5. Para utilizar una cola de Kafka desde el lenguaje de programación Java ...
- A. Basta descargar e importar la librería de Kafka para Java, y tener previamente Kafka instalado y corriendo en un cluster
- B. Es necesario tener instalado Spark en el mismo cluster además de Kafka
- C. Es necesario tener instalado HDFS en el mismo cluster además de Kafka
- D. No es posible utilizar Kafka desde Java; es necesario hacerlo desde Python

6. ¿Cuál de las siguientes tecnologías es más similar a BigQuery?
- A. Apache Hive
- B. Apache Kafka
- C. Apache Spark
- D. HDFS

7. En el contexto de MapReduce, la fase "reduce" se utiliza para:
- A. Dividir los datos en bloques
- B. Ordenar los datos alfabéticamente
- C. Agrupar y agregar datos por clave
- D. Transformar los datos en pares (clave, valor)

8. ¿Por qué actualmente no se utilizan los RDDs en Spark?
- A. Porque el código es menos intuitivo y más propenso a errores por parte del programador, además de no estar optimizados, a diferencia de los DataFrames
- B. Porque los RDDs escriben los resultados en disco el resultado intermedio de los cálculos
- C. Porque no están disponibles en Python (pyspark), sino sólo en lenguaje Scala
- D. Las respuestas A y B son correctas

9. ¿Cuál de las siguientes situaciones no es habitual en Spark Structured Streaming?
- A. Entrenar un modelo predictivo en tiempo real
- B. Refrescar una agregación que estamos guardando en una tabla
- C. Comprobar y consolidar datos recibidos en tiempo real antes de guardarlos
- D. Todas las respuestas anteriores son habituales con Spark Structured Streaming

10. ¿Cómo almacena la información Kafka para ser consumida?
- A. En ficheros en formato binario
- B. En el metastore
- C. En HDFS
- D. Ninguna de las repsuestas anteriores es cierta

11. ¿Cuál de las siguientes tecnologías NO es un Data warehouse?
- A. Redshift
- B. Elastic Map Reduce
- C. Synapse
- D. Big Query

12. Al hacer resultado_df = df.withColumn("c", F.lit(3))...
- A. Spark solo materializa df si lo habíamos marcado como cacheado antes de esta línea
- B. Spark no materializa el resultado por ser una transformación
- C. Spark materializa el resultado por ser una acción
- D. Spark materializa el resultado en el momento de hacer resultado_df.cache()

13. Entre los servicios big data que ofrecen las plataformas de cloud computing estudiadas (elija la respuesta correcta):
- A. Todas las plataformas proporcionan Hive como servicio gestionado.
- B. Todas las plataformas proporcionan un servicio de consultas OLAP (OnLine Analytical Processing, orientado a consultas batch) gestionado.
- C. Todas las plataformas proporcionan únicamente servicios de consulta OLTP.
- D. Ninguna de las anteriores.

14. ¿Cuál de los siguientes elementos NO forma parte de la arquitectura de Impala?
- A. Apache Spark
- B. impalad
- C. Conector ODBC
- D. catalogd

15. En el sistema de ficheros HDFS, cuando se solicita la escritura de un fichero:
- A. El namenode accede a los datanodes para escribir los bloques
- B. El namenode envía el contenido de los bloques del fichero a los datanodes
- C. El cliente envía el contenido de los bloques del fichero a namenode
- D. El cliente envía el contenido de los bloques del fichero a los datanodes

### 2026 Marzo

1. Sobre cómo almacena HDFS los archivos más pequeños que el tamaño de bloque, seleccione la respuesta correcta:
- A. Comparte un mismo bloque de HDFS entre varios archivos pequeños para no desperdiciar espacio.
- B. Cada archivo, aunque sea pequeño, ocupa un bloque propio, pero no se desperdicia espacio por debajo de ese bloque.
- C. Los archivos más pequeños que el tamaño de bloque se almacenan únicamente en el sistema de archivos local.
- D. HDFS rellena el resto del bloque con ceros y contabiliza ese espacio como desperdiciado.

2. ¿Cuál es el propósito del DAG en Spark?
- A. Optimizar consultas SQL
- B. Mantener la trazabilidad y resiliencia
- C. Replicar particiones
- D. Ejecutar acciones inmediatamente

3. ¿Qué caso de uso NO está indicado para Hive?
- A. Realizar una agregación en SQL sobre ficheros de la base de datos operacional (transaccional) de una empresa
- B. Escribir una ETL en SQL de creación de variables agregadas del informacional de clientes
- C. Unir en SQL datos históricos masivos de diferentes departamentos
- D. Todos los casos anteriores son adecuados para Hive

4. Entre los servicios big data que ofrecen las plataformas de cloud computing estudiadas (eliija la respuesta correcta):
- A. Todas las plataformas proporcionan Hive como servicio gestionado.
- B. Todas las plataformas proporcionan un servicio de consultas OLAP (OnLine Analytical Processing, orientado a consultas batch) gestionado.
- C. Todas las plataformas proporcionan únicamente servicios de consulta OLTP.
- D. Ninguna de las anteriores.

5. En HDFS, ¿qué fallo es menos problemático?
- A. La caída de un NameNode
- B. La caída de un DataNode
- C. La caída de todos los NameNodes
- D. Todos los fallos son igual de problemáticos

6. ¿Cuál de estas afirmaciones es cierta respecto a Spark Structured Streaming?
- A. La escritura se realiza mediante spark.write
- B. Se pueden aplicar las mismas acciones de un DataFrame batch
- C. Se pueden aplicar las mismas transformaciones de un DataFrame
- D. Las opciones B y C son correctas

7. Dado un grupo de consumidores de Kafka suscritos a un topic con 3 particiones, elija la respuesta correcta:
- A. Si el grupo está compuesto por 2 consumidores, uno de las particiones se queda sin leer.
- B. Si el grupo está compuesto por 4 consumidores, uno de ellos estará inactivo.
- C. Si el grupo está compuesto por 6 consumidores, cada partición la leerán dos consumidores.
- D. Ninguna de las respuestas anteriores es correcta.

8. Los servicios de almacenamiento proporcionados por las plataformas de cloud computing estudiadas (elija la respuesta correcta):
- A. Ofrecen un servicio equivalente a un disco duro, con un almacenamiento limitado. Llegando a este límite, es necesario contratar un nuevo servicio de almacenamiento.
- B. Ofrecen un servicio equivalente a un disco duro, pero con almacenamiento ilimitado, en el que se factura por tramos de 10GB o 20GB, dependiendo de la plataforma concreta.
- C. Ofrecen un servicio equivalente a un disco duro, pero con almacenamiento ilimitado, en el que se factura según el tamaño de la iinformación almacenada en cada momento.
- D. Ninguna de las anteriores.

9. La librería Structured Streaming de Spark:
- A. Ofrece las mismas transformaciones y acciones que la API estructurada para procesado en bloque.
- B. No ofrece acciones, solo transformaciones.
- C. Ofrece una única acción y varias transformaciones equivalentes a la de la API estructurada para procesado en bloque.
- D. No ofrece transformaciones ni acciones, solo transacciones.

10. En una plataforma de Cloud Computing podemos...
- A. Utilizar herramientas de desarrollo de software ya instaladas, y esto se conoce como IaaS.
- B. Utilizar directamente las máquinas, sin nada instalado, a lo cual se le llama PaaS.
- C. Utilizar software para usuarios finales ya instalado y listo para usar, y esto se conoce como SaaS.
- D. Ninguna de las respuestas anteriores es correcta.

11. En Spark, si no cacheamos un DataFrame que utilizaremos en varias operaciones independientes...
- A. Podríamos tardar más tiempo del estrictamente necesario.
- B. Podríamos obtener resultados incorrectos
- C. Sería imposible reconstruir las particiones perdidas si falla un nodo
- D. Todas las opciones anteriores son ciertas

12. La herramienta Dataproc de Google Cloud...
- A. Permite desplegar al vuelo un clúster que trae instaladas herramientas big data como Spark, HDFS y Kafka.
- B. Permite desplegar al vuelo una base de datos relacional de Google.
- C. Permite descargar HDFS y Spark para instalarlos y usarlos en nuestro ordenador portátil doméstico.
- D. Ninguna de las anteriores es cierta.

13. Uno de los principales problemas de los RDD es que...
- A. Se ejecutan siempre en el proceso driver.
- B. No permiten replicación de sus particiones.
- C. Sólo pueden ser manejados desde el lenguaje Scala.
- D. El programador debe conocer exactamente la estructura de los objetos que lo componen.

14. El módulo Spark MLlib permite:
- A. Agrupar y calcular agregaciones por grupos en un DataFrame.
- B. Entrenar algoritmos de Machine Learning distribuidos.
- C. Preprocesamiento de variables orientado al entrenamiento posterior de un modelo.
- D. Las respuestas B y C son ciertas.

15. Elija la respuesta INCORRECTA sobre Impala:
- A. Está orientado a consultas interactivas.
- B. Está orientado a consultas en bloque.
- C. Realiza las consultas sobre su propia red de demonios.
- D. Trabaja principalmente en memoria.

### Conceptos de Desarrollo

1. ¿Sería Spark MLlib una buena opción para predecir calificaciones de 150 alumnos con datos de los últimos 10 años (aproximadamente 5000 registros)?
- A. Sí, porque MLlib es la mejor herramienta para cualquier problema de predicción
- B. No, porque el volumen de datos no es masivo y herramientas locales como scikit-learn serían más apropiadas
- C. Sí, porque MLlib funciona bien con cualquier volumen de datos
- D. No, porque MLlib solo permite clasificación, no regresión

2. ¿Qué es el shuffle de datos en un cluster de Spark?
- A. Un algoritmo de Machine Learning distribuido
- B. Un proceso de reorganización de datos entre diferentes nodos del cluster, pasando por disco duro
- C. Un tipo de replicación de datos en HDFS
- D. Un método de compresión de datos en memoria

3. En el contexto de Cloud Computing, ¿cuál es una ventaja principal para una empresa emergente con pocos clientes pero con previsión de crecimiento?
- A. Pagas un precio fijo independientemente del uso
- B. Pagas solo por lo que usas y puedes escalar fácilmente cuando el negocio crece
- C. No necesitas conexión a internet para usar los servicios
- D. Los datos se almacenan solo localmente

4. Para transcribir voz a texto en una aplicación empresarial, ¿cómo ayudaría un proveedor cloud?
- A. Proporcionando servicios de IA como APIs de speech-to-text ya entrenadas y listas para usar
- B. Solo proporcionando servidores físicos para instalar software de reconocimiento de voz
- C. Los proveedores cloud no ofrecen servicios de procesamiento de lenguaje natural
- D. Solo proporcionando almacenamiento para los archivos de audio

5. ¿Cuándo es adecuado usar Spark MLlib para entrenar un modelo predictivo?
- A. Siempre que se quiera hacer machine learning
- B. Cuando el volumen de datos es masivo y se necesita procesamiento distribuido
- C. Solo para problemas de clasificación
- D. Solo cuando los datos están en formato CSV

6. ¿Cuál es la diferencia principal entre procesado batch y procesado en streaming?
- A. No hay diferencia, son lo mismo
- B. El procesado batch trabaja con datos históricos acumulados, mientras que el streaming procesa datos conforme llegan en tiempo real
- C. El procesado batch es siempre más rápido que el streaming
- D. El streaming solo funciona con datos numéricos

7. ¿Qué tecnología se recomienda para transportar datos en tiempo real entre diferentes sistemas en un entorno big data?
- A. HDFS
- B. Apache Hive
- C. Apache Kafka
- D. Apache Impala

8. ¿En qué situación NO sería buena idea usar Spark MLlib?
- A. Analizar patrones de fraude en millones de transacciones bancarias
- B. Predecir el precio de un automóvil con un dataset de 100 registros
- C. Clasificar millones de correos electrónicos como spam o no spam
- D. Entrenar un modelo de recomendación con datos de millones de usuarios

9. ¿Qué significa que HDFS NO permite operaciones de modificación de ficheros existentes?
- A. Que no se pueden crear ficheros nuevos
- B. Que una vez escrito un fichero, no se puede editar su contenido; solo se puede añadir al final o borrarlo y reescribirlo
- C. Que no se pueden borrar ficheros
- D. Que HDFS solo permite leer ficheros

10. ¿Cuál es la razón principal para usar Cloud Computing en lugar de infraestructura on-premises?
- A. Es siempre más barato
- B. Ofrece elasticidad, escalabilidad y modelo de pago por uso sin necesidad de inversión inicial en hardware
- C. Los datos están más seguros en la nube que en un servidor local
- D. La velocidad de procesamiento es siempre mayor en la nube

11. ¿Qué papel juega el DAG (Directed Acyclic Graph) en Spark?
- A. Almacena los datos de forma persistente
- B. Mantiene la trazabilidad de las operaciones, permitiendo resiliencia ante fallos de nodos
- C. Gestiona la replicación de datos en HDFS
- D. Controla el número de consumidores en Kafka

12. ¿Por qué es importante cachear un DataFrame en Spark cuando se va a reutilizar varias veces?
- A. Para evitar errores de compilación
- B. Para evitar que Spark recalcule todo el plan de ejecución desde el origen de datos en cada acción
- C. Para guardar el DataFrame en disco permanentemente
- D. Para que Spark use menos memoria RAM

13. ¿Cuál es la diferencia entre IaaS, PaaS y SaaS?
- A. No hay diferencia, son sinónimos
- B. IaaS proporciona infraestructura (máquinas virtuales), PaaS añade herramientas de desarrollo, y SaaS proporciona software listo para usar
- C. IaaS es para almacenamiento, PaaS para computación y SaaS para redes
- D. Solo se diferencian en el precio

14. ¿Qué servicio de Google Cloud permite desplegar un cluster con Spark, HDFS y otras herramientas big data ya instaladas?
- A. Google BigQuery
- B. Google Cloud SQL
- C. Google Cloud Dataproc
- D. Google Cloud Storage

15. En un Pipeline de Spark MLlib, ¿cuál es el orden correcto de los stages si queremos discretizar, codificar con one-hot, colapsar en vector de features y entrenar un modelo?
- A. Modelo, Codificador, Discretizador, VectorAssembler
- B. Discretizador, OneHotEncoder, VectorAssembler, Modelo de regresión/clasificación
- C. VectorAssembler, Discretizador, Modelo, OneHotEncoder
- D. El orden no importa en un Pipeline

### Conceptos de PySpark

1. ¿Qué clase de Spark MLlib se usa para discretizar una variable numérica en intervalos?
- A. OneHotEncoder
- B. Bucketizer
- C. VectorAssembler
- D. StringIndexer

2. ¿Qué método se usa para entrenar un Pipeline en Spark MLlib?
- A. .transform()
- B. .predict()
- C. .fit()
- D. .train()

3. ¿Qué hace VectorAssembler en Spark MLlib?
- A. Entrena un modelo de vectores de soporte (SVM)
- B. Fusiona varias columnas en una única columna de tipo vector
- C. Codifica variables categóricas como números
- D. Divide un vector en columnas individuales

4. Al cargar un CSV con Spark, ¿qué opción indica que la primera fila contiene los nombres de las columnas?
- A. .option("schema", "true")
- B. .option("header", "true")
- C. .option("columns", "true")
- D. .option("names", "true")

5. ¿Qué opción de Spark permite que infiera automáticamente los tipos de datos de cada columna al leer un CSV?
- A. .option("autoType", "true")
- B. .option("inferSchema", "true")
- C. .option("detectTypes", "true")
- D. .option("parseTypes", "true")

6. ¿Qué hace OneHotEncoder en Spark MLlib?
- A. Convierte texto a números ordinales
- B. Codifica una variable categórica como un vector binario disperso
- C. Normaliza los valores numéricos entre 0 y 1
- D. Discretiza variables continuas en intervalos

7. ¿Qué método se usa para leer datos desde un archivo en Spark?
- A. spark.load
- B. spark.read
- C. spark.open
- D. spark.import

8. ¿Cuál es la diferencia entre un Estimador y un Transformador en Spark MLlib?
- A. No hay diferencia, son sinónimos
- B. Un Estimador requiere entrenamiento (fit) y produce un Transformador; un Transformador aplica una transformación directa sin entrenamiento
- C. Un Transformador requiere entrenamiento y un Estimador no
- D. Los Estimadores solo funcionan con datos numéricos

9. ¿Qué columna es la que típicamente se pasa como featuresCol a un modelo de Machine Learning en Spark?
- A. La columna original del dataset
- B. La columna generada por VectorAssembler que combina todas las features en un vector
- C. Cualquier columna de tipo String
- D. La columna de la variable objetivo (label)

10. ¿Qué componente de un Pipeline se encarga de unir todo el flujo de preprocesamiento y entrenamiento?
- A. VectorAssembler
- B. Pipeline con stages ordenados
- C. LinearRegression
- D. SparkSession

11. Al crear un Bucketizer con splits=[0, 900, 1800, 2400], ¿cuántos intervalos se generan?
- A. 4 intervalos
- B. 3 intervalos: [0,900), [900,1800), [1800,2400)
- C. 2 intervalos
- D. Los splits no definen intervalos

12. ¿Qué devuelve Pipeline.fit(dataframe) en Spark MLlib?
- A. Un nuevo Pipeline sin entrenar
- B. Un PipelineModel (Pipeline entrenado) listo para hacer predicciones con .transform()
- C. Un DataFrame con las predicciones
- D. Un diccionario con los resultados del entrenamiento

13. Para predecir la variable "ArrDelay" con un modelo de regresión lineal, ¿qué parámetro se usa?
- A. targetCol="ArrDelay"
- B. labelCol="ArrDelay"
- C. predictCol="ArrDelay"
- D. outputCol="ArrDelay"

14. ¿Qué formato de archivo es más eficiente para guardar DataFrames grandes en Spark?
- A. CSV
- B. TXT
- C. Parquet
- D. JSON

15. Cuando ejecutamos mi_df.write.parquet("/tmp/datos.parquet"), Spark crea:
- A. Un único archivo llamado datos.parquet
- B. Una carpeta llamada datos.parquet con tantos archivos como particiones tenga el DataFrame
- C. Una copia del DataFrame en memoria
- D. Un archivo comprimido ZIP con los datos

