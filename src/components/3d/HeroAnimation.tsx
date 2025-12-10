"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroAnimation = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    let animationFrameId: number;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    const rings: THREE.Mesh[] = [];
    const ringCount = 5;
    const colors = [0x19D3FF, 0x00AFFF, 0xA020F0, 0xD600FF, 0x19D3FF];

    for (let i = 0; i < ringCount; i++) {
        const geometry = new THREE.TorusGeometry(2 + i * 0.3, 0.01, 16, 100);
        const material = new THREE.MeshBasicMaterial({ 
            color: colors[i % colors.length],
            side: THREE.DoubleSide,
         });
        const ring = new THREE.Mesh(geometry, material);
        
        // Add glow
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: colors[i % colors.length],
            transparent: true,
            opacity: 0.3,
            blending: THREE.AdditiveBlending
        });
        const glowRing = new THREE.Mesh(new THREE.TorusGeometry(2 + i * 0.3, 0.1, 16, 100), glowMaterial);
        ring.add(glowRing);

        ring.rotation.x = Math.random() * Math.PI;
        ring.rotation.y = Math.random() * Math.PI;
        scene.add(ring);
        rings.push(ring);
    }
    
    // Floating spheres
    const spheres: THREE.Mesh[] = [];
    const sphereCount = 8;
    for(let i = 0; i < sphereCount; i++) {
        const geometry = new THREE.SphereGeometry(0.1, 16, 16);
        const material = new THREE.MeshBasicMaterial({ 
            color: colors[i % colors.length],
            transparent: true,
            opacity: 0.8
        });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.set(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
        );
        scene.add(sphere);
        spheres.push(sphere);
    }

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = Date.now() * 0.0001;

      rings.forEach((ring, i) => {
        ring.rotation.x += 0.0005 * (i % 2 === 0 ? 1 : -1);
        ring.rotation.y += 0.0003 * (i % 2 === 0 ? 1 : -1);
      });

      spheres.forEach((sphere, i) => {
          const speed = 0.5 + i * 0.05;
          sphere.position.x = Math.cos(time * speed) * (4 + i * 0.2);
          sphere.position.y = Math.sin(time * speed) * (4 + i * 0.2);
          sphere.position.z = Math.sin(time * speed * 0.8) * (4 + i * 0.2);
      });

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
        if (!currentMount) return;
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" aria-hidden="true" />;
};

export default HeroAnimation;
