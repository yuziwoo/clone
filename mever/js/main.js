window.addEventListener("DOMContentLoaded", (e) => {
  let main_bg1 = document.getElementsByClassName("main_bg1")[0];
  let main_bg2 = document.getElementsByClassName("main_bg2")[0];
  let main_bg3 = document.getElementsByClassName("main_bg3")[0];

  let main_person = document.getElementsByClassName("main_person")[0];

  let vh100 = document.getElementsByClassName("section_01")[0].offsetHeight;
  let section_01_event = document.getElementsByClassName("section_01_event");
  section_01_event[0].classList.add("active");

  let section_02 = document.getElementsByClassName("section_02")[0];
  let section_02_event = document.getElementsByClassName("section_02_event");

  let section_03 = document.getElementsByClassName("section_03")[0];
  main_bg3.style.top = `${section_03.offsetTop}px`;

  let section_video = document.getElementsByClassName("section_video");

  let section_04 = document.getElementsByClassName("section_04")[0];
  let section_04_opacity = 0.2;

  let section_05 = document.getElementsByClassName("section_05")[0];

  let scroll_fn = (e) => {
    main_bg1.style.backgroundPosition = `center ${-window.scrollY / 5}px`;
    main_bg2.style.backgroundPosition = `center ${-window.scrollY / 2}px`;

    if (window.scrollY >= vh100 / 4 * 3) {
      if (!main_person.classList.contains("main_person_active")) {
        main_person.classList.add("main_person_active")
      }
    }

    if (window.scrollY + vh100 / 4 * 3 >= section_02.offsetTop + section_02_event[0].offsetTop) {
      if (!section_02_event[0].classList.contains("active")) {
        section_02_event[0].classList.add("active")
      }
    }
    if (window.scrollY + vh100 / 4 * 3 >= section_02.offsetTop + section_02_event[1].offsetTop) {
      if (!section_02_event[1].classList.contains("active")) {
        section_02_event[1].classList.add("active")
      }
    }

    for (let i=0; i<section_video.length; i++) {
      if (window.scrollY + vh100 / 4 * 3  >= section_video[i].offsetTop + 500) {
        if (!section_video[i].classList.contains("section_video_active")) {
          section_video[i].classList.add("section_video_active");
        }
      }
    }

    if (window.scrollY + vh100 >= section_04.offsetTop) {
      section_04_opacity = (window.scrollY + vh100 - section_04.offsetTop) / 3000;
      if (section_04_opacity >= 1) {
        section_04_opacity = 1;
      }
      main_person.style.transform = `scale(${1 - section_04_opacity})`;
    }

    if (window.scrollY >= section_05.offsetTop) {
      if (!section_05.classList.contains("section_05_active")) {
        section_05.classList.add("section_05_active")
      }
    }
  }// 함수 종료

  scroll_fn(e);

  window.addEventListener("scroll", (e) => {
    scroll_fn(e);
  })

  window.addEventListener("resize", () => {
    main_bg3.style.top = `${section_03.offsetTop}px`;

    scroll_fn(e);
  })

});
