import { component$, useVisibleTask$, useSignal } from "@builder.io/qwik";
import Matter, {
  Engine,
  Render,
  Runner,
  Composites,
  Bodies,
  World,
  MouseConstraint,
  Mouse,
  Composite,
  Body,
} from "matter-js";
import "matter-wrap";
import { measureText } from "./textUtils.js";

declare module "matter-js" {
  interface IBodyRenderOptions {
    custom?: {
      text?: string;
    };
  }
}

const TEXT_PADDING = 30;
const FONT_SIZE = 16;

// Function to measure text width
const calculateBoxWidth = (text: string): number => {
  const textWidth = measureText(text, `${FONT_SIZE}px Arial`);
  return textWidth + TEXT_PADDING * 2;
};

// Function to create an image body
const createImageBody = (x: number, y: number, imageUrl: string): Body => {
  const width = 70; // Image width
  const height = 100; // Image height

  const body = Bodies.circle(x, y, width, {
    restitution: 0.1,
    friction: 0.1,
    render: {
      sprite: {
        texture: imageUrl, // Path to the image or GIF
        xScale: 0.1, // Scale the image on X-axis
        yScale: 0.1, // Scale the image on Y-axis
      },
    },
  });

  return body;
};

export const PlayCanvas = component$(() => {
  const containerRef = useSignal<HTMLDivElement>();

  useVisibleTask$(({ cleanup }) => {
    if (!containerRef.value) return;

    const engine = Engine.create();
    const world = engine.world;
    const render = Render.create({
      element: containerRef.value,
      engine: engine,
      options: {
        width: 580,
        pixelRatio: 2,
        height: 350,
        wireframes: false,
        background: "transparent",
      },
    });

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    const texts = [
      { text: "UX" },
      { text: "UI" },
      { text: "Design" },
      { text: "Motion" },
      { text: "3D" },
      { text: "Web" },
      { text: "VFX" },
      { text: "Create" },
    ];

    // Create text bodies
    const createTextBody = (x: number, y: number, text: string): Body => {
      const width = calculateBoxWidth(text);
      const height = 50;

      const body = Bodies.rectangle(x, y, width, height, {
        restitution: 0.6,
        friction: 0.1,
        chamfer: { radius: 20 },
        render: {
          lineWidth: 1,
          strokeStyle: "transparent",
          fillStyle: "#5B8AD6",
        } as Matter.IBodyRenderOptions & { custom: { text: string } },
      });

      body.render.custom = { text };
      return body;
    };

    const textBodies = texts.map((config, i) =>
      createTextBody(100 + i * 60, 50, config.text),
    );

    // Create random shapes
    const createRandomShape = (x: number, y: number) => {
      const shapes = ["rectangle", "circle", "plus"];
      const type = shapes[Math.floor(Math.random() * shapes.length)];

      switch (type) {
        case "rectangle":
          const rectWidth = Math.random() * 40 + 20;
          const rectHeight = rectWidth;
          return Bodies.rectangle(x, y, rectWidth, rectHeight, {
            restitution: 0.6,
            friction: 0.1,
            render: {
              fillStyle: "transparent",
              strokeStyle: "#5B8AD6",
              lineWidth: 1,
            },
          });
        case "circle":
          const radius = Math.random() * 30 + 10;
          return Bodies.circle(x, y, radius, {
            restitution: 0.6,
            friction: 0.1,
            render: {
              fillStyle: "transparent",
              strokeStyle: "#5B8AD6",
              lineWidth: 1,
            },
          });
        case "plus": {
          const partWidth = Math.random() * 40 + 20;
          const radius = partWidth / 2;

          const partA = Bodies.rectangle(x, y, partWidth, 10, {
            render: {
              fillStyle: "transparent",
              strokeStyle: "#5B8AD6",
              lineWidth: 1,
            },
          });
          const partB = Bodies.circle(x, y, radius, {
            render: {
              fillStyle: "transparent",
              strokeStyle: "#5B8AD6",
              lineWidth: 1,
            },
          });
          return Body.create({
            parts: [partA, partB],
            restitution: 0.6,
            friction: 0.1,
          });
        }
        default:
          const defaultWidth = Math.random() * 50 + 30;
          const defaultHeight = Math.random() * 30 + 30;
          return Bodies.rectangle(x, y, defaultWidth, defaultHeight);
      }
    };

    const shapesStack = Composites.stack(0, 100, 10, 10, 20, 10, (x, y) =>
      createRandomShape(x, y),
    );

    // Create bodies and add them to the world
    Composite.add(world, [
      Bodies.rectangle(0, 0, 1200, 20, {
        isStatic: true,
        render: { fillStyle: "transparent" },
      }),
      Bodies.rectangle(290, 360, 590, 20, {
        isStatic: true,
        render: { fillStyle: "#000000" },
      }),
      Bodies.rectangle(0, 175, 20, 350, {
        isStatic: true,
        render: { fillStyle: "transparent" },
      }),
      Bodies.rectangle(580, 175, 20, 350, {
        isStatic: true,
        render: { fillStyle: "transparent" },
      }),
      ...textBodies,
      shapesStack,
      createImageBody(200, 100, "/images/photo.png"), // Add an image
    ]);

    // Mouse control for interaction
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });
    Composite.add(world, mouseConstraint);

    render.mouse = mouse;

    // Set the render view area
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 580, y: 350 },
    });

    // Custom render function for displaying text on bodies
    Matter.Events.on(render, "afterRender", () => {
      const context = render.context;
      context.font = "16px Arial";
      context.letterSpacing = "0.5px";
      context.textAlign = "center";
      context.fillStyle = "white";

      Composite.allBodies(world).forEach((body) => {
        if (body.render.custom && body.render.custom.text) {
          const { x, y } = body.position;
          const angle = body.angle;

          context.save();
          context.translate(x, y);
          context.rotate(angle);

          context.fillText(body.render.custom.text, 0, 5);
          context.restore();
        }
      });
    });

    cleanup(() => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
    });
  });

  return (
    <div class="relative overflow-hidden rounded-xl border border-gray-300">
      <div class="flex items-center justify-between bg-[#F0F6FF] p-4">
        <div class=" flex gap-2  ">
          <div class="h-4 w-4 rounded-full bg-[#D22E2E]"></div>
          <div class="h-4 w-4 rounded-full bg-[#E5AC18]"></div>
          <div class="h-4 w-4 rounded-full bg-[#04D300]"></div>
        </div>

        <p class="font-['TinyMono'] font-thin text-gray-400">
          profile_simulation.exe
        </p>
      </div>

      <div ref={containerRef} class="h-[350px] w-full" />
      <div class="absolute -bottom-[20] left-1/2 -z-10 -translate-x-1/2 blur">
        <svg
          width="399"
          height="55"
          viewBox="0 0 399 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M398.328 54.6959C398.328 24.7374 374.042 0.451233 344.084 0.451233H54.5469C24.5884 0.451233 0.302277 24.7374 0.302277 54.6959V54.6959H398.328V54.6959Z"
            fill="#D3E4FF"
          />
        </svg>
      </div>
    </div>
  );
});
