$(function() {
    // Mobile Menu Toggle
    $(".menu-bars").on("click", function(e) {
      e.preventDefault();
      $(".menu-responsive").slideToggle("slow");
    });
  
    // Close menu when a link is clicked
    $(".menu-responsive a").on("click", function() {
      $(".menu-responsive").slideUp("slow");
    });
  
    // Smooth Scrolling
    $(".scroll").on("click", function(e) {
      e.preventDefault();
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top
      }, 1000);
    });
  
    // Updated Skill Bars Animation
    window.sr = ScrollReveal();
    sr.reveal('.skill', {
      interval: 100, // slight delay between each skill animation
      afterReveal: function(domEl) {
        const percent = $(domEl).find('.skills__percent').text();
        $(domEl).find('.progress-bar').css('width', percent);
      }
    });
  
    // Text Cycling Animation
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");
  
    const textArray = ["Front-end Developer", "Web Designer", "Problem Solver"];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 1500;
    let textArrayIndex = 0;
    let charIndex = 0;
  
    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        setTimeout(erase, newTextDelay);
      }
    }
  
    function erase() {
      if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay);
      }
    }
  
    // Start typing animation on page load
    document.addEventListener("DOMContentLoaded", function() {
      setTimeout(type, newTextDelay);
    });
  
    // Back to Top Button
    $(window).on("scroll", function() {
      if ($(this).scrollTop() > 300) {
        $(".back-to-top").addClass("show");
      } else {
        $(".back-to-top").removeClass("show");
      }
    });
  
    $(".back-to-top").on("click", function(e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 800);
    });
  
    // Dynamic Year in Footer
    document.getElementById("current-year").textContent = new Date().getFullYear();
  });