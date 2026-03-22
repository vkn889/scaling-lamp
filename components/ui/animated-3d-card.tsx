"use client";

import React, { useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Brand-adapted themes for the F* Cancer Foundation palette
const THEMES = {
  primary: "from-[#4A4E69] via-[#383c5a] to-[#22223B]",
  secondary: "from-[#9A8C98] via-[#7d7080] to-[#4A4E69]",
  accent: "from-[#C9ADA7] via-[#b59890] to-[#9A8C98]",
  success: "from-[#3d5c55] via-[#2d4a43] to-[#1e332e]",
  warning: "from-[#7a5c3a] via-[#5a4228] to-[#3d2c17]",
  danger: "from-[#6b3040] via-[#4d2030] to-[#331520]",
  info: "from-[#304a6b] via-[#20334d] to-[#152233]",
  neutral: "from-[#4a4a5a] via-[#363645] to-[#22223B]",
} as const;

type ThemeType = keyof typeof THEMES;

interface MousePos {
  readonly x: number;
  readonly y: number;
}

export interface Card3DProps {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  theme?: ThemeType;
  gradient?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "minimal" | "premium";
  disabled?: boolean;
  loading?: boolean;
}

export interface CardData {
  id: string;
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  theme?: ThemeType;
  gradient?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export interface Card3DListProps {
  cards: CardData[];
  className?: string;
  columns?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg" | "xl";
  size?: "sm" | "md" | "lg";
  variant?: "default" | "minimal" | "premium";
  animated?: boolean;
  staggerDelay?: number;
}

const SIZES = {
  sm: "h-64",
  md: "h-72",
  lg: "h-96",
} as const;

const VARIANTS = {
  default: "shadow-lg hover:shadow-2xl",
  minimal: "shadow-md hover:shadow-lg border border-white/10",
  premium: "shadow-xl hover:shadow-2xl ring-1 ring-white/20",
} as const;

const GRIDS = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
} as const;

const GAPS = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-10",
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -15, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 12, mass: 0.7 },
  },
};

export const Card3D = React.forwardRef<HTMLDivElement, Card3DProps>(
  (
    {
      title,
      description,
      image,
      icon,
      theme = "primary",
      gradient,
      onClick,
      className,
      size = "md",
      variant = "default",
      disabled = false,
      loading = false,
    },
    ref
  ) => {
    const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    const finalGradient = useMemo(
      () => gradient || THEMES[theme],
      [gradient, theme]
    );
    const patternId = useMemo(
      () => `pattern-${theme}-${title.replace(/\s+/g, "-").toLowerCase()}`,
      [theme, title]
    );

    const handleMove = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (disabled) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePos({
          x: (x / rect.width - 0.5) * 22,
          y: (y / rect.height - 0.5) * -22,
        });
      },
      [disabled]
    );

    const handleEnter = useCallback(() => {
      if (!disabled) setHovered(true);
    }, [disabled]);

    const handleLeave = useCallback(() => {
      if (disabled) return;
      setHovered(false);
      setMousePos({ x: 0, y: 0 });
    }, [disabled]);

    const handleClick = useCallback(() => {
      if (disabled || loading || !onClick) return;
      onClick();
    }, [disabled, loading, onClick]);

    return (
      <motion.div
        ref={ref}
        className={cn(
          "group relative w-full overflow-hidden rounded-2xl transform-gpu transition-all duration-500 ease-out",
          SIZES[size],
          VARIANTS[variant],
          onClick && !disabled && !loading && "cursor-pointer",
          disabled && "opacity-50 cursor-not-allowed",
          loading && "pointer-events-none",
          className
        )}
        onMouseMove={handleMove}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        animate={{
          rotateX: disabled ? 0 : mousePos.y,
          rotateY: disabled ? 0 : mousePos.x,
          z: disabled ? 0 : hovered ? 30 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 35, mass: 0.8 }}
        whileTap={disabled || !onClick ? {} : { scale: 0.98 }}
        onClick={handleClick}
        style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
        role={onClick ? "button" : "article"}
        tabIndex={onClick && !disabled ? 0 : -1}
        aria-label={onClick ? `Learn about ${title}` : undefined}
      >
        {/* Background layer */}
        <motion.div
          className={cn(
            "absolute inset-0 rounded-2xl",
            image ? "" : `bg-gradient-to-br ${finalGradient}`
          )}
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.4 }}
          style={{ transform: "translateZ(-10px)" }}
        >
          {image && (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500"
              loading="lazy"
            />
          )}
        </motion.div>

        {/* Dot pattern decoration */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-20 pointer-events-none">
          <svg className="absolute -top-4 -right-4 w-32 h-32 text-white/30" viewBox="0 0 100 100">
            <defs>
              <pattern id={patternId} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill={`url(#${patternId})`} />
          </svg>
        </div>

        {/* Overlay darkening */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)",
            transform: "translateZ(5px)",
          }}
          animate={{ opacity: hovered ? 0.4 : 0.7 }}
          transition={{ duration: 0.3 }}
        />

        {/* Sheen highlight */}
        <motion.div
          className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
          style={{ transform: "translateZ(15px)" }}
        >
          <motion.div
            className="absolute -inset-full"
            animate={{
              background: hovered
                ? `linear-gradient(${mousePos.x + 135}deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)`
                : "transparent",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="relative z-20 flex h-full flex-col justify-between p-5 text-white"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="flex justify-between items-start">
            {icon && (
              <motion.div
                className="text-2xl opacity-90 filter drop-shadow-lg"
                animate={{ rotateZ: hovered ? 5 : 0, y: hovered ? -2 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {icon}
              </motion.div>
            )}
            {/* Pulse dot */}
            <motion.div className="relative ml-auto" animate={{ scale: hovered ? 1.2 : 1 }} transition={{ duration: 0.3 }}>
              <div className="h-2.5 w-2.5 rounded-full bg-white/40 backdrop-blur-sm" />
              {!disabled && (
                <motion.div
                  className="absolute inset-0 h-2.5 w-2.5 rounded-full bg-[#C9ADA7]/80"
                  animate={{ scale: hovered ? [1, 1.5, 1] : 1, opacity: hovered ? [0.7, 0.2, 0.7] : 0.7 }}
                  transition={{ duration: 1.5, repeat: hovered ? Infinity : 0 }}
                />
              )}
            </motion.div>
          </div>

          <motion.div className="space-y-2" animate={{ y: hovered ? -4 : 0 }} transition={{ duration: 0.3 }}>
            <motion.h3
              className="text-lg font-bold tracking-tight drop-shadow-md"
              style={{ fontFamily: "var(--font-syne)" }}
              animate={{ scale: hovered ? 1.02 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>

            <motion.p
              className="text-xs text-white/80 leading-relaxed drop-shadow-sm line-clamp-3"
              style={{ fontFamily: "var(--font-dm-sans)" }}
              animate={{ opacity: hovered ? 1 : 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {description}
            </motion.p>

            {onClick && !disabled && (
              <motion.div
                className="flex items-center space-x-2"
                animate={{ x: hovered ? 0 : -8, opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="h-px w-4 bg-[#C9ADA7] rounded-full" />
                <div className="text-xs font-semibold text-[#C9ADA7]" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                  {loading ? "Loading..." : "Learn more →"}
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Glass rim */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.06) 100%)",
            transform: "translateZ(25px)",
          }}
          animate={{ opacity: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        />

        {/* Glow on hover */}
        {!disabled && (
          <motion.div
            className="absolute -inset-0.5 rounded-2xl opacity-0 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, rgba(201,173,167,0.3), rgba(74,78,105,0.2))`,
              filter: "blur(16px)",
              transform: "translateZ(-5px)",
            }}
            animate={{ opacity: hovered ? 0.5 : 0 }}
            transition={{ duration: 0.4 }}
          />
        )}

        {/* Loading spinner */}
        {loading && (
          <motion.div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-2xl flex items-center justify-center"
            style={{ transform: "translateZ(30px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="w-6 h-6 border-2 border-white/30 border-t-[#C9ADA7] rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        )}
      </motion.div>
    );
  }
);

Card3D.displayName = "Card3D";

export const Card3DList: React.FC<Card3DListProps> = ({
  cards,
  className,
  columns = 3,
  gap = "md",
  size = "md",
  variant = "default",
  animated = true,
  staggerDelay = 0.06,
}) => {
  const gridClass = useMemo(() => GRIDS[columns], [columns]);
  const gapClass = useMemo(() => GAPS[gap], [gap]);

  return (
    <motion.div
      className={cn("relative grid w-full", gridClass, gapClass, className)}
      style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          variants={animated ? itemVariants : undefined}
          initial={animated ? "hidden" : undefined}
          whileInView={animated ? "visible" : undefined}
          viewport={animated ? { once: true, margin: "-40px", amount: 0.15 } : undefined}
          transition={animated ? { delay: index * staggerDelay } : undefined}
          style={{ transformStyle: "preserve-3d" }}
        >
          <Card3D
            title={card.title}
            description={card.description}
            image={card.image}
            icon={card.icon}
            theme={card.theme}
            gradient={card.gradient}
            onClick={card.onClick}
            size={size}
            variant={variant}
            disabled={card.disabled}
            loading={card.loading}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
