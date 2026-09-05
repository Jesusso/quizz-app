/**
 * Essay / Open-ended development questions with model answers and key evaluation points.
 */
export const ESSAY_QUESTIONS = [
  {
    id: 'ipmd-essay-1',
    subjectId: 'ipmd',
    examName: 'Hadoop Ensayo (2026)',
    text: 'Se dispone del histórico de calificaciones de evaluacion continua (tests, tareas, examen) de 150 alumnos por convocatoria durante 10 años. Se desea predecir la calificación del examen final. Razone si Spark MLlib sería o no una buena elección y para qué la utilizaría.',
    maxLines: 4,
    modelAnswer: 'Spark MLlib NO sería una buena elección. El volumen total de datos es de apenas ~5.000 registros (150 alumnos x 2 convocatorias x 10 años), por lo que no es un problema de datos masivos (Big Data). MLlib está diseñado para procesamiento distribuido. Para este volumen, librerías locales como scikit-learn en Python o R son más rápidas y sencillas.',
    keyPoints: [
      'El volumen de datos (~5.000 registros) es pequeño/local, no masivo.',
      'Spark MLlib añade complejidad y sobrecoste de cluster innecesario para datasets pequeños.',
      'Herramientas locales como scikit-learn son la opción apropiada.'
    ]
  },
  {
    id: 'ipmd-essay-2',
    subjectId: 'ipmd',
    examName: 'Hadoop Ensayo (2026)',
    text: 'Imagine que tiene un perfil de desarrollador de software empresarial. Su aplicación requiere transcribir la voz del usuario a texto. Elija un proveedor cloud e indique cómo podría ayudarle a resolver este problema.',
    maxLines: 4,
    modelAnswer: 'Se pueden utilizar los servicios gestionados de IA (SaaS/PaaS) del proveedor cloud, como Google Cloud Speech-to-Text o Amazon Transcribe. Estos servicios proporcionan APIs preentrenadas listas para usar sin necesidad de entrenar modelos ni gestionar infraestructura. Si los audios llegan en tiempo real, se pueden integrar con Kafka y Spark Streaming en Dataproc/EMR.',
    keyPoints: [
      'Uso de servicios gestionados de IA (Google Speech-to-Text / Amazon Transcribe).',
      'Acceso mediante APIs listas para usar sin entrenar modelos propios.',
      'Integración con streaming (Kafka / Spark Streaming) si es en tiempo real.'
    ]
  },
  {
    id: 'ipmd-essay-3',
    subjectId: 'ipmd',
    examName: 'Hadoop Ensayo (2026)',
    text: 'Explicar el concepto de shuffle de datos en un clúster de ordenadores.',
    maxLines: 2,
    modelAnswer: 'Es un proceso de reorganización y redistribución de los datos entre los distintos nodos del clúster. Implica la escritura y lectura de datos en el disco duro del emisor y receptor y transferencia por red. Se desencadena con operaciones de agrupación o cruce como GroupBy, Join o ReduceByKey.',
    keyPoints: [
      'Reorganización y movimiento de datos entre nodos del clúster.',
      'Paso obligatorio de lectura/escritura por disco e intercambio por red.',
      'Causado por transformaciones de agrupación/cruce (GroupBy, Join, Reduce).'
    ]
  },
  {
    id: 'ipmd-essay-4',
    subjectId: 'ipmd',
    examName: 'Hadoop Ensayo (2026)',
    text: 'Explicar dos casos de uso CONCRETOS de ajuste de un modelo predictivo: uno donde NO sea buena idea usar Spark MLlib y otro donde SÍ sea buena idea, justificando la elección en cada caso.',
    maxLines: 7,
    modelAnswer: 'CASO NO RECOMENDADO: Predicción del precio de automóviles usados con un dataset de 500 registros. Al ser un volumen pequeño, scikit-learn en local es más eficiente y sencillo sin la sobrecarga de Spark.\n\nCASO RECOMENDADO: Detección de fraudes en tiempo real analizando millones de transacciones de tarjetas bancarias. Spark MLlib es ideal porque permite procesar y entrenar modelos sobre grandes volúmenes de datos de forma distribuida y en streaming con baja latencia.',
    keyPoints: [
      'Caso NO MLlib: Dataset pequeño / local (scikit-learn es mejor).',
      'Caso SÍ MLlib: Datos masivos / tiempo real / procesamiento distribuido.',
      'Justificación basada en el volumen de datos y la arquitectura distribuida.'
    ]
  },
  {
    id: 'ipmd-essay-5',
    subjectId: 'ipmd',
    examName: 'Hadoop Ensayo (2026)',
    text: 'Acaba de crear una empresa de procesamiento de datos de marketing. Actualmente tiene pocos clientes, pero prevé multiplicar por 10 su volumen en un año. Explique por qué razones pueden ayudarle los proveedores Cloud (a) hoy, y (b) dentro de un año.',
    maxLines: 4,
    modelAnswer: '(a) HOY: Permiten empezar sin inversión inicial en hardware (CapEx cero) gracias al modelo de pago por uso, pagando únicamente por la pequeña infraestructura que se utilice.\n(b) DENTRO DE UN AÑO: La elasticidad de la nube permite escalar la infraestructura inmediatamente al multiplicar x10 la demanda, aumentando servidores o capacidad de cómputo con unos pocos clics.',
    keyPoints: [
      'Hoy: Modelo de pago por uso sin inversión inicial en hardware.',
      'Dentro de 1 año: Escalabilidad elástica e inmediata para absorber el crecimiento x10.',
      'Flexibilidad para ajustar costes según la demanda real en cada momento.'
    ]
  },
  {
    id: 'ipmd-essay-6',
    subjectId: 'ipmd',
    examName: 'Hadoop Ensayo (2024)',
    text: 'Explicar la diferencia entre las arquitecturas IaaS, PaaS y SaaS en Cloud Computing poniendo un ejemplo concreto de servicio de Big Data para cada una.',
    maxLines: 6,
    modelAnswer: 'IaaS (Infraestructura): Proporciona máquinas virtuales puras donde el usuario configura el SO y software (ej. instancias AWS EC2 o Google Compute Engine).\nPaaS (Plataforma): Proporciona plataformas de desarrollo/ejecución gestionadas (ej. Google Cloud Dataproc o AWS EMR para Spark/Hadoop).\nSaaS (Software): Proporciona aplicaciones para usuario final listas para usar (ej. Google BigQuery o Snowflake para consultas SQL analíticas).',
    keyPoints: [
      'IaaS: Máquinas virtuales (AWS EC2 / GCE).',
      'PaaS: Entornos gestionados de ejecución (Dataproc / EMR).',
      'SaaS: Software final gestionado sin administrar infraestructura (BigQuery).'
    ]
  },
  {
    id: 'ipmd-essay-7',
    subjectId: 'ipmd',
    examName: 'Hadoop Ensayo (2023)',
    text: 'Describa qué es el motor Catalyst en Apache Spark y cuál es su papel cuando utilizamos la API de DataFrames frente a los RDDs.',
    maxLines: 4,
    modelAnswer: 'Catalyst es el optimizador de consultas extensible de Spark SQL. Cuando se utiliza la API estructurada (DataFrames/SQL), Catalyst analiza el código, construye un árbol de sintaxis abstracta y genera un plan de ejecución lógico y físico altamente optimizado antes de ejecutarlo. Los RDDs no se benefician de Catalyst porque contienen código Python/Scala opaco para el motor.',
    keyPoints: [
      'Catalyst es el motor de optimización de consultas de Spark SQL.',
      'Crea planes de ejecución lógicos y físicos optimizados para DataFrames.',
      'Los RDDs no aprovechan Catalyst porque Spark no puede inspeccionar su contenido.'
    ]
  },
  {
    id: 'ipmd-essay-8',
    subjectId: 'ipmd',
    examName: 'Hadoop Ensayo (2023)',
    text: 'Explique la arquitectura de almacenamiento de HDFS identificando el rol del NameNode, DataNodes y cómo se garantiza la tolerancia a fallos.',
    maxLines: 5,
    modelAnswer: 'NameNode: Nodo maestro que almacena los metadatos de la estructura de directorios y la ubicación de los bloques de cada archivo en la memoria RAM.\nDataNodes: Nodos worker que almacenan físicamente los bloques de datos (por defecto de 128 MB) en sus discos locales.\nTolerancia a fallos: Se logra mediante la replicación automática de cada bloque (por defecto 3 réplicas distribuidas en diferentes nodos/racks).',
    keyPoints: [
      'NameNode: Metadatos y mapa de bloques en memoria maestro.',
      'DataNodes: Almacenamiento físico de los bloques de datos.',
      'Tolerancia a fallos: Replicación de bloques (factor de réplica por defecto = 3).'
    ]
  },
  {
    id: 'ipmd-essay-9',
    subjectId: 'ipmd',
    examName: 'Hadoop Ensayo (2022)',
    text: '¿Por qué las transformaciones en Spark son "perezosas" (lazy evaluation) y qué ventajas ofrece este comportamiento?',
    maxLines: 4,
    modelAnswer: 'La evaluación perezosa significa que Spark no ejecuta las transformaciones inmediatamente cuando se definen, sino que las va registrando en un grafo acíclico dirigido (DAG). Solo se ejecutan cuando se invoca una Acción (como count, collect, write). La ventaja principal es que permite al optimizador Catalyst analizar todo el flujo completo de transformaciones y optimizar la ejecución (combinando filtros, evitando pasadas innecesarias por los datos).',
    keyPoints: [
      'Las transformaciones no se ejecutan hasta que se llama a una Acción.',
      'Construyen un DAG de operaciones en memoria.',
      'Permite optimizar globalmente el plan de ejecución antes de procesar los datos.'
    ]
  },
  {
    id: 'ipmd-essay-10',
    subjectId: 'ipmd',
    examName: 'Hadoop Ensayo (2022)',
    text: 'Explique qué es Apache Kafka, indicando el rol de los Productores, Consumidores, Topics y Particiones.',
    maxLines: 5,
    modelAnswer: 'Apache Kafka es una plataforma distribuida de transmisión de eventos (mensajería pub/sub).\nTopics: Canales o categorías donde se publican los mensajes.\nParticiones: Divisiones de un topic repartidas entre los brokers para permitir paralelismo y escalabilidad.\nProductores: Aplicaciones que escriben eventos en los topics.\nConsumidores: Aplicaciones que se leen eventos de los topics en orden dentro de cada partición.',
    keyPoints: [
      'Topics como categorías de mensajes y Particiones para escalabilidad/paralelismo.',
      'Productores envían eventos y Consumidores leen de los topics.',
      'Garantía de orden dentro de cada partición individual.'
    ]
  }
];

/**
 * Select random essay questions for a test session.
 */
export function selectEssayQuestions(subjectId, count = 3) {
  const filtered = ESSAY_QUESTIONS.filter(q => q.subjectId === subjectId || true);
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length)).map(q => ({
    ...q,
    type: 'essay'
  }));
}
