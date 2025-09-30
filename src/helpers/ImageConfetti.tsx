import { useRef, useImperativeHandle, forwardRef } from "react";

// Import your SVGs
import a from "../assets/images/bg/a.svg";
import b from "../assets/images/bg/b.svg";
import c from "../assets/images/bg/c.svg";
import d from "../assets/images/bg/d.svg";
import e from "../assets/images/bg/e.svg";
import f from "../assets/images/bg/f.svg";


// type SpawnSide = "left" | "right";

const ConfettiCanvas = forwardRef((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const confettiRef = useRef<Confetti[]>([]);
  const isRunning = useRef(false); // prevent multiple triggers
  const NUM_CONFETTI = 70;

  const imagePaths: string[] = [a, b, c, d, e, f];
  const confettiImages: HTMLImageElement[] = imagePaths.map((path) => {
    const img = new Image();
    img.src = path;
    return img;
  });

  function range(a: number, b: number): number {
    return (b - a) * Math.random() + a;
  }

  class Confetti {
    img: HTMLImageElement;
    size: number;
    w: number;
    h: number;
    opacity: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    rotation: number;
    rotationSpeed: number;

    constructor(imgs: HTMLImageElement[], w: number, h: number) {
      this.img = imgs[Math.floor(range(0, imgs.length))];
      this.size = range(20, 40);
      this.w = w;
      this.h = h;
      this.opacity = 1;
      this.x = range((w/2-200),(w / 2+200));
      this.y = range(-50, -10); // start slightly above screen
      this.vx = range(-1, 1); // horizontal drift
      this.vy = range(1, 14); // downward speed
      this.rotation = range(0, 360);
      this.rotationSpeed = range(-1, 1);
    }

    draw(ctx: CanvasRenderingContext2D) {
      this.x += this.vx;
      this.y += this.vy;
      this.rotation += this.rotationSpeed;

      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.globalAlpha = this.opacity;
      ctx.drawImage(this.img, -this.size / 2, -this.size / 2, this.size, this.size);
      ctx.restore();
    }
  }

  const startConfetti = () => {
    if (isRunning.current) return; // prevent multiple triggers
    isRunning.current = true;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create confetti
    confettiRef.current = Array.from({ length: NUM_CONFETTI }, () =>
      new Confetti(confettiImages, canvas.width, canvas.height)
    );

    const duration = 2000; // active falling time
    const fadeDuration = 1000; // fade out time
    const endTime = Date.now() + duration;
    let frameId: number;

    const frame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();
      const fadeRatio = now > endTime ? Math.max(0, 1 - (now - endTime) / fadeDuration) : 1;

      confettiRef.current.forEach((c) => {
        c.opacity = fadeRatio; // gradual fade
        c.draw(ctx);
      });

      if (fadeRatio > 0) {
        frameId = requestAnimationFrame(frame);
      } else {
        // animation finished
        confettiRef.current = [];
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(frameId);
        isRunning.current = false;
      }
    };

    frame();

    // cleanup
    return () => {
      isRunning.current = false;
      if (frameId) cancelAnimationFrame(frameId);
      confettiRef.current = [];
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  };

  useImperativeHandle(ref, () => ({
    startConfetti,
  }));

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        zIndex: 20,
      }}
    />
  );
});

export default ConfettiCanvas;
