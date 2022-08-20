import Experience from "../Experience";
import * as THREE from "three";

export default class Room {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.setFloor();
    this.setCircle();
  }
  setFloor() {
    this.geometry = new THREE.PlaneGeometry(100, 100);
    this.material = new THREE.MeshStandardMaterial({
      color: "#150E3F",
      side: THREE.BackSide,
    });
    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);
    this.plane.rotation.x = Math.PI / 2;
    this.plane.position.y = -0.3;
    this.plane.receiveShadow = true;
  }
  setCircle() {
    const geometry = new THREE.CircleGeometry(5, 128);
    const material1 = new THREE.MeshStandardMaterial({ color: "#170055" });
    const material2 = new THREE.MeshStandardMaterial({ color: "#170055" });
    const material3 = new THREE.MeshStandardMaterial({ color: "#170055" });
    this.circleFirst = new THREE.Mesh(geometry, material1);
    this.circleSecond = new THREE.Mesh(geometry, material2);
    this.circleThird = new THREE.Mesh(geometry, material3);
    this.circleFirst.position.y = -0.29;
    this.circleSecond.position.y = -0.28;
    this.circleThird.position.y = -0.27;
    this.circleFirst.scale.set(0, 0, 0);
    this.circleSecond.scale.set(0, 0, 0);
    this.circleThird.scale.set(0, 0, 0);
    this.circleFirst.rotation.x =
      this.circleSecond.rotation.x =
      this.circleThird.rotation.x =
        -Math.PI / 2;
    this.circleFirst.receiveShadow = true;
    this.circleSecond.receiveShadow = true;
    this.circleThird.receiveShadow = true;
    this.scene.add(this.circleFirst);
    this.scene.add(this.circleSecond);
    this.scene.add(this.circleThird);
  }
  resize() {}
  update() {}
}
