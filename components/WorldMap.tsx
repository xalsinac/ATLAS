
import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { Intervention } from '../types';

interface WorldMapProps {
  data: Intervention[];
  currentYear: number | null;
  onSelectCountry: (intervention: Intervention) => void;
  selectedId: string | null;
}

const WorldMap: React.FC<WorldMapProps> = ({ data, currentYear, onSelectCountry, selectedId }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [worldData, setWorldData] = useState<any>(null);
  const [mapReady, setMapReady] = useState(false);
  const gRef = useRef<SVGGElement>(null);
  const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);

  const filteredInterventions = useMemo(() => {
    if (currentYear === null) return data;
    return data.filter(d => d.years.includes(currentYear));
  }, [data, currentYear]);

  const stats = useMemo(() => {
    const uniqueCountries = new Set(data.map(d => d.country)).size;
    const totalEvents = data.reduce((acc, d) => acc + d.years.length, 0);
    const operations = data.filter(d => d.type === 'operation').reduce((acc, d) => acc + d.years.length, 0);
    const coups = data.filter(d => d.type === 'coup').reduce((acc, d) => acc + d.years.length, 0);
    return { countries: uniqueCountries, total: totalEvents, operations, coups };
  }, [data]);

  const projection = useMemo(() => d3.geoMercator().scale(150).translate([960 / 2, 600 / 1.5]), []);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then(res => res.json())
      .then(json => setWorldData(json));
  }, []);

  // Inicialización del Mapa Base
  useEffect(() => {
    if (!worldData || !svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const g = svg.append('g');
    // @ts-ignore
    gRef.current = g.node();

    const path = d3.geoPath().projection(projection);

    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 25])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
        // Actualización en tiempo real del tamaño de los puntos sin re-render de React
        g.selectAll('.marker-point')
          .attr('r', function() {
            const isSelected = d3.select(this).classed('selected');
            return Math.max((isSelected ? 14 : 10) / Math.sqrt(event.transform.k), 2.5);
          })
          .attr('stroke-width', 1 / event.transform.k);
        
        g.selectAll('.marker-text')
          .attr('font-size', function() {
            const isSelected = d3.select(this).classed('selected');
            return `${Math.max((isSelected ? 11 : 9) / Math.sqrt(event.transform.k), 3.5)}px`;
          });
      });

    zoomRef.current = zoom;
    svg.call(zoom);

    const countries = (topojson.feature(worldData, worldData.objects.countries) as any).features;
    g.selectAll('.country')
      .data(countries)
      .enter()
      .append('path')
      .attr('class', 'country transition-colors duration-300')
      .attr('d', path as any)
      .attr('fill', '#0f172a')
      .attr('stroke', '#1e293b')
      .attr('stroke-width', 0.5);

    if (window.innerWidth < 768) {
      svg.call(zoom.transform, d3.zoomIdentity.translate(-120, 100).scale(1.6));
    }

    setMapReady(true);
  }, [worldData]);

  // Dibujar Marcadores (Solo se dispara si cambian los datos filtrados o la selección)
  useEffect(() => {
    if (!mapReady || !gRef.current) return;
    const g = d3.select(gRef.current);
    const currentTransform = d3.zoomTransform(svgRef.current!);
    const k = currentTransform.k;

    g.selectAll('.marker-group').remove();

    const markers = g.selectAll('.marker-group')
      .data(filteredInterventions, (d: any) => d.id)
      .enter()
      .append('g')
      .attr('class', 'marker-group')
      .style('cursor', 'pointer')
      .on('click', (event, d) => {
        onSelectCountry(d);
        event.stopPropagation();
      });

    markers.append('circle')
      .attr('class', d => `marker-point transition-all duration-300 ${d.id === selectedId ? 'selected' : ''}`)
      .attr('cx', d => projection([d.coordinates[1], d.coordinates[0]])![0])
      .attr('cy', d => projection([d.coordinates[1], d.coordinates[0]])![1])
      .attr('r', d => Math.max((d.id === selectedId ? 14 : 10) / Math.sqrt(k), 3))
      .attr('fill', d => d.type === 'operation' ? '#ef4444' : '#f97316')
      .attr('stroke', '#fff')
      .attr('stroke-width', 1 / k)
      .style('filter', d => d.id === selectedId ? 'drop-shadow(0 0 8px currentColor)' : 'none');

    markers.append('text')
      .filter(d => d.years.length > 1)
      .attr('class', d => `marker-text pointer-events-none fill-white font-black text-center ${d.id === selectedId ? 'selected' : ''}`)
      .attr('x', d => projection([d.coordinates[1], d.coordinates[0]])![0])
      .attr('y', d => projection([d.coordinates[1], d.coordinates[0]])![1])
      .attr('dy', '0.35em')
      .attr('text-anchor', 'middle')
      .attr('font-size', d => `${Math.max((d.id === selectedId ? 11 : 9) / Math.sqrt(k), 4)}px`)
      .text(d => d.years.length);

    // Animación de pulso para el seleccionado
    if (selectedId) {
      const selectedData = filteredInterventions.find(d => d.id === selectedId);
      if (selectedData) {
        g.append('circle')
          .attr('class', 'marker-group pulse-ring')
          .attr('cx', projection([selectedData.coordinates[1], selectedData.coordinates[0]])![0])
          .attr('cy', projection([selectedData.coordinates[1], selectedData.coordinates[0]])![1])
          .attr('r', 14 / Math.sqrt(k))
          .attr('fill', 'none')
          .attr('stroke', '#fff')
          .attr('stroke-width', 2 / k)
          .append('animate')
            .attr('attributeName', 'r')
            .attr('from', 14 / Math.sqrt(k))
            .attr('to', 35 / Math.sqrt(k))
            .attr('dur', '1.5s')
            .attr('repeatCount', 'indefinite');
      }
    }
  }, [filteredInterventions, selectedId, mapReady]);

  return (
    <div className="w-full h-full bg-slate-950 flex items-center justify-center relative overflow-hidden">
      <svg ref={svgRef} className="w-full h-full touch-none" viewBox="0 0 960 600" preserveAspectRatio="xMidYMid meet" />
      
      {/* Leyenda y Stats */}
      <div className="absolute bottom-32 left-4 md:bottom-8 md:left-8 p-5 bg-slate-900/90 backdrop-blur-2xl rounded-[2rem] border border-slate-800 text-[10px] md:text-xs flex flex-col gap-3 z-10 select-none shadow-2xl transition-all">
        <div className="flex flex-col gap-1.5 pb-3 border-b border-slate-800">
           <div className="flex items-center justify-between gap-6">
              <span className="text-slate-500 font-bold uppercase tracking-widest text-[8px]">Países</span>
              <span className="text-white font-black text-sm">{stats.countries}</span>
           </div>
           <div className="flex items-center justify-between gap-6">
              <span className="text-indigo-400 font-bold uppercase tracking-widest text-[8px]">Eventos Totales</span>
              <span className="text-white font-black text-sm">{stats.total}</span>
           </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
            <span className="text-slate-300 font-medium">Operación / Bombardeo</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
            <span className="text-slate-300 font-medium">Golpe de Estado</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
