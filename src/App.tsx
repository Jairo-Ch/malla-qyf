import React, { useState } from 'react';
import { cursos as todosLosCursos, Curso } from './data/cursos';

const romanos = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

const App = () => {
  const [cursosAprobados, setCursosAprobados] = useState<string[]>([]);

  const estaDesbloqueado = (curso: Curso): boolean =>
    curso.requisitos.every(req => cursosAprobados.includes(req));

  const toggleCurso = (id: string) => {
    setCursosAprobados(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const cursosPorSemestre: { [sem: number]: Curso[] } = {};
  for (const curso of todosLosCursos) {
    if (!cursosPorSemestre[curso.semestre]) {
      cursosPorSemestre[curso.semestre] = [];
    }
    cursosPorSemestre[curso.semestre].push(curso);
  }

  return (
    <div className="overflow-auto flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Malla Interactiva – Obstetricia - USS
      </h1>
  
      <div className="grid grid-cols-10 gap-4 max-w-[1800px] w-full scale-[0.85] origin-top">
       
  


        {/* Fila de Años */}
        <div className="col-span-2 bg-gray-600 text-white text-center font-bold py-2 rounded-md text-sm">
          Año 1
        </div>
        <div className="col-span-2 bg-gray-600 text-white text-center font-bold py-2 rounded-md text-sm">
          Año 2
        </div>
        <div className="col-span-2 bg-gray-600 text-white text-center font-bold py-2 rounded-md text-sm">
          Año 3
        </div>
        <div className="col-span-2 bg-gray-600 text-white text-center font-bold py-2 rounded-md text-sm">
          Año 4
        </div>
        <div className="col-span-2 bg-gray-600 text-white text-center font-bold py-2 rounded-md text-sm">
          Año 5
        </div>
        

        {/* Fila de Semestres */}
        {romanos.map((r, i) => (
          <div key={`romano-${i}`} className="bg-gray-200 text-center font-bold py-1 rounded-md shadow text-sm">
            {r}
          </div>
        ))}

        {/* Cursos */}
        {Array.from({ length: 10 }).map((_, semestreIndex) => {
          const semestre = semestreIndex + 1;
          const cursos = cursosPorSemestre[semestre] || [];
          return (
            <div key={semestre} className="flex flex-col gap-2">
              {cursos.map(curso => {
                const desbloqueado = estaDesbloqueado(curso);
                const aprobado = cursosAprobados.includes(curso.id);
                return (
                  <button
                    key={curso.id}
                    className={`w-32 h-20 flex flex-col justify-center items-center rounded-md shadow text-center text-[11px] font-medium transition
                      ${aprobado ? 'bg-green-200 text-green-900' :
                        desbloqueado ? 'bg-white text-gray-800 hover:bg-blue-100' :
                          'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                    disabled={!desbloqueado && !aprobado}
                    onClick={() => toggleCurso(curso.id)}
                  >
                    <div className="font-semibold text-[13px] leading-snug text-center">{curso.nombre}</div>
                    <div className="text-gray-500 text-[11px] uppercase">{curso.id}</div>
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
