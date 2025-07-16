export type Curso = {
  id: string;
  nombre: string;
  semestre: number;
  requisitos: string[];
};

export const cursos: Curso[] = [
  // SEMESTRE 1
  { id: "biocel", nombre: "Biología Celular", semestre: 1, requisitos: [] },
  { id: "anatomia", nombre: "Anatomía Humana", semestre: 1, requisitos: [] },
  { id: "quimica", nombre: "Química General y Orgánica", semestre: 1, requisitos: [] },
  { id: "matroneria", nombre: "Fundamentos de la Matronería", semestre: 1, requisitos: [] },
  { id: "ingles", nombre: "Inglés General", semestre: 1, requisitos: [] },

  // SEMESTRE 2
  { id: "fisiohumana", nombre: "Fisiología Humana", semestre: 2, requisitos: ["biocel", "anatomia"] },
  { id: "histoemb", nombre: "Histoembriología", semestre: 2, requisitos: ["biocel"] },
  { id: "bioquimica", nombre: "Bioquímica General", semestre: 2, requisitos: ["biocel", "quimica"] },
  { id: "antropologia", nombre: "Antropología", semestre: 2, requisitos: [] },
  { id: "ssyr", nombre: "Fundamentos de la SSyR", semestre: 2, requisitos: ["matroneria"] },
  { id: "psicologia", nombre: "Psicología del Curso de la Vida", semestre: 2, requisitos: [] },
  { id: "saludec", nombre: "Atención en Salud basada en la E.C.", semestre: 2, requisitos: ["ingles"] },

  // SEMESTRE 3
  { id: "etica", nombre: "Ética", semestre: 3, requisitos: ["antropologia"] },
  { id: "embriogen", nombre: "Embriología y Genética", semestre: 3, requisitos: ["histoemb"] },
  { id: "microbio", nombre: "Microbiología General", semestre: 3, requisitos: ["biocel"] },
  { id: "farmagral", nombre: "Farmacología General", semestre: 3, requisitos: ["fisiohumana", "bioquimica"] },
  { id: "farmapli", nombre: "Farmacología Aplicada", semestre: 3, requisitos: ["fisiohumana", "bioquimica"] },
  { id: "anatomiaap", nombre: "Anatomía Aplicada", semestre: 3, requisitos: ["anatomia"] },
  { id: "genero", nombre: "Género y Salud", semestre: 3, requisitos: ["antropologia", "ssyr"] },
  { id: "saludpub1", nombre: "Salud Pública I", semestre: 3, requisitos: [] },

  // SEMESTRE 4
  {
    id: "pae1",
    nombre: "PAE I",
    semestre: 4,
    requisitos: ["anatomia", "fisiohumana", "microbio"],
  },
  {
    id: "obst1",
    nombre: "Obstetricia I",
    semestre: 4,
    requisitos: ["bioquimica", "embriogen", "anatomiaap"],
  },
  {
    id: "neo1",
    nombre: "Neonatología I",
    semestre: 4,
    requisitos: ["bioquimica", "embriogen", "fisiohumana"],
  },
  {
    id: "gine1",
    nombre: "Ginecología I",
    semestre: 4,
    requisitos: ["bioquimica", "embriogen", "fisiohumana"],
  },
  {
    id: "sex1",
    nombre: "Sexología I",
    semestre: 4,
    requisitos: ["psicologia", "genero"],
  },
  {
    id: "promo",
    nombre: "Promoción de la Salud",
    semestre: 4,
    requisitos: ["antropologia", "psicologia", "genero"],
  },
  {
    id: "fisiofisiopato",
    nombre: "Fisiopatología",
    semestre: 4,
    requisitos: ["fisiohumana"],
  },

  // SEMESTRE 5
  { id: "efi", nombre: "Electivo de Formación Integral", semestre: 5, requisitos: ["etica"] },
  { id: "obst2", nombre: "Obstetricia II", semestre: 5, requisitos: ["obst1", "fisiofisiopato"] },
  { id: "neo2", nombre: "Neonatología II", semestre: 5, requisitos: ["neo1", "fisiofisiopato"] },
  { id: "gine2", nombre: "Ginecología II", semestre: 5, requisitos: ["gine1", "fisiofisiopato"] },
  {
    id: "pae2",
    nombre: "PAE II",
    semestre: 5,
    requisitos: ["pae1", "obst1", "neo1", "gine1"],
  },
  {
    id: "saludfam",
    nombre: "Salud Familiar",
    semestre: 5,
    requisitos: ["genero", "promo"],
  },
  {
    id: "saludpub2",
    nombre: "Salud Pública II",
    semestre: 5,
    requisitos: ["saludpub1"],
  },
  {
    id: "farmaperi",
    nombre: "Farmacología Perinatal y Ginecológica",
    semestre: 5,
    requisitos: ["farmagral", "farmapli"],
  },

  // SEMESTRE 6
  { id: "urgencias", nombre: "Integrado Urgencia Ginecológica, Obstétrica y Neonatal", semestre: 6, requisitos: ["pae2", "farmaperi"] },
  { id: "preclinico-perinatal", nombre: "Preclínico Perinatal", semestre: 6, requisitos: ["obst2", "neo2"] },
  { id: "regulacion", nombre: "Regulación de la Fecundidad", semestre: 6, requisitos: ["genero", "gine2", "farmaperi"] },
  { id: "sex2", nombre: "Sexología II", semestre: 6, requisitos: ["sex1"] },
  { id: "educacion-salud", nombre: "Educación para la Salud", semestre: 6, requisitos: ["genero", "saludfam"] },
  { id: "epidemiologia", nombre: "Epidemiología para la Gestión", semestre: 6, requisitos: ["saludpub1"] },
  { id: "biomedicina", nombre: "Introducción a la Biomedicina", semestre: 6, requisitos: ["etica", "fisiofisiopato", "saludec"] },

  // SEMESTRE 7
  { id: "electivo1", nombre: "Electivo I", semestre: 7, requisitos: [] },
  { id: "preclinico-ap", nombre: "Preclínico de Atención Primaria", semestre: 7, requisitos: ["preclinico-perinatal", "regulacion"] },
  { id: "clinico-perinatal1", nombre: "Clínico Perinatal I", semestre: 7, requisitos: ["preclinico-perinatal"] },
  { id: "consejeria", nombre: "Consejería en SSyR", semestre: 7, requisitos: ["genero", "educacion-salud"] },
  { id: "investigacion", nombre: "Investigación Científica", semestre: 7, requisitos: ["biomedicina"] },
  { id: "bioetica", nombre: "Bioética", semestre: 7, requisitos: ["etica"] },
  { id: "gestion-salud", nombre: "Gestión en Salud", semestre: 7, requisitos: ["epidemiologia"] },

  // SEMESTRE 8
  { id: "clinico-ap", nombre: "Clínico de Atención Primaria", semestre: 8, requisitos: ["preclinico-ap", "sex2", "habilidades"] },
  { id: "clinico-perinatal2", nombre: "Clínico Perinatal II", semestre: 8, requisitos: ["clinico-perinatal1", "habilidades"] },
  { id: "clinico-gine", nombre: "Clínico Morbilidad Ginecológica", semestre: 8, requisitos: ["urgencias", "gine2", "habilidades"] },
  { id: "legal", nombre: "Medicina Legal y Matronería", semestre: 8, requisitos: ["consejeria", "bioetica"] },
  { id: "seminario", nombre: "Seminario de Investigación", semestre: 8, requisitos: ["investigacion"] },
  { id: "marketing", nombre: "Marketing Social en Salud", semestre: 8, requisitos: ["educacion-salud", "gestion-salud"] },
  { id: "integrado-clinico1", nombre: "Integrado Clínico I", semestre: 8, requisitos: ["clinico-perinatal2", "clinico-gine", "clinico-ap"] },
  { id: "habilidades", nombre: "Habilidades para la Vida Profesional", semestre: 8, requisitos: ["bioetica"] },

  // SEMESTRE 9
  { id: "electivo2", nombre: "Electivo II", semestre: 9, requisitos: ["seminario"] },
  { id: "onco", nombre: "Clínico de Oncología Ginecológica", semestre: 9, requisitos: ["integrado-clinico1"] },
  { id: "control-sexual", nombre: "Clínico de Control Sexual y Consejería", semestre: 9, requisitos: ["integrado-clinico1"] },
  { id: "morb-neonatal", nombre: "Clínico de Morbilidad Neonatal", semestre: 9, requisitos: ["integrado-clinico1"] },
  { id: "ssyr-infantil", nombre: "Clínico de SSyR Infanto-Juvenil", semestre: 9, requisitos: ["integrado-clinico1"] },
  { id: "gestion-matroneria", nombre: "Clínico de Gestión en Matronería", semestre: 9, requisitos: ["integrado-clinico1"] },
  { id: "integrado-clinico2", nombre: "Integrado Clínico II", semestre: 9, requisitos: ["integrado-clinico1"] },

  // SEMESTRE 10
  {
    id: "internado",
    nombre: "Clínico Intrahospitalario y Extrahospitalario",
    semestre: 10,
    requisitos: ["integrado-clinico1"],
  }
];
