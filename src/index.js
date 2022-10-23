import * as THREE from "https://unpkg.com/three@0.145.0/build/three.module.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, innerWidth / innerHeight, 0.1, 1000 );
camera.position.z = 5;


const renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0x000000 );
renderer.setSize( innerWidth, innerHeight );
renderer.setPixelRatio( devicePixelRatio );
document.body.appendChild( renderer.domElement );

const boxGeometry = new THREE.BoxGeometry(1,1,1,);
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const boxMesh = new THREE.Mesh( boxGeometry, boxMaterial );
scene.add( boxMesh );

animate();

function animate () {
    requestAnimationFrame(animate);
    renderer.render( scene, camera );
    boxMesh.rotation.z += .01;
    boxMesh.rotation.x += -.021;
    boxMesh.rotation.y += .01;
    boxMesh.translateZ(0.02);


}