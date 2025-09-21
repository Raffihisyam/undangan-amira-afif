document.addEventListener("DOMContentLoaded", function () {
  // Logic untuk Halaman Sampul Pembuka
  const cover = document.getElementById('invitation-cover');
  const openBtn = document.getElementById('open-invitation-btn');
  const music = document.getElementById("background-music");

  openBtn.addEventListener('click', function() {
      // Sembunyikan sampul
      cover.classList.add('hidden');
      
      // Aktifkan scroll
      document.body.style.overflow = 'auto';

      // Putar musik
      music.play();
  });

  // Countdown Timer Logic
  const countdownDate = new Date("October 12, 2025 09:00:00").getTime();

  const countdownFunction = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText =
      hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText =
      minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText =
      seconds < 10 ? "0" + seconds : seconds;

    if (distance < 0) {
      clearInterval(countdownFunction);
      document.getElementById("countdown-timer").innerHTML =
        "<h3 style='font-family: Playfair Display, serif; font-size: 1.5rem; color: #B08968;'>Acara Telah Dimulai</h3>";
    }
  }, 1000);

  // Intersection Observer for fade-in animations
  const sections = document.querySelectorAll(".fade-in-section");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
