"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  forwardRef,
} from "react";
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ── Types ─────────────────────────────────────────────────────────────────────
export interface FolderProject {
  id: string;
  image?: string;
  color?: string; // gradient or solid color background when no image
  title: string;
  url?: string;
}

const PLACEHOLDER =
  "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800";

// ── ProjectCard ───────────────────────────────────────────────────────────────
interface ProjectCardProps {
  image?: string;
  color?: string;
  title: string;
  delay: number;
  isVisible: boolean;
  index: number;
  totalCount: number;
  onClick: () => void;
  isSelected: boolean;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  (
    { image, color, title, delay, isVisible, index, totalCount, onClick, isSelected },
    ref
  ) => {
    const mid = (totalCount - 1) / 2;
    const factor = totalCount > 1 ? (index - mid) / mid : 0;
    const rotation = factor * 25;
    const translationX = factor * 85;
    const translationY = Math.abs(factor) * 12;

    return (
      <div
        ref={ref}
        className={cn(
          "absolute w-20 h-28 cursor-pointer group/card",
          isSelected && "opacity-0"
        )}
        style={{
          transform: isVisible
            ? `translateY(calc(-100px + ${translationY}px)) translateX(${translationX}px) rotate(${rotation}deg) scale(1)`
            : "translateY(0px) translateX(0px) rotate(0deg) scale(0.4)",
          opacity: isSelected ? 0 : isVisible ? 1 : 0,
          transition: `all 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          zIndex: 10 + index,
          left: "-40px",
          top: "-56px",
        }}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <div
          className={cn(
            "w-full h-full rounded-lg overflow-hidden shadow-xl relative",
            "border border-white/10 bg-[#2d2d4a]",
            "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            "group-hover/card:-translate-y-6 group-hover/card:shadow-2xl",
            "group-hover/card:shadow-[#C9ADA7]/30 group-hover/card:ring-2",
            "group-hover/card:ring-[#C9ADA7] group-hover/card:scale-125"
          )}
        >
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = PLACEHOLDER;
              }}
            />
          ) : (
            <div
              className="w-full h-full"
              style={{ background: color || "linear-gradient(135deg, #4A4E69, #22223B)" }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <p className="absolute bottom-1.5 left-1.5 right-1.5 text-[9px] font-black uppercase tracking-tighter text-white truncate drop-shadow-md">
            {title}
          </p>
        </div>
      </div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

// ── Lightbox ──────────────────────────────────────────────────────────────────
interface LightboxProps {
  projects: FolderProject[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  sourceRect: DOMRect | null;
  onCloseComplete?: () => void;
  onNavigate: (index: number) => void;
  onViewProject?: (project: FolderProject) => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  projects,
  currentIndex,
  isOpen,
  onClose,
  sourceRect,
  onCloseComplete,
  onNavigate,
  onViewProject,
}) => {
  const [phase, setPhase] = useState<"initial" | "animating" | "complete">("initial");
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [internalIndex, setInternalIndex] = useState(currentIndex);
  const [isSliding, setIsSliding] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = projects.length;
  const hasNext = internalIndex < total - 1;
  const hasPrev = internalIndex > 0;
  const current = projects[internalIndex];

  useEffect(() => {
    if (isOpen && currentIndex !== internalIndex && !isSliding) {
      setIsSliding(true);
      const t = setTimeout(() => {
        setInternalIndex(currentIndex);
        setIsSliding(false);
      }, 400);
      return () => clearTimeout(t);
    }
  }, [currentIndex, isOpen, internalIndex, isSliding]);

  useEffect(() => {
    if (isOpen) {
      setInternalIndex(currentIndex);
      setIsSliding(false);
    }
  }, [isOpen, currentIndex]);

  const navigateNext = useCallback(() => {
    if (internalIndex >= total - 1 || isSliding) return;
    onNavigate(internalIndex + 1);
  }, [internalIndex, total, isSliding, onNavigate]);

  const navigatePrev = useCallback(() => {
    if (internalIndex <= 0 || isSliding) return;
    onNavigate(internalIndex - 1);
  }, [internalIndex, isSliding, onNavigate]);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    onClose();
    setTimeout(() => {
      setIsClosing(false);
      setShouldRender(false);
      setPhase("initial");
      onCloseComplete?.();
    }, 500);
  }, [onClose, onCloseComplete]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") navigateNext();
      if (e.key === "ArrowLeft") navigatePrev();
    };
    window.addEventListener("keydown", onKey);
    if (isOpen) document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClose, navigateNext, navigatePrev]);

  useEffect(() => {
    if (isOpen && sourceRect) {
      setShouldRender(true);
      setPhase("initial");
      setIsClosing(false);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setPhase("animating"));
      });
      const t = setTimeout(() => setPhase("complete"), 700);
      return () => clearTimeout(t);
    }
  }, [isOpen, sourceRect]);

  if (!shouldRender || !current) return null;

  const getInitialStyles = (): React.CSSProperties => {
    if (!sourceRect) return {};
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const tw = Math.min(800, vw - 64);
    const th = Math.min(vh * 0.85, 600);
    const tx = (vw - tw) / 2;
    const ty = (vh - th) / 2;
    const scaleX = sourceRect.width / tw;
    const scaleY = sourceRect.height / th;
    const scale = Math.max(scaleX, scaleY);
    const translateX = sourceRect.left + sourceRect.width / 2 - (tx + tw / 2) + window.scrollX;
    const translateY = sourceRect.top + sourceRect.height / 2 - (ty + th / 2) + window.scrollY;
    return {
      transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
      opacity: 0.5,
      borderRadius: "12px",
    };
  };

  const finalStyles: React.CSSProperties = {
    transform: "translate(0,0) scale(1)",
    opacity: 1,
    borderRadius: "24px",
  };

  const currentStyles = phase === "initial" && !isClosing ? getInitialStyles() : finalStyles;

  const complete = phase === "complete" && !isClosing;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={handleClose}
      style={{
        opacity: isClosing ? 0 : 1,
        transition: "opacity 500ms cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(34,34,59,0.92)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          opacity: phase === "initial" && !isClosing ? 0 : 1,
          transition: "opacity 600ms cubic-bezier(0.16,1,0.3,1)",
        }}
      />

      {/* Close */}
      <button
        onClick={(e) => { e.stopPropagation(); handleClose(); }}
        className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-[#F2E9E4] hover:bg-white/10 transition-all duration-300"
        style={{
          background: "rgba(74,78,105,0.3)",
          backdropFilter: "blur(16px)",
          opacity: complete ? 1 : 0,
          transform: complete ? "translateY(0)" : "translateY(-30px)",
          transition: "opacity 400ms ease-out 400ms, transform 500ms cubic-bezier(0.16,1,0.3,1) 400ms",
        }}
      >
        <X className="w-5 h-5" strokeWidth={2.5} />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); navigatePrev(); }}
        disabled={!hasPrev || isSliding}
        className="absolute left-4 md:left-10 z-50 w-14 h-14 flex items-center justify-center rounded-full border border-white/10 text-[#F2E9E4] hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none"
        style={{
          background: "rgba(74,78,105,0.3)",
          backdropFilter: "blur(16px)",
          opacity: complete && hasPrev ? 1 : 0,
          transform: complete ? "translateX(0)" : "translateX(-40px)",
          transition: "opacity 400ms ease-out 600ms, transform 500ms cubic-bezier(0.16,1,0.3,1) 600ms",
        }}
      >
        <ChevronLeft className="w-6 h-6" strokeWidth={3} />
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); navigateNext(); }}
        disabled={!hasNext || isSliding}
        className="absolute right-4 md:right-10 z-50 w-14 h-14 flex items-center justify-center rounded-full border border-white/10 text-[#F2E9E4] hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none"
        style={{
          background: "rgba(74,78,105,0.3)",
          backdropFilter: "blur(16px)",
          opacity: complete && hasNext ? 1 : 0,
          transform: complete ? "translateX(0)" : "translateX(40px)",
          transition: "opacity 400ms ease-out 600ms, transform 500ms cubic-bezier(0.16,1,0.3,1) 600ms",
        }}
      >
        <ChevronRight className="w-6 h-6" strokeWidth={3} />
      </button>

      {/* Card */}
      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          ...currentStyles,
          transform: isClosing ? "translate(0,0) scale(0.92)" : currentStyles.transform,
          transition:
            phase === "initial" && !isClosing
              ? "none"
              : "transform 700ms cubic-bezier(0.16,1,0.3,1), opacity 600ms ease-out, border-radius 700ms ease",
          transformOrigin: "center center",
        }}
      >
        <div
          className="relative overflow-hidden rounded-[inherit] border border-white/10"
          style={{
            background: "linear-gradient(145deg, rgba(74,78,105,0.4) 0%, rgba(34,34,59,0.95) 100%)",
            boxShadow: "0 35px 60px -15px rgba(0,0,0,0.7)",
          }}
        >
          {/* Image strip */}
          <div className="relative overflow-hidden aspect-[4/3] md:aspect-[16/10]">
            <div
              className="flex w-full h-full"
              style={{
                transform: `translateX(-${internalIndex * 100}%)`,
                transition: isSliding
                  ? "transform 500ms cubic-bezier(0.16,1,0.3,1)"
                  : "none",
              }}
            >
              {projects.map((p) => (
                <div key={p.id} className="min-w-full h-full relative">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover select-none"
                      onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER; }}
                    />
                  ) : (
                    <div
                      className="w-full h-full"
                      style={{ background: p.color || "linear-gradient(135deg, #4A4E69, #22223B)" }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div
            className="px-7 py-6 border-t border-white/8"
            style={{
              opacity: complete ? 1 : 0,
              transform: complete ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 500ms ease-out 500ms, transform 600ms cubic-bezier(0.16,1,0.3,1) 500ms",
            }}
          >
            <div className="flex items-center justify-between gap-6">
              <div className="flex-1 min-w-0">
                <h3
                  className="text-xl font-bold text-[#F2E9E4] tracking-tight truncate"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {current?.title}
                </h3>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/8" style={{ background: "rgba(74,78,105,0.3)" }}>
                    {projects.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => { if (!isSliding && i !== internalIndex) onNavigate(i); }}
                        className={cn(
                          "w-1.5 h-1.5 rounded-full transition-all duration-500",
                          i === internalIndex
                            ? "bg-[#C9ADA7] scale-150"
                            : "bg-[#4A4E69] hover:bg-[#9A8C98]"
                        )}
                      />
                    ))}
                  </div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest text-[#4A4E69]"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    {internalIndex + 1} / {total}
                  </p>
                </div>
              </div>

              {/* Learn More button */}
              <button
                onClick={() => onViewProject?.(current)}
                className="flex items-center gap-2 px-5 py-3 text-sm font-bold text-[#22223B] rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #F2E9E4 0%, #C9ADA7 100%)",
                  fontFamily: "var(--font-syne)",
                  boxShadow: "0 8px 24px rgba(201,173,167,0.25)",
                }}
              >
                <span>Learn More</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── AnimatedFolder ────────────────────────────────────────────────────────────
export interface AnimatedFolderProps {
  title: string;
  subtitle?: string;
  projects: FolderProject[];
  className?: string;
  gradient?: string;
  onViewProject?: (project: FolderProject) => void;
}

export const AnimatedFolder: React.FC<AnimatedFolderProps> = ({
  title,
  subtitle,
  projects,
  className,
  gradient,
  onViewProject,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [sourceRect, setSourceRect] = useState<DOMRect | null>(null);
  const [hiddenId, setHiddenId] = useState<string | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const preview = projects.slice(0, 5);

  const handleCardClick = (project: FolderProject, index: number) => {
    const el = cardRefs.current[index];
    if (el) setSourceRect(el.getBoundingClientRect());
    setSelectedIndex(index);
    setHiddenId(project.id);
  };

  const handleClose = () => { setSelectedIndex(null); setSourceRect(null); };
  const handleCloseComplete = () => setHiddenId(null);
  const handleNavigate = (i: number) => {
    setSelectedIndex(i);
    setHiddenId(projects[i]?.id || null);
  };

  // Derive folder face colors from gradient
  const backBg = gradient || "linear-gradient(135deg, #4A4E69, #22223B)";
  const tabBg = gradient ? gradient.split(",")[0].replace("linear-gradient(135deg", "").trim() : "#4A4E69";
  const frontBg = gradient || "linear-gradient(135deg, #2d2d4a, #22223B)";

  return (
    <>
      <div
        className={cn(
          "relative flex flex-col items-center justify-center p-8 rounded-2xl cursor-pointer",
          "border border-white/8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "hover:shadow-2xl hover:shadow-[#C9ADA7]/10 hover:border-[#C9ADA7]/20",
          className
        )}
        style={{
          background: "linear-gradient(145deg, rgba(74,78,105,0.2) 0%, rgba(34,34,59,0.6) 100%)",
          minWidth: "260px",
          minHeight: "300px",
          perspective: "1200px",
          transform: isHovered ? "scale(1.04) rotate(-1deg)" : "scale(1) rotate(0deg)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow */}
        <div
          className="absolute inset-0 rounded-2xl transition-opacity duration-700 pointer-events-none"
          style={{
            background: gradient
              ? `radial-gradient(circle at 50% 70%, ${gradient.match(/#[a-fA-F0-9]{3,6}/)?.[0] || "#C9ADA7"} 0%, transparent 70%)`
              : "radial-gradient(circle at 50% 70%, #C9ADA7 0%, transparent 70%)",
            opacity: isHovered ? 0.1 : 0,
          }}
        />

        {/* Folder 3D */}
        <div
          className="relative flex items-center justify-center mb-4"
          style={{ height: "160px", width: "200px" }}
        >
          {/* Back panel */}
          <div
            className="absolute w-32 h-24 rounded-lg shadow-md border border-white/10"
            style={{
              background: backBg,
              transformOrigin: "bottom center",
              transform: isHovered ? "rotateX(-20deg) scaleY(1.05)" : "rotateX(0deg) scaleY(1)",
              transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)",
              zIndex: 10,
            }}
          />
          {/* Tab */}
          <div
            className="absolute w-12 h-4 rounded-t-md border-t border-x border-white/10"
            style={{
              background: tabBg,
              top: "calc(50% - 48px - 12px)",
              left: "calc(50% - 64px + 16px)",
              transformOrigin: "bottom center",
              transform: isHovered ? "rotateX(-30deg) translateY(-3px)" : "rotateX(0deg) translateY(0)",
              transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)",
              zIndex: 10,
            }}
          />
          {/* Cards */}
          <div
            className="absolute"
            style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 20 }}
          >
            {preview.map((project, index) => (
              <ProjectCard
                key={project.id}
                ref={(el) => { cardRefs.current[index] = el; }}
                image={project.image}
                color={project.color}
                title={project.title}
                delay={index * 50}
                isVisible={isHovered}
                index={index}
                totalCount={preview.length}
                onClick={() => handleCardClick(project, index)}
                isSelected={hiddenId === project.id}
              />
            ))}
          </div>
          {/* Front panel */}
          <div
            className="absolute w-32 h-24 rounded-lg shadow-lg border border-white/15"
            style={{
              background: frontBg,
              top: "calc(50% - 48px + 4px)",
              transformOrigin: "bottom center",
              transform: isHovered ? "rotateX(35deg) translateY(12px)" : "rotateX(0deg) translateY(0)",
              transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)",
              zIndex: 30,
            }}
          />
          {/* Sheen */}
          <div
            className="absolute w-32 h-24 rounded-lg overflow-hidden pointer-events-none"
            style={{
              top: "calc(50% - 48px + 4px)",
              background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 60%)",
              transformOrigin: "bottom center",
              transform: isHovered ? "rotateX(35deg) translateY(12px)" : "rotateX(0deg) translateY(0)",
              transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)",
              zIndex: 31,
            }}
          />
        </div>

        {/* Label */}
        <div className="text-center">
          <h3
            className="text-base font-bold text-[#F2E9E4] mt-4 transition-all duration-500"
            style={{
              fontFamily: "var(--font-syne)",
              transform: isHovered ? "translateY(2px)" : "translateY(0)",
            }}
          >
            {title}
          </h3>
          <p
            className="text-xs text-[#9A8C98] mt-1 transition-all duration-500"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {subtitle || `${projects.length} ${projects.length === 1 ? "type" : "types"}`}
          </p>
        </div>

        {/* Hover hint */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 text-[0.6rem] font-semibold uppercase tracking-widest text-[#4A4E69] transition-all duration-500 pointer-events-none"
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            opacity: isHovered ? 0 : 1,
            transform: isHovered ? "translateY(10px)" : "translateY(0)",
          }}
        >
          hover to explore
        </div>
      </div>

      <Lightbox
        projects={projects}
        currentIndex={selectedIndex ?? 0}
        isOpen={selectedIndex !== null}
        onClose={handleClose}
        sourceRect={sourceRect}
        onCloseComplete={handleCloseComplete}
        onNavigate={handleNavigate}
        onViewProject={onViewProject}
      />
    </>
  );
};
