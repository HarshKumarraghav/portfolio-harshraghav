import Experience from "../Experience";
import * as THREE from "three";
import gsap from "gsap";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
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
      console.log(child);
    });

    this.width = 0.1;
    this.height = 5;
    this.intensity = 10;
    const rectLight = new THREE.RectAreaLight(
      0xFFEE2F,
      this.intensity,
      this.width,
      this.height
    );
    rectLight.position.set(-1.8, 5, -3);
    rectLight.rotation.x = -Math.PI / 2;
    rectLight.rotation.z = -Math.PI / 4;
    this.actualRoom.add(rectLight);

// second light

    this.width = 2.5;
    this.height = 0.1;
    this.intensity = 10;
    const rect2Light = new THREE.RectAreaLight(
      0xFFEE2F,
      this.intensity,
      this.width,
      this.height
    );
    rect2Light.position.set(2, 5, -3.1);
    rect2Light.rotation.x = -Math.PI / 2;
    rect2Light.rotation.z = -Math.PI / 4;

    this.actualRoom.add(rect2Light);
    this.scene.add(this.actualRoom);
    this.actualRoom.scale.set(0.31, 0.31, 0.31);


    // third Light

    this.width = .7;
    this.height = 1.3;
    this.intensity = 2;
    const rect3Light = new THREE.RectAreaLight(
      0xFFEE2F,
      this.intensity,
      this.width,
      this.height
    );
    rect3Light.position.set(-4.2, 1.7, -1 );
    rect3Light.rotation.y = Math.PI / 4


    this.actualRoom.add(rect3Light);
    this.scene.add(this.actualRoom);
    this.actualRoom.scale.set(0.31, 0.31, 0.31);


//     const rectLightHelper = new RectAreaLightHelper( rect3Light );
// rect3Light.add( rectLightHelper );
  }
  

  
  

  onMouseMove() {
    window.addEventListener("mousemove", (e) => {
      this.rotation =
        (((e.clientX - window.innerWidth) / 2) * 2) / window.innerWidth;
      this.lerp.target = this.rotation * 0.1;
    });
  }
  resize() {}
  update() {
    this.lerp.current = gsap.utils.interpolate(
      this.lerp.current,
      this.lerp.target,
      this.lerp.ease
    );
    this.actualRoom.rotation.y = this.lerp.current;
    // this.mixer.update(this.time.delta * 0.00009)
  }
}
