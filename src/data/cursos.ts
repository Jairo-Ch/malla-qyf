export interface Curso {
  id: string;
  nombre: string;
  semestre: number;
  creditos: number;
  requisitos: string[];
}

export const cursos = [
  // --- Semestre 1
  { id: "1", nombre: "Química General I", semestre: 1, creditos: 5, requisitos: [] },
  { id: "2", nombre: "Téc. Lab. Químico", semestre: 1, creditos: 4, requisitos: [] },
  { id: "3", nombre: "Mecánica", semestre: 1, creditos: 4, requisitos: [] },
  { id: "4", nombre: "Intro al Cálculo", semestre: 1, creditos: 5, requisitos: [] },
  { id: "5", nombre: "El Q.F. y su Acción", semestre: 1, creditos: 5, requisitos: [] },
  { id: "6", nombre: "Formación General I", semestre: 1, creditos: 4, requisitos: [] },
  { id: "7", nombre: "Inglés I", semestre: 1, creditos: 3, requisitos: [] },

  // --- Semestre 2
  { id: "8", nombre: "Química General II", semestre: 2, creditos: 5, requisitos: ["1"] },
  { id: "9", nombre: "Lab. Química Gral", semestre: 2, creditos: 4, requisitos: ["1", "2"] },
  { id: "10", nombre: "Electromagnetismo", semestre: 2, creditos: 4, requisitos: ["3", "4"] },
  { id: "11", nombre: "Cálculo Dif. e Integral", semestre: 2, creditos: 5, requisitos: ["4"] },
  { id: "12", nombre: "Biología General", semestre: 2, creditos: 5, requisitos: [] },
  { id: "13", nombre: "El Medicamento y su Evolución", semestre: 2, creditos: 4, requisitos: ["5"] },
  { id: "14", nombre: "Inglés II", semestre: 2, creditos: 3, requisitos: ["7"] },
  
  // --- Semestre 3
  { id: "15", nombre: "Química Orgánica I", semestre: 3, creditos: 5, requisitos: ["8"] },
  { id: "16", nombre: "Química Analítica I", semestre: 3, creditos: 5, requisitos: ["8", "9"] },
  { id: "17", nombre: "Lab 1. Q. Orgánica", semestre: 3, creditos: 4, requisitos: ["8", "9"] },
  { id: "18", nombre: "Estadística y Datos", semestre: 3, creditos: 3, requisitos: ["11"] },
  { id: "19", nombre: "Fisiología Celular", semestre: 3, creditos: 4, requisitos: ["12", "10", "1"] },
  { id: "20", nombre: "Investigación Farm.", semestre: 3, creditos: 4, requisitos: ["13", "14"] },
  { id: "21", nombre: "Inglés III", semestre: 3, creditos: 3, requisitos: ["14"] },
  { id: "22", nombre: "Formación General ", semestre: 3, creditos: 6, requisitos: [] },

  // --- Semestre 4
  { id: "23", nombre: "Química Orgánica II", semestre: 4, creditos: 5, requisitos: ["15"] },
  { id: "24", nombre: "Lab. Análisis Químico", semestre: 4, creditos: 4, requisitos: ["16", "9", "18"] },
  { id: "25", nombre: "Química Analítica II", semestre: 4, creditos: 5, requisitos: ["16"] },
  { id: "26", nombre: "Fisicoquímica I", semestre: 4, creditos: 5, requisitos: ["3", "11", "15"] },
  { id: "27", nombre: "Fisiología de Sistemas", semestre: 4, creditos: 4, requisitos: ["19"] },
  { id: "28", nombre: "Práctica Intermedia", semestre: 4, creditos: 4, requisitos: ["20"] },
  { id: "29", nombre: "Inglés IV", semestre: 4, creditos: 3, requisitos: ["21"] },

  // --- Semestre 5
  { id: "30", nombre: "Lab. de Análisis Instr.", semestre: 5, creditos: 4, requisitos: ["24", "25"] },
  { id: "31", nombre: "Botánica y Farmacog.", semestre: 5, creditos: 7, requisitos: ["23", "25"] },
  { id: "32", nombre: "Q. Heterocíclicos", semestre: 5, creditos: 5, requisitos: ["23"] },
  { id: "33", nombre: "Bioquímica", semestre: 5, creditos: 5, requisitos: ["23", "26"] },
  { id: "34", nombre: "Farmacología General", semestre: 5, creditos: 6, requisitos: ["24", "27"] },
  { id: "35", nombre: "Gestión de Calidad", semestre: 5, creditos: 3, requisitos: ["20"] },

  // --- Semestre 6
  { id: "36", nombre: "Microbiología", semestre: 6, creditos: 5, requisitos: ["33"] },
  { id: "37", nombre: "Farmacoquímica I", semestre: 6, creditos: 5, requisitos: ["32", "34"] },
  { id: "38", nombre: "Farmacol. Sistemas I", semestre: 6, creditos: 5, requisitos: ["34"] },
  { id: "39", nombre: "Fisiopat. Molecular", semestre: 6, creditos: 5, requisitos: ["27", "33"] },
  { id: "40", nombre: "Legislación Farm.", semestre: 6, creditos: 4, requisitos: ["28", "35"] },
  { id: "41", nombre: "Fisicoquímica Farmacéutica", semestre: 6, creditos: 6, requisitos: ["26"] },
  // --- Semestre 7
  { id: "42", nombre: "Fisopato. y Semiología", semestre: 7, creditos: 5, requisitos: ["39"] },
  { id: "43", nombre: "Farmacoquímica II", semestre: 7, creditos: 5, requisitos: ["37"] },
  { id: "44", nombre: "Farmacol. Sistemas II", semestre: 7, creditos: 6, requisitos: ["36", "38"] },
  { id: "45", nombre: "Salud Pública", semestre: 7, creditos: 3, requisitos: ["40"] },
  { id: "46", nombre: "Tecnofarmacéutica I", semestre: 7, creditos: 6, requisitos: ["40", "41"] },
  { id: "47", nombre: "Operaciones Unitarias", semestre: 7, creditos: 5, requisitos: ["41"] },

  // --- Semestre 8
  { id: "48", nombre: "Análisis de Medic.", semestre: 8, creditos: 5, requisitos: ["30", "43"] },
  { id: "49", nombre: "Nutrición Clínica", semestre: 8, creditos: 3, requisitos: ["42"] },
  { id: "50", nombre: "Bioquímica Clínica", semestre: 8, creditos: 4, requisitos: ["42"] },
  { id: "51", nombre: "Biofarm. y Farmacocinética", semestre: 8, creditos: 6, requisitos: ["34", "46"] },
  { id: "52", nombre: "Tecnofarmacéutica II", semestre: 8, creditos: 6, requisitos: ["46", "47"] },
  { id: "53", nombre: "Admon. y Gestión", semestre: 8, creditos: 3, requisitos: ["46"] },
  { id: "54", nombre: "Estadística Farmacéutica", semestre: 8, creditos: 3, requisitos: ["18", "45"] },

  // --- Semestre 9
  { id: "55", nombre: "Farmacología Clínica", semestre: 9, creditos: 6, requisitos: ["44", "50", "51"] },
  { id: "56", nombre: "Bromatología", semestre: 9, creditos: 4, requisitos: ["30", "49"] },
  { id: "57", nombre: "Toxicología", semestre: 9, creditos: 5, requisitos: ["44", "50"] },
  { id: "58", nombre: "Farmacia Asistencial", semestre: 9, creditos: 4, requisitos: ["45", "53"] },
  { id: "59", nombre: "Tecnología Cosmética", semestre: 9, creditos: 4, requisitos: ["52"] },
  { id: "60", nombre: "Electivos Especializados", semestre: 9, creditos: 7, requisitos: [] },

  // --- Semestre 10
  { id: "61", nombre: "Farmacia Clínica", semestre: 10, creditos: 5, requisitos: ["55"] },
  { id: "62", nombre: "Práct. Farm. Comunitaria", semestre: 10, creditos: 7, requisitos: ["53", "55", "57"] },
  { id: "63", nombre: "Biotec. Farmacéutica", semestre: 10, creditos: 4, requisitos: ["39", "52"] },
  { id: "64", nombre: "Econ. y Marketing", semestre: 10, creditos: 3, requisitos: ["53", "55", "45"] },
  { id: "65", nombre: "Innovación y Proyectos", semestre: 10, creditos: 3, requisitos: ["54"] },
  { id: "66", nombre: "Electivos Especializados", semestre: 10, creditos: 8, requisitos: [] },

  // --- Semestre 11
  { id: "67", nombre: "Actividad Final de Titulación", semestre: 11, creditos: 30, requisitos: Array.from({ length: 66 }, (_, i) => (i + 1).toString()) }
];
