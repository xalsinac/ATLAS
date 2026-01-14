
import { Intervention } from './types';

export const HISTORICAL_DATA: Intervention[] = [
  { 
    id: "gt-1954",
    country: "Guatemala", 
    years: [1954], 
    type: 'operation', 
    description: "Operación PBSUCCESS: Invasión armada y bombardeos organizados por la CIA.",
    expandedDescription: "Tras la expropiación de tierras a la United Fruit Company por parte de Jacobo Árbenz, la CIA organizó una fuerza de invasión apoyada por una campaña de bombardeos psicológicos. Aviones P-47 atacaron depósitos de combustible y la capital, resultando en un golpe que instauró décadas de dictaduras militares y un genocidio que costó la vida a más de 200,000 personas.",
    coordinates: [15.78, -90.23] 
  },
  { 
    id: "br-1964",
    country: "Brasil", 
    years: [1964], 
    type: 'coup', 
    description: "Operación Brother Sam: Apoyo naval y logístico al golpe militar.",
    expandedDescription: "Envío coordinado de una flota de portaaviones y destructores para asegurar el éxito del golpe contra João Goulart. Esta intervención aseguró una dictadura de 21 años que implementó el 'milagro económico' a costa de la supresión total de derechos civiles y la persecución sistemática de opositores bajo la tutela de asesores estadounidenses.",
    coordinates: [-14.23, -51.92] 
  },
  { 
    id: "rd-1965",
    country: "República Dominicana", 
    years: [1965], 
    type: 'operation', 
    description: "Operación Power Pack: Invasión de 42,000 marines contra la revolución.",
    expandedDescription: "La mayor intervención militar en el hemisferio occidental desde el siglo XIX. 42,000 efectivos desembarcaron para sofocar el levantamiento popular que buscaba restaurar al presidente constitucional Juan Bosch. La ocupación duró más de un año y aseguró la llegada al poder de Joaquín Balaguer.",
    coordinates: [18.73, -70.16] 
  },
  { 
    id: "cl-1973",
    country: "Chile", 
    years: [1973], 
    type: 'coup', 
    description: "Golpe del 11 de Septiembre: Desestabilización total y apoyo a Pinochet.",
    expandedDescription: "Tras años de 'hacer chillar la economía' (orden directa de Nixon), la CIA apoyó activamente el bombardeo de La Moneda. Esta intervención no solo eliminó a Salvador Allende, sino que convirtió a Chile en el primer experimento mundial del neoliberalismo monetarista, acompañado de una represión sangrienta coordinada mediante el Plan Cóndor.",
    coordinates: [-35.67, -71.54] 
  },
  { 
    id: "ar-1976",
    country: "Argentina", 
    years: [1976, 2024, 2025], 
    type: 'coup', 
    description: "Apoyo a la Junta Militar y presiones contemporáneas sobre recursos.",
    expandedDescription: "1976: Henry Kissinger dio luz verde al golpe que inició el Proceso de Reorganización Nacional, responsable de 30,000 desaparecidos. 2024-2025: La intervención se ha transformado en presiones financieras extremas y control logístico sobre el litio y el paso bioceánico, condicionando la soberanía económica mediante mecanismos de deuda y presencia militar en el Atlántico Sur.",
    coordinates: [-38.41, -63.61] 
  },
  { 
    id: "pa-1989",
    country: "Panamá", 
    years: [1989], 
    type: 'operation', 
    description: "Operación Causa Justa: Bombardeos masivos e invasión de la ciudad.",
    expandedDescription: "Invasión masiva para capturar a Manuel Noriega, un antiguo colaborador de la CIA caído en desgracia. El uso desproporcionado de tecnología militar moderna contra el barrio popular de El Chorrillo causó un número indeterminado de víctimas civiles (estimadas en miles) y la destrucción total de infraestructuras clave.",
    coordinates: [8.53, -80.78] 
  },
  { 
    id: "vn-1963",
    country: "Vietnam", 
    years: [1963, 1968, 1973], 
    type: 'operation', 
    description: "Invasión total: Se lanzaron más bombas que en toda la 2ª Guerra Mundial.",
    expandedDescription: "Guerra caracterizada por el uso sistemático de Napalm y Agente Naranja para destruir la selva y las fuentes de alimento. Los bombardeos de saturación sobre ciudades y zonas rurales dejaron un legado de malformaciones genéticas y tierras baldías que persiste medio siglo después de la retirada estadounidense.",
    coordinates: [14.05, 108.27] 
  },
  { 
    id: "la-1964",
    country: "Laos", 
    years: [1964, 1965, 1973], 
    type: 'operation', 
    description: "La 'Guerra Secreta': El país más bombardeado per cápita de la historia.",
    expandedDescription: "EE.UU. lanzó más de 270 millones de bombas de racimo sobre Laos durante una década. El objetivo era cortar la Ruta Ho Chi Minh. Se estima que el 30% de las bombas no explotaron al impactar, convirtiendo vastas extensiones de tierra fértil en campos de muerte permanente para los agricultores actuales.",
    coordinates: [19.85, 102.49] 
  },
  { 
    id: "ir-1953",
    country: "Irán", 
    years: [1953, 1988, 2025], 
    type: 'coup', 
    description: "Operación Ajax: Derrocamiento de Mossadegh por el control petrolero.",
    expandedDescription: "1953: Primer gran éxito de la CIA en el extranjero para deponer a un líder electo que nacionalizó el petróleo. 2025: Escalada de guerra híbrida con ataques cibernéticos masivos contra la infraestructura civil y bombardeos selectivos de precisión sobre instalaciones de investigación, alterando la estabilidad de todo Oriente Medio.",
    coordinates: [32.42, 53.68] 
  },
  { 
    id: "ly-2011",
    country: "Libia", 
    years: [1986, 2011], 
    type: 'operation', 
    description: "Operación Odyssey Dawn: Destrucción del estado libio y caos posterior.",
    expandedDescription: "Campaña aérea de la OTAN liderada por EE.UU. que desmanteló la estructura militar y estatal de Libia bajo el pretexto de proteger a civiles. El resultado fue un estado fallido, el regreso de mercados de esclavos y la desestabilización de toda la región del Sahel.",
    coordinates: [26.33, 17.22] 
  },
  { 
    id: "ye-2015",
    country: "Yemen", 
    years: [2015, 2025], 
    type: 'operation', 
    description: "Apoyo logístico y bombardeos tácticos en la mayor crisis humanitaria.",
    expandedDescription: "Participación directa e indirecta en el bloqueo y bombardeo de Yemen. 2025: Intensificación de ataques contra puertos vitales y redes de comunicación, exacerbando la hambruna y el colapso sanitario en un conflicto que ha costado cientos de miles de vidas evitables.",
    coordinates: [15.55, 48.51] 
  },
  { 
    id: "ps-2023",
    country: "Palestina (Gaza)", 
    years: [2023, 2024, 2025], 
    type: 'operation', 
    description: "Sustento militar crítico y despliegue de infraestructuras tácticas.",
    expandedDescription: "Suministro ininterrumpido de munición pesada (bombas de 2000lb), apoyo de inteligencia en tiempo real y despliegue de infraestructuras como el puerto temporal JLOTS. Esta intervención es determinante para la continuidad de la ofensiva que ha devastado la totalidad de la infraestructura civil en la Franja.",
    coordinates: [31.35, 34.30] 
  }
];
