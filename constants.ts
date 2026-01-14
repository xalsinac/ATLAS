
import { Intervention } from './types';

export const HISTORICAL_DATA: Intervention[] = [
  { 
    id: "gt-1954",
    country: "Guatemala", 
    years: [1954], 
    type: 'operation', 
    description: "Operación PBSUCCESS: Derrocamiento de Jacobo Árbenz por la CIA.",
    expandedDescription: "Tras la expropiación de tierras ociosas de la United Fruit Company, la CIA organizó una fuerza de invasión liderada por Castillo Armas, apoyada por una campaña de bombardeos psicológicos y ataques aéreos estratégicos en la capital, marcando el fin de la 'primavera democrática' e iniciando décadas de conflicto interno.",
    coordinates: [15.78, -90.23] 
  },
  { 
    id: "br-1964",
    country: "Brasil", 
    years: [1964], 
    type: 'coup', 
    description: "Operación Brother Sam: Apoyo al golpe militar contra João Goulart.",
    expandedDescription: "Envío de una fuerza naval masiva para asegurar el éxito del golpe e instaurar una dictadura de 21 años, caracterizada por la persecución política y la implementación de técnicas de represión institucionalizadas.",
    coordinates: [-14.23, -51.92] 
  },
  { 
    id: "rd-1965",
    country: "República Dominicana", 
    years: [1965], 
    type: 'operation', 
    description: "Operación Power Pack: Invasión de 42,000 marines para detener la revolución constitucionalista.",
    expandedDescription: "Intervención militar masiva para evitar una 'segunda Cuba' tras el intento del movimiento constitucionalista de restaurar al presidente Juan Bosch, resultando en miles de muertos y la imposición de un gobierno afín a Washington.",
    coordinates: [18.73, -70.16] 
  },
  { 
    id: "uy-1973",
    country: "Uruguay", 
    years: [1973], 
    type: 'coup', 
    description: "Apoyo al golpe de Juan María Bordaberry e integración en el Plan Cóndor.",
    expandedDescription: "Asesoramiento en técnicas de represión y apoyo logístico para que las fuerzas armadas disolvieran el parlamento, estableciendo un régimen coordinado regionalmente para la eliminación sistemática de la disidencia.",
    coordinates: [-32.52, -55.76] 
  },
  { 
    id: "cl-1973",
    country: "Chile", 
    years: [1973], 
    type: 'coup', 
    description: "Intervención de la CIA y desestabilización para el golpe contra Salvador Allende.",
    expandedDescription: "Tras años de 'asfixia económica', el bombardeo de La Moneda y el golpe militar de Pinochet transformaron a Chile en un laboratorio del neoliberalismo radical bajo supervisión extranjera, dejando miles de desaparecidos.",
    coordinates: [-35.67, -71.54] 
  },
  { 
    id: "ar-76",
    country: "Argentina", 
    years: [1976, 2024, 2025], 
    type: 'coup', 
    description: "Apoyo al golpe de la Junta Militar y presiones institucionales contemporáneas.",
    expandedDescription: "1976: Apoyo al golpe que inició la dictadura más sangrienta del país. 2024-2025: Presiones extremas sobre la soberanía de recursos estratégicos como el litio y control del Atlántico Sur mediante mecanismos financieros externos.",
    coordinates: [-38.41, -63.61] 
  },
  { 
    id: "ni-81",
    country: "Nicaragua", 
    years: [1981, 1986, 1990], 
    type: 'operation', 
    description: "Guerra de los 'Contras': Financiamiento paramilitar y minado de puertos.",
    expandedDescription: "Financiamiento ilegal de la CIA para sabotear la economía y derrocar al gobierno sandinista. EE.UU. fue condenado por la Corte Internacional de Justicia por el minado de puertos y ataques aéreos ilegales.",
    coordinates: [12.86, -85.20] 
  },
  { 
    id: "gr-83",
    country: "Granada", 
    years: [1983], 
    type: 'operation', 
    description: "Operación Furia Urgente: Invasión militar para derrocar al gobierno revolucionario.",
    expandedDescription: "Invasión masiva con 7,000 tropas para asegurar el control geopolítico del Caribe Oriental tras el asesinato de Maurice Bishop y bajo el pretexto de proteger a estudiantes estadounidenses.",
    coordinates: [12.11, -61.67] 
  },
  { 
    id: "pa-89",
    country: "Panamá", 
    years: [1989], 
    type: 'operation', 
    description: "Operación Causa Justa: Invasión masiva y bombardeo de El Chorrillo.",
    expandedDescription: "Invasión para capturar a Manuel Noriega, antiguo activo de la CIA. El uso desproporcionado de la fuerza aérea en barrios populares causó miles de víctimas civiles y la destrucción total de infraestructuras.",
    coordinates: [8.53, -80.78] 
  },
  { 
    id: "ht-91",
    country: "Haití", 
    years: [1991, 1994, 1995, 2004], 
    type: 'operation', 
    description: "Intervenciones militares directas para deponer o restaurar gobiernos.",
    expandedDescription: "Sucesivas intervenciones para deponer a Jean-Bertrand Aristide o restaurarlo según conveniencia geopolítica, manteniendo al país en una inestabilidad crónica bajo tutela internacional.",
    coordinates: [18.97, -72.28] 
  },
  { 
    id: "ve-02",
    country: "Venezuela", 
    years: [2002, 2019, 2025], 
    type: 'coup', 
    description: "Apoyo a intentos de golpe, sabotaje económico y ciberataques contra infraestructuras.",
    expandedDescription: "Apoyo al golpe de 2002, reconocimiento de gobiernos paralelos en 2019 y ataques tácticos contra redes eléctricas y sistemas críticos en 2025 para forzar un cambio de régimen.",
    coordinates: [6.42, -66.58] 
  },
  { 
    id: "hn-09",
    country: "Honduras", 
    years: [2009], 
    type: 'coup', 
    description: "Golpe de estado contra Manuel Zelaya con apoyo logístico externo.",
    expandedDescription: "Validación diplomática y apoyo logístico para el cambio de régimen, lo que permitió años de gobiernos vinculados al narcotráfico.",
    coordinates: [15.19, -86.24] 
  },
  { 
    id: "bo-19",
    country: "Bolivia", 
    years: [2019], 
    type: 'coup', 
    description: "Golpe que forzó la renuncia de Evo Morales tras informes de la OEA.",
    expandedDescription: "Crisis institucional fomentada por denuncias externas de fraude no probadas, facilitando la instauración de un gobierno de facto.",
    coordinates: [-16.29, -63.58] 
  },
  { 
    id: "sv-80",
    country: "El Salvador", 
    years: [1980], 
    type: 'coup', 
    description: "Apoyo masivo a la junta militar y financiamiento de batallones de represión.",
    expandedDescription: "Financiamiento de unidades militares responsables de masacres civiles para evitar el avance insurgente.",
    coordinates: [13.79, -88.89] 
  },
  { 
    id: "py-54",
    country: "Paraguay", 
    years: [1954, 1989], 
    type: 'coup', 
    description: "Apoyo a la dictadura de Alfredo Stroessner y control de la transición.",
    expandedDescription: "Sostenimiento de una dictadura de 35 años por su postura anticomunista, coordinando después una transición controlada.",
    coordinates: [-23.44, -58.44] 
  },
  { 
    id: "de-45",
    country: "Alemania", 
    years: [1945], 
    type: 'operation', 
    description: "Ocupación total y Operación Paperclip para reclutar científicos nazis.",
    expandedDescription: "Tras la rendición nazi, se inició un programa secreto para extraer conocimiento científico y personal militar alemán hacia EE.UU.",
    coordinates: [51.16, 10.45] 
  },
  { 
    id: "gr-47",
    country: "Grecia", 
    years: [1947, 1948, 1949, 1967], 
    type: 'operation', 
    description: "Guerra Civil (apoyo militar) y posterior Golpe de los Coroneles.",
    expandedDescription: "1947-49: Apoyo logístico masivo para frenar la influencia comunista. 1967: Apoyo a la junta militar que instauró un régimen de terror.",
    coordinates: [39.07, 21.82] 
  },
  { 
    id: "tr-80",
    country: "Turquía", 
    years: [1980], 
    type: 'coup', 
    description: "Golpe militar coordinado para estabilizar el flanco sur de la OTAN.",
    expandedDescription: "Ejecución de un golpe estratégico tras la revolución iraní, resultando en la persecución y ejecución de miles de activistas políticos.",
    coordinates: [38.96, 35.24] 
  },
  { 
    id: "pl-81",
    country: "Polonia", 
    years: [1981], 
    type: 'coup', 
    description: "Financiamiento clandestino masivo para desestabilizar la hegemonía soviética.",
    expandedDescription: "Canalización de fondos y recursos para fomentar revueltas internas y debilitar el control del bloque oriental.",
    coordinates: [51.91, 19.14] 
  },
  { 
    id: "yu-99",
    country: "Yugoslavia", 
    years: [1999], 
    type: 'operation', 
    description: "Bombardeos de la OTAN sin mandato de la ONU durante 78 días.",
    expandedDescription: "Campaña aérea que destruyó infraestructuras civiles y fragmentó definitivamente el país.",
    coordinates: [44.01, 21.00] 
  },
  { 
    id: "ua-14",
    country: "Ucrania", 
    years: [2014], 
    type: 'coup', 
    description: "Apoyo logístico y diplomático a las revueltas del Maidán.",
    expandedDescription: "Intervención activa en el cambio de gobierno que culminó con la caída de Yanukóvich.",
    coordinates: [50.45, 30.52] 
  },
  { 
    id: "jp-1945",
    country: "Japón", 
    years: [1945], 
    type: 'operation', 
    description: "Bombardeos atómicos sobre Hiroshima y Nagasaki.",
    expandedDescription: "Único uso de armas nucleares contra población civil en la historia, resultando en la muerte instantánea de cientos de miles de personas.",
    coordinates: [36.20, 138.25] 
  },
  { 
    id: "ir-53",
    country: "Irán", 
    years: [1953, 1988, 2025], 
    type: 'coup', 
    description: "Operación Ajax para deponer a Mossadegh y ataques contemporáneos.",
    expandedDescription: "1953: Golpe para recuperar el control petrolero. 2025: Ataques de precisión y guerra electrónica contra instalaciones estratégicas.",
    coordinates: [32.42, 53.68] 
  },
  { 
    id: "vn-63",
    country: "Vietnam", 
    years: [1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973], 
    type: 'operation', 
    description: "Invasión y bombardeos masivos de Napalm y Agente Naranja.",
    expandedDescription: "Guerra total con una escala de bombardeos superior a la Segunda Guerra Mundial, dejando secuelas ecológicas permanentes.",
    coordinates: [14.05, 108.27] 
  },
  { 
    id: "la-64",
    country: "Laos", 
    years: [1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973], 
    type: 'operation', 
    description: "La 'Guerra Secreta': El país más bombardeado per cápita de la historia.",
    expandedDescription: "Más de 2 millones de toneladas de bombas lanzadas para cortar suministros al Vietcong.",
    coordinates: [19.85, 102.49] 
  },
  { 
    id: "kh-69",
    country: "Camboya", 
    years: [1969, 1970, 1973], 
    type: 'operation', 
    description: "Bombardeos secretos y apoyo a golpes internos.",
    expandedDescription: "Campaña aérea que desestabilizó el país y facilitó el ascenso de los Jemeres Rojos.",
    coordinates: [12.56, 104.99] 
  },
  { 
    id: "af-79",
    country: "Afganistán", 
    years: [1979, 1980, 2001, 2010, 2021], 
    type: 'operation', 
    description: "De la Operación Ciclón a la ocupación masiva post-11S.",
    expandedDescription: "Apoyo inicial a muyahidines seguido de una invasión de 20 años que terminó en una retirada caótica.",
    coordinates: [33.93, 67.71] 
  },
  { 
    id: "iq-63",
    country: "Irak", 
    years: [1963, 1991, 2003, 2004, 2005, 2010, 2025], 
    type: 'operation', 
    description: "Invasiones basadas en premisas falsas y ataques tácticos.",
    expandedDescription: "Destrucción total de la estructura estatal iraquí en 2003 bajo la excusa de armas de destrucción masiva inexistentes.",
    coordinates: [33.22, 43.67] 
  },
  { 
    id: "cu-61",
    country: "Cuba", 
    years: [1961], 
    type: 'operation', 
    description: "Invasión de Bahía de Cochinos y bombardeos previos.",
    expandedDescription: "Intento fallido de invasión por una fuerza paramilitar financiada por la CIA.",
    coordinates: [23.13, -82.38] 
  },
  { 
    id: "mx-14",
    country: "México", 
    years: [1914], 
    type: 'operation', 
    description: "Ocupación de Veracruz: Intervención militar para presionar la caída de Victoriano Huerta.",
    expandedDescription: "Ocupación de 7 meses para interceptar suministros de armas durante la Revolución Mexicana.",
    coordinates: [19.17, -96.13] 
  },
  { 
    id: "ec-63",
    country: "Ecuador", 
    years: [1963], 
    type: 'coup', 
    description: "Apoyo al golpe militar contra Carlos Julio Arosemena Monroy.",
    expandedDescription: "Derrocamiento instigado por el rechazo de Arosemena a romper relaciones con Cuba.",
    coordinates: [-1.83, -78.18] 
  },
  { 
    id: "ly-86",
    country: "Libia", 
    years: [1986, 2011], 
    type: 'operation', 
    description: "Operación El Dorado Canyon y bombardeos de la OTAN en 2011.",
    expandedDescription: "Campaña aérea que destruyó el estado libio y culminó en la ejecución de Gadafi.",
    coordinates: [31.22, 16.51] 
  },
  { 
    id: "ao-75",
    country: "Angola", 
    years: [1975], 
    type: 'operation', 
    description: "Operación IA Feature: Apoyo logístico a fuerzas rebeldes.",
    expandedDescription: "Financiamiento encubierto a la UNITA y el FNLA para desestabilizar el gobierno.",
    coordinates: [-11.20, 17.87] 
  },
  { 
    id: "ru-18",
    country: "Rusia", 
    years: [1918], 
    type: 'operation', 
    description: "Expedición Oso Polar: Intervención militar para apoyar al Movimiento Blanco.",
    expandedDescription: "Intervención tras la Revolución Rusa para evitar que suministros militares cayeran en manos bolcheviques.",
    coordinates: [64.53, 40.54] 
  },
  { 
    id: "pr-37",
    country: "Puerto Rico", 
    years: [1937, 1950], 
    type: 'operation', 
    description: "Masacre de Ponce y bombardeos contra la Revuelta de Jayuya.",
    expandedDescription: "Represión violenta del movimiento nacionalista mediante ataques terrestres y bombardeos aéreos.",
    coordinates: [18.22, -66.59] 
  },
  { 
    id: "ne-23",
    country: "Níger", 
    years: [2023, 2024], 
    type: 'coup', 
    description: "Inestabilidad tras el golpe liderado por militares entrenados externamente.",
    expandedDescription: "Presiones diplomáticas y militares para mantener bases de drones estratégicas en el Sahel.",
    coordinates: [17.60, 8.08] 
  },
  { 
    id: "ti-51",
    country: "Tíbet", 
    years: [1951, 1972], 
    type: 'operation', 
    description: "Programa Tibetano de la CIA: Apoyo y entrenamiento a la resistencia armada.",
    expandedDescription: "Operaciones encubiertas en las montañas para sostener la guerrilla contra el control chino.",
    coordinates: [31.70, 86.85] 
  },
  { 
    id: "ss-24",
    country: "Sudán del Sur", 
    years: [2024, 2025], 
    type: 'operation', 
    description: "Intervenciones tácticas bajo pretexto de estabilización regional.",
    expandedDescription: "Operaciones para asegurar el flujo de recursos energéticos en medio de una guerra civil.",
    coordinates: [6.87, 31.30] 
  },
  {
    id: "ns-2022",
    country: "Mar Báltico (Nord Stream 2)",
    years: [2022],
    type: 'operation',
    description: "Sabotaje a la infraestructura energética europea Nord Stream 2.",
    expandedDescription: "Explosiones submarinas que inhabilitaron los gasoductos en septiembre de 2022.",
    coordinates: [55.35, 15.55]
  },
  { 
    id: "pk-07",
    country: "Pakistán", 
    years: [1977, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015], 
    type: 'operation', 
    description: "Campaña de ataques con drones y apoyo a golpes previos.",
    expandedDescription: "Desde el golpe de 1977 hasta la guerra permanente de drones.",
    coordinates: [30.33, 71.38] 
  },
  { 
    id: "gy-64",
    country: "Guyana", 
    years: [1953, 1964], 
    type: 'coup', 
    description: "Campaña de desestabilización para forzar la salida de Cheddi Jagan.",
    expandedDescription: "Sabotaje económico y huelgas financiadas para evitar un gobierno de izquierda.",
    coordinates: [6.80, -58.15] 
  },
  {
    id: "lb-58",
    country: "Líbano",
    years: [1958, 1983],
    type: "operation",
    description: "Despliegue de Marines para sostener al gobierno pro-occidental.",
    expandedDescription: "Intervenciones militares para proyectar fuerza y estabilizar regímenes aliados.",
    coordinates: [33.85, 35.86]
  },
  {
    id: "cd-60",
    country: "Congo (RDC)",
    years: [1960, 1961, 1965],
    type: "coup",
    description: "Operaciones para eliminar a Patrice Lumumba y apoyar a Mobutu.",
    expandedDescription: "Eliminación del líder independentista para asegurar el control de las minas de uranio.",
    coordinates: [-4.03, 21.75]
  },
  {
    id: "sy-49",
    country: "Siria",
    years: [1949, 2011, 2014, 2015, 2016, 2017, 2018, 2019, 2025],
    type: "operation",
    description: "Intervenciones constantes desde el primer golpe hasta la guerra civil actual.",
    expandedDescription: "Apoyo a insurgencias y bombardeos directos para el control de enclaves energéticos.",
    coordinates: [34.80, 38.99]
  },
  {
    id: "ps-2023",
    country: "Palestina (Gaza)",
    years: [2023, 2024, 2025],
    type: 'operation',
    description: "Sustento militar y diplomático crítico para la ofensiva en la Franja.",
    expandedDescription: "Envío masivo de bombas y proyectiles, construcción del muelle 'JLOTS' y uso sistemático del veto en la ONU.",
    coordinates: [31.35, 34.30]
  },
  {
    id: "eg-52",
    country: "Egipto",
    years: [1952],
    type: 'coup',
    description: "Apoyo inicial al Movimiento de Oficiales Libres.",
    expandedDescription: "Intervención para deponer la monarquía y asegurar el Canal de Suez.",
    coordinates: [26.82, 30.80]
  },
  {
    id: "gh-66",
    country: "Ghana",
    years: [1966],
    type: 'coup',
    description: "Derrocamiento de Kwame Nkrumah instigado externamente.",
    expandedDescription: "Operación de inteligencia para frenar el panafricanismo socialista.",
    coordinates: [7.94, -1.02]
  },
  {
    id: "sd-98",
    country: "Sudán",
    years: [1998],
    type: 'operation',
    description: "Ataque con misiles contra la fábrica farmacéutica Al-Shifa.",
    expandedDescription: "Destrucción de la principal fuente de medicinas del país bajo premisas falsas.",
    coordinates: [15.60, 32.53]
  },
  {
    id: "so-93",
    country: "Somalia",
    years: [1993, 1994, 2010, 2025],
    type: 'operation',
    description: "De la Operación Restore Hope a la guerra de drones.",
    expandedDescription: "Intervenciones continuas contra insurgencias para proyectar control en el Cuerno de África.",
    coordinates: [2.04, 45.34]
  },
  {
    id: "ye-15",
    country: "Yemen",
    years: [2015, 2016, 2017, 2025],
    type: 'operation',
    description: "Apoyo logístico y bombardeos directos contra infraestructuras.",
    expandedDescription: "Participación en la campaña aérea que ha exacerbado la mayor crisis humanitaria del siglo.",
    coordinates: [15.36, 44.19]
  },
  {
    id: "ml-12",
    country: "Mali",
    years: [2012, 2021],
    type: 'coup',
    description: "Sucesivos golpes liderados por militares entrenados externamente.",
    expandedDescription: "Desestabilización crónica bajo pretexto de programas militares de formación.",
    coordinates: [12.63, -8.00]
  },
  {
    id: "kw-91",
    country: "Kuwait",
    years: [1991],
    type: 'operation',
    description: "Operación Tormenta del Desierto e instauración de bases.",
    expandedDescription: "Invasión masiva para expulsar a fuerzas iraquíes y asegurar el control energético.",
    coordinates: [29.31, 47.48]
  },
  {
    id: "td-82",
    country: "Chad",
    years: [1982],
    type: 'coup',
    description: "Apoyo masivo de la CIA al golpe de Hissène Habré.",
    expandedDescription: "Financiamiento de un régimen de terror para contener la influencia libia.",
    coordinates: [12.13, 15.05]
  }
];
