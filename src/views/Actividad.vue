<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Evaluación y monitoreo en la implementación de BPG',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> fortalecer los conocimientos sobre las Buenas Prácticas Ganaderas (BPG) aplicadas en la producción de leche bovina.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es uno de los objetivos principales de las BPG en la producción de leche?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Controlar el precio del mercado internacional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar el uso de medicamentos veterinarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Garantizar la inocuidad del producto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir el número de empleados en los predios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué documento establece los requisitos sanitarios para la producción primaria de leche cruda en Colombia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Resolución ICA 1382 de 2013.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Resolución ICA 67449 de 2022.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ley 1774 de 2016.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Decreto 1500 de 2007.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes es un riesgo sanitario controlado mediante BPG?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contaminación del aire.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incremento de costos de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Brucelosis bovina.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Escasez de insumos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué acción es parte de un plan de contingencia ante emergencia sanitaria?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aislamiento de animales enfermos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incremento del ordeño.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducción de raciones alimenticias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Suspensión de vacunación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es un componente obligatorio del Plan de Implementación de BPG?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Número de trabajadores por turno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cronograma de actividades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Predicción de precios del mercado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Informe climático regional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué tipo de monitoreo verifica el cumplimiento de normas y registros exigidos por el ICA?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Monitoreo de procesos productivos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Monitoreo ambiental.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Monitoreo de resultados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Monitoreo de cumplimiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es una acción correcta frente a la presencia de residuos de antibióticos en leche?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Continuar con la distribución del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Retener la leche afectada y realizar análisis.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar la frecuencia de ordeño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar el protocolo sanitario vigente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué enfermedad de control oficial puede afectar la exportación de productos lácteos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Encefalopatía espongiforme bovina.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Fiebre amarilla.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Dengue bovino.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Varicela.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué característica debe tener un indicador de gestión en BPG para ser efectivo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Basarse en datos históricos únicamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ser medible y verificable.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Depender exclusivamente del clima.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estar alineado a tendencias comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es uno de los métodos utilizados para evaluar las BPG en predios lecheros?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Exclusivamente encuestas a consumidores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Listas de chequeo y observación directa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Revisión de redes sociales del predio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Análisis de exportaciones globales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Las Buenas Prácticas Ganaderas son opcionales para obtener certificación del ICA.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Las enfermedades zoonóticas como la brucelosis requieren control obligatorio en predios certificados en BPG.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'El plan de contingencia solo aplica a eventos ambientales y no incluye riesgos sanitarios.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Los indicadores de gestión permiten tomar decisiones fundamentadas en los predios lecheros.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Las auditorías internas no se consideran parte de los procedimientos de monitoreo.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
