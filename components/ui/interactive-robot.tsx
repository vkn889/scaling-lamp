"use client";

import { Suspense, lazy } from "react";
import BoxLoader from "@/components/ui/3d-box-loader-animation";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface InteractiveRobotProps {
  scene: string;
  className?: string;
}

export function InteractiveRobot({ scene, className }: InteractiveRobotProps) {
  return (
    <Suspense
      fallback={
        <div className={`w-full h-full flex flex-col items-center justify-center bg-transparent ${className}`}>
          <BoxLoader />
          <p
            className="mt-8 text-[#9A8C98] text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            Loading Casey...
          </p>
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
