import * as THREE from "three";
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import Resources from "./Utils/Resources";
import assets from "./Utils/asset";
import Theme from "./Theme";
import Camera from "./Camera";
import Renderer from "./Renderer";

import World from "../Experience/World/World";
export default class Experience {
  constructor(canvas) {
    this.canvas = canvas;
    if (Experience.instanse) {
      return Experience.instanse;
    }
    Experience.instanse = this;
    this.canvas = canvas;
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.sizes = new Sizes();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.resources = new Resources(assets);
    this.theme = new Theme();
    this.world = new World();
    
    this.sizes.on("resize", () => {
      this.resize();
    });

    this.time.on("update", () => {
      this.update();
    });
  }
  resize() {
    this.camera.resize();
    this.world.resize();
    this.renderer.resize();
  }
  update() {
    this.camera.update();
    this.world.update();
    this.renderer.update();
  }
}
