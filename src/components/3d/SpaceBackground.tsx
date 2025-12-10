"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SpaceBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    let animationFrameId: number;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);
    
    const starVertices: number[] = [];
    for (let i = 0; i < 10000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        starVertices.push(x, y, z);
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    
    const starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.7,
        transparent: true,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);


    const particleMaterial = new THREE.PointsMaterial({
        color: 0x19D3FF,
        size: 1,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.7,
    });

    const particles = new THREE.Points(starGeometry, particleMaterial);
    scene.add(particles);


    let mouseX = 0;
    let mouseY = 0;
    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = Date.now() * 0.00005;
      
      stars.rotation.x += 0.0001;
      stars.rotation.y += 0.0002;
      particles.rotation.x -= 0.0002;
      particles.rotation.y -= 0.0001;

      camera.position.x += (mouseX - window.innerWidth / 2 - camera.position.x) * 0.00005;
      camera.position.y += (-(mouseY - window.innerHeight / 2) - camera.position.y) * 0.00005;
      camera.lookAt(scene.position);

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

  return <div ref={mountRef} className="fixed top-0 left-0 -z-10 h-full w-full" aria-hidden="true" />;
};

export default SpaceBackground;
