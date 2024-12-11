import { component$ } from "@builder.io/qwik";

export const NavBar = component$(() => {
  return (
    <header class="container sticky top-0 z-50   flex justify-center">
      <nav class=" mt-5 flex w-full items-center justify-between rounded-xl border bg-slate-300/60 px-9 py-5 text-[20px] tracking-normal backdrop-blur-md md:gap-9">
        <a href="/">
          <svg
            width="24"
            height="21"
            viewBox="0 0 53 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M51.9992 2.23337C52.2289 1.53009 52.3437 1.17844 52.1585 0.97033C51.9734 0.762214 51.6108 0.835263 50.8855 0.98136L33.7107 4.44112C33.4431 4.49502 33.3093 4.52198 33.2119 4.60774C33.1144 4.6935 33.0707 4.82278 32.9833 5.08135L26.6629 23.7743C26.5773 24.0276 26.5345 24.1543 26.5582 24.2794C26.582 24.4046 26.6683 24.5067 26.8408 24.711L34.1355 33.3478C35.2594 34.675 37.0138 35.2971 38.727 34.9653C40.4403 34.6335 41.8246 33.3893 42.3728 31.7165L51.9992 2.23337Z"
              fill="#3257A5"
            />
            <path
              d="M51.9992 2.23337C52.2289 1.53009 52.3437 1.17844 52.1585 0.97033C51.9734 0.762214 51.6108 0.835263 50.8855 0.98136L33.7107 4.44112C33.4431 4.49502 33.3093 4.52198 33.2119 4.60774C33.1144 4.6935 33.0707 4.82278 32.9833 5.08135L26.6629 23.7743C26.5773 24.0276 26.5345 24.1543 26.5582 24.2794C26.582 24.4046 26.6683 24.5067 26.8408 24.711L34.1355 33.3478C35.2594 34.675 37.0138 35.2971 38.727 34.9653C40.4403 34.6335 41.8246 33.3893 42.3728 31.7165L51.9992 2.23337Z"
              fill="url(#paint0_linear_4_21)"
            />
            <path
              d="M1.00257 46.3652C0.77285 47.0691 0.657992 47.421 0.843317 47.6291C1.02864 47.8372 1.3915 47.7638 2.11721 47.6169L19.2642 44.1456C19.5314 44.0915 19.665 44.0644 19.7623 43.9787C19.8596 43.893 19.9033 43.7638 19.9906 43.5055L26.3111 24.8121C26.3968 24.5587 26.4396 24.4321 26.4158 24.3069C26.392 24.1817 26.3057 24.0796 26.1331 23.8753L18.8934 15.3076C17.7558 13.9666 15.9877 13.3445 14.2745 13.6763C12.5613 14.0081 11.1495 15.2661 10.6013 16.9527L1.00257 46.3652Z"
              fill="url(#paint1_linear_4_21)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4_21"
                x1="39.5014"
                y1="0.653076"
                x2="39.5014"
                y2="35.0532"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3257A5" />
                <stop offset="1" stop-color="#6798E3" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_4_21"
                x1="13.4864"
                y1="13.5885"
                x2="13.4864"
                y2="47.947"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3257A5" />
                <stop offset="1" stop-color="#6798E3" />
              </linearGradient>
            </defs>
          </svg>
        </a>

        <button class="block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
        <div class="hidden gap-5 md:flex ">
          <a href="/">About</a>
          <a href="/about">Work</a>
          <a href="/contact">Playground</a>
        </div>
      </nav>
    </header>
  );
});
