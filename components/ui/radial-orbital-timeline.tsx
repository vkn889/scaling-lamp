"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) newState[parseInt(key)] = false;
      });
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const relatedItems = getRelatedItems(id);
        const newPulse: Record<number, boolean> = {};
        relatedItems.forEach((rid) => { newPulse[rid] = true; });
        setPulseEffect(newPulse);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }
      return newState;
    });
  };

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (autoRotate) {
      timer = setInterval(() => {
        setRotationAngle((prev) => Number(((prev + 0.25) % 360).toFixed(3)));
      }, 50);
    }
    return () => clearInterval(timer);
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const targetAngle = (nodeIndex / timelineData.length) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 200;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));
    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const item = timelineData.find((i) => i.id === itemId);
    return item ? item.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed":   return "border-[#C9ADA7] bg-[#C9ADA7]/20 text-[#C9ADA7]";
      case "in-progress": return "border-[#9A8C98] bg-[#9A8C98]/20 text-[#9A8C98]";
      case "pending":     return "border-[#4A4E69] bg-[#4A4E69]/20 text-[#4A4E69]";
    }
  };

  const getStatusLabel = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed":   return "DONE";
      case "in-progress": return "IN PROGRESS";
      case "pending":     return "PENDING";
    }
  };

  return (
    <div
      className="w-full h-[600px] md:h-[700px] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#22223B" }}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {/* Center — FCF Logo */}
          <div className="absolute flex items-center justify-center z-10" style={{ width: 80, height: 80 }}>
            {/* Pulse rings */}
            <div
              className="absolute rounded-full border border-[#C9ADA7]/20 animate-ping opacity-60"
              style={{ width: 100, height: 100 }}
            />
            <div
              className="absolute rounded-full border border-[#C9ADA7]/10 animate-ping opacity-40"
              style={{ width: 120, height: 120, animationDelay: "0.5s" }}
            />
            {/* Logo circle */}
            <div
              className="relative rounded-full flex items-center justify-center shadow-lg"
              style={{
                width: 72,
                height: 72,
                background: "linear-gradient(135deg, #2d2d4a 0%, #22223B 100%)",
                border: "1.5px solid rgba(201,173,167,0.4)",
                boxShadow: "0 0 24px rgba(201,173,167,0.2), 0 0 48px rgba(201,173,167,0.08)",
              }}
            >
              <Image src="/fcf-logo.svg" alt="Fight Cancer Foundation" width={56} height={56} priority />
            </div>
          </div>

          {/* Orbit ring */}
          <div
            className="absolute rounded-full"
            style={{
              width: 408,
              height: 408,
              border: "1px solid rgba(201,173,167,0.08)",
            }}
          />

          {/* Nodes */}
          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  zIndex: isExpanded ? 200 : position.zIndex,
                  opacity: isExpanded ? 1 : position.opacity,
                }}
                onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
              >
                {/* Energy aura */}
                <div
                  className={`absolute rounded-full ${isPulsing ? "animate-pulse" : ""}`}
                  style={{
                    background: "radial-gradient(circle, rgba(201,173,167,0.15) 0%, transparent 70%)",
                    width: `${item.energy * 0.4 + 36}px`,
                    height: `${item.energy * 0.4 + 36}px`,
                    left: `-${(item.energy * 0.4 + 36 - 40) / 2}px`,
                    top: `-${(item.energy * 0.4 + 36 - 40) / 2}px`,
                  }}
                />

                {/* Node dot */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isExpanded ? "scale-150" : ""
                  }`}
                  style={{
                    background: isExpanded
                      ? "#C9ADA7"
                      : isRelated
                      ? "rgba(201,173,167,0.35)"
                      : "rgba(34,34,59,0.9)",
                    border: `2px solid ${
                      isExpanded
                        ? "#C9ADA7"
                        : isRelated
                        ? "#9A8C98"
                        : "rgba(201,173,167,0.3)"
                    }`,
                    boxShadow: isExpanded
                      ? "0 0 16px rgba(201,173,167,0.5)"
                      : isRelated
                      ? "0 0 8px rgba(201,173,167,0.25)"
                      : "none",
                    color: isExpanded ? "#22223B" : "#C9ADA7",
                  }}
                >
                  <Icon size={16} />
                </div>

                {/* Node title label */}
                <div
                  className="absolute top-12 whitespace-nowrap text-[10px] font-semibold tracking-wider transition-all duration-300"
                  style={{
                    color: isExpanded ? "#F2E9E4" : "rgba(154,140,152,0.8)",
                    fontFamily: "var(--font-jetbrains-mono)",
                    transform: isExpanded ? "scale(1.1)" : "scale(1)",
                    left: "50%",
                    translate: "-50%",
                  }}
                >
                  {item.title}
                </div>

                {/* Expanded card */}
                {isExpanded && (
                  <Card
                    className="absolute top-20 left-1/2 -translate-x-1/2 w-64 overflow-visible"
                    style={{
                      background: "linear-gradient(145deg, rgba(45,45,74,0.97) 0%, rgba(34,34,59,0.99) 100%)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(201,173,167,0.2)",
                      boxShadow: "0 24px 48px rgba(0,0,0,0.6), 0 0 0 0.5px rgba(201,173,167,0.1)",
                    }}
                  >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3" style={{ background: "rgba(201,173,167,0.4)" }} />
                    <CardHeader className="pb-2 pt-4 px-4">
                      <div className="flex justify-between items-center">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[9px] font-semibold border ${getStatusStyles(item.status)}`}
                          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                        >
                          {getStatusLabel(item.status)}
                        </span>
                        <span
                          className="text-[10px] text-[#4A4E69]"
                          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                        >
                          {item.date}
                        </span>
                      </div>
                      <CardTitle
                        className="text-sm mt-2 text-[#F2E9E4]"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs px-4 pb-4 pt-0">
                      <p className="text-[#9A8C98] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {item.content}
                      </p>

                      {/* Energy bar */}
                      <div className="mt-4 pt-3 border-t border-white/8">
                        <div className="flex justify-between items-center text-[10px] mb-1.5" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                          <span className="flex items-center gap-1 text-[#9A8C98]">
                            <Zap size={9} />
                            Impact
                          </span>
                          <span className="text-[#C9ADA7]">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/8 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${item.energy}%`,
                              background: "linear-gradient(90deg, #4A4E69, #C9ADA7)",
                            }}
                          />
                        </div>
                      </div>

                      {/* Related nodes */}
                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-white/8">
                          <div className="flex items-center mb-2 gap-1">
                            <Link size={9} className="text-[#4A4E69]" />
                            <span
                              className="text-[9px] uppercase tracking-wider text-[#4A4E69]"
                              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                            >
                              Related
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((rid) => {
                              const related = timelineData.find((i) => i.id === rid);
                              return (
                                <Button
                                  key={rid}
                                  variant="outline"
                                  size="sm"
                                  className="h-6 px-2 py-0 text-[10px] rounded-full"
                                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                                  onClick={(e: React.MouseEvent) => {
                                    e.stopPropagation();
                                    toggleItem(rid);
                                  }}
                                >
                                  {related?.title}
                                  <ArrowRight size={8} className="ml-1 opacity-60" />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
