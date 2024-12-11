import ImgScreenui from "~/media/images/screenui.png?jsx";
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PlayCanvas } from "~/components/playcanvas/PlayCanvas";

export default component$(() => {
  return (
    <main class="mt-10">
      <div class="container">
        <section class="flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-0">
          <section class="flex flex-col gap-10">
            {/* Bio */}
            <h1 class="max-w-[450px] text-[48px] font-medium leading-tight tracking-tighter text-[#5E5E5E]">
              Hello, I’m <span class="text-black">Nabin Dahal.</span> A{" "}
              <span class="text-black">creative developer</span> based in{" "}
              <span class="text-black">Toronto, ON</span>
            </h1>

            {/* Cta buttons */}
            <div class="flex flex-col gap-5 md:flex-row">
              <button class="shadow-inner-btn ease-cubic-in-out inline-flex h-14 items-center justify-center  gap-2.5  rounded-2xl bg-gradient-to-b from-white to-[#eaeff3] px-[19px] py-4 ">
                <div class=" text-xl">View Resume</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-up-right"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </button>

              <button class="shadow-inner-btn flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-b from-[#3257a5] to-[#6798e3] px-[19px] py-4 ">
                <div class="text-xl font-normal text-white">Get in touch</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-up-right"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </button>
            </div>
          </section>
          <section class="md:w-1/2">
            <PlayCanvas />
          </section>
        </section>

        {/* Works */}
        <section class="mt-10 flex flex-col gap-10">
          {/* Music App */}
          <div class=" group relative w-full overflow-hidden rounded-3xl border-2 border-[#e4e4e4]/50 bg-[#f6f6f6] shadow  backdrop-blur-[68.25px] hover:cursor-pointer">
            <div class="w-full overflow-hidden">
              <ImgScreenui
                alt="music app ux project"
                class="ease-cubic-in-out grayscale transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0"
              />
            </div>
            <section class="flex items-center justify-between p-5">
              <section class="flex flex-col gap-2 ">
                <h1 class=" ease-cubic-in-out text-2xl font-semibold duration-300 group-hover:ml-2">
                  Music App UI Design
                </h1>
                <h2 class=" text-xl ">Interactive Music App UI Design</h2>
              </section>
              <button class=" ease-cubic-in-out rounded-full  p-5 duration-300  group-hover:mr-2 group-hover:bg-[#5b8ad6] group-hover:text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-up-right"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </button>
            </section>
          </div>

          <div class=" group relative w-full overflow-hidden rounded-3xl border-2 border-[#e4e4e4]/50 bg-[#f6f6f6]  shadow backdrop-blur-[68.25px] hover:cursor-pointer">
            <div class="w-full overflow-hidden">
              {/* Insert lyric-video.mp4 here */}
              <video
                class="ease-cubic-in-out grayscale transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0"
                src="/videos/lyric-video.mp4"
                autoplay
                loop
                muted
              ></video>
            </div>
            <section class="flex items-center justify-between p-5">
              <section class="flex flex-col gap-2 ">
                <h1 class=" ease-cubic-in-out text-2xl font-semibold duration-300 group-hover:ml-2">
                  Lyric Video Motion Graphics
                </h1>
                <h2 class=" text-xl ">Animated Lyrical Video</h2>
              </section>
              <button class=" ease-cubic-in-out rounded-full  p-5 duration-300  group-hover:mr-2 group-hover:bg-[#5b8ad6] group-hover:text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-up-right"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </button>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Portfolio | Built using Qwik",
  meta: [
    {
      name: "description",
      content: "An interactive portfolio built using Qwik for the web.",
    },
  ],
};
