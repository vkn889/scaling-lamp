"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { cn } from "@/lib/utils"

interface WebGLShaderProps {
  className?: string
}

export function WebGLShader({ className }: WebGLShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene | null
    camera: THREE.OrthographicCamera | null
    renderer: THREE.WebGLRenderer | null
    mesh: THREE.Mesh | null
    uniforms: Record<string, { value: unknown }> | null
    animationId: number | null
  }>({
    scene: null,
    camera: null,
    renderer: null,
    mesh: null,
    uniforms: null,
    animationId: null,
  })

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const { current: refs } = sceneRef

    const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `

    // Brand-color adapted shader — aurora waves in Space Indigo / Almond Silk tones
    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

        float d = length(p) * distortion;

        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        float c1 = 0.042 / abs(p.y + sin((rx + time) * xScale) * yScale);
        float c2 = 0.036 / abs(p.y + sin((gx + time) * xScale) * yScale);
        float c3 = 0.030 / abs(p.y + sin((bx + time) * xScale) * yScale);

        // Base: Space Indigo #22223B
        vec3 color = vec3(0.133, 0.133, 0.231);

        // Wave 1: Almond Silk #C9ADA7
        color += c1 * vec3(0.788, 0.678, 0.655) * 0.65;
        // Wave 2: Dusty Grape #4A4E69
        color += c2 * vec3(0.290, 0.306, 0.412) * 0.90;
        // Wave 3: Lilac Ash #9A8C98
        color += c3 * vec3(0.604, 0.549, 0.596) * 0.50;

        gl_FragColor = vec4(color, 1.0);
      }
    `

    const initScene = () => {
      refs.scene = new THREE.Scene()
      refs.renderer = new THREE.WebGLRenderer({ canvas, antialias: false })
      refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      refs.renderer.setClearColor(new THREE.Color(0x22223b))
      refs.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1)

      refs.uniforms = {
        resolution: { value: [canvas.offsetWidth, canvas.offsetHeight] },
        time: { value: 0.0 },
        xScale: { value: 0.7 },
        yScale: { value: 0.28 },
        distortion: { value: 0.03 },
      }

      const positions = new THREE.BufferAttribute(
        new Float32Array([
          -1, -1, 0,  1, -1, 0, -1,  1, 0,
           1, -1, 0, -1,  1, 0,  1,  1, 0,
        ]),
        3
      )
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute("position", positions)

      const material = new THREE.RawShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: refs.uniforms,
        side: THREE.DoubleSide,
      })

      refs.mesh = new THREE.Mesh(geometry, material)
      refs.scene.add(refs.mesh)
      handleResize()
    }

    const animate = () => {
      if (refs.uniforms) refs.uniforms.time.value = (refs.uniforms.time.value as number) + 0.006
      if (refs.renderer && refs.scene && refs.camera) {
        refs.renderer.render(refs.scene, refs.camera)
      }
      refs.animationId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      if (!refs.renderer || !refs.uniforms || !canvas.parentElement) return
      const w = canvas.parentElement.offsetWidth
      const h = canvas.parentElement.offsetHeight
      refs.renderer.setSize(w, h, false)
      refs.uniforms.resolution.value = [w, h]
    }

    initScene()
    animate()
    const ro = new ResizeObserver(handleResize)
    if (canvas.parentElement) ro.observe(canvas.parentElement)

    return () => {
      if (refs.animationId) cancelAnimationFrame(refs.animationId)
      ro.disconnect()
      if (refs.mesh) {
        refs.scene?.remove(refs.mesh)
        refs.mesh.geometry.dispose()
        if (refs.mesh.material instanceof THREE.Material) refs.mesh.material.dispose()
      }
      refs.renderer?.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={cn("block w-full h-full", className)}
    />
  )
}
