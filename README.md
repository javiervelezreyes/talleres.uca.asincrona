Programación Asincrona en JavaScript. Arquitectiras de Integración
==================================================================

### Keywords

Integración · Arquitectura · Programación Asincrona · Modelos de Programación · Estilo de paso de continuaciones · Thunks · Promesas · Eventos · Streams · Observables · Generadores · Corrutinas · CoThunks · Copromesas · Canales

### Resumen

Los problemas de integración han sido una constante desde los primeros días de la ingeniería del software. En las corporaciones, multitud de sistemas tienen que sincronizar sus procesos y modelos de información para trabajar de forma coordinada. En términos generales estos esfuerzos de integración pueden clasificarse en dos grandes corrientes: las aproximaciones síncronas y las aproximaciones asíncronas. Al primer grupo pertenecen las arquitecturas RPC de computación distribuída como CORBA, RMI o SOA, mientras que el segundo grupo se caracteriza por el uso de sistemas de mensajería que desacoplan temporalmente las comunicaciones. Hablamos en este caso de sistemas MOM, ESB, etc.

La historia nos ha enseñado que las aproximaciones síncronas no escalan suficientemente bien en relación a la carga de ataque concurrente. En efecto, el uso de operaciones bloqueantes suele conducir con frecuencia a la aparición de cuellos de botella dentro de la arquitectura. Sin embargo, la aplicación de estrategias asíncronas resulta más apropiada en este sentido pero complica sobre manera la implementación de clientes conectados a la infraestructura de comunicaciones. Es aquí donde merece la pena poner el foco de atención. A lo largo de esta charla-taller describiremos los principales modelos de programación asíncrona que pueden ser utilizados para dulcificar los procesos de desarrollo e implementaremos lógica de librería y ejemplos en JavaScript/NodeJS para ilustrar los mismos. La elección de este lenguaje radica en el hecho de que JavaScript dispone de muchas primitivas de programación que resultan necesarias en estos escenarios (clausuras, orden superior, evaluación parcial, etc.). No obstante la migración de estas ideas a otros lenguajes como Java o C# no debería entrañar serias complicaciones.

### Indice

#### Capítulo 1. Introducción
- Arquitectura de Integración
- Programación Asíncrona
- Modelos de Programación Asíncrona

#### Capítulo 2. Modelos de Programación Asíncrona
- Modelos Basados en Continuaciones
- Modelos Basados en Eventos
- Modelos Basados en Intercesión

### Biografía

Licenciado por la UPM desde el año 2001 y doctor en informática por la UNED desde el año 2009, Javier conjuga sus labores como profesor e investigador con la consultoría y la formación técnica para empresa. Su línea de trabajo actual se centra en la innovación y desarrollo de tecnologías para la Web. Además realiza actividades de evangelización y divulgación en diversas comunidades IT y es coordinador de varios grupos de ámbito local como NodeJS Madrid o Madrid JS. Forma parte del programa Polymer Polytechnic Speaker y es mentor del capítulo de Madrid de Node School.

### Tags

- Desarrollado Front/Back 
- Evangelización Web
- Arquitectura Software
- Formación & Consultoría IT
- e-learning
- Diseño de Sistemas de Colaboración 
- Learning Analytics 
- Gamificación Colaborativa

### Contacto

- www  : www.javiervelezreyes.com
- eMail: javier.velez.reyes@gmail.com 
- Twitter: @javiervelezreye
- LinkedIn: inkedin.com/in/javiervelezreyes 
- Google+: gplus.to/javiervelezreyes 
- Slideshare: jvelez77
- Github: javiervelezreyes 
- Youtube: youtube.com/user/javiervelezreyes
