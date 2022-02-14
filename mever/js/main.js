window.addEventListener("DOMContentLoaded", (e) => {
  let main_bg1 = document.getElementsByClassName("main_bg1")[0];
  let main_bg2 = document.getElementsByClassName("main_bg2")[0];

  window.addEventListener("scroll", (e) => {
    main_bg1.style.backgroundPosition = `center ${-window.scrollY / 5}px`;
    main_bg2.style.backgroundPosition = `center ${-window.scrollY / 2}px`;
  })
});
