"use client";

import { useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';

interface FloatingShapesProps {
  shapeCount?: number;
  spread?: number;
}

const FloatingShapes = ({ shapeCount = 25, spread = 30 }: FloatingShapesProps) => {
  const mountRef = useRef<HTMLDivElement>(null);

  const shapes = useMemo(() => {
    const shapeArray: THREE.Mesh[] = [];
    const geometries = [
      new THREE.TorusKnotGeometry(0.6, 0.2, 100, 16),
      new THREE.OctahedronGeometry(1),
      new THREE.TorusGeometry(0.8, 0.1, 16, 100),
      new THREE.IcosahedronGeometry(1.2),
    ];
    
    const materials = [
        new THREE.MeshStandardMaterial({ color: 0x19D3FF, roughness: 0.1, metalness: 0.8 }),
        new THREE.MeshStandardMaterial({ color: 0xBB86FC, roughness: 0.2, metalness: 0.7 }),
        new THREE.MeshStandardMaterial({ color: 0x03DAC6, roughness: 0.3, metalness: 0.6 }),
        new THREE.MeshStandardMaterial({ color: 0xCF6679, roughness: 0.4, metalness: 0.5 }),
    ];


    for (let i = 0; i < shapeCount; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const shape = new THREE.Mesh(geometry, material);

      shape.position.x = (Math.random() - 0.5) * spread;
      shape.position.y = (Math.random() - 0.5) * spread;
      shape.position.z = (Math.random() - 0.5) * spread;

      shape.rotation.x = Math.random() * Math.PI;
      shape.rotation.y = Math.random() * Math.PI;

      const scale = Math.random() * 0.4 + 0.2;
      shape.scale.set(scale, scale, scale);
      
      // Store random rotation values
      (shape as any).randomX = (Math.random() - 0.5) * 0.002;
      (shape as any).randomY = (Math.random() - 0.5) * 0.002;

      shapeArray.push(shape);
    }
    return shapeArray;
  }, [shapeCount, spread]);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    let animationFrameId: number;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    shapes.forEach(shape => scene.add(shape));
    
    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0x19D3FF, 1.5);
    directionalLight1.position.set(1, 1, 1);
    scene.add(directionalLight1);
    
    const directionalLight2 = new THREE.DirectionalLight(0xBB86FC, 1.5);
    directionalLight2.position.set(-1, -1, -1);
    scene.add(directionalLight2);


    let mouseX = 0, mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      shapes.forEach(shape => {
          shape.rotation.x += (shape as any).randomX;
          shape.rotation.y += (shape as any).randomY;
      });
      
      // Interaction
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
      camera.position.y += (mouseY * 2 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
        if (!currentMount) return;
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (currentMount && renderer.domElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        currentMount.removeChild(renderer.domElement);
      }
      shapes.forEach(shape => {
        shape.geometry.dispose();
        (shape.material as THREE.Material).dispose();
      });
    };
  }, [shapes]);

  return <div ref={mountRef} className="absolute inset-0 -z-10 opacity-20" aria-hidden="true" />;
};

export default FloatingShapes;
