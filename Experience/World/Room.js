import Experience from "../Experience";
import * as THREE from "three";
import gsap from "gsap";
export default class Room {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.room = this.resources.items.room;
    this.actualRoom = this.room.scene;

    this.lerp = {
      current: 0,
      target: 0,
      ease: 0.1,
    };

    this.setModel();
    this.onMouseMove();
    // this.setAnimation();
  }
  setModel() {
    this.actualRoom.children.forEach((child) => {
      child.castShadow = true;
      child.receiveShadow = true;
      if (child instanceof THREE.Group) {
        child.children.forEach((groupChild) => {
          groupChild.castShadow = true;
          groupChild.receiveShadow = true;
        });
      }
    });
    this.scene.add(this.actualRoom);
    this.actualRoom.scale.set(.31, .31, .31);
  }
  // setAnimation(){
  //   this.mixer = new THREE.AnimationMixer(this.actualRoom);
  //   this.swim = this.mixer.clipAction(this.room.animations[0])
  //   this.swim.play();
  // }
  onMouseMove() {
    window.addEventListener("mousemove", (e) => {
      this.rotation =
        (((e.clientX - window.innerWidth) / 2) * 2) / window.innerWidth;
      this.lerp.target = this.rotation * 0.1;
      console.log(this.lerp.target);
    });
  }
  resize() {}
  update() {
    this.lerp.current = gsap.utils.interpolate(
      this.lerp.current,
      this.lerp.target,
      this.lerp.ease,
    )
    this.actualRoom.rotation.y  = this.lerp.current;
    // this.mixer.update(this.time.delta * 0.00009)
  }
}
