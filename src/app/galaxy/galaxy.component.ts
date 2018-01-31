import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';


@Component({
  selector: 'app-galaxy',
  templateUrl: './galaxy.component.html',
  styleUrls: ['./galaxy.component.css']
})
export class GalaxyComponent implements OnInit {

  camera: THREE.Camera;
  scene: THREE.Scene;
  renderer: THREE.Renderer;


  constructor() { }

  ngOnInit() {
    this.init();
    this.gameLoop();
  }

  init() {
    this.scene = new THREE.Scene;
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
  }


  // Logic
  update() {

  }

  // Draw scene
  render(renderer: THREE.Renderer, scene: THREE.Scene, camera: THREE.Camera) {
    renderer.render(scene, camera);
  }

  // Run game loop
  gameLoop() {
    window.requestAnimationFrame( () => this.gameLoop );

    this.update();
    this.render(this.renderer, this.scene, this.camera);
    console.log('three looping');
  }

}
