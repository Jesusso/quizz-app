# 📘 Certificación Microsoft Azure Fundamentals (AZ-900)
## Banco de preguntas de estudio

> [!TIP] **Cómo usarlo**
> Las soluciones están ocultas dentro de bloques desplegables (`<details>`). Intenta responder primero y despliega "Ver solución" después. Si tu visor de Markdown no soporta bloques desplegables, verás la solución justo debajo de cada pregunta.

---


#### Dominios evaluados y reparto de este banco

| Dominio oficial | Peso oficial | Preguntas en este banco |
| :--- | :---: | :---: |
| Describir conceptos de nube | 25 – 30 % | 34 (28 %) |
| Describir la arquitectura y los servicios de Azure | 35 – 40 % | 45 (38 %) |
| Describir la administración y la gobernanza de Azure | 30 – 35 % | 41 (34 %) |

---

### 🏷️ Convención de etiquetas

- `[Opción Única]`: 4 alternativas, una sola válida.
- `[Selección Múltiple]`: varias respuestas válidas (se indica cuántas).
- `[Arrastrar y Soltar / Emparejamiento]`: relacionar conceptos de dos columnas.
- `[Serie Sí / No (Verdadero / Falso)]`: tres afirmaciones independientes.
- `[Escenario Empresarial]`: caso práctico con contexto de negocio y requisitos.

---

## 📑 Índice de Módulos

- [Módulo 1: Conceptos de Nube (1 a 34)](#módulo-1-conceptos-de-nube)
- [Módulo 2: Arquitectura de Azure, Cómputo y Redes (35 a 56)](#módulo-2-arquitectura-de-azure-cómputo-y-redes)
- [Módulo 3: Almacenamiento, Datos, Identidad y Seguridad (57 a 79)](#módulo-3-almacenamiento-datos-identidad-y-seguridad)
- [Módulo 4: Administración, Gobernanza, Costes y Monitorización (80 a 120)](#módulo-4-administración-gobernanza-costes-y-monitorización)

---

## Módulo 1: Conceptos de Nube

### 1. `[Opción Única]` ¿Qué modelo de servicio en la nube otorga al cliente el mayor nivel de control y de responsabilidad sobre el sistema operativo, el middleware y las aplicaciones desplegadas?
- [A] Plataforma como servicio (PaaS), en el que el cliente administra el sistema operativo y el entorno de ejecución mientras Microsoft gestiona solo el hardware
- [B] Infraestructura como servicio (IaaS), en el que Microsoft aporta hardware y virtualización y el cliente gestiona sistema operativo, middleware y aplicaciones
- [C] Software como servicio (SaaS), en el que el cliente conserva el control del sistema operativo y delega en el proveedor únicamente los datos
- [D] Computación sin servidor (Serverless), en el que el cliente administra los hosts de ejecución y su configuración de red

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: B**
**Explicación:** En IaaS Microsoft gestiona el centro de datos, el hardware y la virtualización; el cliente es responsable del sistema operativo, los parches, el middleware y las aplicaciones.
**Descartes:** en PaaS Microsoft ya gestiona el sistema operativo y el entorno de ejecución; en SaaS el proveedor gestiona toda la pila; en Serverless los hosts están totalmente abstraídos.

</details>

---

### 2. `[Serie Sí / No (Verdadero / Falso)]` Sobre el modelo de responsabilidad compartida, indique si cada afirmación es correcta (Sí) o incorrecta (No):

1. *La información y los datos del cliente son siempre responsabilidad del cliente, sea cual sea el modelo de servicio (IaaS, PaaS o SaaS).*
2. *En IaaS, la seguridad física de los centros de datos de Azure es una responsabilidad compartida entre Microsoft y el cliente.*
3. *En SaaS (por ejemplo, Microsoft 365), el cliente sigue siendo responsable de las cuentas e identidades de sus usuarios.*

<details>
<summary>🔎 Ver solución</summary>

- Afirmación 1: **Sí**
- Afirmación 2: **No**
- Afirmación 3: **Sí**

**Explicación:** Datos, dispositivos y cuentas e identidades son siempre del cliente. La seguridad física es responsabilidad exclusiva de Microsoft en todos los modelos.

</details>

---

### 3. `[Opción Única]` Una empresa quiere publicar una API REST sin aprovisionar máquinas virtuales ni mantener el sistema operativo o el servidor web. ¿Qué opción se ajusta mejor a esa necesidad?
- [A] Azure Virtual Machines, instalando y manteniendo manualmente el servidor web y el entorno de ejecución
- [B] Microsoft 365, publicando la API como parte de la suite de productividad de la organización
- [C] Azure Dedicated Host, reservando un servidor físico exclusivo donde hospedar la API
- [D] Azure App Service, que ofrece un entorno gestionado con sistema operativo y servidor web mantenidos por Microsoft

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: D**
**Explicación:** App Service es PaaS: el equipo solo despliega su código y Microsoft mantiene sistema operativo, runtime y servidor web.
**Descartes:** A y C exigen administrar sistema operativo y servidor; Microsoft 365 es SaaS para usuarios finales y no aloja APIs propias.

</details>

---

### 4. `[Opción Única]` ¿Cuál de los siguientes servicios es un ejemplo de Software como servicio (SaaS)?
- [A] Microsoft 365 (Exchange Online, Teams y SharePoint Online), entregado y operado íntegramente por Microsoft
- [B] Azure SQL Database, donde Microsoft gestiona el motor y el cliente diseña esquemas y consultas
- [C] Azure Kubernetes Service, donde Microsoft gestiona el plano de control y el cliente administra los nodos de trabajo
- [D] Azure Virtual Machines, donde el cliente instala el sistema operativo y las aplicaciones sobre infraestructura de Microsoft

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: A**
**Explicación:** Microsoft 365 es una aplicación completa consumida por suscripción; el proveedor gestiona toda la pila.
**Descartes:** B y C son PaaS; D es IaaS.

</details>

---

### 5. `[Arrastrar y Soltar / Emparejamiento]` Empareje cada concepto de la nube con su descripción:

| Concepto | | Descripción |
| :--- | :-: | :--- |
| **1. Elasticidad** | **A** | Añadir más instancias idénticas de un recurso para repartir la carga entre ellas. |
| **2. Escalabilidad vertical** | **B** | Continuar operando sin interrupción perceptible aunque falle un componente de hardware o software. |
| **3. Agilidad** | **C** | Aumentar o reducir automáticamente los recursos de cómputo según los picos y valles de demanda. |
| **4. Tolerancia a fallos** | **D** | Desplegar y modificar recursos en minutos para responder con rapidez a las necesidades del negocio. |
| **5. Escalabilidad horizontal** | **E** | Añadir CPU o memoria a una instancia existente sin añadir nuevas instancias. |

<details>
<summary>🔎 Ver solución</summary>

- **1 ➔ C** (Elasticidad: ajuste automático a la demanda)
- **2 ➔ E** (Escalar verticalmente: más potencia en la misma instancia)
- **3 ➔ D** (Agilidad: rapidez para aprovisionar y cambiar)
- **4 ➔ B** (Tolerancia a fallos: continuidad ante fallos de componentes)
- **5 ➔ A** (Escalar horizontalmente: más instancias en paralelo)

</details>

---

### 6. `[Opción Única]` Un sitio web recibe un pico de tráfico concurrente y el equipo añade cuatro máquinas virtuales idénticas detrás de un balanceador de carga. ¿Qué principio ilustra esta acción?
- [A] Escalabilidad vertical, porque aumenta la capacidad total del servicio
- [B] Recuperación ante desastres, porque existen más copias del servicio en la región
- [C] Escalabilidad horizontal (scale out), porque se añaden instancias para repartir la carga
- [D] Gobernanza, porque se aplican reglas sobre cómo se despliegan los recursos

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: C**
**Explicación:** Escalar horizontalmente es añadir instancias del mismo tipo; escalar verticalmente es dar más CPU o RAM a una sola instancia.
**Descartes:** la recuperación ante desastres implica otra ubicación; la gobernanza trata de reglas, no de capacidad.

</details>

---

### 7. `[Opción Única]` ¿Cuál es la diferencia principal entre gastos de capital (CapEx) y gastos operativos (OpEx) al evaluar Azure?
- [A] CapEx es un gasto recurrente por consumo de servicios; OpEx es una inversión inicial en activos que se amortiza durante varios ejercicios
- [B] CapEx solo se aplica a la nube pública y OpEx solo a la nube privada, según el modelo de implementación elegido
- [C] CapEx y OpEx se diferencian únicamente por la frecuencia de facturación, anual frente a mensual, y no por la naturaleza del gasto
- [D] CapEx es una inversión inicial en activos físicos que se amortiza con el tiempo; OpEx es un gasto recurrente por el consumo de servicios sin inversión previa

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: D**
**Explicación:** CapEx es dinero invertido por adelantado en activos (servidores, redes) que se amortizan; OpEx se paga a medida que se consume el servicio, como ocurre en Azure.
**Descartes:** A invierte las definiciones; B y C no describen la naturaleza del gasto.

</details>

---

### 8. `[Opción Única]` ¿Qué caracteriza al modelo de precios basado en el consumo (*consumption-based*) de Azure?
- [A] La organización paga solo por los recursos que utiliza y durante el tiempo que permanecen en uso, sin compromisos de capacidad iniciales
- [B] La organización abona una cuota mensual fija que cubre una capacidad máxima, con independencia de los recursos utilizados
- [C] La organización debe contratar un mínimo de tres años de capacidad por servicio para acceder a las tarifas estándar
- [D] La organización paga por la capacidad aprovisionada en la compra y no puede modificarla hasta renovar el contrato

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: A**
**Explicación:** En el modelo de consumo se factura el uso real (horas de cómputo, GB almacenados, ejecuciones). Los compromisos de 1 o 3 años son una opción adicional (Reservations), no el modelo estándar.

</details>

---

### 9. `[Escenario Empresarial]` Una entidad bancaria debe conservar los datos financieros históricos de sus clientes en servidores propios dentro de su centro de datos, por exigencia de su regulador. A la vez quiere usar la capacidad elástica de Azure para ejecutar modelos analíticos en picos de demanda y conectar ambos entornos de forma privada. ¿Qué modelo de implementación debe adoptar?
- [A] Nube pública exclusiva, migrando todos los datos históricos a regiones de Azure ubicadas en la Unión Europea
- [B] Nube privada exclusiva, ampliando su centro de datos y prescindiendo de cualquier servicio de nube pública
- [C] Nube híbrida, combinando su infraestructura local con Azure y conectándolas mediante VPN o ExpressRoute
- [D] Multinube, repartiendo las cargas entre dos proveedores de nube pública y eliminando el centro de datos local

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: C**
**Explicación:** La nube híbrida combina infraestructura local con nube pública. Los datos sensibles se quedan en local y la analítica elástica se ejecuta en Azure, conectados por un enlace privado.
**Descartes:** A y D eliminan el entorno local exigido; B renuncia a la elasticidad que se busca.

</details>

---

### 10. `[Selección Múltiple]` ¿Cuáles de las siguientes opciones son ventajas reconocidas de la computación en la nube? *(Seleccione DOS)*
- [A] Eliminación de la responsabilidad del cliente sobre sus datos y las identidades de sus usuarios
- [B] Capacidad de escalar recursos hacia arriba o hacia abajo según la demanda real de la aplicación
- [C] Garantía de que el coste mensual será idéntico con independencia del volumen de recursos consumidos
- [D] Obligación de adquirir y mantener hardware propio para disponer de capacidad en el centro de datos
- [E] Posibilidad de desplegar aplicaciones en regiones cercanas a los usuarios para reducir la latencia

<details>
<summary>🔎 Ver solución</summary>

**Respuestas correctas: B y E**
**Explicación:** La escalabilidad/elasticidad y el alcance global son ventajas clásicas de la nube.
**Descartes:** A es falso (datos e identidades siguen siendo del cliente); C contradice el modelo de consumo; D describe el modelo local, no la nube.

</details>

---

### 11. `[Opción Única]` Un servicio de misión crítica debe seguir respondiendo aunque falle un servidor, un rack o un centro de datos completo de la región, gracias a componentes redundantes. ¿Qué atributo se está garantizando?
- [A] Elasticidad, porque la capacidad se ajusta automáticamente a la demanda
- [B] Alta disponibilidad, porque la redundancia mantiene el servicio accesible ante fallos de componentes
- [C] Agilidad, porque se pueden aprovisionar nuevos entornos en cuestión de minutos
- [D] Previsibilidad, porque el rendimiento y el coste del servicio pueden anticiparse

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: B**
**Explicación:** La alta disponibilidad mantiene el servicio operativo ante incidentes habituales mediante redundancia (por ejemplo, con zonas de disponibilidad).

</details>

---

### 12. `[Opción Única]` ¿Qué concepto describe los planes, procesos y tecnologías para restaurar servicios y datos en una ubicación secundaria cuando un incidente grave inutiliza una región entera?
- [A] Recuperación ante desastres (*Disaster Recovery*), apoyada en objetivos de tiempo (RTO) y de pérdida de datos (RPO)
- [B] Alta disponibilidad, que mantiene el servicio activo ante fallos de componentes dentro de una misma ubicación
- [C] Escalabilidad horizontal, que añade instancias para atender más carga cuando aumenta la demanda
- [D] Tolerancia a fallos, que evita cualquier interrupción duplicando componentes dentro de una misma zona

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: A**
**Explicación:** La recuperación ante desastres cubre la pérdida de una región completa y se mide con RTO y RPO. La alta disponibilidad y la tolerancia a fallos actúan dentro de una misma ubicación.

</details>

---

### 13. `[Serie Sí / No (Verdadero / Falso)]` Sobre los modelos de implementación de nube, indique si cada afirmación es correcta (Sí) o incorrecta (No):

1. *En una nube pública, el hardware pertenece al proveedor y se comparte de forma lógica y aislada entre varios clientes.*
2. *Adoptar una nube híbrida obliga a cerrar los centros de datos locales de la organización.*
3. *Una nube privada puede estar alojada en el propio centro de datos de la organización y ser de uso exclusivo suyo.*

<details>
<summary>🔎 Ver solución</summary>

- Afirmación 1: **Sí**
- Afirmación 2: **No**
- Afirmación 3: **Sí**

**Explicación:** La nube pública es multiinquilino. La híbrida combina local y nube, justamente sin eliminar lo local. La privada puede ser local y exclusiva.

</details>

---

### 14. `[Opción Única]` Una empresa quiere ejecutar fragmentos de código en respuesta a eventos (mensajes, peticiones HTTP, temporizadores) sin administrar servidores y pagando solo por las ejecuciones. ¿Qué opción describe mejor Azure Functions en el plan de consumo?
- [A] Un servicio IaaS que obliga a reservar vCPU y memoria durante 12 meses para evitar recargos
- [B] Un servicio SaaS con funcionalidad predefinida que se factura por usuario y por mes
- [C] Un servicio que mantiene instancias siempre activas y cobra una tarifa plana mensual por la capacidad
- [D] Un servicio sin servidor activado por eventos que puede escalar hasta cero y cobra por ejecuciones y consumo (GB-s)

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: D**
**Explicación:** En el plan de consumo, Azure Functions factura según el número de ejecuciones y los recursos consumidos (GB-segundo). No hay servidores que administrar ni coste fijo continuo.

</details>

---

### 15. `[Opción Única]` ¿Qué significa que la nube pública ofrece economías de escala?
- [A] Que el proveedor garantiza un precio idéntico para todos los clientes, con independencia de la región o del servicio
- [B] Que el proveedor compra y opera infraestructura a gran volumen, lo que reduce el coste unitario que se traslada a los clientes
- [C] Que los clientes obtienen descuentos automáticos al superar un número fijo de máquinas virtuales por suscripción
- [D] Que los recursos se replican en todas las regiones para que cualquier cliente acceda con la mayor velocidad posible

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: B**
**Explicación:** Al operar a escala masiva, el proveedor reduce el coste por unidad de cómputo y almacenamiento, y ese ahorro llega a los clientes en forma de precios más bajos.

</details>

---

### 16. `[Opción Única]` Un equipo financiero usa la calculadora de precios, alertas de presupuesto y el análisis de consumo histórico para anticipar su gasto mensual en Azure. ¿Qué beneficio de la nube está aprovechando?
- [A] Elasticidad, ya que el gasto se ajusta automáticamente a la demanda
- [B] Gobernanza, ya que las directivas impiden desplegar recursos fuera de presupuesto
- [C] Previsibilidad de costes, ya que es posible estimar, supervisar y anticipar el gasto
- [D] Fiabilidad, ya que los servicios continúan funcionando tras un fallo de componentes

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: C**
**Explicación:** La previsibilidad abarca el rendimiento y también los costes: estimar con la calculadora, controlar con presupuestos y analizar el consumo.

</details>

---

### 17. `[Opción Única]` Un equipo despliega entornos completos con plantillas, configura reglas de autoescalado y recibe alertas automáticas cuando un servicio degrada su rendimiento. ¿Qué beneficio de la nube ilustran estas capacidades?
- [A] Facilidad de administración (*manageability*), tanto de los recursos en la nube como mediante la nube
- [B] Residencia de datos, porque la información permanece siempre en un único país
- [C] Alta disponibilidad, porque los recursos se replican en varias zonas automáticamente
- [D] Previsibilidad de rendimiento, porque la latencia entre regiones es siempre idéntica

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: A**
**Explicación:** Manageability incluye gestionar la nube (autoescalado, monitorización, alertas) y gestionar en la nube (plantillas, portal, CLI, API).

</details>

---

### 18. `[Escenario Empresarial]` Una multinacional de comercio electrónico ejecuta su tienda en Azure, pero mantiene sus cargas de analítica de marketing en otro proveedor de nube pública que ya usaba una filial adquirida. Quiere evitar depender de un único proveedor y gestionar ambos entornos. ¿Cómo se denomina esta estrategia?
- [A] Nube híbrida, porque combina dos entornos con modelos de facturación diferentes
- [B] Multinube (*multi-cloud*), porque utiliza servicios de dos o más proveedores de nube pública
- [C] Nube privada distribuida, porque cada filial gestiona su propia infraestructura aislada
- [D] Coubicación, porque los sistemas se alojan en instalaciones de terceros compartidas

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: B**
**Explicación:** Multinube es usar dos o más nubes públicas. La nube híbrida combina nube pública con infraestructura local o privada.

</details>

---

### 19. `[Opción Única]` ¿Cuál de los siguientes servicios de Azure se clasifica como Infraestructura como servicio (IaaS)?
- [A] Azure App Service, que aloja aplicaciones web sin administrar el sistema operativo
- [B] Azure SQL Database, que ofrece un motor relacional gestionado con copias de seguridad automáticas
- [C] Azure Functions, que ejecuta código por eventos sin administrar servidores
- [D] Azure Virtual Machines, donde el cliente administra el sistema operativo y el software instalado

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: D**
**Explicación:** Las máquinas virtuales son el servicio IaaS por excelencia. App Service y SQL Database son PaaS; Functions es sin servidor.

</details>

---

### 20. `[Arrastrar y Soltar / Emparejamiento]` Indique quién es el responsable de cada tarea. Empareje cada tarea con **A (Microsoft)** o **B (Cliente)**:

| Tarea | Responsable |
| :--- | :-: |
| **1.** Seguridad física del centro de datos | ? |
| **2.** Parcheo del sistema operativo invitado de una VM de Azure (IaaS) | ? |
| **3.** Parcheo del sistema operativo de los hosts que ejecutan Azure App Service (PaaS) | ? |
| **4.** Clasificación y protección de los datos almacenados en una cuenta de Azure Storage | ? |

<details>
<summary>🔎 Ver solución</summary>

- **1 ➔ A** (Microsoft)
- **2 ➔ B** (Cliente: en IaaS gestiona el sistema operativo invitado)
- **3 ➔ A** (Microsoft: en PaaS gestiona el sistema operativo)
- **4 ➔ B** (Cliente: los datos son siempre suyos)

</details>

---

### 21. `[Opción Única]` ¿Qué diferencia existe entre escalabilidad y elasticidad en la nube?
- [A] La escalabilidad solo permite reducir recursos y la elasticidad solo permite aumentarlos
- [B] La escalabilidad se aplica únicamente al almacenamiento y la elasticidad exclusivamente al cómputo
- [C] La escalabilidad es poder aumentar o reducir recursos; la elasticidad lo hace de forma automática y dinámica según la demanda
- [D] La escalabilidad exige hardware dedicado y la elasticidad solo se logra en entornos de nube privada

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: C**
**Explicación:** La elasticidad es escalabilidad automática y reactiva a la carga en cada momento.

</details>

---

### 22. `[Escenario Empresarial]` Una tienda online lanza una campaña de 24 horas. El equipo configura una regla que añade hasta diez instancias web cuando la CPU media supera el 75 % y las retira cuando el tráfico baja, de modo que solo se paga por la capacidad usada. ¿Qué principio ilustra de forma más completa?
- [A] Escalabilidad vertical, porque se incrementa la potencia de una única instancia
- [B] Recuperación ante desastres, porque se replica la capacidad en otra ubicación
- [C] Gasto de capital (CapEx), porque se reserva capacidad por adelantado para el pico
- [D] Elasticidad mediante escalado horizontal, porque la capacidad se ajusta automáticamente a la demanda

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: D**
**Explicación:** Añadir y retirar instancias automáticamente según la carga es elasticidad basada en escalado horizontal, y además alinea el gasto con el uso.

</details>

---

### 23. `[Opción Única]` Un organismo público necesita infraestructura de cómputo y almacenamiento de uso exclusivo, con control total sobre el hardware y la red, sin compartirla con otros inquilinos. ¿Qué modelo de implementación cumple este requisito?
- [A] Nube pública con cifrado de datos en reposo y claves gestionadas por el cliente
- [B] Nube híbrida abierta con recursos compartidos entre varios proveedores
- [C] Nube privada, con infraestructura dedicada a una única organización
- [D] Software como servicio multiinquilino con aislamiento lógico entre clientes

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: C**
**Explicación:** Solo la nube privada ofrece infraestructura de uso exclusivo. El cifrado y el aislamiento lógico no eliminan el multiinquilino de la nube pública.

</details>

---

### 24. `[Opción Única]` ¿Cuál de los siguientes es un ejemplo de gasto de capital (CapEx)?
- [A] El pago mensual por el uso de una base de datos Azure SQL Database
- [B] La compra de servidores físicos y equipos de red para un centro de datos propio
- [C] La suscripción anual a licencias de Microsoft 365 para los empleados
- [D] La factura por los gigabytes almacenados en una cuenta de Azure Blob Storage

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: B**
**Explicación:** Comprar hardware es una inversión inicial en activos físicos. El resto son gastos recurrentes por consumo o suscripción (OpEx).

</details>

---

### 25. `[Serie Sí / No (Verdadero / Falso)]` Sobre los Acuerdos de Nivel de Servicio (SLA) de Azure, indique si cada afirmación es correcta (Sí) o incorrecta (No):

1. *Los servicios en versión preliminar pública (Public Preview) normalmente no están cubiertos por un SLA con respaldo financiero.*
2. *Si Microsoft no cumple el SLA de un servicio, el cliente puede solicitar créditos de servicio.*
3. *Todos los servicios de Azure comparten exactamente el mismo SLA del 99,99 %.*

<details>
<summary>🔎 Ver solución</summary>

- Afirmación 1: **Sí**
- Afirmación 2: **Sí**
- Afirmación 3: **No**

**Explicación:** Cada servicio y nivel tiene su propio SLA (99,9 %, 99,95 %, 99,99 %…). El incumplimiento se compensa con créditos de servicio, y las previews no tienen SLA de producción.

</details>

---

### 26. `[Escenario Empresarial]` Una solución consta de una aplicación web en Azure App Service (SLA 99,95 %) que depende obligatoriamente de una base de datos Azure SQL Database (SLA 99,99 %). Si cualquiera de los dos componentes falla, la solución deja de funcionar. ¿Cuál es el SLA compuesto aproximado?
- [A] 99,94 % (0,9995 × 0,9999)
- [B] 99,99 % (el mayor de los dos SLA)
- [C] 99,95 % (el menor de los dos SLA)
- [D] 99,97 % (la media aritmética de ambos SLA)

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: A**
**Explicación:** En dependencia en serie se multiplican las disponibilidades: 0,9995 × 0,9999 ≈ 0,9994. El SLA compuesto siempre es inferior al del componente más débil.

</details>

---

### 27. `[Opción Única]` Un equipo quiere mejorar el SLA compuesto de una solución cuyos componentes dependen unos de otros en serie. ¿Qué acción aumenta la disponibilidad esperada?
- [A] Añadir más servicios dependientes en serie para repartir las funciones entre componentes especializados
- [B] Sustituir componentes por otros con SLA inferior pero menor coste de licencia
- [C] Desplegar la solución de forma redundante en una segunda región y dirigir el tráfico con Azure Traffic Manager o Azure Front Door
- [D] Mover todos los componentes a un único grupo de recursos para simplificar su administración

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: C**
**Explicación:** La redundancia (rutas en paralelo) aumenta la disponibilidad combinada. Añadir dependencias en serie la reduce, y agrupar recursos es solo organizativo.

</details>

---

### 28. `[Opción Única]` ¿Qué diseño ofrece un SLA del 99,99 % para máquinas virtuales de Azure?
- [A] Una sola VM con discos Premium SSD o Ultra Disk, que ofrece el mayor SLA posible para una instancia única
- [B] Dos o más VMs agrupadas en un conjunto de disponibilidad dentro de un mismo centro de datos
- [C] Una VM única con copias de seguridad programadas mediante Azure Backup y Site Recovery
- [D] Dos o más VMs distribuidas en dos o más zonas de disponibilidad de la misma región

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: D**
**Explicación:** Instancia única con discos premium: 99,9 %. Conjunto de disponibilidad: 99,95 %. Dos o más VMs en varias zonas de disponibilidad: 99,99 %.

</details>

---

### 29. `[Selección Múltiple]` ¿Cuáles de los siguientes servicios de Azure se clasifican como Plataforma como servicio (PaaS)? *(Seleccione DOS)*
- [A] Azure Virtual Machines
- [B] Azure Dedicated Host
- [C] Azure SQL Database
- [D] Azure Virtual Machine Scale Sets
- [E] Azure App Service

<details>
<summary>🔎 Ver solución</summary>

**Respuestas correctas: C y E**
**Explicación:** SQL Database y App Service son servicios gestionados donde Microsoft administra el sistema operativo y el motor. Las máquinas virtuales, los conjuntos de escalado de VMs y Dedicated Host exigen administrar el sistema operativo (IaaS).

</details>

---

### 30. `[Escenario Empresarial]` Una empresa de logística quiere migrar rápidamente a Azure una aplicación monolítica de Windows que depende de un servicio de Windows instalado localmente y de un controlador de terceros. No dispone de tiempo ni presupuesto para rediseñarla. ¿Qué modelo de servicio encaja mejor?
- [A] IaaS, trasladando la aplicación a máquinas virtuales (*rehosting*) con cambios mínimos
- [B] PaaS, reescribiendo la aplicación para ejecutarla en Azure App Service
- [C] SaaS, sustituyendo la aplicación por un producto comercial de terceros
- [D] Serverless, dividiendo la aplicación en funciones activadas por eventos

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: A**
**Explicación:** Los componentes instalados a nivel de sistema operativo y los controladores exigen control del SO, que solo da IaaS. Las otras opciones implican rediseñar o reemplazar la aplicación.

</details>

---

### 31. `[Opción Única]` ¿Qué factores influyen directamente en el coste de los recursos de Azure bajo el modelo de pago por uso?
- [A] Solo el número de vCPU contratadas, con independencia del tipo de recurso, la región o el tráfico de red
- [B] El tipo y tamaño del recurso, la región de despliegue y el tráfico de datos saliente de Azure hacia Internet
- [C] El número de usuarios con acceso al portal y el número de grupos de recursos creados en la suscripción
- [D] La ubicación del tenant de Microsoft Entra y el número de etiquetas aplicadas a los recursos

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: B**
**Explicación:** El precio depende del servicio y su tamaño, de la región (los costes locales varían) y del tráfico de salida (egress). El tráfico entrante suele ser gratuito.

</details>

---

### 32. `[Serie Sí / No (Verdadero / Falso)]` Sobre la facturación de máquinas virtuales, indique si cada afirmación es correcta (Sí) o incorrecta (No):

1. *El tráfico de datos entrante (ingress) hacia Azure normalmente no se factura.*
2. *Una VM en estado "Detenida (desasignada)" sigue generando cargos por vCPU y RAM.*
3. *Los discos administrados de una VM desasignada siguen generando cargos de almacenamiento.*

<details>
<summary>🔎 Ver solución</summary>

- Afirmación 1: **Sí**
- Afirmación 2: **No**
- Afirmación 3: **Sí**

**Explicación:** Al desasignar una VM se libera el cómputo y dejan de cobrarse vCPU y RAM, pero los discos persisten y se siguen facturando. Detener la VM solo desde el sistema operativo no libera la asignación.

</details>

---

### 33. `[Escenario Empresarial]` Una startup de análisis de datos prevé una demanda muy variable durante su primer año y no dispone de capital para comprar servidores. Su director financiero quiere que el gasto en infraestructura se ajuste a los ingresos. ¿Qué enfoque es más adecuado?
- [A] Adquirir servidores con capacidad para el pico máximo y amortizarlos durante cinco años (CapEx)
- [B] Contratar un alojamiento con cuota fija anual dimensionada para el mes de mayor demanda
- [C] Usar servicios de Azure con modelo de consumo (OpEx), pagando solo por la capacidad usada en cada periodo
- [D] Alquilar un centro de datos en coubicación con hardware propio y contrato de dos años

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: C**
**Explicación:** El modelo de consumo evita la inversión inicial y alinea el coste con el uso real, ideal para demanda incierta.

</details>

---

### 34. `[Opción Única]` ¿Qué describe la fiabilidad (*reliability*) de un sistema en la nube?
- [A] La capacidad de recuperarse de fallos y seguir funcionando, apoyándose en redundancia y diseño resiliente
- [B] La capacidad de predecir con exactitud el coste mensual de los recursos desplegados en la suscripción
- [C] La capacidad de aprovisionar nuevos entornos en minutos para responder a cambios del negocio
- [D] La capacidad de aplicar normas corporativas de forma automática sobre todos los recursos desplegados

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: A**
**Explicación:** La fiabilidad es la resiliencia ante fallos. B es previsibilidad de costes, C es agilidad y D es gobernanza.

</details>

---

## Módulo 2: Arquitectura de Azure, Cómputo y Redes

### 35. `[Opción Única]` ¿Qué es una región de Azure?
- [A] Un único centro de datos físico situado en una ciudad, que agrupa todos los servidores de la geografía
- [B] Un grupo lógico de suscripciones que comparten las mismas directivas de facturación y de acceso
- [C] Un área geográfica que contiene uno o más centros de datos interconectados mediante una red regional de baja latencia
- [D] Un continente completo cuyos servicios comparten una misma puerta de enlace hacia Internet

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: C**
**Explicación:** Una región es un perímetro geográfico con uno o varios centros de datos conectados por una red de baja latencia gestionada por Microsoft.

</details>

---

### 36. `[Escenario Empresarial]` Una aseguradora aloja en West Europe su aplicación crítica de contratación. Debe seguir operativa si un centro de datos entero de la región queda inutilizado por una inundación, sin cambiar de región ni mover los datos fuera de ella. ¿Qué estrategia debe adoptar?
- [A] Distribuir las instancias de cómputo y los datos entre varias zonas de disponibilidad de la misma región
- [B] Desplegar todas las VMs en un único conjunto de disponibilidad dentro del mismo centro de datos
- [C] Aumentar el tamaño de la VM principal para disponer de más capacidad ante un fallo
- [D] Programar copias de seguridad semanales almacenadas en la misma zona donde se ejecuta la aplicación

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: A**
**Explicación:** Las zonas de disponibilidad son centros de datos separados dentro de una región, con alimentación, refrigeración y red independientes. Repartir la carga entre ellas tolera la pérdida de un centro de datos.
**Descartes:** un conjunto de disponibilidad protege dentro de un mismo centro de datos; aumentar la VM no aporta redundancia; las copias en la misma zona se perderían con ella.

</details>

---

### 37. `[Opción Única]` ¿Qué es un par de regiones (*region pair*) en Azure y qué ventaja aporta?
- [A] Dos centros de datos que comparten rack y alimentación para minimizar la latencia entre ellos
- [B] Dos suscripciones enlazadas que comparten el mismo grupo de recursos para facilitar la facturación
- [C] Dos regiones de continentes distintos que replican datos entre sí mediante circuitos de ExpressRoute
- [D] Dos regiones de la misma geografía, con actualizaciones planificadas de forma secuencial y prioridad de recuperación ante una interrupción amplia

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: D**
**Explicación:** Los pares de regiones están dentro de la misma **geografía** (no necesariamente el mismo continente), separados por distancia, y Microsoft no actualiza ambas a la vez. Ante una interrupción amplia se prioriza recuperar una región de cada par.

</details>

---

### 38. `[Opción Única]` ¿Qué son las regiones soberanas de Azure, como Azure Government o Azure China operada por 21Vianet?
- [A] Regiones virtuales que Microsoft activa temporalmente durante catástrofes para absorber la demanda
- [B] Instancias de Azure aisladas física y lógicamente de la nube pública global, para cumplir requisitos legales y regulatorios específicos
- [C] Regiones gratuitas dirigidas a universidades y centros educativos con programas de licencia académica
- [D] Regiones compartidas por varios proveedores cloud con acuerdos de interoperabilidad entre ellas

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: B**
**Explicación:** Las regiones soberanas son entornos separados de la nube pública global, pensados para administraciones públicas o mercados con normativas estrictas de soberanía y residencia de datos.

</details>

---

### 39. `[Serie Sí / No (Verdadero / Falso)]` Sobre la jerarquía de administración de Azure, indique si cada afirmación es correcta (Sí) o incorrecta (No):

1. *Un grupo de administración puede contener suscripciones y también otros grupos de administración.*
2. *Una directiva de Azure Policy asignada a un grupo de administración es heredada por las suscripciones que contiene.*
3. *Una misma suscripción puede confiar simultáneamente en varios tenants de Microsoft Entra ID.*

<details>
<summary>🔎 Ver solución</summary>

- Afirmación 1: **Sí**
- Afirmación 2: **Sí**
- Afirmación 3: **No**

**Explicación:** La jerarquía es Grupos de administración ➔ Suscripciones ➔ Grupos de recursos ➔ Recursos, y las directivas y roles se heredan hacia abajo. Una suscripción confía en un único tenant de Entra ID a la vez.

</details>

---

### 40. `[Selección Múltiple]` ¿Cuáles de las siguientes afirmaciones sobre los grupos de recursos de Azure son correctas? *(Seleccione DOS)*
- [A] Un recurso de Azure pertenece a un único grupo de recursos en un momento dado
- [B] Un recurso puede pertenecer simultáneamente a varios grupos de recursos para compartir su administración
- [C] Al eliminar un grupo de recursos se eliminan también todos los recursos que contiene
- [D] Los grupos de recursos pueden anidarse unos dentro de otros para reflejar la estructura de la organización
- [E] Todos los recursos de un grupo deben estar desplegados en la misma región que el propio grupo

<details>
<summary>🔎 Ver solución</summary>

**Respuestas correctas: A y C**
**Explicación:** Un recurso solo está en un grupo a la vez y borrar el grupo borra su contenido en cascada.
**Descartes:** los grupos no se anidan; los recursos de un grupo pueden estar en regiones distintas a la del grupo, que solo almacena metadatos.

</details>

---

### 41. `[Arrastrar y Soltar / Emparejamiento]` Empareje cada concepto de infraestructura de Azure con su descripción:

| Concepto | | Descripción |
| :--- | :-: | :--- |
| **1. Dominio de error** | **A** | Dos regiones de la misma geografía con actualizaciones secuenciales y prioridad de recuperación. |
| **2. Dominio de actualización** | **B** | Centros de datos separados dentro de una región, con alimentación, refrigeración y red independientes. |
| **3. Zona de disponibilidad** | **C** | Grupo de hardware que se reinicia de forma coordinada durante el mantenimiento planificado de la plataforma. |
| **4. Par de regiones** | **D** | Grupo de hardware que comparte fuente de alimentación y conmutador de red, es decir, un único punto de fallo físico. |

<details>
<summary>🔎 Ver solución</summary>

- **1 ➔ D** (Dominio de error)
- **2 ➔ C** (Dominio de actualización)
- **3 ➔ B** (Zona de disponibilidad)
- **4 ➔ A** (Par de regiones)

</details>

---

### 42. `[Opción Única]` ¿Qué servicio permite crear y gestionar un conjunto de máquinas virtuales idénticas con balanceo de carga integrado y reglas de escalado automático?
- [A] Azure Batch, que programa trabajos de cómputo paralelo sobre grupos de nodos
- [B] Un conjunto de disponibilidad, que distribuye las VMs entre dominios de error y de actualización
- [C] Azure Dedicated Host, que reserva servidores físicos de uso exclusivo para las VMs
- [D] Virtual Machine Scale Sets (VMSS), que gestiona grupos de VMs idénticas y ajusta su número según la demanda

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: D**
**Explicación:** VMSS combina flotas de VMs idénticas, balanceo de carga y autoescalado por métricas o programación. Un conjunto de disponibilidad solo reparte las VMs en dominios de error y actualización, sin escalar.

</details>

---

### 43. `[Escenario Empresarial]` Una consultora debe publicar para un cliente del sector retail una web en Python y una API en .NET. Necesita certificados TLS gestionados, ranuras de despliegue para pruebas previas y despliegues desde GitHub Actions, sin administrar sistemas operativos ni parches. ¿Qué servicio debe elegir?
- [A] Azure Virtual Machines con IIS y Nginx instalados y mantenidos por el equipo
- [B] Azure App Service, plataforma PaaS para aplicaciones web y API con despliegue continuo y certificados gestionados
- [C] Azure Container Instances, que ejecuta contenedores individuales sin orquestación ni ranuras de despliegue
- [D] Azure Virtual Desktop, que ofrece escritorios y aplicaciones virtualizados para usuarios finales

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: B**
**Explicación:** App Service es el PaaS de Azure para web y API: runtimes gestionados, ranuras de despliegue, TLS y CI/CD, sin mantener infraestructura.

</details>

---

### 44. `[Opción Única]` ¿Cuál es la principal diferencia arquitectónica entre las máquinas virtuales y los contenedores?
- [A] Las VMs requieren discos Premium, mientras que los contenedores solo funcionan con almacenamiento efímero
- [B] Los contenedores solo pueden ejecutarse en Windows, mientras que las VMs únicamente admiten Linux
- [C] Las VMs virtualizan el hardware y ejecutan un sistema operativo invitado completo; los contenedores comparten el kernel del host y son más ligeros
- [D] Los contenedores incluyen un hipervisor propio por contenedor, mientras que las VMs comparten el kernel del host

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: C**
**Explicación:** Una VM incluye un sistema operativo completo (más pesada, arranque más lento). Un contenedor empaqueta la aplicación y sus dependencias compartiendo el kernel del host.

</details>

---

### 45. `[Opción Única]` ¿Qué servicio de Azure ofrece orquestación administrada de contenedores basada en Kubernetes, con el plano de control gestionado por Microsoft?
- [A] Azure Kubernetes Service (AKS), que orquesta, escala y actualiza aplicaciones en contenedores
- [B] Azure Container Instances (ACI), que ejecuta contenedores sin servidor pero sin orquestación avanzada
- [C] Azure Container Registry, que almacena y distribuye imágenes de contenedor privadas
- [D] Azure Batch, que ejecuta trabajos por lotes de gran escala sobre grupos de nodos de cómputo

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: A**
**Explicación:** AKS es Kubernetes administrado. ACI arranca contenedores sueltos, Container Registry solo guarda imágenes y Batch ejecuta trabajos por lotes.

</details>

---

### 46. `[Opción Única]` Una empresa quiere ofrecer a sus empleados remotos un escritorio Windows 11 multisesión con aplicaciones de Microsoft 365, accesible desde cualquier dispositivo y gestionado de forma centralizada en la nube. ¿Qué servicio debe implementar?
- [A] Azure Bastion, que proporciona conexión RDP/SSH segura a VMs desde el navegador
- [B] Azure DevTest Labs, que facilita entornos de pruebas con control de costes
- [C] Azure App Service, que aloja aplicaciones web sin administrar el sistema operativo
- [D] Azure Virtual Desktop, que virtualiza escritorios y aplicaciones y admite Windows multisesión

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: D**
**Explicación:** Azure Virtual Desktop es el servicio de virtualización de escritorios y aplicaciones, y el único que admite Windows 11 multisesión. Bastion solo da acceso administrativo a VMs.

</details>

---

### 47. `[Escenario Empresarial]` Un estudio de animación renderiza fotogramas en trabajos por lotes que duran varias horas. Los trabajos pueden interrumpirse y reanudarse sin problema, y la prioridad es reducir al máximo el coste de cómputo. ¿Qué opción conviene?
- [A] Máquinas virtuales de Azure Spot, que aprovechan capacidad sobrante con grandes descuentos y pueden ser desalojadas
- [B] Instancias reservadas a tres años, que descuentan a cambio de comprometer capacidad de forma continua
- [C] Azure Dedicated Host, que garantiza servidores físicos exclusivos con aislamiento de hardware
- [D] Máquinas virtuales de pago por uso con autoescalado, que mantienen siempre la máxima capacidad disponible

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: A**
**Explicación:** Las VMs Spot ofrecen descuentos de hasta el 90 % a cambio de que Azure pueda desalojarlas con poco aviso, algo asumible en cargas tolerantes a interrupciones. Las reservas exigen uso continuo y no son tan baratas.

</details>

---

### 48. `[Opción Única]` ¿Qué servicio proporciona servidores físicos de uso exclusivo para una organización, con visibilidad del hardware subyacente?
- [A] Azure Virtual Machine Scale Sets, que agrupan VMs idénticas con autoescalado
- [B] Azure App Service en plan compartido, con instancias aisladas lógicamente
- [C] Azure Dedicated Host, que reserva un servidor físico completo para las VMs de un único cliente
- [D] Azure Container Instances, que ejecutan contenedores sin servidor en hardware compartido

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: C**
**Explicación:** Dedicated Host da aislamiento a nivel de hardware físico, útil para requisitos de cumplimiento que prohíben compartir servidor con otros clientes.

</details>

---

### 49. `[Opción Única]` ¿Qué recurso proporciona una red privada aislada en Azure, con rangos de direcciones IP propios que pueden dividirse en subredes?
- [A] Azure ExpressRoute Gateway, que conecta redes locales con Azure mediante circuitos privados
- [B] Azure Virtual Network (VNet), que aísla el tráfico y se divide en subredes para organizar las cargas de trabajo
- [C] Grupo de seguridad de aplicaciones (ASG), que agrupa VMs para simplificar reglas de seguridad
- [D] Azure DNS privado, que resuelve nombres de recursos dentro de una red virtual

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: B**
**Explicación:** La VNet es el bloque básico de red privada en Azure; las subredes segmentan su espacio de direcciones (por ejemplo, frontend y backend).

</details>

---

### 50. `[Opción Única]` Dos redes virtuales de Azure deben comunicarse mediante direcciones IP privadas, con baja latencia y sin que el tráfico salga a Internet. ¿Qué debe configurarse?
- [A] Una conexión VPN punto a sitio entre ambas redes mediante clientes en cada VM
- [B] Una puerta de enlace NAT de Azure que traduzca las direcciones de ambas redes
- [C] El emparejamiento de redes virtuales (*VNet peering*), que usa la red troncal de Microsoft
- [D] Azure Front Door con enrutamiento por rutas entre ambos entornos

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: C**
**Explicación:** El peering conecta VNets por la red privada de Microsoft, con baja latencia y sin pasar por Internet.

</details>

---

### 51. `[Selección Múltiple]` ¿Cuáles de los siguientes servicios permiten conectar una red local con Azure? *(Seleccione DOS)*
- [A] Azure Bastion
- [B] Azure Front Door
- [C] Azure DNS
- [D] Azure VPN Gateway
- [E] Azure ExpressRoute

<details>
<summary>🔎 Ver solución</summary>

**Respuestas correctas: D y E**
**Explicación:** VPN Gateway crea túneles IPsec cifrados sobre Internet; ExpressRoute es un enlace privado y dedicado que no atraviesa Internet.
**Descartes:** Bastion da acceso administrativo, Front Door distribuye tráfico web global y Azure DNS resuelve nombres.

</details>

---

### 52. `[Opción Única]` Un administrador debe conectarse por RDP y SSH a VMs en una subred privada sin asignarles IP públicas ni abrir puertos de administración a Internet. ¿Qué servicio resuelve esta necesidad?
- [A] Azure Bastion, que ofrece acceso RDP/SSH por TLS desde el portal sin exponer las VMs
- [B] Azure Firewall, que filtra el tráfico y permite publicar los puertos de administración
- [C] Azure Network Watcher, que supervisa y diagnostica la conectividad de red
- [D] Azure Front Door, que acelera y protege el acceso web global

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: A**
**Explicación:** Bastion es un PaaS que se despliega en la VNet y da acceso RDP/SSH seguro desde el navegador, evitando exponer puertos o IP públicas.

</details>

---

### 53. `[Opción Única]` ¿Cuál es la función principal de un grupo de seguridad de red (NSG)?
- [A] Distribuir las peticiones HTTP entrantes entre varios servidores según la ruta de la URL solicitada
- [B] Cifrar el disco del sistema operativo de una VM para proteger los datos en reposo
- [C] Resolver nombres de dominio internos a direcciones IP privadas dentro de la VNet
- [D] Permitir o denegar tráfico entrante y saliente hacia subredes o interfaces de red según reglas de origen, destino, puerto y protocolo

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: D**
**Explicación:** Un NSG es un filtro de paquetes (capas 3 y 4) basado en reglas de origen, destino, puertos y protocolo.

</details>

---

### 54. `[Opción Única]` ¿Qué servicio es un firewall gestionado y con estado, con inspección de capas 3 a 7, filtrado por FQDN e inteligencia de amenazas?
- [A] Network Security Group (NSG), que filtra por origen, destino, puerto y protocolo en capas 3 y 4
- [B] Azure Firewall, firewall nativo en la nube con alta disponibilidad y escalado integrados
- [C] Azure DDoS Protection, que mitiga ataques volumétricos contra direcciones IP públicas
- [D] Azure Route Server, que intercambia rutas dinámicas con dispositivos virtuales de red

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: B**
**Explicación:** Azure Firewall es un firewall de red empresarial gestionado, con filtrado FQDN, inteligencia de amenazas y alta disponibilidad automática. El NSG es más básico y solo llega a las capas 3 y 4.

</details>

---

### 55. `[Opción Única]` ¿Cuál es la diferencia clave entre Azure Load Balancer y Azure Application Gateway?
- [A] Load Balancer opera en la capa 4 (TCP/UDP); Application Gateway en la capa 7, con enrutamiento por URL, terminación TLS y WAF
- [B] Load Balancer opera en la capa 7 y entiende rutas HTTP; Application Gateway opera en la capa 4
- [C] Load Balancer solo balancea tráfico entre regiones; Application Gateway solo dentro de una misma VNet
- [D] Load Balancer exige siempre una IP pública; Application Gateway solo admite tráfico privado

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: A**
**Explicación:** Load Balancer reparte tráfico de transporte (capa 4) con latencia muy baja. Application Gateway entiende HTTP/HTTPS (capa 7): rutas URL, terminación TLS y Web Application Firewall.

</details>

---

### 56. `[Opción Única]` Una tienda global sirve imágenes y vídeos desde Blob Storage en East US y los usuarios de Asia y Europa sufren tiempos de carga altos. ¿Qué servicio debe usar para almacenar en caché el contenido estático cerca de los usuarios?
- [A] Azure ExpressRoute, que crea un circuito privado hacia la región de origen
- [B] Azure Bastion, que ofrece acceso seguro a los servidores de origen
- [C] Azure Front Door (o Azure CDN), que sirve contenido en caché desde ubicaciones de borde próximas al usuario
- [D] Azure Virtual Network NAT, que asigna direcciones de salida estáticas

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: C**
**Explicación:** Una red de entrega de contenido almacena en caché contenido estático en puntos de presencia distribuidos globalmente, reduciendo la latencia para los usuarios.

</details>

---

## Módulo 3: Almacenamiento, Datos, Identidad y Seguridad

### 57. `[Opción Única]` Varias VMs Windows y Linux deben montar simultáneamente una carpeta compartida mediante SMB o NFS, sustituyendo a un servidor de archivos local. ¿Qué servicio debe usarse?
- [A] Azure Blob Storage, que almacena objetos no estructurados accesibles por HTTP/HTTPS
- [B] Azure Files, con recursos compartidos de archivos administrados accesibles por SMB y NFS
- [C] Azure Queue Storage, que almacena mensajes para comunicación asíncrona entre componentes
- [D] Discos administrados de Azure, que se asignan normalmente a una única VM

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: B**
**Explicación:** Azure Files ofrece recursos compartidos totalmente administrados con los protocolos estándar SMB y NFS.

</details>

---

### 58. `[Escenario Empresarial]` Una entidad financiera debe conservar durante siete años informes de auditoría que casi nunca se consultan. Quiere el menor coste de almacenamiento por GB y acepta esperas de varias horas para recuperarlos. ¿Qué nivel de acceso de Blob Storage debe configurar?
- [A] Nivel Frecuente (*Hot*), con el mayor coste de almacenamiento y el menor coste de acceso
- [B] Nivel Esporádico (*Cool*), para datos poco consultados con un periodo mínimo de retención de 30 días
- [C] Nivel Frío (*Cold*), para datos infrecuentes con menor coste que Cool y retención mínima de 90 días
- [D] Nivel Archivo (*Archive*), con el menor coste de almacenamiento y datos sin conexión que requieren rehidratación

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: D**
**Explicación:** Archive es el nivel más barato por GB; los blobs están sin conexión y deben rehidratarse (puede tardar horas) antes de leerlos.
**Descartes:** Hot, Cool y Cold mantienen los datos en línea con un coste de almacenamiento creciente a la baja, pero mayor que Archive.

</details>

---

### 59. `[Opción Única]` ¿Qué opción de redundancia de Azure Storage replica los datos de forma síncrona en tres zonas de disponibilidad de la región primaria?
- [A] Almacenamiento con redundancia de zona (ZRS): copias síncronas en tres zonas de la región primaria
- [B] Almacenamiento con redundancia local (LRS): tres copias síncronas dentro de un único centro de datos
- [C] Almacenamiento con redundancia geográfica (GRS): LRS en la región primaria más una copia asíncrona en la secundaria
- [D] Almacenamiento con redundancia geográfica con acceso de lectura (RA-GRS): GRS con lectura habilitada en la secundaria

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: A**
**Explicación:** ZRS protege frente a la pérdida de un centro de datos completo de la región. GRS y RA-GRS usan LRS en la región primaria y replican de forma asíncrona a la secundaria.

</details>

---

### 60. `[Serie Sí / No (Verdadero / Falso)]` Sobre la redundancia de Azure Storage, indique si cada afirmación es correcta (Sí) o incorrecta (No):

1. *Con GRS, los datos se copian de forma asíncrona a una región secundaria emparejada.*
2. *LRS protege los datos frente a la pérdida de un centro de datos completo de la región.*
3. *Con RA-GRS, una aplicación puede leer los datos de la región secundaria sin esperar a una conmutación por error.*

<details>
<summary>🔎 Ver solución</summary>

- Afirmación 1: **Sí**
- Afirmación 2: **No**
- Afirmación 3: **Sí**

**Explicación:** LRS mantiene las tres copias en un solo centro de datos, de modo que no sobrevive a su pérdida. RA-GRS expone un extremo de lectura en la región secundaria.

</details>

---

### 61. `[Escenario Empresarial]` Una cadena hotelera debe trasladar 50 TB de datos de facturación históricos desde servidores locales a Azure Files antes de una auditoría. Su línea de subida es muy limitada y, tras la migración, las oficinas necesitan acceso rápido a los archivos más recientes. ¿Qué combinación de servicios satisface el requisito?
- [A] AzCopy en horario nocturno por la línea existente y Azure Backup para mantener una copia local
- [B] Azure Migrate para descubrir los servidores y Azure Site Recovery para replicar los datos
- [C] Azure Data Box para la transferencia inicial física y Azure File Sync para caché local y sincronización continua
- [D] ExpressRoute para la carga inicial y Azure Bastion para acceder a los archivos desde las oficinas

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: C**
**Explicación:** Data Box mueve decenas de TB físicamente sin saturar la red. Azure File Sync mantiene en caché local los archivos de uso frecuente y organiza en niveles en la nube el resto (*cloud tiering*).

</details>

---

### 62. `[Arrastrar y Soltar / Emparejamiento]` Empareje cada herramienta con su función:

| Herramienta | | Función |
| :--- | :-: | :--- |
| **1. AzCopy** | **A** | Dispositivo físico cifrado que se envía a Microsoft para cargar grandes volúmenes de datos sin depender de la red. |
| **2. Azure Data Box** | **B** | Servicio que descubre y evalúa servidores locales, estima costes y ayuda a migrarlos a Azure. |
| **3. Azure File Sync** | **C** | Utilidad de línea de comandos para copiar blobs y archivos hacia y desde cuentas de Azure Storage. |
| **4. Azure Migrate** | **D** | Servicio que sincroniza servidores de archivos Windows con Azure Files y mantiene en caché local los archivos frecuentes. |

<details>
<summary>🔎 Ver solución</summary>

- **1 ➔ C** (AzCopy)
- **2 ➔ A** (Data Box)
- **3 ➔ D** (File Sync)
- **4 ➔ B** (Azure Migrate)

</details>

---

### 63. `[Serie Sí / No (Verdadero / Falso)]` Sobre la seguridad en Azure Storage, indique si cada afirmación es correcta (Sí) o incorrecta (No):

1. *Los datos de Azure Storage se cifran en reposo de forma predeterminada.*
2. *Una firma de acceso compartido (SAS) concede acceso delegado, limitado en el tiempo, a un recurso sin compartir las claves de la cuenta.*
3. *El acceso anónimo público a los contenedores está habilitado de forma predeterminada en una cuenta de almacenamiento nueva.*

<details>
<summary>🔎 Ver solución</summary>

- Afirmación 1: **Sí**
- Afirmación 2: **Sí**
- Afirmación 3: **No**

**Explicación:** El cifrado en reposo es automático. La SAS permite permisos concretos y temporales. El acceso anónimo está deshabilitado por defecto y debe permitirse explícitamente.

</details>

---

### 64. `[Opción Única]` Una empresa quiere migrar bases de datos de SQL Server a PaaS con una compatibilidad casi total con funciones a nivel de instancia (SQL Agent, consultas entre bases de datos, CLR), sin administrar máquinas virtuales. ¿Qué servicio es el más adecuado?
- [A] Azure SQL Managed Instance, PaaS con compatibilidad casi total con SQL Server local
- [B] Azure SQL Database (base de datos única), optimizada para aplicaciones nuevas con menor compatibilidad de instancia
- [C] SQL Server en una VM de Azure, que da compatibilidad total pero exige administrar sistema operativo y motor
- [D] Azure Cosmos DB con API para NoSQL, base de datos distribuida con otro modelo de datos

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: A**
**Explicación:** Managed Instance combina la compatibilidad de instancia de SQL Server con las ventajas de PaaS. La opción C es IaaS y obliga a administrar la VM.

</details>

---

### 65. `[Opción Única]` Una aplicación global necesita latencias de milisegundos de un dígito en lectura y escritura en varias regiones, un modelo NoSQL con varias API y replicación multirregión transparente. ¿Qué servicio debe elegir?
- [A] Azure SQL Managed Instance, base relacional PaaS con compatibilidad con SQL Server
- [B] Azure Database for PostgreSQL, base relacional de código abierto totalmente gestionada
- [C] Azure Synapse Analytics, plataforma de analítica y almacén de datos empresarial
- [D] Azure Cosmos DB, base de datos NoSQL distribuida globalmente con múltiples API y replicación multirregión

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: D**
**Explicación:** Cosmos DB es la base de datos NoSQL multimodelo y distribuida globalmente de Azure, con latencia muy baja y replicación multirregión.

</details>

---

### 66. `[Opción Única]` ¿Cuál es la diferencia principal entre Azure AI Services y Azure Machine Learning?
- [A] AI Services solo funciona en entornos locales; Azure Machine Learning solo funciona en la nube pública
- [B] AI Services ofrece modelos preentrenados mediante API (visión, voz, lenguaje); Azure Machine Learning permite construir, entrenar y desplegar modelos propios
- [C] AI Services exige entrenar siempre los modelos con datos propios; Azure Machine Learning ofrece modelos listos para usar
- [D] AI Services se limita a almacenar datos; Azure Machine Learning ofrece análisis de datos en tiempo real

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: B**
**Explicación:** AI Services se consume por API sin conocimientos de ciencia de datos; Azure Machine Learning es la plataforma para el ciclo de vida de modelos personalizados.

</details>

---

### 67. `[Opción Única]` ¿Qué servicio es la solución en la nube de Microsoft para la gestión de identidades y accesos, con autenticación, inicio de sesión único (SSO) y MFA?
- [A] Azure Key Vault, que almacena secretos, claves y certificados
- [B] Active Directory Domain Services local, que autentica con Kerberos y NTLM dentro del dominio
- [C] Microsoft Entra ID, servicio de identidad en la nube con autenticación, SSO y acceso a aplicaciones
- [D] Microsoft Defender for Identity, que detecta amenazas basadas en identidad en el entorno local

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: C**
**Explicación:** Microsoft Entra ID (antes Azure Active Directory) es el servicio de identidad y acceso en la nube de Microsoft.

</details>

---

### 68. `[Opción Única]` ¿Cuál es la diferencia entre autenticación y autorización?
- [A] La autenticación verifica la identidad de un usuario o servicio; la autorización determina a qué recursos puede acceder
- [B] La autenticación determina los permisos sobre un recurso; la autorización verifica la identidad del solicitante
- [C] Ambos términos son sinónimos y se aplican en el mismo paso del proceso de acceso
- [D] La autenticación se aplica a usuarios humanos; la autorización solo a aplicaciones y servicios

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: A**
**Explicación:** Autenticación: ¿quién eres? Autorización: ¿qué puedes hacer?

</details>

---

### 69. `[Selección Múltiple]` ¿Cuáles de los siguientes métodos son de autenticación sin contraseña (*passwordless*)? *(Seleccione DOS)*
- [A] Clave de seguridad FIDO2
- [B] Contraseña de 16 caracteres con preguntas de seguridad adicionales
- [C] Código de un solo uso por SMS tras introducir la contraseña
- [D] Windows Hello para empresas
- [E] Contraseña con caducidad obligatoria cada 30 días

<details>
<summary>🔎 Ver solución</summary>

**Respuestas correctas: A y D**
**Explicación:** FIDO2 y Windows Hello para empresas (y Microsoft Authenticator) eliminan la contraseña. Las demás opciones siguen dependiendo de ella; el SMS es un segundo factor, no un método sin contraseña.

</details>

---

### 70. `[Opción Única]` ¿Qué funcionalidad evalúa señales como la ubicación, el estado del dispositivo o el riesgo del inicio de sesión para permitir el acceso, bloquearlo o exigir MFA?
- [A] Azure Policy, que evalúa la conformidad de los recursos con reglas corporativas
- [B] Control de acceso basado en roles (RBAC), que asigna permisos sobre recursos de Azure
- [C] Bloqueos de recursos, que impiden borrados o cambios accidentales
- [D] Acceso condicional de Microsoft Entra, que evalúa señales para permitir, bloquear o exigir MFA

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: D**
**Explicación:** El acceso condicional es el motor de directivas "si-entonces" de Entra ID y una pieza clave de Zero Trust.

</details>

---

### 71. `[Escenario Empresarial]` Una aseguradora traslada a VMs de Azure aplicaciones heredadas que requieren unión a dominio, directivas de grupo (GPO), LDAP y autenticación Kerberos/NTLM. No quiere desplegar ni parchear controladores de dominio en máquinas virtuales. ¿Qué servicio debe usar?
- [A] Microsoft Entra ID Free, que ofrece autenticación moderna basada en OAuth 2.0 y OpenID Connect
- [B] Microsoft Entra Domain Services, dominio administrado con GPO, LDAP y Kerberos/NTLM sin controladores propios
- [C] Microsoft Entra Connect, que sincroniza identidades entre el directorio local y Entra ID
- [D] Microsoft Entra External ID, orientado a clientes y socios externos con identidades B2B/B2C

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: B**
**Explicación:** Entra Domain Services ofrece servicios de dominio administrados compatibles con las aplicaciones heredadas, sin gestionar controladores de dominio.

</details>

---

### 72. `[Opción Única]` Un desarrollador debe crear y administrar VMs y bases de datos en un grupo de recursos, pero no debe poder conceder ni revocar el acceso de otros usuarios. ¿Qué rol integrado de Azure RBAC debe asignarse?
- [A] Propietario (*Owner*), con control total y capacidad de delegar permisos
- [B] Administrador de acceso de usuario (*User Access Administrator*), que gestiona asignaciones de roles
- [C] Colaborador (*Contributor*), que gestiona recursos pero no concede acceso a otros
- [D] Lector (*Reader*), que ve los recursos sin poder modificarlos

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: C**
**Explicación:** Contributor crea y administra recursos, pero no puede asignar roles. Owner sí puede; Reader no puede modificar nada.

</details>

---

### 73. `[Opción Única]` ¿Cuál es uno de los principios rectores del modelo de seguridad Zero Trust?
- [A] Asumir que ya existe una brecha (*assume breach*) y limitar el radio de impacto
- [B] Confiar en cualquier dispositivo que se conecte desde la red corporativa interna
- [C] Verificar la identidad solo en el primer inicio de sesión y mantener la sesión indefinidamente
- [D] Conceder permisos amplios por defecto a los usuarios para evitar fricción operativa

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: A**
**Explicación:** Los tres principios son verificar explícitamente, usar acceso con privilegios mínimos y asumir la brecha.

</details>

---

### 74. `[Opción Única]` ¿Qué describe la defensa en profundidad (*defense in depth*)?
- [A] Concentrar toda la inversión de seguridad en un único firewall perimetral de alta capacidad
- [B] Aplicar cifrado solo a los datos en tránsito y confiar en la seguridad física del centro de datos
- [C] Combinar controles en capas (física, identidad, perímetro, red, cómputo, aplicación y datos) para retrasar y contener ataques
- [D] Instalar antivirus únicamente en los equipos de los administradores y revisar los registros mensualmente

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: C**
**Explicación:** Si un atacante supera una capa, las siguientes siguen protegiendo los activos críticos.

</details>

---

### 75. `[Opción Única]` ¿Qué servicio evalúa la postura de seguridad (CSPM) de entornos Azure, híbridos y multinube, calcula una puntuación de seguridad (*Secure Score*) y emite recomendaciones?
- [A] Microsoft Sentinel, que correlaciona eventos como SIEM/SOAR
- [B] Microsoft Defender for Cloud, que ofrece CSPM, recomendaciones y protección de cargas de trabajo
- [C] Azure Monitor, que recopila métricas y registros de rendimiento de los recursos
- [D] Azure Advisor, que emite recomendaciones sobre coste, fiabilidad y rendimiento

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: B**
**Explicación:** Defender for Cloud (antes Azure Security Center) es la herramienta de gestión de postura y protección de cargas de trabajo.

</details>

---

### 76. `[Opción Única]` ¿Qué servicio nativo de la nube actúa como SIEM y SOAR, recopilando datos de seguridad de toda la empresa y automatizando la respuesta a incidentes?
- [A] Microsoft Defender for Cloud, que gestiona la postura de seguridad de los recursos
- [B] Azure Firewall, que filtra el tráfico de red con inteligencia de amenazas
- [C] Microsoft Purview, que gobierna y clasifica datos de la organización
- [D] Microsoft Sentinel, que correlaciona eventos, detecta amenazas y orquesta respuestas

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: D**
**Explicación:** Sentinel es el SIEM/SOAR de Azure. Defender for Cloud se centra en postura y protección de cargas de trabajo.

</details>

---

### 77. `[Escenario Empresarial]` Una aplicación web en Azure App Service debe leer y escribir en Azure SQL Database y obtener secretos de Key Vault. La política de seguridad prohíbe almacenar contraseñas o cadenas de conexión con secretos en el código, en la configuración o en repositorios. ¿Qué característica debe implementarse?
- [A] Una identidad administrada (*managed identity*) de Microsoft Entra asignada a la aplicación
- [B] Una firma de acceso compartido (SAS) sin fecha de caducidad guardada en la configuración de la aplicación
- [C] Una regla de firewall que permita todas las direcciones IP de Azure hacia la base de datos
- [D] Una cuenta de usuario SQL con contraseña compleja guardada en un archivo de configuración cifrado

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: A**
**Explicación:** Las identidades administradas permiten que el recurso se autentique con Entra ID sin credenciales almacenadas.

</details>

---

### 78. `[Opción Única]` Una VM debe acceder a una cuenta de Blob Storage mediante una IP privada de su propia subred, sin que el tráfico use el punto de conexión público. ¿Qué característica debe usarse?
- [A] Emparejamiento de VNet, que conecta redes virtuales entre sí por la red troncal
- [B] Azure Bastion, que da acceso RDP/SSH a las VMs sin IP pública
- [C] Una regla de NSG que permita el tráfico saliente hacia el servicio de almacenamiento
- [D] Azure Private Endpoint (Private Link), que asigna una IP privada de la subred al servicio PaaS

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: D**
**Explicación:** Private Endpoint crea una interfaz de red con IP privada que conecta al servicio PaaS a través de Private Link, evitando la exposición a Internet.

</details>

---

### 79. `[Opción Única]` ¿Qué es Azure Marketplace?
- [A] Un portal de subastas donde las organizaciones pujan por capacidad de cómputo sobrante
- [B] Un catálogo de aplicaciones, imágenes y soluciones certificadas de Microsoft y socios, con facturación integrada en Azure
- [C] Un servicio que compara los precios de los recursos de Azure con los de otros proveedores cloud
- [D] Una herramienta para vender hardware de servidores usado entre clientes de Azure

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: B**
**Explicación:** Marketplace ofrece software de terceros (firewalls, imágenes, aplicaciones SaaS) certificado para Azure, con compra y facturación unificadas.

</details>

---

## Módulo 4: Administración, Gobernanza, Costes y Monitorización

### 80. `[Opción Única]` ¿Cuál es la diferencia principal entre la calculadora de precios de Azure y la calculadora de coste total de propiedad (TCO)?
- [A] La calculadora de precios estima el ahorro de licencias; la de TCO calcula el consumo de ancho de banda
- [B] La calculadora de precios solo funciona con contratos Enterprise Agreement; la de TCO es gratuita para todos
- [C] La calculadora de precios estima el coste de servicios concretos de Azure; la de TCO compara el coste del entorno local con el de Azure
- [D] La calculadora de precios compara centros de datos locales; la de TCO estima el coste mensual de recursos desplegados

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: C**
**Explicación:** La calculadora de precios modela una configuración de servicios en Azure; la de TCO justifica la migración comparando el coste de mantener la infraestructura local frente al de Azure en 3-5 años.

</details>

---

### 81. `[Escenario Empresarial]` Una aseguradora ejecuta bases de datos de producción y máquinas virtuales centrales las 24 horas del día, con un perfil de uso estable que mantendrá al menos tres años. Quiere reducir el coste frente al pago por uso. ¿Qué opción debe elegir?
- [A] Azure Reservations (o un plan de ahorro) con compromiso a 1 o 3 años, con descuentos de hasta el 72 %
- [B] Mantener el pago por uso y desasignar las máquinas por la noche para reducir cargos
- [C] Migrar las cargas a VMs Spot de Azure para obtener descuentos sin compromiso de permanencia
- [D] Contratar una suscripción de evaluación gratuita y renovarla cada 30 días

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: A**
**Explicación:** Las reservas dan el mayor descuento para cargas estables y previsibles.
**Descartes:** B no aplica a cargas 24x7; Spot puede desalojar las VMs y no es apto para producción crítica; la evaluación gratuita no es para producción.

</details>

---

### 82. `[Opción Única]` Una empresa tiene licencias locales de Windows Server y SQL Server con Software Assurance. ¿Qué beneficio permite reutilizarlas en Azure para reducir el coste?
- [A] Descuento por volumen de Microsoft Store, que reduce el precio de compra de licencias nuevas
- [B] Azure Reservations, que descuenta capacidad a cambio de un compromiso temporal
- [C] Créditos de Azure para startups, que cubren gasto durante un periodo limitado
- [D] Ventaja híbrida de Azure (*Azure Hybrid Benefit*), que aplica las licencias existentes para pagar solo la tarifa base de cómputo

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: D**
**Explicación:** Azure Hybrid Benefit permite llevar licencias con Software Assurance a Azure y no pagar de nuevo la licencia del sistema operativo o de SQL Server; se puede combinar con Reservations.

</details>

---

### 83. `[Opción Única]` Finanzas quiere definir un límite de gasto mensual de 10.000 € para el entorno de desarrollo y recibir avisos por correo al alcanzar el 80 % y el 100 %. ¿Qué funcionalidad debe configurar?
- [A] Alertas de Azure Monitor sobre métricas de CPU de las máquinas virtuales
- [B] Presupuestos y alertas de coste de Microsoft Cost Management
- [C] Directivas de Azure Policy con efecto Deny sobre los tamaños de VM
- [D] Bloqueos de recursos de tipo ReadOnly en el grupo de recursos

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: B**
**Explicación:** Cost Management permite definir presupuestos por ámbito y notificaciones al superar umbrales de gasto real o previsto.

</details>

---

### 84. `[Serie Sí / No (Verdadero / Falso)]` Sobre las herramientas de costes de Azure, indique si cada afirmación es correcta (Sí) o incorrecta (No):

1. *La calculadora de precios permite estimar el coste de recursos que aún no se han desplegado.*
2. *La calculadora de TCO exige tener ya recursos desplegados en Azure para realizar la comparación.*
3. *Microsoft Cost Management permite analizar el gasto agrupándolo por etiquetas (tags).*

<details>
<summary>🔎 Ver solución</summary>

- Afirmación 1: **Sí**
- Afirmación 2: **No**
- Afirmación 3: **Sí**

**Explicación:** Ambas calculadoras trabajan sobre estimaciones y no necesitan recursos desplegados. Cost Management analiza el gasto real y lo desglosa por etiquetas.

</details>

---

### 85. `[Selección Múltiple]` ¿Cuáles de las siguientes acciones reducen de forma efectiva los costes de Azure? *(Seleccione DOS)*
- [A] Dimensionar las VMs de producción al triple del consumo máximo observado para evitar incidencias
- [B] Desasignar las VMs de los entornos de prueba fuera del horario laboral
- [C] Comprar Azure Reservations para cargas estables y previsibles
- [D] Mantener los recursos de desarrollo desplegados en varias regiones para mejorar la latencia
- [E] Mantener activos los discos y las IP públicas huérfanas por si se necesitan más adelante

<details>
<summary>🔎 Ver solución</summary>

**Respuestas correctas: B y C**
**Explicación:** Desasignar detiene los cargos de cómputo; las reservas abaratan la capacidad estable.
**Descartes:** sobredimensionar, duplicar regiones y mantener recursos huérfanos aumentan el gasto.

</details>

---

### 86. `[Opción Única]` ¿Qué afirmación sobre las etiquetas (*tags*) de Azure es correcta?
- [A] Son pares nombre-valor para clasificar recursos (por ejemplo, CentroCoste: Ventas) y no se heredan automáticamente desde el grupo de recursos
- [B] Son bloqueos que impiden eliminar el recurso hasta que se retira la etiqueta
- [C] Se heredan automáticamente desde la suscripción hasta cada recurso, sin necesidad de directivas
- [D] Controlan los permisos de acceso de los usuarios sobre los recursos que las llevan

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: A**
**Explicación:** Las etiquetas organizan recursos para costes, inventario o automatización. No se heredan por defecto; para propagarlas se usan directivas de Azure Policy.

</details>

---

### 87. `[Escenario Empresarial]` El responsable de un proyecto configura un presupuesto de 5.000 € con alerta al 100 %. Al llegar al límite, el director espera que Azure detenga automáticamente los recursos. ¿Qué ocurrirá realmente?
- [A] Azure desasignará todas las VMs de la suscripción de forma automática
- [B] Azure impedirá crear nuevos recursos hasta el siguiente ciclo de facturación
- [C] Se enviará la notificación configurada, pero los recursos seguirán funcionando salvo que se asocie una acción automatizada
- [D] Azure cancelará la suscripción para evitar cargos adicionales

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: C**
**Explicación:** Los presupuestos de Cost Management notifican, pero no bloquean el consumo por sí solos. Para actuar se pueden asociar grupos de acciones o automatizaciones.

</details>

---

### 88. `[Arrastrar y Soltar / Emparejamiento]` Empareje cada herramienta de costes con su propósito:

| Herramienta | | Propósito |
| :--- | :-: | :--- |
| **1. Calculadora de precios** | **A** | Analiza el gasto real, define presupuestos y alertas y lo desglosa por etiquetas. |
| **2. Calculadora de TCO** | **B** | Compara el coste de mantener cargas locales con el de ejecutarlas en Azure durante varios años. |
| **3. Microsoft Cost Management** | **C** | Detecta recursos infrautilizados y recomienda acciones para reducir el gasto. |
| **4. Azure Advisor** | **D** | Estima el coste mensual de una configuración de servicios de Azure antes de desplegarla. |

<details>
<summary>🔎 Ver solución</summary>

- **1 ➔ D**
- **2 ➔ B**
- **3 ➔ A**
- **4 ➔ C**

</details>

---

### 89. `[Opción Única]` ¿Qué servicio permite definir y aplicar reglas corporativas sobre los recursos, por ejemplo permitir solo ciertas regiones o exigir una etiqueta?
- [A] Azure RBAC, que controla qué acciones puede realizar cada identidad
- [B] Azure Advisor, que emite recomendaciones sobre buenas prácticas
- [C] Bloqueos de recursos, que impiden la modificación o eliminación de recursos concretos
- [D] Azure Policy, que evalúa los recursos frente a reglas y puede auditar o denegar despliegues que no las cumplan

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: D**
**Explicación:** Azure Policy es el servicio de gobernanza declarativa: evalúa la conformidad y puede denegar o corregir recursos incumplidores.

</details>

---

### 90. `[Opción Única]` Un equipo de cumplimiento quiere agrupar decenas de definiciones de directivas para evaluar el cumplimiento de ISO 27001 como una sola asignación. ¿Cómo se denomina esa agrupación?
- [A] Un grupo de administración, que organiza suscripciones en una jerarquía de gobierno
- [B] Una iniciativa de directiva (*policy initiative*), conjunto de definiciones que se asigna como una sola unidad
- [C] Un rol personalizado de RBAC, que agrupa permisos para una función concreta
- [D] Una plantilla de Bicep, que despliega recursos de forma declarativa y repetible

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: B**
**Explicación:** Las iniciativas agrupan directivas para simplificar la asignación y la evaluación de estándares como ISO 27001 o PCI-DSS.

</details>

---

### 91. `[Opción Única]` Para evitar que un administrador elimine por error una base de datos crítica, sin impedir que se lea o se modifique, ¿qué debe aplicarse?
- [A] Un bloqueo ReadOnly, que impide cualquier modificación y también la eliminación del recurso
- [B] Una directiva de Azure Policy con efecto Audit, que registra los intentos de eliminación
- [C] Un bloqueo CanNotDelete (No eliminar), que permite leer y modificar pero impide eliminar el recurso
- [D] El rol Lector de RBAC, que impide eliminar pero también cualquier modificación del recurso

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: C**
**Explicación:** CanNotDelete protege contra el borrado, incluso para usuarios con rol Propietario, hasta que se retire el bloqueo.

</details>

---

### 92. `[Serie Sí / No (Verdadero / Falso)]` Sobre los bloqueos de recursos, indique si cada afirmación es correcta (Sí) o incorrecta (No):

1. *Un bloqueo aplicado a un grupo de recursos se hereda por todos los recursos que contiene.*
2. *Un usuario con el rol Propietario puede eliminar un recurso con bloqueo CanNotDelete sin quitar antes el bloqueo.*
3. *Un bloqueo ReadOnly impide que una aplicación lea los registros de una base de datos SQL.*

<details>
<summary>🔎 Ver solución</summary>

- Afirmación 1: **Sí**
- Afirmación 2: **No**
- Afirmación 3: **No**

**Explicación:** Los bloqueos se heredan hacia abajo. Primero hay que retirar el bloqueo, incluso siendo Propietario. Los bloqueos actúan sobre el plano de control de Azure Resource Manager, no sobre las operaciones de datos de las aplicaciones.

</details>

---

### 93. `[Opción Única]` ¿Cuál es la diferencia principal entre Azure Policy y Azure RBAC?
- [A] Policy evalúa si los recursos cumplen reglas (qué se puede desplegar o configurar); RBAC controla qué acciones puede realizar cada identidad
- [B] Policy asigna permisos a usuarios sobre recursos; RBAC evalúa la conformidad de los recursos con estándares
- [C] Policy solo se aplica a identidades humanas; RBAC solo a cuentas de servicio
- [D] Policy y RBAC son equivalentes y se diferencian únicamente por el ámbito de asignación

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: A**
**Explicación:** RBAC responde a "¿qué puede hacer este usuario?"; Policy responde a "¿cumple este recurso las reglas?", aunque el usuario tenga permisos.

</details>

---

### 94. `[Escenario Empresarial]` Una multinacional tiene 40 suscripciones agrupadas por país. Auditoría exige que, en todas ellas, los recursos solo se desplieguen en regiones de la UE y que todos lleven la etiqueta «Entorno». El equipo quiere administrarlo de forma central, sin repetir la configuración en cada suscripción. ¿Qué enfoque es el adecuado?
- [A] Asignar un bloqueo CanNotDelete en cada suscripción y revisar manualmente las etiquetas
- [B] Crear un rol personalizado de RBAC en cada suscripción que limite las regiones disponibles
- [C] Configurar alertas de Azure Monitor sobre el Registro de actividad de cada suscripción
- [D] Organizar las suscripciones en grupos de administración y asignar directivas de Azure Policy a ese nivel para que se hereden

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: D**
**Explicación:** Los grupos de administración permiten asignar Policy una sola vez y heredar hacia todas las suscripciones. Los bloqueos, los roles y las alertas no imponen regiones ni etiquetas.

</details>

---

### 95. `[Opción Única]` ¿Qué servicio ofrece gobernanza y cumplimiento de datos, descubriendo, clasificando y mapeando datos en entornos locales, multinube y SaaS?
- [A] Azure Key Vault, que protege secretos, claves y certificados
- [B] Microsoft Purview, que ofrece gobernanza, descubrimiento y clasificación de datos
- [C] Microsoft Defender for Cloud, que evalúa la postura de seguridad de los recursos
- [D] Azure Resource Graph, que consulta el inventario de recursos entre suscripciones

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: B**
**Explicación:** Purview gobierna y clasifica los datos de la organización, sin importar dónde residan.

</details>

---

### 96. `[Opción Única]` ¿Dónde puede un auditor obtener informes de auditoría, certificaciones y documentación de cumplimiento de Microsoft?
- [A] Service Trust Portal, que publica informes de auditoría, certificaciones y documentos de cumplimiento
- [B] Azure Service Health, que informa de incidentes y mantenimientos planificados
- [C] Azure Advisor, que emite recomendaciones sobre fiabilidad y seguridad de los recursos
- [D] Azure Cost Management, que muestra el gasto y los presupuestos de las suscripciones

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: A**
**Explicación:** El Service Trust Portal centraliza documentación de cumplimiento, certificaciones y auditorías de Microsoft.

</details>

---

### 97. `[Serie Sí / No (Verdadero / Falso)]` Sobre Azure Policy, indique si cada afirmación es correcta (Sí) o incorrecta (No):

1. *Una directiva con efecto Deny puede impedir la creación de un recurso que incumpla la regla.*
2. *Azure Policy elimina automáticamente los recursos ya existentes que no cumplan una directiva recién asignada.*
3. *Las directivas asignadas a una suscripción se aplican a los grupos de recursos y recursos que contiene.*

<details>
<summary>🔎 Ver solución</summary>

- Afirmación 1: **Sí**
- Afirmación 2: **No**
- Afirmación 3: **Sí**

**Explicación:** Los recursos existentes se marcan como no conformes; solo se corrigen con efectos de corrección y tareas de remediación. Las directivas se heredan hacia abajo.

</details>

---

### 98. `[Arrastrar y Soltar / Emparejamiento]` Empareje cada herramienta de administración de Azure con su característica principal:

| Herramienta | | Característica |
| :--- | :-: | :--- |
| **1. Portal de Azure** | **A** | Terminal accesible desde el navegador, ya autenticado, con Bash o PowerShell sin instalación local. |
| **2. Azure PowerShell** | **B** | Interfaz web gráfica para crear, administrar y supervisar recursos de forma interactiva. |
| **3. Azure CLI** | **C** | Herramienta multiplataforma cuyos comandos empiezan por `az` (por ejemplo, `az group create`). |
| **4. Azure Cloud Shell** | **D** | Módulo multiplataforma con cmdlets de tipo Verbo-Sustantivo, como `Get-AzVM`. |

<details>
<summary>🔎 Ver solución</summary>

- **1 ➔ B**
- **2 ➔ D**
- **3 ➔ C**
- **4 ➔ A**

</details>

---

### 99. `[Opción Única]` Una empresa tiene servidores en su centro de datos, en AWS y clústeres de Kubernetes en otro proveedor. Quiere gobernarlos desde Azure aplicando Azure Policy, Defender y etiquetas. ¿Qué servicio lo hace posible?
- [A] Azure Lighthouse, que permite a un proveedor administrar recursos de otros tenants
- [B] Azure Migrate, que descubre, evalúa y migra servidores a Azure
- [C] Azure Arc, que extiende el plano de administración de Azure a recursos fuera de Azure
- [D] Azure Virtual Network Peering, que conecta redes virtuales entre sí

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: C**
**Explicación:** Azure Arc proyecta servidores y clústeres externos como recursos de Azure, permitiendo aplicar Policy, Defender y etiquetas con una gestión unificada.

</details>

---

### 100. `[Opción Única]` ¿Qué es Azure Resource Manager (ARM)?
- [A] Un servicio de monitorización que recopila métricas y registros de los recursos
- [B] Un servicio de facturación que consolida los costes de todas las suscripciones
- [C] Una herramienta local de línea de comandos que sustituye al portal de Azure
- [D] El servicio de implementación y administración de Azure: portal, CLI, PowerShell y SDK pasan por él para gestionar recursos

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: D**
**Explicación:** ARM es la capa de administración de Azure. Todas las herramientas envían sus peticiones a ARM, que autentica, autoriza y despliega los recursos.

</details>

---

### 101. `[Opción Única]` ¿Cuál es la principal ventaja de Bicep frente a las plantillas ARM en JSON?
- [A] Bicep despliega recursos en cualquier nube sin necesidad de ARM
- [B] Bicep ofrece una sintaxis declarativa más concisa y legible que JSON y se transpila a plantillas ARM
- [C] Las plantillas ARM en JSON han dejado de estar soportadas, por lo que Bicep es obligatorio
- [D] Bicep solo se puede ejecutar desde el portal de Azure mediante asistentes gráficos

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: B**
**Explicación:** Bicep es un lenguaje específico de dominio para Azure con sintaxis más simple, que se compila a ARM. Las plantillas JSON siguen siendo compatibles.

</details>

---

### 102. `[Opción Única]` Un equipo quiere definir infraestructura como código para Azure, otros proveedores cloud y plataformas locales usando un formato común. ¿Qué herramienta debe usar?
- [A] Terraform de HashiCorp, herramienta de IaC independiente del proveedor con lenguaje HCL
- [B] Azure Bicep, lenguaje declarativo diseñado para recursos de Azure
- [C] Plantillas ARM en JSON, formato nativo de Azure Resource Manager
- [D] Azure Cloud Shell, entorno de línea de comandos accesible desde el navegador

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: A**
**Explicación:** Terraform es multiproveedor. Bicep y ARM son nativos de Azure; Cloud Shell es un terminal, no una herramienta de IaC.

</details>

---

### 103. `[Escenario Empresarial]` Un equipo debe desplegar entornos de desarrollo, pruebas y producción idénticos, de forma repetible, revisable en control de versiones y sin pasos manuales en el portal. ¿Qué enfoque es el adecuado?
- [A] Crear cada entorno manualmente en el portal y documentar los pasos en una hoja de cálculo
- [B] Ejecutar scripts de PowerShell escritos por cada administrador de forma individual, sin estandarizar
- [C] Definir la infraestructura como código declarativo (Bicep o plantillas ARM) y desplegar la misma definición en cada entorno
- [D] Clonar manualmente la VM de producción y renombrar sus recursos para cada nuevo entorno

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: C**
**Explicación:** La infraestructura como código declarativa es repetible, auditable en el control de versiones y produce entornos consistentes.

</details>

---

### 104. `[Opción Única]` Un auditor debe consultar rápidamente, con KQL, el inventario de recursos de cientos de suscripciones (por ejemplo, las VMs que no tienen cierta etiqueta). ¿Qué servicio es el adecuado?
- [A] Azure Monitor Logs, que consulta registros de telemetría recopilados en un área de trabajo
- [B] Azure Cost Management, que exporta datos de gasto para su análisis
- [C] La barra de búsqueda del portal, que filtra recursos en la vista actual
- [D] Azure Resource Graph, que consulta metadatos de recursos a gran escala entre suscripciones

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: D**
**Explicación:** Resource Graph está diseñado para consultar el inventario y las propiedades de los recursos a escala, con KQL, a través de muchas suscripciones.

</details>

---

### 105. `[Escenario Empresarial]` Un administrador debe crear 50 grupos de recursos con etiquetas estándar y repetir el proceso cada trimestre, ejecutándolo desde una canalización de CI/CD en Linux. ¿Qué enfoque es el más adecuado?
- [A] Crear los grupos de forma manual en el portal siguiendo una guía documentada
- [B] Automatizar con scripts de Azure CLI o Azure PowerShell ejecutados desde la canalización
- [C] Usar la aplicación móvil de Azure para crear los grupos desde un dispositivo
- [D] Solicitar los grupos a Azure Marketplace para que un socio de Microsoft los aprovisione

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: B**
**Explicación:** CLI y PowerShell son multiplataforma y automatizables. El portal y la app móvil son interactivos.

</details>

---

### 106. `[Opción Única]` ¿Qué afirmación sobre Azure Cloud Shell es correcta?
- [A] Es un terminal en el navegador, autenticado con la cuenta de Azure, que ofrece Bash o PowerShell y usa almacenamiento persistente
- [B] Es una aplicación de escritorio que debe instalarse localmente con el módulo Az y la CLI configurados
- [C] Solo permite administrar recursos de Azure mediante comandos de PowerShell, sin Azure CLI
- [D] Es un servicio de monitorización que registra los comandos ejecutados por todos los administradores

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: A**
**Explicación:** Cloud Shell se abre desde el portal o desde el navegador, ya autenticado, con Bash o PowerShell y sin instalación local.

</details>

---

### 107. `[Opción Única]` ¿Qué servicio gratuito analiza la configuración y el uso de los recursos y emite recomendaciones personalizadas sobre coste, seguridad, fiabilidad, excelencia operativa y rendimiento?
- [A] Azure Monitor, que recopila y analiza métricas y registros
- [B] Microsoft Defender for Cloud, que evalúa la postura de seguridad
- [C] Azure Advisor, consultor personalizado basado en buenas prácticas de Azure
- [D] Azure Service Health, que informa de incidencias y mantenimientos

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: C**
**Explicación:** Advisor recomienda mejoras alineadas con los pilares del Well-Architected Framework: coste, seguridad, fiabilidad, excelencia operativa y rendimiento.

</details>

---

### 108. `[Opción Única]` ¿Qué plataforma recopila, analiza y actúa sobre métricas y registros de recursos de Azure y de entornos locales?
- [A] Azure Policy, que evalúa la conformidad de los recursos con reglas corporativas
- [B] Microsoft Sentinel, SIEM nativo que detecta y responde a amenazas
- [C] Azure Arc, que extiende la administración de Azure a recursos externos
- [D] Azure Monitor, plataforma de observabilidad con métricas, registros, paneles y alertas

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: D**
**Explicación:** Azure Monitor es la plataforma unificada de telemetría y observabilidad de Azure.

</details>

---

### 109. `[Opción Única]` ¿Dónde se almacenan y se consultan con KQL los registros recopilados por Azure Monitor?
- [A] Azure Blob Storage en nivel Archivo, que conserva datos a bajo coste con rehidratación
- [B] Un área de trabajo de Log Analytics (*Log Analytics workspace*)
- [C] Un catálogo de Microsoft Purview
- [D] Azure Cosmos DB con la API de tablas

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: B**
**Explicación:** El área de trabajo de Log Analytics es el repositorio de registros que se consulta con Kusto Query Language (KQL).

</details>

---

### 110. `[Opción Única]` ¿Qué componente de Azure Monitor supervisa el rendimiento de aplicaciones (APM): tiempos de respuesta, excepciones y dependencias lentas?
- [A] Application Insights, que instrumenta aplicaciones web y detecta anomalías y dependencias lentas
- [B] Azure Network Watcher, que diagnostica la conectividad de red
- [C] Azure Service Health, que informa del estado de los servicios de Azure
- [D] Azure Advisor, que emite recomendaciones sobre buenas prácticas

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: A**
**Explicación:** Application Insights es la solución de APM de Azure Monitor para desarrolladores y equipos DevOps.

</details>

---

### 111. `[Escenario Empresarial]` Varias VMs de West Europe han dejado de responder. El equipo quiere saber si hay una incidencia de la plataforma Azure que afecte a sus suscripciones y también el estado de una VM concreta. ¿Qué servicios debe consultar?
- [A] Azure Advisor para la incidencia regional y Azure Monitor Logs para el estado de la VM
- [B] Azure Status (página pública) para la VM concreta y Azure Policy para la incidencia regional
- [C] Azure Service Health para incidencias y mantenimientos que afectan a sus suscripciones, y Resource Health para el estado de cada recurso
- [D] Microsoft Defender for Cloud para la incidencia regional y Application Insights para el estado de la VM

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: C**
**Explicación:** Service Health ofrece una vista personalizada de incidencias y mantenimientos que afectan a sus servicios; Resource Health informa de la disponibilidad de cada recurso concreto.

</details>

---

### 112. `[Serie Sí / No (Verdadero / Falso)]` Sobre la monitorización en Azure, indique si cada afirmación es correcta (Sí) o incorrecta (No):

1. *Azure Monitor recopila tanto métricas como registros de los recursos.*
2. *Azure Monitor sustituye a Azure Advisor para obtener recomendaciones de ahorro de costes.*
3. *Application Insights puede detectar excepciones y dependencias lentas en una aplicación web.*

<details>
<summary>🔎 Ver solución</summary>

- Afirmación 1: **Sí**
- Afirmación 2: **No**
- Afirmación 3: **Sí**

**Explicación:** Monitor recopila telemetría y activa alertas; las recomendaciones de coste vienen de Azure Advisor. Application Insights es la parte de APM de Azure Monitor.

</details>

---

### 113. `[Selección Múltiple]` ¿Cuáles de los siguientes servicios ofrecen información de estado personalizada para los recursos y las suscripciones del cliente? *(Seleccione DOS)*
- [A] Azure Status, página pública con el estado global de todos los servicios y regiones
- [B] Azure Service Health, vista personalizada de incidencias y mantenimientos que afectan a sus servicios
- [C] Microsoft Cost Management, vista del gasto por suscripción y etiquetas
- [D] Azure Resource Health, estado de disponibilidad de cada recurso concreto
- [E] Azure Policy, evaluación de la conformidad de los recursos con las reglas

<details>
<summary>🔎 Ver solución</summary>

**Respuestas correctas: B y D**
**Explicación:** Service Health y Resource Health informan sobre el estado de lo que el cliente usa. Azure Status es una página pública global, no personalizada.

</details>

---

### 114. `[Opción Única]` Un equipo quiere recibir un SMS y ejecutar un runbook automático cuando la CPU de una VM supere el 90 % durante 10 minutos. ¿Qué debe configurar?
- [A] Una directiva de Azure Policy con efecto DeployIfNotExists sobre la VM
- [B] Una regla de alerta de Azure Monitor con un grupo de acciones (SMS, correo, runbook)
- [C] Un presupuesto de Cost Management con umbral de gasto del 90 %
- [D] Una recomendación de Azure Advisor sobre el dimensionamiento de la VM

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: B**
**Explicación:** Las reglas de alerta de Azure Monitor evalúan métricas o registros y activan grupos de acciones con notificaciones y automatizaciones.

</details>

---

### 115. `[Escenario Empresarial]` Una empresa planea migrar 200 VMs de VMware a Azure. Antes de decidir quiere (1) evaluar la preparación y el dimensionamiento de cada servidor y (2) estimar el ahorro frente a mantener su centro de datos durante cinco años. *(Seleccione DOS herramientas)*
- [A] Azure Migrate, para descubrir y evaluar los servidores locales
- [B] Azure Advisor, para recomendar optimizaciones de recursos ya desplegados
- [C] Calculadora de TCO, para comparar el coste local con el de Azure
- [D] Azure Service Health, para conocer el estado de las regiones de destino
- [E] Azure Policy, para auditar la conformidad de las VMs tras la migración

<details>
<summary>🔎 Ver solución</summary>

**Respuestas correctas: A y C**
**Explicación:** Azure Migrate descubre y evalúa; la calculadora de TCO compara costes. Advisor, Service Health y Policy no sirven para planificar la migración.

</details>

---

### 116. `[Selección Múltiple]` Un equipo necesita (1) impedir que se elimine por error un recurso crítico y (2) exigir que todos los recursos nuevos incluyan la etiqueta «CentroCoste». *(Seleccione DOS)*
- [A] Azure Policy
- [B] Azure Advisor
- [C] Presupuestos de Microsoft Cost Management
- [D] Bloqueos de recursos
- [E] Azure Resource Graph

<details>
<summary>🔎 Ver solución</summary>

**Respuestas correctas: A y D**
**Explicación:** El bloqueo CanNotDelete evita el borrado accidental; Azure Policy puede exigir etiquetas. Advisor recomienda, los presupuestos solo avisan y Resource Graph solo consulta.

</details>

---

### 117. `[Escenario Empresarial]` La factura mensual de un proyecto se ha duplicado sin explicación. El responsable quiere identificar qué servicios, grupos de recursos y etiquetas han generado el aumento y detectar recursos infrautilizados. ¿Qué herramientas debe usar?
- [A] Azure Service Health para ver el gasto y Resource Health para detectar recursos inactivos
- [B] Azure Policy para analizar el gasto por servicio y Azure Monitor para recomendar reducciones
- [C] La calculadora de TCO para analizar el gasto real y Azure Arc para identificar recursos infrautilizados
- [D] El análisis de costes de Microsoft Cost Management para desglosar el gasto y Azure Advisor para detectar recursos infrautilizados

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: D**
**Explicación:** Cost Management analiza el gasto real desglosado por servicio, grupo de recursos y etiquetas; Advisor detecta recursos infrautilizados y recomienda ahorros.

</details>

---

### 118. `[Serie Sí / No (Verdadero / Falso)]` Sobre las herramientas de administración de Azure, indique si cada afirmación es correcta (Sí) o incorrecta (No):

1. *Azure CLI y Azure PowerShell pueden ejecutarse en Windows, Linux y macOS.*
2. *Azure Cloud Shell requiere instalar localmente el módulo Az o la CLI antes de poder usarse.*
3. *Las acciones realizadas desde el portal, la CLI o PowerShell pasan por Azure Resource Manager.*

<details>
<summary>🔎 Ver solución</summary>

- Afirmación 1: **Sí**
- Afirmación 2: **No**
- Afirmación 3: **Sí**

**Explicación:** Cloud Shell ya incluye ambas herramientas en el navegador. Todas las herramientas de gestión se apoyan en ARM.

</details>

---

### 119. `[Opción Única]` Se asigna una directiva que exige la etiqueta «Entorno» a una suscripción con cientos de recursos ya existentes. ¿Qué ocurre con los recursos que no la tienen?
- [A] Se marcan como no conformes en la evaluación de cumplimiento y pueden corregirse mediante tareas de remediación, según el efecto
- [B] Se eliminan automáticamente porque incumplen la directiva asignada
- [C] Se mueven a un grupo de recursos de cuarentena creado por Azure Policy
- [D] Permanecen sin cambios y la directiva solo se aplica a recursos de otras suscripciones

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: A**
**Explicación:** Policy evalúa los recursos existentes y los muestra como no conformes. Los efectos Deny o Audit no los modifican; para corregirlos se usan efectos como Modify o DeployIfNotExists con remediación.

</details>

---

### 120. `[Escenario Empresarial]` Una compañía quiere que todos los recursos nuevos incluyan la etiqueta «CentroCoste» y que el departamento financiero reparta el gasto de Azure por centro de coste. ¿Qué combinación es la más adecuada?
- [A] Bloqueos CanNotDelete sobre los recursos y exportación manual de las facturas
- [B] Azure Policy para exigir (o heredar) la etiqueta y Microsoft Cost Management para agrupar el gasto por etiqueta
- [C] RBAC con rol Lector para finanzas y alertas de Azure Monitor para repartir el gasto
- [D] Azure Advisor para exigir etiquetas y la calculadora de precios para repartir el gasto real

<details>
<summary>🔎 Ver solución</summary>

**Respuesta correcta: B**
**Explicación:** Policy garantiza que las etiquetas existan y Cost Management agrupa el gasto real por etiqueta.

</details>

---

## 📊 Resumen del Banco de Preguntas

| Módulo | Preguntas | Dominio oficial |
| :--- | :---: | :--- |
| 1. Conceptos de nube | 1 – 34 | Conceptos de nube |
| 2. Arquitectura, cómputo y redes | 35 – 56 | Arquitectura y servicios |
| 3. Almacenamiento, datos, identidad y seguridad | 57 – 79 | Arquitectura y servicios |
| 4. Administración, gobernanza, costes y monitorización | 80 – 120 | Administración y gobernanza |

**Formatos incluidos:** opción única y escenarios (93), selección múltiple (9), emparejamiento (6) y series Sí/No (12). Las preguntas de escenario aparecen etiquetadas como `[Escenario Empresarial]`, aunque algunas piden varias respuestas.
