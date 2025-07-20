import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { cursos as todosLosCursos } from './data/cursos';
const romanos = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"];
const App = () => {
    const [cursosAprobados, setCursosAprobados] = useState(() => {
        const guardado = localStorage.getItem("cursosAprobados");
        return guardado ? JSON.parse(guardado) : [];
    });
    useEffect(() => {
        localStorage.setItem("cursosAprobados", JSON.stringify(cursosAprobados));
    }, [cursosAprobados]);
    const estaDesbloqueado = (curso) => curso.requisitos.every(req => cursosAprobados.includes(req));
    const toggleCurso = (id) => {
        setCursosAprobados(prev => prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]);
    };
    const cursosPorSemestre = {};
    for (const curso of todosLosCursos) {
        if (!cursosPorSemestre[curso.semestre]) {
            cursosPorSemestre[curso.semestre] = [];
        }
        cursosPorSemestre[curso.semestre].push(curso);
    }
    const porcentaje = (cursosAprobados.length / todosLosCursos.length) * 100;
    const creditosTotales = cursosAprobados
        .map(id => todosLosCursos.find(c => c.id === id)?.creditos || 0)
        .reduce((acc, cur) => acc + cur, 0);
    const [modoOscuro, setModoOscuro] = useState(() => {
        const guardado = localStorage.getItem("modoOscuro");
        return guardado ? JSON.parse(guardado) : false;
    });
    useEffect(() => {
        localStorage.setItem("modoOscuro", JSON.stringify(modoOscuro));
    }, [modoOscuro]);
    return (_jsxs("div", { className: `relative min-h-screen p-6 overflow-x-auto transition-colors duration-500 ${modoOscuro ? "bg-[#e7e0f6] text-[#3c2a52]" : "bg-pink-50 text-pink-800"}`, children: [_jsx("button", { onClick: () => setModoOscuro(!modoOscuro), className: `absolute top-4 right-6 text-sm px-3 py-1 rounded transition ${modoOscuro
                    ? "bg-purple-600 text-white hover:bg-purple-500"
                    : "bg-pink-200 text-pink-800 hover:bg-pink-300"}`, children: modoOscuro ? "🌙 Modo Oscuro" : "☀️ Modo Claro" }), _jsx("h1", { className: `text-2xl font-bold text-center mb-4 ${modoOscuro ? "text-[#4b3a60]" : "text-pink-800"}`, children: "Malla Interactiva \u2013 Qu\u00EDmica y Farmacia \u2013 U. de Chile" }), _jsxs("div", { className: "text-center mb-6", children: [_jsxs("div", { className: "flex justify-center items-center gap-6 text-pink-700 font-semibold mb-2", children: [_jsxs("p", { className: "text-lg", children: ["Avance total: ", porcentaje.toFixed(1), "%"] }), _jsxs("p", { className: "text-ms", children: ["Cr\u00E9ditos acumulados: ", _jsx("span", { className: "font-bold", children: creditosTotales })] })] }), _jsx("div", { className: `w-full max-w-md mx-auto rounded-full h-4 mt-2 shadow-inner ${modoOscuro ? "bg-[#e8d3f8]" : "bg-pink-100"}`, children: _jsx("div", { className: `${modoOscuro ? "bg-[#be9fe1]" : "bg-pink-400"} h-4 rounded-full transition-all duration-500`, style: { width: `${porcentaje}%` } }) }), _jsx("button", { onClick: () => setCursosAprobados([]), className: `mt-4 font-semibold px-4 py-2 rounded shadow transition-colors duration-300 ${modoOscuro
                            ? "bg-[#d5b8ff] hover:bg-[#c7a7fa] text-[#4b3a60]"
                            : "bg-pink-200 hover:bg-pink-300 text-pink-800"}`, children: "Reiniciar malla" })] }), _jsx("div", { className: "flex justify-center", children: _jsxs("div", { className: "grid grid-rows-[auto_auto_1fr] gap-4", children: [_jsx("div", { className: "grid grid-cols-11 gap-4", children: [
                                { año: "Año 1", colSpan: 2 },
                                { año: "Año 2", colSpan: 2 },
                                { año: "Año 3", colSpan: 2 },
                                { año: "Año 4", colSpan: 2 },
                                { año: "Año 5", colSpan: 2 },
                                { año: "Año 5½", colSpan: 1 }
                            ].map(({ año, colSpan }, index) => (_jsx("div", { className: `${modoOscuro ? "bg-purple-700 text-white" : "bg-pink-300 text-white"} text-center font-bold py-2 rounded-md text-sm ${colSpan === 1 ? 'col-span-1' : colSpan === 2 ? 'col-span-2' : ''}`, children: año }, index))) }), _jsx("div", { className: "grid grid-cols-11 gap-4", children: romanos.map((r, i) => (_jsx("div", { className: `${modoOscuro ? "bg-purple-600 text-white" : "bg-pink-200"} text-center font-bold py-1 rounded-md shadow text-sm`, children: r }, `romano-${i}`))) }), _jsx("div", { className: "grid grid-cols-11 gap-4", children: Array.from({ length: 11 }).map((_, semestreIndex) => {
                                const semestre = semestreIndex + 1;
                                const cursos = cursosPorSemestre[semestre] || [];
                                return (_jsx("div", { className: "flex flex-col gap-2", children: cursos.map(curso => {
                                        const desbloqueado = estaDesbloqueado(curso);
                                        const aprobado = cursosAprobados.includes(curso.id);
                                        return (_jsxs("div", { className: "relative group w-fit", children: [_jsxs("button", { className: `relative w-32 h-20 flex flex-col justify-center items-center rounded-md shadow text-center text-[11px] font-medium
                            transition-all duration-300 ease-in-out transform
                            ${aprobado
                                                        ? modoOscuro
                                                            ? 'bg-[#b38ce7] text-white scale-105' // pastel lavanda
                                                            : 'bg-pink-300 text-white scale-105'
                                                        : desbloqueado
                                                            ? modoOscuro
                                                                ? 'bg-[#e6ccf2] text-[#3c2a52] hover:bg-[#d7b8ec] hover:scale-105'
                                                                : 'bg-pink-100 text-pink-800 hover:bg-pink-200 hover:scale-105'
                                                            : modoOscuro
                                                                ? 'bg-[#f3e8fb] text-[#a58cb0] cursor-not-allowed'
                                                                : 'bg-pink-50 text-pink-300 cursor-not-allowed'}
                            
                            
                            
                          `, disabled: !desbloqueado && !aprobado, onClick: () => toggleCurso(curso.id), children: [_jsx("div", { className: "absolute top-1 left-2 text-[10px] text-pink-500 font-bold opacity-80", children: curso.id }), _jsx("div", { className: "font-semibold text-[13px] leading-snug text-center", children: curso.nombre }), _jsxs("div", { className: "text-[11px] text-gray-500 mt-1", children: ["Cr\u00E9ditos: ", curso.creditos] }), aprobado && (_jsx("span", { className: "absolute top-1 right-1 text-white text-lg animate-fadeIn", children: "\u2728" }))] }), !desbloqueado && !aprobado && curso.requisitos.length > 0 && (_jsxs("div", { className: `absolute -top-20 left-1/2 -translate-x-1/2 w-64 rounded-md shadow-lg px-3 py-2 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${modoOscuro
                                                        ? "bg-[#f5e8ff] border border-[#e0cfff] text-[#4b3a60]"
                                                        : "bg-white border border-pink-300 text-pink-800"}`, children: ["Debes aprobar:", _jsx("ul", { className: "list-disc list-inside mt-1", children: curso.requisitos.map(reqId => {
                                                                const reqCurso = todosLosCursos.find(c => c.id === reqId);
                                                                return _jsx("li", { children: reqCurso?.nombre || reqId }, reqId);
                                                            }) })] }))] }, curso.id));
                                    }) }, semestre));
                            }) })] }) })] }));
};
export default App;
