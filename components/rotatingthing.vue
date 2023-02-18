<template>
  <div ref="container"></div>
</template>

<script>
import * as THREE from 'three';

export default {
  name: 'RotatingSphere',
  mounted() {
    // Set up the Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.$refs.container.appendChild(renderer.domElement);

    // Create a sphere
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Add some lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(-1, 2, 4);
    scene.add(light);

    // Start the animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  },
};
</script>

<style>
  /* Optional CSS styling */
  #container {
    width: 100%;
    height: 100%;
  }
</style>
