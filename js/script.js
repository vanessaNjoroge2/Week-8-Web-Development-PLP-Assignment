document.addEventListener("DOMContentLoaded", () => {
  /* -----------------------------
     CONTACT FORM HANDLER
  ----------------------------- */
  const form = document.getElementById("contactForm");
  let formMessage = document.getElementById("formMessage");

  if (form && !formMessage) {
    formMessage = document.createElement("div");
    formMessage.id = "formMessage";
    form.insertAdjacentElement("afterend", formMessage);
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name")?.value.trim() || "";
      const email = document.getElementById("email")?.value.trim() || "";
      const subject = document.getElementById("subject")?.value.trim() || "";
      const message = document.getElementById("message")?.value.trim() || "";

      if (name && email && subject && message) {
        formMessage.innerHTML = `<p style="color: green; font-weight: bold;">✅ Thank you, ${name}! Your message has been sent.</p>`;
        form.reset();
      } else {
        formMessage.innerHTML = `<p style="color: red; font-weight: bold;">⚠️ Please fill in all fields.</p>`;
      }
    });
  }

  /* -----------------------------
     IMAGE CAROUSEL (Gallery Page)
  ----------------------------- */
  const container = document.querySelector(".carousel-container");
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let current = 0;

  if (container && slides.length > 0) {
    // Styling setup
    container.style.display = "flex";
    container.style.transition = "transform 0.5s ease-in-out";
    slides.forEach((slide) => {
      slide.style.minWidth = "100%";
      slide.style.boxSizing = "border-box";
    });

    function update() {
      container.style.transform = `translateX(-${current * 100}%)`;
    }

    // Button listeners
    prevBtn?.addEventListener("click", () => {
      current = (current - 1 + slides.length) % slides.length;
      update();
    });

    nextBtn?.addEventListener("click", () => {
      current = (current + 1) % slides.length;
      update();
    });

    // Auto-slide
    setInterval(() => {
      current = (current + 1) % slides.length;
      update();
    }, 5000);

    // Initialize
    update();
  }

  /* -----------------------------
     FAQ ACCORDION (About/Services Page)
  ----------------------------- */
  const faqs = document.querySelectorAll(".faq-question");
  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      const parent = faq.parentElement;
      parent.classList.toggle("active");

      faqs.forEach((otherFaq) => {
        if (otherFaq !== faq) otherFaq.parentElement.classList.remove("active");
      });
    });
  });
});
