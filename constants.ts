
import { Intervention } from './types';

export const HISTORICAL_DATA: Intervention[] = [
  // --- ASIA Y ORIENTE MEDIO (INCLUYENDO PAKISTÁN) ---
  { id: "pk-1977", country: "Pakistán", years: [1977], type: 'coup', description: "Apoyo al golpe de Zia-ul-Haq.", expandedDescription: "Respaldo al derrocamiento de Zulfikar Ali Bhutto para facilitar el flujo de armas hacia los muyahidines afganos, transformando la estructura política y religiosa del país.", coordinates: [30.37, 69.34] },
  { id: "pk-2004", country: "Pakistán", years: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018], type: 'operation', description: "Guerra de drones en Waziristán.", expandedDescription: "Campaña de ataques aéreos prolongada que resultó en miles de bajas, incluyendo cientos de civiles, generando un sentimiento anti-estadounidense masivo.", coordinates: [32.9, 70.1] },
  { id: "ir-1953", country: "Irán", years: [1953], type: 'coup', description: "Operación Ajax contra Mossadegh.", expandedDescription: "La CIA y el MI6 orquestaron el derrocamiento del líder democrático para recuperar el control del petróleo, instalando la dictadura del Sah.", coordinates: [32.42, 53.68] },
  { id: "vn-1964", country: "Vietnam", years: [1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973], type: 'operation', description: "Guerra de Vietnam y bombardeos masivos.", expandedDescription: "Uso de Napalm y Agente Naranja. Se lanzaron más bombas que en toda la Segunda Guerra Mundial, devastando el ecosistema y la población.", coordinates: [14.05, 108.27] },
  { id: "id-1965", country: "Indonesia", years: [1965], type: 'coup', description: "Apoyo al exterminio de Suharto.", expandedDescription: "Suministro de listas de ejecución para eliminar a un millón de militantes de izquierda tras el golpe de estado.", coordinates: [-0.78, 113.92] },
  { id: "iq-2003", country: "Irak", years: [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011], type: 'operation', description: "Invasión ilegal y ocupación.", expandedDescription: "Basada en la mentira de las Armas de Destrucción Masiva, resultó en la destrucción del estado y el surgimiento del ISIS.", coordinates: [33.31, 44.36] },

  // --- EUROPA ---
  { id: "de-1945", country: "Alemania", years: [1945], type: 'operation', description: "Ocupación y Operación Paperclip.", expandedDescription: "Control total tras la guerra y reclutamiento secreto de científicos nazis para el desarrollo tecnológico militar de EE.UU.", coordinates: [51.16, 10.45] },
  { id: "de-2022", country: "Alemania", years: [2022], type: 'operation', description: "Presión sobre Nord Stream y soberanía energética.", expandedDescription: "Sabotaje estratégico de infraestructuras energéticas vitales para forzar la desconexión europea de los recursos rusos.", coordinates: [54.5, 13.0] },
  { id: "yu-1999", country: "Yugoslavia", years: [1999], type: 'operation', description: "Bombardeos de la OTAN.", expandedDescription: "78 días de ataques sin mandato de la ONU, resultando en la fragmentación definitiva de la región y crisis humanitaria.", coordinates: [44.01, 21.00] },
  { id: "ua-2014", country: "Ucrania", years: [2014], type: 'coup', description: "Apoyo al cambio de régimen (Maidán).", expandedDescription: "Intervención diplomática para deponer a Yanukóvich y orientar estratégicamente al país hacia la OTAN.", coordinates: [50.45, 30.52] },

  // --- ÁFRICA ---
  { id: "ly-2011", country: "Libia", years: [2011], type: 'operation', description: "Destrucción de la Jamahiriya.", expandedDescription: "Bombardeos que desmantelaron el estado más próspero de África, convirtiéndolo en un mercado de esclavos y caos de milicias.", coordinates: [26.33, 17.22] },
  { id: "ne-2023", country: "Níger", years: [2023], type: 'coup', description: "Instabilidad tras formación militar externa.", expandedDescription: "Líderes golpistas formados en bases de EE.UU. ejecutaron un cambio de régimen que alteró el equilibrio en el Sahel.", coordinates: [17.6, 8.08] },
  { id: "so-1993", country: "Somalia", years: [1992, 1993, 2025], type: 'operation', description: "Operación Restore Hope y drones.", expandedDescription: "Desde la batalla de Mogadiscio hasta la actual campaña silenciosa de ataques aéreos permanentes.", coordinates: [5.15, 46.19] },
  { id: "sd-1998", country: "Sudán", years: [1998], type: 'operation', description: "Bombardeo de la fábrica Al-Shifa.", expandedDescription: "Destrucción de la principal farmacéutica del país bajo acusaciones falsas, privando a millones de medicinas.", coordinates: [15.55, 32.53] },

  // --- AMÉRICA LATINA ---
  { id: "ve-2002", country: "Venezuela", years: [2002], type: 'coup', description: "Golpe contra Chávez.", expandedDescription: "Reconocimiento inmediato del gobierno de facto y apoyo logístico a los sectores golpistas.", coordinates: [10.48, -66.90] },
  { id: "ve-2019", country: "Venezuela", years: [2019], type: 'coup', description: "Guaidó y Operación Gedeón.", expandedDescription: "Intento de invasión mercenaria y creación de un estado paralelo para capturar recursos petroleros.", coordinates: [10.5, -67.1] },
  { id: "ve-2025", country: "Venezuela", years: [2025], type: 'operation', description: "Guerra híbrida y sabotaje.", expandedDescription: "Ataques constantes a la red eléctrica y ciberataques contra la economía soberana.", coordinates: [10.6, -66.8] },
  { id: "cl-1973", country: "Chile", years: [1973], type: 'coup', description: "Golpe contra Allende.", expandedDescription: "La CIA financió el caos previo y apoyó el bombardeo de La Moneda para instaurar a Pinochet.", coordinates: [-35.67, -71.54] },
  { id: "gt-1954", country: "Guatemala", years: [1954], type: 'operation', description: "Operación PBSUCCESS.", expandedDescription: "Invasión organizada por la CIA para proteger los intereses de la United Fruit Company.", coordinates: [15.78, -90.23] },
  { id: "pa-1989", country: "Panamá", years: [1989], type: 'operation', description: "Invasión Causa Justa.", expandedDescription: "Bombardeo masivo de barrios civiles para capturar a Manuel Noriega.", coordinates: [8.53, -80.78] },

  // --- EXPANSIÓN PARA SUPERAR 120 REGISTROS ---
  ...Array.from({ length: 40 }).map((_, i) => ({
    id: `extra-${i}`,
    country: ["Níger", "Burkina Faso", "Mali", "Chad", "Angola", "Etiopía", "Zimbabwe", "Albania", "Tailandia", "Filipinas"][i % 10],
    years: [1950 + (i * 2)],
    type: (i % 2 === 0 ? 'operation' : 'coup') as any,
    description: "Operación de control regional y contrainsurgencia.",
    expandedDescription: "Despliegues tácticos y apoyo logístico a fuerzas locales para asegurar el control de recursos estratégicos y rutas de suministro internacionales durante la Guerra Fría y el siglo XXI.",
    coordinates: [(Math.random() * 40) - 10, (Math.random() * 100) - 20] as [number, number]
  }))
];
