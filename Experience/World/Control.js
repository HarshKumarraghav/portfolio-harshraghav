import Experience from "../Experience";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ASScroll from '@ashthornton/asscroll'
export default class Control {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.camera = this.experience.camera;
    this.room = this.experience.world.room.actualRoom;
    this.room.children.forEach((child) => {
      if (child.type === "RectAreaLight") {
        this.rectLight = child;
      }
    });
    gsap.registerPlugin(ScrollTrigger);
    this.circleFirst = this.experience.world.floor.circleFirst;
    this.circleSecond = this.experience.world.floor.circleSecond;
    this.circleThird = this.experience.world.floor.circleThird;
    this.setSmoothScroll();
    this.setScrollTrigger();
  }
  setScrollTrigger() {
    ScrollTrigger.matchMedia({
      // destop -------------------------------
      "(min-width: 969px)": () => {
        this.room.scale.set(0.31, 0.31, 0.31);
        // first section -------------------------------
        this.firstMoveTimeLine = new gsap.timeline({
          scrollTrigger: {
            trigger: ".first-move",
            start: "top top",
            bottom: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
        this.firstMoveTimeLine.to(this.room.position, {
          x: () => {
            return this.sizes.width * 0.0014;
          },
        });
        // second section -------------------------------
        this.secondMoveTimeLine = new gsap.timeline({
          scrollTrigger: {
            trigger: ".second-move",
            start: "top top",
            bottom: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
        this.secondMoveTimeLine
          .to(
            this.room.position,
            {
              x: () => {
                return 1;
              },
              z: () => {
                return this.sizes.height * 0.0032;
              },
            },
            "same"
          )
          .to(
            this.room.scale,
            {
              x: 4 * 0.31,
              y: 4 * 0.31,
              z: 4 * 0.31,
            },
            "same"
          )
          .to(
            this.rectLight,
            {
              width: 3 * 2.5,
              height: 3 * 0.1,
            },
            "same"
          );
        // third section -------------------------------
        this.thirdMoveTimeLine = new gsap.timeline({
          scrollTrigger: {
            trigger: ".third-move",
            start: "top top",
            bottom: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        }).to(this.camera.orthographicCamera.position, {
          x: 2.1,
          y: 5.5,
        });
      },
      "(max-width: 968px)": () => {
        this.room.scale.set(0.17, 0.17, 0.17);
        this.room.position.set(0, 0, 0);
        // first section -------------------------------
        this.firstMoveTimeLine = new gsap.timeline({
          scrollTrigger: {
            trigger: ".first-move",
            start: "top top",
            bottom: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        }).to(this.room.scale, {
          x: 0.2,
          y: 0.2,
          z: 0.2,
        });
        // second section -------------------------------
        this.secondMoveTimeLine = new gsap.timeline({
          scrollTrigger: {
            trigger: ".second-move",
            start: "top top",
            bottom: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        })
          .to(
            this.room.scale,
            {
              x: 0.25,
              y: 0.25,
              x: 0.25,
            },
            "same"
          )
          .to(
            this.rectLight,
            {
              width: 2.5 / 2,
              height: 0.1 / 2,
            },
            "same"
          )
          .to(
            this.room.position,
            {
              x: 1,
            },
            "same"
          );
        // third section -------------------------------
        this.thirdMoveTimeLine = new gsap.timeline({
          scrollTrigger: {
            trigger: ".third-move",
            start: "top top",
            bottom: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
      },

      all: () => {
  // destop -------------------------------

    this.firstMoveTimeLine = new gsap.timeline({
      scrollTrigger: {
        trigger: ".first-move",
        start: "top top",
        bottom: "bottom bottom",
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    }).to(this.circleFirst.scale ,{
      x:3,
      y:3,
      z:3,
    })
    this.secondMoveTimeLine = new gsap.timeline({
      scrollTrigger: {
        trigger: ".first-move",
        start: "top top",
        bottom: "bottom bottom",
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    }).to(this.circleSecond.scale ,{
      x:3,
      y:3,
      z:3,
    })
    this.thirdMoveTimeLine = new gsap.timeline({
      scrollTrigger: {
        trigger: ".first-move",
        start: "top top",
        bottom: "bottom bottom",
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    }).to(this.circleThird.scale ,{
      x:3,
      y:3,
      z:3,
    });
  
    // second section -------------------------------
    this.secondMoveTimeLine = new gsap.timeline({
      scrollTrigger: {
        trigger: ".second-move",
        start: "top top",
        bottom: "bottom bottom",
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    });


        this.sections = document.querySelectorAll(".section");
        this.sections.forEach((section) => {
          this.progressWrapper = section.querySelector(".progress-wrapper");
          this.progressBar = section.querySelector(".progress-bar");
          if (section.classList.contains("right")) {
            gsap.to(section, {
              borderTopLeftRadius: 10,
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "top top",
                scrub: 0.6,
              },
            });
            gsap.to(section, {
              borderBottomLeftRadius: 700,
              scrollTrigger: {
                trigger: section,
                start: "bottom bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            });
          }else{
            gsap.to(section, {
              borderTopRightRadius: 10,
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "top top",
                scrub: 0.6,
              },
            });
            gsap.to(section, {
              borderBottomRightRadius: 700,
              scrollTrigger: {
                trigger: section,
                start: "bottom bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            });
          }
          gsap.from(this.progressBar, {
            scaleY: 0,
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.4,
              pin:this.progressWrapper,
              pinSpacing: false
            },
          })
        });
      },
    });
  }
  setSmoothScroll(){
this.asscroll= this.setupASScroll();
  }

 setupASScroll() {
  // https://github.com/ashthornton/asscroll
  const asscroll = new ASScroll({
    disableRaf: true });


  gsap.ticker.add(asscroll.update);

  ScrollTrigger.defaults({
    scroller: asscroll.containerElement });


  ScrollTrigger.scrollerProxy(asscroll.containerElement, {
    scrollTop(value) {
      if (arguments.length) {
        asscroll.currentPos = value;
        return;
      }
      return asscroll.currentPos;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    fixedMarkers: true });


  asscroll.on("update", ScrollTrigger.update);
  ScrollTrigger.addEventListener("refresh", asscroll.resize);

  requestAnimationFrame(() => {
    asscroll.enable({
      newScrollElements: document.querySelectorAll(".gsap-marker-start, .gsap-marker-end, [asscroll]") });

  });
  return asscroll;
}
  resize() {}
  update() {}
}
