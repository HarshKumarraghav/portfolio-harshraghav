import Experience from "../Experience";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default class Control {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.camera = this.experience.camera;
    this.room = this.experience.world.room.actualRoom;

    gsap.registerPlugin(ScrollTrigger);
    this.setPath();
  }
  setPath() {
    console.log(this.room);
    this.timeline = new gsap.timeline();
    this.timeline.to(this.room.position, {
      x: () => {
       return this.sizes.width * 0.00094;
      },
      duration: 20,
      scrollTrigger: {
        trigger: ".first-move",
        markers: true,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
        invaliddateOnRefresh: true,
      },
    });
  }
  resize() {}
  update() {}
}
