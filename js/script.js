
particlesJS.load('particles-div', './js/particles.json', function () {
  console.log('callback - particles.js config loaded');
});

particlesJS.load('info', './js/particles2.json', function () {
  console.log('callback - particles.js config loaded');
});

particlesJS.load('container', './js/particles3.json', function () {
  console.log('callback - particles.js config loaded');
});

setTimeout(() => {
  $("body, html").css("overflow-y", "auto");
}, 0);

const viewSkillMap = (e) => {
  e.style.display = 'none';
  $("#skilltext").css("display", "block").addClass("animate__animated animate__fadeInUp");
  $("#skillMap").css("display", "block").addClass("animate__animated animate__fadeIn");

  const ctx = document.getElementById('skillMap');
  const myChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['HTML', 'CSS', 'PHP', 'Javascript', 'MySQL'],
      datasets: [{
        data: [9, 8, 6, 7, 6],
        fill: true,
        backgroundColor: 'rgba(255, 101, 47, .5)',
        borderColor: '#ff652f',
        pointBorderColor: '#ff652f',
        borderWidth: 2
      }]
    },
    options: {
      plugins: {
        legend: false
      },
      elements: {
        line: {
          borderWidth: 3
        },
      },
      scales: {
        r: {
          pointLabels: {
            color: 'white'
          },
          beginAtZero: true,
          angleLines: {
            color: 'white'
          },
          grid: {
            color: 'white'
          }
        },
      }
    }
  });
}

$(".list-items").click(function (e) {
  let selected = $(this);
  $("#close-menu").click();

  if (!selected.hasClass("active")) {
    $(".list-items").removeClass("active");
    $(".list-items").css("color", "white");

    if (selected.attr("id") == "list-hello") {
      selected.css("color", "#14a76c");
    } else if (selected.attr("id") == "list-skills") {
      selected.css("color", "#ff652f");
    } else if (selected.attr("id") == "list-resume") {
      selected.css("color", "#66fcf1");
    } else if (selected.attr("id") == "list-contact") {
      selected.css("color", "#bc0c21");
    }
    selected.addClass("active");
  }
});

$('html, body').on('scroll', function() {
  let helloRect = document.querySelector('#hello').getBoundingClientRect();
  let skillsRect = document.querySelector('#about').getBoundingClientRect();
  let resumeRect = document.querySelector('#education').getBoundingClientRect();
  let contactRect = document.querySelector('#contact').getBoundingClientRect();
  
  if(skillsRect.y > 0 || helloRect.y == 0) {
    $(".list-items").removeClass("active");
    $(".list-items").css("color", "white");
    $('#list-hello').css('color', '#14a76c');
  }

  if(skillsRect.y <= 0) {
    $(".list-items").removeClass("active");
    $(".list-items").css("color", "white");
    $('#list-skills').css('color', '#ff652f');
  }

  if(resumeRect.y <= 0) {
    $(".list-items").removeClass("active");
    $(".list-items").css("color", "white");
    $('#list-resume').css('color', '#66fcf1');
  }

  if(contactRect.y < window.innerHeight) {
    $(".list-items").removeClass("active");
    $(".list-items").css("color", "white");
    $('#list-contact').css('color', '#bc0c21');
  }
});

$("#resume").click(function () {
  window.open("./assets/Resume.pdf", "_blank");
});

$("#facebook").click(function () {
  window.open("https://www.facebook.com/therealtsuki/", "_blank");
});

$("#twitter").click(function () {
  window.open("https://twitter.com/therealtsuki/", "_blank");
});

$("#insta").click(function () {
  window.open("https://www.instagram.com/winantsuki/", "_blank");
});

$("#linkedin").click(function () {
  window.open("https://www.linkedin.com/in/weinnandhasanion/", "_blank");
});

$("#open-menu").click(function() {
  $("#list-div").removeClass("animate__slideOutUp").addClass("animate__slideInDown");
  $("#list-div").css("display", "block");
});

$("#close-menu").click(function() {
  $("#list-div").removeClass("animate__slideOutUp").addClass("animate__slideOutUp");
  setTimeout(() => {
    $("#list-div").css("display", "none");
  }, 500);
});