
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
    return { countries: uniqueCountries, total: totalEvents };
  }, [data]);

  const projection = useMemo(() => d3.geoMercator().scale(150).translate([960 / 2, 600 / 1.5]), []);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then(res => res.json())
      .then(json => setWorldData(json));
  }, []);

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
        g.selectAll('.marker-point')
          .attr('r', function() {
            const isSelected = d3.select(this).classed('selected');
            return Math.max((isSelected ? 14 : 10) / Math.sqrt(event.transform.k), 3);
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
      .attr('class', 'country')
      .attr('d', path as any)
      .attr('fill', '#0f172a')
      .attr('stroke', '#1e293b')
      .attr('stroke-width', 0.5);

    // Zoom inicial adaptativo
    if (window.innerWidth < 768) {
      // En móvil, centramos un poco más a la izquierda (América/Atlántico)
      svg.call(zoom.transform, d3.zoomIdentity.translate(-250, 80).scale(1.8));
    } else {
      svg.call(zoom.transform, d3.zoomIdentity.translate(0, 50).scale(1));
    }

    setMapReady(true);
  }, [worldData]);

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
      .attr('r', d => Math.max((d.id === selectedId ? 14 : 10) / Math.sqrt(k), 4))
      .attr('fill', d => d.type === 'operation' ? '#ef4444' : '#f97316')
      .attr('stroke', '#fff')
      .attr('stroke-width', 1 / k)
      .style('filter', d => d.id === selectedId ? 'drop-shadow(0 0 10px #ef4444)' : 'none');

    markers.append('text')
      .filter(d => d.years.length > 1)
      .attr('class', d => `marker-text pointer-events-none fill-white font-black ${d.id === selectedId ? 'selected' : ''}`)
      .attr('x', d => projection([d.coordinates[1], d.coordinates[0]])![0])
      .attr('y', d => projection([d.coordinates[1], d.coordinates[0]])![1])
      .attr('dy', '0.35em')
      .attr('text-anchor', 'middle')
      .attr('font-size', d => `${Math.max((d.id === selectedId ? 11 : 9) / Math.sqrt(k), 4)}px`)
      .text(d => d.years.length);

  }, [filteredInterventions, selectedId, mapReady]);

  return (
    <div className="w-full h-full bg-slate-950 flex items-center justify-center relative overflow-hidden">
      <svg ref={svgRef} className="w-full h-full touch-none" viewBox="0 0 960 600" preserveAspectRatio="xMidYMid meet" />
      
      <div className="absolute bottom-40 left-4 md:bottom-8 md:left-8 p-4 bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-800 text-[9px] md:text-xs z-10 select-none shadow-2xl">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
            <span className="text-slate-300 font-bold uppercase tracking-tighter">Bombardeo / Operación</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]"></div>
            <span className="text-slate-300 font-bold uppercase tracking-tighter">Golpe de Estado</span>
          </div>
          <div className="mt-2 pt-2 border-t border-slate-800 flex gap-4">
             <div className="flex flex-col">
                <span className="text-slate-500 text-[7px] uppercase tracking-widest">Países</span>
                <span className="text-white font-black">{stats.countries}</span>
             </div>
             <div className="flex flex-col">
                <span className="text-slate-500 text-[7px] uppercase tracking-widest">Eventos</span>
                <span className="text-white font-black">{stats.total}</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
