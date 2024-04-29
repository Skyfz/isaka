import AOS from "aos";

export function aosInit() {
    AOS.init({
        offset: 80,
        duration: 600,
        easing: 'ease-out-cubic',
        delay: 200,
        once: false,
        mirror: true,
      });
}