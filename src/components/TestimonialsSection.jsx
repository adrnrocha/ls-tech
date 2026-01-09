import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const TestimonialsSection = () => {
  const testimonials = useMemo(
    () => [
      {
        name: 'Carlos Silva',
        role: 'Empresário',
        avatar: 'CS',
        rating: 5,
        text: 'Excelente serviço! A equipe da LS Tech instalou todo o sistema de câmeras da minha empresa com muita competência. Recomendo demais!',
      },
      {
        name: 'Maria Santos',
        role: 'Proprietária Residencial',
        avatar: 'MS',
        rating: 5,
        text: 'Fiquei muito satisfeita com a instalação da cerca elétrica. Os profissionais foram muito atenciosos e o trabalho ficou impecável.',
      },
      {
        name: 'João Pereira',
        role: 'Gerente de TI',
        avatar: 'JP',
        rating: 5,
        text: 'O cabeamento estruturado da nossa empresa foi feito pela LS Tech. Organização perfeita e funcionamento excelente. Nota 10!',
      },
      {
        name: 'Ana Costa',
        role: 'Síndica',
        avatar: 'AC',
        rating: 5,
        text: 'Contratamos a LS Tech para o sistema de segurança do condomínio. Serviço rápido, preço justo e qualidade excepcional.',
      },
      {
        name: 'Roberto Lima',
        role: 'Comerciante',
        avatar: 'RL',
        rating: 5,
        text: 'Motor do portão instalado com perfeição. Atendimento muito profissional desde o orçamento até a conclusão do serviço.',
      },
    ],
    []
  );

  const N = testimonials.length;

  // várias cópias pra loop suave (sem piscar)
  const COPIES = 5;
  const extended = useMemo(() => {
    const arr = [];
    for (let c = 0; c < COPIES; c++) arr.push(...testimonials);
    return arr;
  }, [testimonials]);

  // índice virtual sempre no miolo
  const MID_START = Math.floor(COPIES / 2) * N;
  const [virtualIndex, setVirtualIndex] = useState(MID_START);
  const [logicalIndex, setLogicalIndex] = useState(0);

  // viewport/layout
  const viewportRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isMd, setIsMd] = useState(false);

  const columns = isMd ? 3 : 1;
  const itemWidth = columns > 0 ? viewportWidth / columns : 0;

  // drag
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartXRef = useRef(0);
  const dragOffsetRef = useRef(0);
  const pointerIdRef = useRef(null);

  // velocity
  const lastMoveRef = useRef({ x: 0, t: 0 });
  const velocityRef = useRef(0);

  // transition
  const [trackTransition, setTrackTransition] = useState(true);
  const trackRef = useRef(null);

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');
    const updateBreakpoint = () => setIsMd(mql.matches);
    updateBreakpoint();

    const updateWidth = () => {
      const el = viewportRef.current;
      if (!el) return;
      setViewportWidth(el.getBoundingClientRect().width);
    };

    updateWidth();

    mql.addEventListener?.('change', updateBreakpoint);
    window.addEventListener('resize', updateWidth);

    let ro = null;
    if (viewportRef.current && 'ResizeObserver' in window) {
      ro = new ResizeObserver(() => updateWidth());
      ro.observe(viewportRef.current);
    }

    return () => {
      mql.removeEventListener?.('change', updateBreakpoint);
      window.removeEventListener('resize', updateWidth);
      if (ro) ro.disconnect();
    };
  }, []);

  const normalizeVirtualIndex = (vIdx) => MID_START + ((vIdx - MID_START) % N + N) % N;

  const jumpToNormalizedIfNeeded = (vIdx) => {
    const lowerBound = N;
    const upperBound = (COPIES - 1) * N - N;

    if (vIdx < lowerBound || vIdx > upperBound) {
      const normalized = normalizeVirtualIndex(vIdx);
      setTrackTransition(false);
      setVirtualIndex(normalized);
      requestAnimationFrame(() => setTrackTransition(true));
    }
  };

  const setActiveByLogicalIndex = (idx) => {
    const safe = ((idx % N) + N) % N;
    const target = MID_START + safe;
    setLogicalIndex(safe);
    setVirtualIndex(target);
  };

  const next = () => {
    setLogicalIndex((p) => (p + 1) % N);
    setVirtualIndex((p) => p + 1);
  };

  const prev = () => {
    setLogicalIndex((p) => (p - 1 + N) % N);
    setVirtualIndex((p) => p - 1);
  };

  const snapAfterDrag = (finalOffset, velocityPxPerMs) => {
    if (!itemWidth) return;

    const distanceThreshold = itemWidth * 0.22;
    const velocityThreshold = 0.75;

    const absOffset = Math.abs(finalOffset);
    const absVel = Math.abs(velocityPxPerMs);

    const directionNext = finalOffset < 0;

    if (absVel >= velocityThreshold || absOffset >= distanceThreshold) {
      if (directionNext) next();
      else prev();
    }

    setDragOffset(0);
    dragOffsetRef.current = 0;
    velocityRef.current = 0;
  };

  const onPointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;

    pointerIdRef.current = e.pointerId;
    dragStartXRef.current = e.clientX;
    dragOffsetRef.current = 0;

    setIsDragging(true);
    setDragOffset(0);

    const now = performance.now();
    lastMoveRef.current = { x: e.clientX, t: now };
    velocityRef.current = 0;

    setTrackTransition(false);

    if (viewportRef.current?.setPointerCapture) {
      viewportRef.current.setPointerCapture(e.pointerId);
    }
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    if (pointerIdRef.current !== null && e.pointerId !== pointerIdRef.current) return;

    const dx = e.clientX - dragStartXRef.current;
    dragOffsetRef.current = dx;

    const limit = itemWidth ? itemWidth * 0.8 : 260;
    const clamped = clamp(dx, -limit, limit);
    setDragOffset(clamped);

    const now = performance.now();
    const prevMove = lastMoveRef.current;
    const dt = now - prevMove.t;
    if (dt > 0) {
      const vx = (e.clientX - prevMove.x) / dt;
      velocityRef.current = velocityRef.current * 0.75 + vx * 0.25;
    }
    lastMoveRef.current = { x: e.clientX, t: now };
  };

  const endDrag = () => {
    if (!isDragging) return;

    setIsDragging(false);
    pointerIdRef.current = null;

    const finalOffset = dragOffsetRef.current;
    const v = velocityRef.current;

    setTrackTransition(true);
    snapAfterDrag(finalOffset, v);
  };

  const onPointerUp = (e) => {
    if (pointerIdRef.current !== null && e.pointerId !== pointerIdRef.current) return;
    endDrag();
  };

  const onPointerCancel = () => endDrag();

  const trackX = -virtualIndex * itemWidth + dragOffset;

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onEnd = () => {
      if (!isDragging) jumpToNormalizedIfNeeded(virtualIndex);
    };

    el.addEventListener('transitionend', onEnd);
    return () => el.removeEventListener('transitionend', onEnd);
  }, [virtualIndex, isDragging]);

  useEffect(() => {
    const li = ((virtualIndex - MID_START) % N + N) % N;
    setLogicalIndex(li);
    if (!isDragging) jumpToNormalizedIfNeeded(virtualIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [virtualIndex]);

  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary">
            Depoimentos
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            O Que Nossos <span className="text-primary">Clientes</span> Dizem
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            A satisfação dos nossos clientes é a nossa maior recompensa. Veja o que eles têm a dizer sobre nossos serviços.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-4 lg:-translate-x-12 z-20">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-card border-border shadow-md hover:bg-primary hover:text-primary-foreground hover:border-primary"
              onClick={() => {
                setTrackTransition(true);
                prev();
              }}
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-4 lg:translate-x-12 z-20">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-card border-border shadow-md hover:bg-primary hover:text-primary-foreground hover:border-primary"
              onClick={() => {
                setTrackTransition(true);
                next();
              }}
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="relative overflow-hidden pt-3 pb-8">
            <div
              ref={viewportRef}
              className="relative select-none touch-pan-y"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerCancel}
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
              <div
                ref={trackRef}
                className="flex"
                style={{
                  transform: `translate3d(${trackX}px, 0, 0)`,
                  transition: !trackTransition ? 'none' : 'transform 850ms cubic-bezier(0.16, 1, 0.3, 1)',
                  willChange: 'transform',
                }}
              >
                {extended.map((t, i) => (
                  <div
                    key={`${t.name}-${i}`}
                    className="shrink-0 px-3"
                    style={{
                      flex: `0 0 ${itemWidth}px`,
                      maxWidth: `${itemWidth}px`,
                    }}
                  >
                    <Card
                      className={[
                        'border-border bg-card shadow-sm transition-all duration-300 relative',
                        // ✅ Sem destaque fixo: tudo “normal”
                        'hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.04] hover:z-30',
                      ].join(' ')}
                    >
                      <CardContent className="p-6 lg:p-8">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300">
                          <Quote className="h-5 w-5 text-primary" />
                        </div>

                        <div className="flex gap-1 mb-4">
                          {[...Array(t.rating)].map((_, s) => (
                            <Star key={s} className="h-4 w-4 text-accent" fill="currentColor" />
                          ))}
                        </div>

                        <p className="text-foreground leading-relaxed mb-6">"{t.text}"</p>

                        <div className="flex items-center gap-3">
                          <Avatar className="h-12 w-12 border-2 border-primary/20">
                            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                              {t.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-foreground">{t.name}</p>
                            <p className="text-sm text-muted-foreground">{t.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setTrackTransition(true);
                  setActiveByLogicalIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === logicalIndex ? 'w-8 bg-primary' : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
