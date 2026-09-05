# 🕵️ Análisis de Erratas: Ingeniería para el Procesado Masivo de Datos (IPMD)

Tras realizar un análisis técnico exhaustivo en paralelo sobre las **443 preguntas** de los **26 exámenes** (contrastando las opciones disponibles, los enunciados y la solución indicada actualmente), se han detectado **29 erratas** donde la solución marcada es incorrecta a nivel técnico.

A continuación, se detalla cada errata agrupada por examen, explicando por qué la opción original es incorrecta y cuál debe ser la respuesta correcta.

---

### 📝 2021 Modelo A
- **Pregunta 5**: Seleccione la respuesta INCORRECTA sobre los dataframes de Spark.
  - ❌ *Solución Marcada*: B. Una tabla de datos similar a la de una base de datos relacional pero distribuida en la memoria RAM de los executors.
  - ✅ **Solución Correcta**: **C. Un tipo especial de fichero manejado por Spark.**
  - 💡 *Justificación*: La pregunta pide la afirmación INCORRECTA. La opción B define perfectamente qué es un DataFrame, por tanto es una afirmación correcta. Un DataFrame NO es un tipo especial de fichero, por lo que la afirmación C es la incorrecta (la respuesta a marcar).

### 📝 2022 Modelo A Ordinaria
- **Pregunta 6**: ¿Qué componente NO forma parte de la arquitectura de Apache Hive?
  - ❌ *Solución Marcada*: B. Un compilador.
  - ✅ **Solución Correcta**: **C. Un motor de procesamiento distribuido propio.**
  - 💡 *Justificación*: Hive posee un compilador para traducir HQL. Sin embargo, no tiene un motor distribuido propio; delega el procesamiento en MapReduce, Tez o Spark.
- **Pregunta 13**: Cuando un consumidor lee mensajes de Kafka (seleccione la respuesta correcta):
  - ❌ *Solución Marcada*: B. Lee los mensajes en orden dentro de cada topic.
  - ✅ **Solución Correcta**: **A. Lee los mensajes en orden dentro de cada partición.**
  - 💡 *Justificación*: Apache Kafka sólo garantiza el orden de los mensajes dentro de una **partición**, no globalmente a nivel de todo el topic.

### 📝 2022 Modelo A Extraordinaria
- **Pregunta 13**: Cuando un consumidor lee mensajes de Kafka...
  - ❌ *Solución Marcada*: B. Lee los mensajes en orden dentro de cada topic.
  - ✅ **Solución Correcta**: **A. Lee los mensajes en orden dentro de cada partición.**
  - 💡 *Justificación*: Igual que en la convocatoria Ordinaria.

### 📝 2022 Modelo C Ordinaria
- **Pregunta 1**: De los siguientes comandos de HDFS, ¿cuál permite listar los ficheros...
  - ❌ *Solución Marcada*: D. hdfs dfs -ls /movies 2 . ¿Qué componente de HDFS puede ser un punto único de fallo (SPOF)?
  - ✅ **Solución Correcta**: **D. hdfs dfs -ls /movies**
  - 💡 *Justificación*: Hubo un error de formato al parsear el documento original, fusionando el texto de la Pregunta 2 dentro de la respuesta D de la Pregunta 1.

### 📝 2022 Modelo C Extraordinaria
- **Pregunta 1**: De los siguientes comandos de HDFS...
  - ❌ *Solución Marcada*: D. hdfs dfs -ls /movies 2 . ¿Qué componente de HDFS puede ser un punto único de fallo (SPOF)?
  - ✅ **Solución Correcta**: **D. hdfs dfs -ls /movies**
  - 💡 *Justificación*: Mismo error de formato que en la convocatoria Ordinaria.
- **Pregunta 11**: Para comunicar los servicios contratados en una plataforma de cloud computing...
  - ❌ *Solución Marcada*: A. Todos los servicios existentes en una plataforma de cloud computing para todos los usuarios de la misma están comunicados entre sí automáticamente.
  - ✅ **Solución Correcta**: **D. Ninguna de las anteriores.**
  - 💡 *Justificación*: Los servicios de diferentes tenants (usuarios) nunca se comunican automáticamente por aislamiento de red y seguridad. Incluso los servicios de un mismo usuario suelen requerir configuración explícita de red (VPCs, firewalls). 

### 📝 2023 Modelo D Ordinaria
- **Pregunta 2**: En el sistema de ficheros HDFS, cuando se solicita la lectura de un fichero:
  - ❌ *Solución Marcada*: C. Es el namenode quien proporciona los bloques del fichero al cliente.
  - ✅ **Solución Correcta**: **B. Es el namenode quien proporciona los metadatos al cliente.**
  - 💡 *Justificación*: En HDFS, el NameNode no almacena ni proporciona los datos (bloques). Proporciona los metadatos de ubicación, y el cliente va directamente a los DataNodes a leer los bloques.

### 📝 2024 Modelo A Ordinaria
- **Pregunta 8**: Cuando un consumidor lee mensajes de Kafka...
  - ❌ *Solución Marcada*: B. Lee los mensajes en orden dentro de cada topic.
  - ✅ **Solución Correcta**: **A. Lee los mensajes en orden dentro de cada partición.**
  - 💡 *Justificación*: El orden sólo se asegura a nivel de partición.

### 📝 2024 Modelo D Ordinaria
- **Pregunta 1**: En el sistema de ficheros HDFS, cuando se solicita la lectura de un fichero:
  - ❌ *Solución Marcada*: C. Es el namenode quien proporciona los bloques del fichero al cliente.
  - ✅ **Solución Correcta**: **B. Es el namenode quien proporciona los metadatos al cliente.**

### 📝 2024 Modelo E Ordinaria
- **Pregunta 6**: Cuando un consumidor lee mensajes de Kafka...
  - ❌ *Solución Marcada*: B. Lee los mensajes en orden dentro de cada topic.
  - ✅ **Solución Correcta**: **A. Lee los mensajes en orden dentro de cada partición.**
- **Pregunta 8**: Entre los servicios big data que ofrecen las plataformas de cloud computing estudiadas...
  - ❌ *Solución Marcada*: D. Ninguna de las anteriores.
  - ✅ **Solución Correcta**: **B. Todas las plataformas proporcionan un servicio de consultas OLAP sobre grandes volúmenes de datos puramente gestionado.**
  - 💡 *Justificación*: Plataformas como GCP (BigQuery), AWS (Redshift) y Azure (Synapse) proveen este servicio gestionado.

### 📝 2025 Modelo A
- **Pregunta 1**: Una desventaja importante de HDFS es que ...
  - ❌ *Solución Marcada*: A. No permite almacenar un archivo de tamaño superior al de cualquier disco duro del cluster.
  - ✅ **Solución Correcta**: **D. No permite operaciones de modificación de ficheros existentes.**
  - 💡 *Justificación*: HDFS sí permite archivos enormes porque los divide en bloques. Sin embargo, los ficheros son inmutables (append-only), lo que es su mayor desventaja operativa frente a un sistema tradicional.
- **Pregunta 3**: En el contexto de MapReduce, la fase "reduce" se utiliza para:
  - ❌ *Solución Marcada*: D. Transformar los datos en pares (clave, valor)
  - ✅ **Solución Correcta**: **C. Agrupar y agregar datos por clave.**
  - 💡 *Justificación*: Transformar en (clave, valor) lo hace la fase *map*. Agregarlos lo hace *reduce*.
- **Pregunta 4**: Cuando tenemos un DataFrame de Spark y lo guardamos con `.write.parquet(...)` ...
  - ❌ *Solución Marcada*: B. Spark crea en la carpeta de HDFS un fichero Parquet cuyo tamaño es igual al total del DataFrame.
  - ✅ **Solución Correcta**: **C. Spark crea una nueva carpeta y dentro de ella se crean tantos ficheros distintos como particiones tenga el DataFrame.**
  - 💡 *Justificación*: Spark guarda de forma distribuida generando un directorio con ficheros `part-0000X`.
- **Pregunta 5**: Hemos montado el Data Lake de una gran cadena... ¿Cuál de las siguientes tecnologías probablemente NO vamos a necesitar?
  - ❌ *Solución Marcada*: C. Apache Hive
  - ✅ **Solución Correcta**: **B. Apache Kafka**
  - 💡 *Justificación*: Si el escenario habla de un repositorio puramente analítico, descriptivo o histórico (Data Lake clásico), Hive/Spark son obligatorios y Kafka, que es para streaming en tiempo real, podría no ser necesario.

### 📝 2025 Modelo B
- **Pregunta 1**: En HDFS, ¿qué fallo es menos problemático?
  - ❌ *Solución Marcada*: A. La caída de un NameNode.
  - ✅ **Solución Correcta**: **B. La caída de un DataNode.**
  - 💡 *Justificación*: El NameNode es un Single Point of Failure (SPOF) crítico. Los DataNodes están replicados, por lo que su caída no detiene el cluster ni pierde datos.
- **Pregunta 3**: En Spark, si no cacheamos un DataFrame que utilizaremos en varias operaciones independientes ...
  - ❌ *Solución Marcada*: B. Podríamos obtener resultados incorrectos.
  - ✅ **Solución Correcta**: **A. Podríamos tardar más tiempo del estrictamente necesario.**
  - 💡 *Justificación*: Spark recalcula el linaje (recompute) si no está cacheado, lo que afecta al rendimiento pero no a la corrección del resultado.
- **Pregunta 5**: Uno de los principales problemas de los RDD es que...
  - ❌ *Solución Marcada*: A. Se ejecutan siempre en el proceso driver.
  - ✅ **Solución Correcta**: **D. El programador debe conocer exactamente la estructura de los objetos que lo componen.**
  - 💡 *Justificación*: Los RDD se ejecutan en los executors de forma distribuida. El problema real es que, al carecer de un esquema, exigen más programación manual y propensión a errores (a diferencia de un DataFrame que tiene Schema estricto).

### 📝 2025 Modelo D
- **Pregunta 1**: Una desventaja importante de HDFS es que ...
  - ❌ *Solución Marcada*: C. Es volátil, es decir, lo que almacenan los datanodes se pierde pasado un tiempo.
  - ✅ **Solución Correcta**: **D. No permite operaciones de modificación de ficheros existentes.**
- **Pregunta 3**: ¿Qué caso de uso NO está indicado para Hive?
  - ❌ *Solución Marcada*: D. Todos los casos anteriores son adecuados para Hive.
  - ✅ **Solución Correcta**: **A. Realizar una agregación en SQL sobre ficheros de la base de datos operacional (transaccional) de una empresa.**
  - 💡 *Justificación*: Hive está diseñado para analítica OLAP y batch, no debe tocar datos transaccionales de baja latencia ni operar directamente sobre la BB.DD operacional.
- **Pregunta 4**: ¿Qué es lo que está replicado en Kafka?
  - ❌ *Solución Marcada*: B. Cada broker está replicado en varios consumidores.
  - ✅ **Solución Correcta**: **C. Cada partición está replicada en varios brokers.**
- **Pregunta 5**: ¿Cómo consigue Kafka la escalabilidad?
  - ❌ *Solución Marcada*: A. Gracias a que está soportado por HDFS el cual es intrínsecamente escalable.
  - ✅ **Solución Correcta**: **C. Gracias a que las particiones de un topic están replicadas en varios brokers.**

### 📝 2025 Modelo E
- **Pregunta 1**: Los mensajes que una aplicación productora envía a Kafka:
  - ❌ *Solución Marcada*: B. Se almacenan en memoria del clúster de Kakfa hasta que los lee el primer consumidor, y una vez leído se borran de memoria.
  - ✅ **Solución Correcta**: **D. Se almacenan en el clúster de Kafka y se eliminan tras cierto tiempo en el clúster o cuando el volumen de mensajes alcanza cierto umbral, según configuración.**
  - 💡 *Justificación*: Kafka retiene los mensajes en disco basado en una política de retención (tiempo/tamaño), no los borra al leerlos.
- **Pregunta 2**: Cuando un consumidor lee mensajes de Kafka...
  - ❌ *Solución Marcada*: D. Kafka no garantiza ningún tipo de orden al consumir los mensajes.
  - ✅ **Solución Correcta**: **A. Lee los mensajes en orden dentro de cada partición.**
- **Pregunta 3**: ¿Qué implica una transformación narrow en Spark?
  - ❌ *Solución Marcada*: B. Uso intensivo de la memoria RAM.
  - ✅ **Solución Correcta**: **D. Cada partición da lugar a otra en el mismo nodo.**
  - 💡 *Justificación*: Narrow transformations (ej. `map()`, `filter()`) no requieren shuffle en red, la partición hija se computa directamente de la padre en el mismo executor.
- **Pregunta 5**: Para utilizar una cola de Kafka desde el lenguaje de programación Java...
  - ❌ *Solución Marcada*: D. No es posible utilizar Kafka desde Java; es necesario hacerlo desde Python.
  - ✅ **Solución Correcta**: **A. Basta descargar e importar la librería de Kafka para Java.**
  - 💡 *Justificación*: Kafka está de hecho implementado nativamente en Java y Scala.
- **Pregunta 8**: ¿Por qué actualmente no se utilizan los RDDs en Spark?
  - ❌ *Solución Marcada*: D. Las respuestas A y B son correctas.
  - ✅ **Solución Correcta**: **A. Porque el código es menos intuitivo y más propenso a errores por parte del programador, además de no estar optimizados, a diferencia de los DataFrames.**
  - 💡 *Justificación*: La B es falsa ya que RDD también computa en RAM igual que un DataFrame, pero no goza del motor de optimización *Catalyst* ni *Tungsten*.
- **Pregunta 12**: Al hacer `resultado_df = df.withColumn("c", F.lit(3))`...
  - ❌ *Solución Marcada*: D. Spark materializa el resultado en el momento de hacer resultado_df.cache().
  - ✅ **Solución Correcta**: **B. Spark no materializa el resultado por ser una transformación.**
  - 💡 *Justificación*: El cache() es lazy. Spark sólo materializa el resultado cuando se ejecuta una **acción** (count, show, write), no una transformación ni un cache().

---
*Análisis finalizado con 29 anomalías de 443 preguntas (un margen de error original del ~6.5%).*
