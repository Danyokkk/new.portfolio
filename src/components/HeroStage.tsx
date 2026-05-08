"use client";

import { BrainCircuit, Code2, Cpu, DatabaseZap, Globe2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const labels = [
  { label: "Web", detail: "Interfaces", icon: Globe2, className: "left-4 top-6 md:left-8 md:top-10" },
  { label: "AI", detail: "Workflows", icon: BrainCircuit, className: "right-4 top-12 md:right-8 md:top-16" },
  { label: "Python", detail: "Tools", icon: Code2, className: "right-5 bottom-28 md:right-10 md:bottom-32" },
  { label: "Data", detail: "Analysis", icon: DatabaseZap, className: "left-4 bottom-24 md:left-10 md:bottom-28" },
  { label: "PC Systems", detail: "Hardware", icon: Cpu, className: "left-1/2 bottom-5 -translate-x-1/2" },
];

function useDesktopMotion() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return enabled;
}

export default function HeroStage() {
  const mountRef = useRef<HTMLDivElement>(null);
  const desktopMotion = useDesktopMotion();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || !desktopMotion) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0.8, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const system = new THREE.Group();
    scene.add(system);

    const cyan = new THREE.Color("#21E6FF");
    const violet = new THREE.Color("#8B5CFF");
    const pink = new THREE.Color("#F84DFF");

    const glass = new THREE.MeshPhysicalMaterial({
      color: "#0b1738",
      metalness: 0.18,
      roughness: 0.24,
      transmission: 0.35,
      thickness: 0.7,
      transparent: true,
      opacity: 0.82,
      emissive: "#101c55",
      emissiveIntensity: 0.28,
    });
    const accent = new THREE.MeshStandardMaterial({ color: cyan, emissive: cyan, emissiveIntensity: 0.8, roughness: 0.25 });
    const purple = new THREE.MeshStandardMaterial({ color: violet, emissive: violet, emissiveIntensity: 0.45, roughness: 0.35 });
    const dark = new THREE.MeshStandardMaterial({ color: "#050816", metalness: 0.42, roughness: 0.34 });

    const base = new THREE.Mesh(new THREE.BoxGeometry(3.9, 0.26, 2.35), dark);
    base.position.set(0, -1.1, 0);
    base.rotation.x = -0.18;
    system.add(base);

    const screen = new THREE.Mesh(new THREE.BoxGeometry(3.2, 2.05, 0.14), glass);
    screen.position.set(0, 0.08, -0.55);
    screen.rotation.x = -0.08;
    system.add(screen);

    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.7, 2), glass);
    core.position.set(0, 0.05, 0.2);
    system.add(core);

    const logo = new THREE.Mesh(new THREE.TorusKnotGeometry(0.32, 0.065, 80, 10), accent);
    logo.position.set(0, 0.05, 0.95);
    system.add(logo);

    for (let i = 0; i < 5; i += 1) {
      const panel = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.42, 0.045), i % 2 ? purple : accent);
      const angle = (i / 5) * Math.PI * 2;
      panel.position.set(Math.cos(angle) * 2.15, Math.sin(angle * 1.2) * 0.56 + 0.05, Math.sin(angle) * 1.25);
      panel.rotation.set(0.25, -angle + Math.PI / 2, 0.05);
      system.add(panel);
    }

    const ringOne = new THREE.Mesh(new THREE.TorusGeometry(2.65, 0.012, 16, 160), new THREE.MeshBasicMaterial({ color: cyan, transparent: true, opacity: 0.55 }));
    ringOne.rotation.x = Math.PI / 2.5;
    system.add(ringOne);

    const ringTwo = new THREE.Mesh(new THREE.TorusGeometry(3.2, 0.01, 16, 160), new THREE.MeshBasicMaterial({ color: pink, transparent: true, opacity: 0.32 }));
    ringTwo.rotation.x = Math.PI / 2.1;
    ringTwo.rotation.y = 0.42;
    system.add(ringTwo);

    const particleCount = 180;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      const radius = 2.4 + Math.random() * 2.3;
      const angle = Math.random() * Math.PI * 2;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3.4;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
      const color = i % 3 === 0 ? cyan : i % 3 === 1 ? violet : pink;
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({ size: 0.035, vertexColors: true, transparent: true, opacity: 0.88 }),
    );
    scene.add(particles);

    scene.add(new THREE.AmbientLight("#6eeeff", 0.72));
    const key = new THREE.PointLight("#21E6FF", 24, 9);
    key.position.set(-2.4, 2.7, 3.2);
    scene.add(key);
    const rim = new THREE.PointLight("#F84DFF", 18, 8);
    rim.position.set(2.6, 0.9, 2.8);
    scene.add(rim);

    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    mount.addEventListener("pointermove", onPointerMove);

    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    let frame = 0;
    let raf = 0;
    const animate = () => {
      frame += 0.01;
      system.rotation.y += (pointer.x * 0.16 - system.rotation.y) * 0.04;
      system.rotation.x += (-pointer.y * 0.08 - system.rotation.x) * 0.04;
      core.rotation.x += 0.006;
      core.rotation.y += 0.009;
      logo.rotation.x -= 0.012;
      logo.rotation.y += 0.015;
      ringOne.rotation.z += 0.0028;
      ringTwo.rotation.z -= 0.002;
      particles.rotation.y += 0.0016;
      particles.position.y = Math.sin(frame) * 0.08;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      mount.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      particleGeometry.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [desktopMotion]);

  return (
    <div
      className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/15 bg-[linear-gradient(145deg,rgba(7,11,36,.92),rgba(3,5,18,.72))] shadow-violet md:min-h-[620px]"
      aria-label="Interactive 3D system visual for Danylo's web, AI, Python, data, and PC systems work"
    >
      <div className="absolute inset-0 bg-mesh-lines bg-[size:44px_44px] opacity-35" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(33,230,255,.22),transparent_17rem),radial-gradient(circle_at_62%_62%,rgba(139,92,255,.26),transparent_23rem),radial-gradient(circle_at_34%_66%,rgba(248,77,255,.16),transparent_18rem)]"
        aria-hidden="true"
      />
      <div ref={mountRef} className="absolute inset-0 hidden md:block" aria-hidden="true" />

      <div className="absolute left-1/2 top-[48%] grid size-56 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[2rem] border border-volt/35 bg-gradient-to-br from-volt/14 via-plasma/16 to-aurora/12 shadow-glow md:hidden">
        <Code2 className="size-16 text-volt" />
      </div>

      {labels.map(({ label, detail, icon: Icon, className }) => (
        <article
          key={label}
          data-floating-card
          className={`absolute w-40 rounded-3xl border border-white/14 bg-ink/70 p-4 shadow-[0_20px_70px_rgba(0,0,0,.32)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-volt/40 md:w-48 ${className}`}
        >
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.055] text-volt">
              <Icon className="size-5" />
            </span>
            <div>
              <h2 className="font-display text-sm font-black text-white">{label}</h2>
              <p className="mt-1 text-xs text-white/48">{detail}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
