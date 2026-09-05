# 🎯 Guía Estratégica de Estudio: Ingeniería para el Procesado Masivo de Datos (IPMD)

> **Documento de preparación para la Convocatoria Extraordinaria / Exámenes de IPMD**  
> *Basado en el análisis estadístico de recurrencia de exámenes 2021-2026.*

---

## 📊 1. Contexto y Análisis Estadístico del Examen

El análisis de todos los exámenes oficiales pasados revela un patrón claro: **el profesorado utiliza un banco de preguntas cerrado y altamente recurrente**.

- **Examen de 2026 (Convocatoria Ordinaria):** **18 de las 21 preguntas (85,7%)** fueron idénticas o adaptadas directamente de convocatorias anteriores (2022 a 2025).
- **Convocatoria Ordinaria vs. Extraordinaria:** En los años analizados (2022 y 2023), entre el **80% y el 89,5%** de las preguntas de la convocatoria extraordinaria provinieron directamente de los modelos de la ordinaria del mismo año y años inmediatamente previos.
- **Conclusión práctica:** Aunque no se disponga de todos los modelos de la ordinaria de 2026, **el 100% de la materia y de las preguntas clave está cubierto en el histórico de 2022 a 2025**.

---

## 💻 2. Bloque Práctico de Código PySpark (Pregunta 21)

> **Importancia:** Puntos 100% garantizados. En 2023, 2024 y 2026 ha caído **exactamente el mismo ejercicio de código**.

### 📝 Enunciado y Código Completo con los 20 Huecos Resueltos

```python
# 1. Carga del DataFrame de vuelos
flights_df = spark.read \
                  .option("header", "true") \
                  .option("inferSchema", "true") \
                  .csv("gs://contenedor/datos/flights.csv")

# 2. Discretizar la columna dep_time en [0, 900), [900, 1800), [1800, 2400)
puntos_corte = [0, 900, 1800, 2400]
discretizador = Bucketizer(splits=puntos_corte,
                           inputCol="dep_time",
                           outputCol="dep_dis")

# 3. Codificar con One-Hot la columna creada en el discretizador
codificador = OneHotEncoder(inputCol="dep_dis",
                            outputCol="dep_cod")

# 4. Colapsar en un vector la columna dep_cod y la columna Distance
colapsador = VectorAssembler(inputCols=["dep_cod", "Distance"],
                             outputCol="features")

# 5. Modelo de regresión lineal sin entrenar para predecir ArrDelay
lr = LinearRegression(featuresCol="features", 
                      labelCol="ArrDelay")

# 6. Crear el Pipeline uniendo las etapas en orden y entrenarlo
pieza = Pipeline(stages=[discretizador, codificador, colapsador, lr])
pieza_entrenada = pieza.fit(flights_df)
```

### 📋 Tabla de los 20 Huecos:
| Hueco | Código Esperado | Notas / Variaciones aceptadas |
|:---:|:---|:---|
| **1** | `read` | Método del objeto `spark` |
| **2** | `"header"` | Opción de cabecera (admite `'header'`) |
| **3** | `"inferSchema"` | Opción para inferir tipos de datos |
| **4** | `0, 900, 1800, 2400` | Lista de cortes para los intervalos |
| **5** | `Bucketizer` | Transformador para discretizar |
| **6** | `puntos_corte` | Variable con la lista de splits |
| **7** | `"dep_time"` | Columna de entrada a discretizar |
| **8** | `"dep_dis"` | Nombre de la columna discretizada |
| **9** | `OneHotEncoder` | Transformador One-Hot |
| **10** | `"dep_dis"` | Columna de entrada para codificar |
| **11** | `"dep_cod"` | Columna de salida codificada |
| **12** | `VectorAssembler` | Transformador para juntar variables en vector |
| **13** | `["dep_cod", "Distance"]` | Lista con las 2 columnas a ensamblar |
| **14** | `"features"` | Columna de salida del vector ensamblado |
| **15** | `"features"` | Variable predictora (features) en el modelo |
| **16** | `"ArrDelay"` | Variable objetivo (label) a predecir |
| **17** | `Pipeline` | Clase para encadenar las etapas |
| **18** | `[discretizador, codificador, colapsador, lr]` | Lista ordenada de los estimadores/transformadores |
| **19** | `pieza` | Instancia del Pipeline sin entrenar |
| **20** | `fit` | Método para entrenar el pipeline sobre el DataFrame |

---

## 📝 3. Las 10 Preguntas Clave de Desarrollo (Ensayo Breve)

> **Importancia:** En 2026, **las 5 preguntas de desarrollo (100%)** salieron directamente de esta lista de 10 preguntas.

---

### 1. Predicción de notas de 150 alumnos con Spark MLlib
* **Pregunta:** Se dispone del histórico de calificaciones de 150 alumnos por convocatoria durante 10 años. ¿Es buena idea usar Spark MLlib para predecir la nota final?
* **Respuesta Clave:** **NO es buena idea**.
* **Justificación:** El volumen total (~5.000 registros: 150 alumnos x 2 convocatorias x 10 años) es un volumen pequeño/local, no Big Data. Spark MLlib introduce sobrecoste y complejidad de clúster innecesaria. Es más eficiente y rápido usar librerías locales de Python como `scikit-learn` o R.

---

### 2. Creación de Empresa de Marketing y Ayuda de la Nube (Hoy vs. Dentro de 1 año)
* **Pregunta:** Una empresa de procesamiento de datos de marketing prevé multiplicar por 10 su volumen de clientes en un año. ¿Cómo ayuda el Cloud (a) hoy y (b) dentro de un año?
* **Respuesta Clave:**
  * **(a) Hoy (Pocos datos):** Permite arrancar sin inversión inicial en servidores (CapEx cero) gracias al modelo de **pago por uso** (solo se paga por los pocos recursos utilizados).
  * **(b) En un año (Crecimiento x10):** Permite **escalabilidad y elasticidad inmediata**, ampliando la capacidad de cómputo y almacenamiento con unos clics sin migrar infraestructura.

---

### 3. Transcripción de Voz a Texto en Cloud
* **Pregunta:** Diseñando una app empresarial que necesita transcribir voz a texto, ¿cómo puede ayudar un proveedor Cloud?
* **Respuesta Clave:** Utilizando **servicios gestionados de IA (SaaS/PaaS)** como *Google Cloud Speech-to-Text* o *Amazon Transcribe*. Proporcionan APIs listas para consumir sin necesidad de diseñar, entrenar ni mantener modelos propios ni infraestructura. Si es en tiempo real, se integra con Kafka y Spark Streaming (Dataproc/EMR).

---

### 4. Dos Casos Concretos de MLlib (Uno SÍ y otro NO)
* **Pregunta:** Explicar dos casos concretos de modelos predictivos justificando dónde SÍ y dónde NO usar Spark MLlib.
* **Respuesta Clave:**
  * **Caso NO recomendado:** Predicción de precios de coches usados sobre un dataset de 500 filas. Al ser datos pequeños y locales, `scikit-learn` es más simple y eficiente.
  * **Caso SÍ recomendado:** Detección de fraude en transacciones bancarias o análisis de clics en comercio electrónico en tiempo real con millones de registros. Se requiere procesamiento distribuido masivo en memoria.

---

### 5. Concepto de Shuffle de Datos en un Clúster
* **Pregunta:** Explicar el concepto de shuffle de datos en un clúster de ordenadores.
* **Respuesta Clave:** Es el proceso de **reorganización y redistribución de datos entre distintos nodos del clúster**. Implica escritura/lectura en el disco duro de los nodos y transferencia masiva por red. Se produce al ejecutar transformaciones que requieren agrupar por clave (como `groupBy`, `join`, `reduceByKey`).

---

### 6. Entrenamiento con Datos en Tiempo Real (Calidad del aire / Sensores IoT / Fraude)
* **Pregunta:** Sensores IoT envían datos en tiempo real. ¿Cómo se entrena un modelo predictivo teniendo en cuenta que no se puede entrenar dato a dato (*online learning*)?
* **Respuesta Clave:** Los flujos en tiempo real se ingieren mediante **Apache Kafka** y se almacenan temporalmente o en HDFS/Data Lake. El entrenamiento del modelo se realiza **periódicamente en bloque (batch)** con **Spark MLlib** sobre el histórico acumulado, no dato a dato en tiempo real.

---

### 7. HDFS para Datos Médicos de un Hospital o Contabilidad Pequeña
* **Pregunta:** ¿Por qué HDFS NO es adecuado para almacenar datos médicos de pacientes de un hospital comarcal?
* **Respuesta Clave:**
  1. Requiere acceso interactivo y puntual (OLTP/transaccional por paciente), mientras que HDFS está pensado para procesamiento masivo en bloque (Batch) *write-once, read-many*.
  2. Los archivos pequeños generan una enorme penalización en la memoria RAM del NameNode por saturación de metadatos.

---

### 8. Diferencias entre IaaS, PaaS y SaaS en Big Data
* **Pregunta:** Explicar las diferencias y dar un ejemplo Big Data de cada una.
* **Respuesta Clave:**
  * **IaaS (Infraestructura):** Máquinas virtuales puras donde el usuario instala todo el software (ej. *AWS EC2*, *Google Compute Engine*).
  * **PaaS (Plataforma):** Entornos de ejecución gestionados donde la infraestructura viene configurada (ej. *Google Cloud Dataproc*, *Amazon EMR* para clústeres Spark/Hadoop).
  * **SaaS (Software):** Aplicaciones listas para usar directamente por el usuario final (ej. *Google BigQuery*, *Snowflake*, *Office 365*).

---

### 9. Sustituir Base de Datos por HDFS en Business Intelligence manteniendo Cuadros de Mando
* **Pregunta:** Una empresa migra su BD a HDFS por gran volumen de datos. ¿Cómo hacer que las herramientas de BI sigan funcionando con SQL?
* **Respuesta Clave:** Instalando **Apache Hive** (o **Impala**) sobre HDFS. Se crean tablas externas mapeadas a los archivos de HDFS. Las herramientas de BI se conectan mediante drivers JDBC/ODBC a Hive, ejecutando consultas SQL estándar sin cambiar los cuadros de mando.

---

### 10. Regiones y Zonas en Proveedores Cloud
* **Pregunta:** Explicar qué son regiones y zonas en Cloud y cómo lograr la máxima tolerancia a fallos.
* **Respuesta Clave:** Una **Región** es un área geográfica independiente (ej. `europe-west1`). Una **Zona** (o *Availability Zone*) es un centro de datos aislado dentro de una región. La máxima tolerancia a fallos se logra desplegando recursos con redundancia **multi-zona** o **multi-región** para que la caída de un datacenter no afecte al servicio.

---

## 🎯 4. Bloque Tipo Test: Preguntas "Comodín" de Alta Recurrencia

Estas preguntas han aparecido entre **4 y 8 veces** en los exámenes pasados:

| Pregunta / Concepto | Respuesta Correcta |
|:---|:---|
| **No cachear un DataFrame reutilizado** | Se tardará más tiempo del necesario (Spark lo recalcula desde el origen en cada acción). |
| **Respuesta INCORRECTA sobre Impala** | "Está orientado a consultas en bloque" (Falso: Impala está orientado a consultas interactivas en memoria). |
| **Configuración `acks=all` en Kafka** | Implica mayor latencia pero mínima probabilidad de pérdida de mensajes. |
| **Transformación Narrow en Spark** | Cada partición da lugar a otra en el mismo nodo (no requiere shuffle de datos por la red). |
| **Propósito del DAG en Spark** | Mantener la trazabilidad, optimizar la ejecución con Catalyst y garantizar la resiliencia/reconstrucción ante fallos. |
| **Servicio de Azure equivalente a Amazon S3** | *Azure Data Lake Storage* (ADLS / Blob Storage). |
| **Terna Dataproc, Azure HDInsight...** | *Amazon EMR* (Elastic MapReduce). |
| **En HDFS, qué fallo es menos problemático** | La caída de un DataNode (debido a la replicación de bloques por defecto x3). |
| **Escribir `df.write.parquet("/tmp/datos.parquet")`** | Spark crea una carpeta llamada `/tmp/datos.parquet` con tantos ficheros Parquet como particiones tenga el DataFrame. |

---

## 📋 5. Plan de Acción Recomendado con la App

1. **Simulacros de Examen Completo (19 preguntas):**
   - Realizar 3 a 5 exámenes simulados diarios en la aplicación.
   - Practicar los 20 huecos de código de la pregunta 19 en cada intento.
2. **Uso del Modo Repaso:**
   - Acceder periódicamente al **Modo Repaso** para limpiar el registro de preguntas falladas.
3. **Revisión de Ensayos:**
   - Al finalizar cada test, comparar la redacción escrita contra los **Puntos Clave** obligatorios de la Respuesta Modelo.
