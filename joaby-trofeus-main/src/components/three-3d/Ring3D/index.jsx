import { useEffect, useRef } from "react";
import * as THREE from "three";

const Ring3D = () => {
	const mountRef = useRef(null);

	useEffect(() => {
		const scene = new THREE.Scene();
		scene.background = null;

		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true,
		});
		renderer.setSize(window.innerWidth, window.innerHeight);

		mountRef.current.appendChild(renderer.domElement);

		const geometry = new THREE.TorusGeometry(1.2, 0.4, 30, 100);
		const material = new THREE.MeshStandardMaterial({
			color: 0xffd700,
			metalness: 1,
			roughness: 0.3,
		});

		const ring = new THREE.Mesh(geometry, material);
		scene.add(ring);

		const light1 = new THREE.PointLight(0xffffff, 1, 5);
		light1.position.set(2, 2, 2);
		scene.add(light1);

		const light2 = new THREE.PointLight(0xffffff, 0.8, 5);
		light2.position.set(-2, -2, -2);
		scene.add(light2);

		camera.position.z = 5;

		let isMouseDown = false;
		let lastX = 0,
			lastY = 0;
		let rotationX = 0,
			rotationY = 0;

		const handleMouseDown = (e) => {
			isMouseDown = true;
			lastX = e.clientX;
			lastY = e.clientY;
		};

		const handleMouseUp = () => {
			isMouseDown = false;
		};

		const handleMouseMove = (e) => {
			if (!isMouseDown) return;
			let deltaX = (e.clientX - lastX) * 0.01;
			let deltaY = (e.clientY - lastY) * 0.01;
			rotationX += deltaY;
			rotationY += deltaX;
			ring.rotation.x = rotationX;
			ring.rotation.y = rotationY;
			lastX = e.clientX;
			lastY = e.clientY;
		};

		window.addEventListener("mousedown", handleMouseDown);
		window.addEventListener("mouseup", handleMouseUp);
		window.addEventListener("mousemove", handleMouseMove);

		const animate = () => {
			requestAnimationFrame(animate);
			renderer.render(scene, camera);
		};
		animate();

		const handleResize = () => {
			renderer.setSize(window.innerWidth, window.innerHeight);
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
		};

		window.addEventListener("resize", handleResize);

		return () => {
			mountRef.current.removeChild(renderer.domElement);
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("mousedown", handleMouseDown);
			window.removeEventListener("mouseup", handleMouseUp);
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return <div ref={mountRef} />;
};

export default Ring3D;
