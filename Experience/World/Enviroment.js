import Experience from "../Experience";
import * as THREE from "three";
import gsap from "gsap";
import GUI from "lil-gui";

export default class Enviroment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    // this.gui = new GUI({ container: document.querySelector(".hero-main") });
    this.obj = {
      colorObj: { r: 0, b: 0, c: 0 },
      intensity: 3,
    };
    this.setSunLight();
    // this.setGUI();
  }
  // setGUI() {
  //   this.gui.addColor(this.obj, "colorObj").onChange(() => {
  //     this.sunLight.color.copy(this.obj.colorObj);
  //     this.ambientLight.color.copy(this.obj.colorObj);
  //     console.log(this.obj.colorObj);
  //   });
  //   this.gui.add(this.obj, "intensity", 0, 10).onChange(() => {
  //     this.sunLight.intensity = this.obj.intensity;
  //     this.ambientLight.intensity = this.obj.intensity;
  //   });
  // }
  setSunLight() {
    this.sunLight = new THREE.DirectionalLight("#ffffff", 3);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.far = 1000;
    this.sunLight.shadow.mapSize.set(4096, 4096);
    this.sunLight.shadow.normalBias = 0.05;
    this.sunLight.position.set(-3.5, 12, 3);
    this.scene.add(this.sunLight);
    this.ambientLight = new THREE.AmbientLight("#ffffff", 1);
    this.scene.add(this.ambientLight);
  }
  switchTheme(theme) {
    if (theme === "dark") {
      gsap.to(this.sunLight.color, {
        r: 0.23921568627450981,
        b: 0.23921568627450981,
        g: 0.23921568627450981,
      });
      gsap.to(this.ambientLight.color, {
        r: 0.23921568627450981,
        b: 0.23921568627450981,
        g: 0.23921568627450981,
      });
      gsap.to(this.sunLight, {
        intensity: 1.4,
      });
      gsap.to(this.ambientLight, {
        intensity: 1.4,
      });
    } else {
      gsap.to(this.sunLight.color, {
        r: 255/255,
        g: 255/255,
        b: 255/255,
      });
      gsap.to(this.ambientLight.color, {
        r: 255/255,
        g: 255/255,
        b: 255/255,
      });
      gsap.to(this.sunLight, {
        intensity: 3,
      });
      gsap.to(this.ambientLight, {
        intensity: 1,
      });
    }
  }

  resize() {}
  update() {}
}
