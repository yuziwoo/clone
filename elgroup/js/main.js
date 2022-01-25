window.addEventListener("DOMContentLoaded", (e) => {
  let section_01 = document.getElementsByClassName("section_01")[0];
  let section_01_slide = document.getElementsByClassName("section_01_slide")[0];
  let section_01_slide_tab_list = document.getElementsByClassName("slide_tab_list");
  let section_01_left = document.getElementsByClassName("section_01_left")[0];
  let section_01_right = document.getElementsByClassName("section_01_right")[0];
  let section_01_slide_number = 2;
  let section_01_direction = "none";
  let section_01_moving = false;

  let section_01_reset = () => {
    section_01_slide.style.transition = "none";
    section_01_slide.style.transform = "translateX(0px)";

    if (section_01_slide_number == 1) {
      section_01_slide.style.left = "-400vw";
      section_01_slide_number = 5;
      section_01_slide_tab_list[3].classList.add("slide_tab_active");
    } else if (section_01_slide_number == 2) {
      section_01_slide.style.left = "-100vw";
      section_01_slide_tab_list[0].classList.add("slide_tab_active");
    } else if (section_01_slide_number == 3) {
      section_01_slide.style.left = "-200vw";
      section_01_slide_tab_list[1].classList.add("slide_tab_active");
    } else if (section_01_slide_number == 4) {
      section_01_slide.style.left = "-300vw";
      section_01_slide_tab_list[2].classList.add("slide_tab_active");
    } else if (section_01_slide_number == 5) {
      section_01_slide.style.left = "-400vw";
      section_01_slide_tab_list[3].classList.add("slide_tab_active");
    } else if (section_01_slide_number == 6) {
      section_01_slide.style.left = "-100vw";
      section_01_slide_number = 2;
      section_01_slide_tab_list[0].classList.add("slide_tab_active");
    }

    section_01_moving = false;
  }

  let section_01_move = () => {
    if (section_01_direction == "left") {
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(100vw)";
    } else if (section_01_direction == "right") {
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(-100vw)";
    }
  }

  let section_01_tab_reset = () => {
    for (let i=0; i<section_01_slide_tab_list.length; i++) {
      section_01_slide_tab_list[i].classList.remove("slide_tab_active");
    }
  }

  let section_01_left_move = () => {
    section_01_direction = "left";
    if (section_01_slide_number == 2 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 1;
      section_01_move();
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);

    } else if (section_01_slide_number == 3 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 2;
      section_01_move();
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);

    } else if (section_01_slide_number == 4 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 3;
      section_01_move();
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);

    } else if (section_01_slide_number == 5 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 4;
      section_01_move();
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    }
  }

  let section_01_right_move = () => {
    section_01_direction = "right";
    if (section_01_slide_number == 2 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 3;
      section_01_move();
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);

    } else if (section_01_slide_number == 3 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 4;
      section_01_move();
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);

    } else if (section_01_slide_number == 4 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 5;
      section_01_move();
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);

    } else if (section_01_slide_number == 5 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 6;
      section_01_move();
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    }
  }

  // 버튼 클릭 이벤트

  section_01_left.addEventListener("click", section_01_left_move) // click 종료
  section_01_right.addEventListener("click", section_01_right_move) // click 종료


  // tab 클릭 이벤트

  section_01_slide_tab_list[0].addEventListener("click", () => {
    if (section_01_slide_number == 3 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 2;
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(100vw)";
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    } else if (section_01_slide_number == 4 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 2;
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(200vw)";
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    } else if (section_01_slide_number == 5 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 2;
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(300vw)";
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    }
  })

  section_01_slide_tab_list[1].addEventListener("click", () => {
    if (section_01_slide_number == 4 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 3;
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(100vw)";
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    } else if (section_01_slide_number == 5 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 3;
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(200vw)";
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    } else if (section_01_slide_number == 2 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 3;
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(-100vw)";
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    }
  })

  section_01_slide_tab_list[2].addEventListener("click", () => {
    if (section_01_slide_number == 5 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 4;
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(100vw)";
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    } else if (section_01_slide_number == 2 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 4;
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(-200vw)";
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    } else if (section_01_slide_number == 3 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 4;
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(-100vw)";
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    }
  })

  section_01_slide_tab_list[3].addEventListener("click", () => {
    if (section_01_slide_number == 2 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 5;
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(-300vw)";
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    } else if (section_01_slide_number == 3 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 5;
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(-200vw)";
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    } else if (section_01_slide_number == 4 && !section_01_moving) {
      section_01_moving = true;
      section_01_slide_number = 5;
      section_01_slide.style.transition = "transform 0.4s";
      section_01_slide.style.transform = "translateX(-100vw)";
      section_01_tab_reset();
      setTimeout(section_01_reset, 400);
    }
  })

  let touching = false;
  let touchX = [0, 0];

  section_01.addEventListener("mousedown", (e) => {
    touching = true;
    touchX[0] = e.pageX;
  }, false);

  section_01.addEventListener("mousemove", (e) => {
    if (touching) {
      touchX[1] = e.pageX;
      section_01_slide.style.transform = `translateX(${touchX[1] - touchX[0]}px)`;

      if (touchX[1] > touchX[0] && Math.abs(touchX[1] - touchX[0]) >= window.innerWidth / 5) {
        touching = false;
        section_01_left_move();
        touchX[0] = 0;
        touchX[1] = 0;
      } else if (touchX[1] < touchX[0]  && Math.abs(touchX[1] - touchX[0]) >= window.innerWidth / 5) {
        touching = false;
        section_01_right_move();
        touchX[0] = 0;
        touchX[1] = 0;
      }
    }
  });

  section_01.addEventListener("mouseleave", (e) => {
    if (touching) {
      touchX[1] = e.pageX;
      section_01_slide.style.transform = `translateX(${touchX[1] - touchX[0]}px)`;
      if (Math.abs(touchX[1] - touchX[0]) < window.innerWidth / 5) {
        section_01_slide.style.transition = "transform 0.4s";
        section_01_slide.style.transform = "translateX(0px)";
        setTimeout(section_01_reset, 400);
        touchX[0] = 0;
        touchX[1] = 0;
      }
    }
    touching = false;
  });

  section_01.addEventListener("mouseup", (e) => {
    if (touching) {
      if (Math.abs(touchX[1] - touchX[0]) < window.innerWidth / 5) {
        section_01_slide.style.transition = "transform 0.4s";
        section_01_slide.style.transform = "translateX(0px)";
        setTimeout(section_01_reset, 400);
        touchX[0] = 0;
        touchX[1] = 0;
      } else if (touchX[1] > touchX[0]) {
        section_01_left_move();
        touchX[0] = 0;
        touchX[1] = 0;
      } else if (touchX[1] < touchX[0]) {
        section_01_right_move();
        touchX[0] = 0;
        touchX[1] = 0;
      }
    }
    touching = false;
  });


  // touch 버전

  section_01.addEventListener("touchstart", (e) => {
    touching = true;
    touchX[0] = e.targetTouches[0].pageX;
  }, false);

  section_01.addEventListener("touchmove", (e) => {
    if (touching) {
      touchX[1] = e.targetTouches[0].pageX;
      section_01_slide.style.transform = `translateX(${touchX[1] - touchX[0]}px)`;

      if (touchX[1] > touchX[0] && Math.abs(touchX[1] - touchX[0]) >= window.innerWidth / 5) {
        touching = false;
        section_01_left_move();
        touchX[0] = 0;
        touchX[1] = 0;
      } else if (touchX[1] < touchX[0]  && Math.abs(touchX[1] - touchX[0]) >= window.innerWidth / 5) {
        touching = false;
        section_01_right_move();
        touchX[0] = 0;
        touchX[1] = 0;
      }
    }
  });

  section_01.addEventListener("touchend", (e) => {
    if (touching) {
      if (Math.abs(touchX[1] - touchX[0]) < window.innerWidth / 5) {
        section_01_slide.style.transition = "transform 0.4s";
        section_01_slide.style.transform = "translateX(0px)";
        setTimeout(section_01_reset, 400);
        touchX[0] = 0;
        touchX[1] = 0;
      } else if (touchX[1] > touchX[0]) {
        section_01_left_move();
        touchX[0] = 0;
        touchX[1] = 0;
      } else if (touchX[1] < touchX[0]) {
        section_01_right_move();
        touchX[0] = 0;
        touchX[1] = 0;
      }
    }
    touching = false;
  });


  // scrolling 이벤트

  let event_turn = [];
  for (let i=0; i<10; i++) {
    event_turn.push(false);
  }
  let section_02 = document.getElementsByClassName("section_02")[0];
  let section_02_title = document.getElementsByClassName("section_title")[0];
  let section_02_content = document.getElementsByClassName("section_02_content");

  let scrolling_main = (e) => {
    if (document.documentElement.scrollTop + window.innerHeight - 100 >= section_02.offsetTop && !event_turn[0]) {
      event_turn[0] = true;
      section_02_title.style.opacity = 1;
      section_02_title.style.transform = "translateY(0px)";
    }
    if (document.documentElement.scrollTop + window.innerHeight - 50 >= section_02_content[0].offsetTop && !event_turn[1]) {
      event_turn[1] = true;
      section_02_content[0].style.opacity = 1;
      section_02_content[0].style.transform = "translateY(0px)";
    }
    if (document.documentElement.scrollTop + window.innerHeight - 50 >= section_02_content[1].offsetTop && !event_turn[2]) {
      event_turn[2] = true;
      section_02_content[1].style.opacity = 1;
      section_02_content[1].style.transform = "translateY(0px)";
    }
    if (document.documentElement.scrollTop + window.innerHeight - 50 >= section_02_content[2].offsetTop && !event_turn[3]) {
      event_turn[3] = true;
      section_02_content[2].style.opacity = 1;
      section_02_content[2].style.transform = "translateY(0px)";
    }
    if (document.documentElement.scrollTop + window.innerHeight - 50 >= section_02_content[3].offsetTop && !event_turn[4]) {
      event_turn[4] = true;
      section_02_content[3].style.opacity = 1;
      section_02_content[3].style.transform = "translateY(0px)";
    }
    if (document.documentElement.scrollTop + window.innerHeight - 50 >= section_02_content[4].offsetTop && !event_turn[5]) {
      event_turn[5] = true;
      section_02_content[4].style.opacity = 1;
      section_02_content[4].style.transform = "translateY(0px)";
    }
  } //scrolling end

  scrolling_main();
  document.addEventListener("scroll", scrolling_main);
  window.addEventListener("resize", scrolling_main);

}); // 전체 종료
