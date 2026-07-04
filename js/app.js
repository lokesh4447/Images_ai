// js/app.js
document.addEventListener("DOMContentLoaded", () => {
  // Application State
  let activeCategory = "all";
  let searchQuery = "";

  // Core Document Elements
  const galleryGrid = document.getElementById("gallery-grid");
  const searchInput = document.getElementById("search-input");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const closeModal = document.getElementById("close-modal");

  // 1. Dynamic Gallery Rendering Engine
  function renderGallery() {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = "";

    const filteredData = PROMPT_GALLERY.filter(item => {
      const matchesCategory = activeCategory === "all" || item.category.toLowerCase() === activeCategory.toLowerCase();
      const matchesSearch = item.title.toLowerCase().includes(searchQuery) || 
                            item.prompt.toLowerCase().includes(searchQuery) ||
                            item.category.toLowerCase().includes(searchQuery);
      return matchesCategory && matchesSearch;
    });

    if (filteredData.length === 0) {
      galleryGrid.innerHTML = `<p class="no-results">No prompts match your current search parameters.</p>`;
      return;
    }

    filteredData.forEach(item => {
      const card = document.createElement("div");
      card.className = "prompt-card";
      card.innerHTML = `
        <div class="card-image-wrapper">
          <img src="${item.imageUrl}" alt="${item.title}" class="card-img" loading="lazy">
          <div class="card-overlay">
            <button class="preview-btn" data-img="${item.imageUrl}">⚡ Full Preview</button>
          </div>
        </div>
        <div class="card-content">
          <span class="card-category">${item.category}</span>
          <h3 class="card-title">${item.title}</h3>
          <div class="prompt-box">
            <p class="prompt-text">${item.prompt}</p>
          </div>
          <div class="meta-specs">
            <span><strong>Style:</strong> ${item.style}</span>
            <span><strong>Ratio:</strong> ${item.aspectRatio}</span>
            <span><strong>Quality:</strong> ${item.quality}</span>
          </div>
          <button class="copy-btn" data-prompt="${item.prompt.replace(/"/g, '&quot;')}">Copy Prompt</button>
        </div>
      `;
      galleryGrid.appendChild(card);
    });

    attachCardInteractions();
  }

  // 2. Click-to-Copy Utility & Modal Triggers
  function attachCardInteractions() {
    document.querySelectorAll(".copy-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const textToCopy = btn.getAttribute("data-prompt");
        navigator.clipboard.writeText(textToCopy).then(() => {
          const defaultLabel = btn.innerText;
          btn.innerText = "✓ Prompt Copied Successfully!";
          btn.style.borderColor = "#10B981";
          btn.style.backgroundColor = "rgba(16, 185, 129, 0.1)";
          
          setTimeout(() => {
            btn.innerText = defaultLabel;
            btn.style.borderColor = "";
            btn.style.backgroundColor = "";
          }, 2000);
        });
      });
    });

    document.querySelectorAll(".preview-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        modalImg.src = btn.getAttribute("data-img");
        modal.classList.add("active");
      });
    });
  }

  // 3. Search Bar Input Handling
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderGallery();
  });

  // 4. Category Filtering Event Controls
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-category");
      renderGallery();
    });
  });

  // 5. Image Modal State Toggles
  closeModal.addEventListener("click", () => modal.classList.remove("active"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });

  // 6. Intersection Observer for Stats Counters
  const counters = document.querySelectorAll(".stat-counter");
  const observerOptions = { threshold: 0.5 };
  
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute("data-target"));
        let count = 0;
        const speed = 2000 / target; // Absolute animation duration threshold
        
        const updateCount = () => {
          const increment = Math.ceil(target / 50);
          if (count < target) {
            count += increment;
            if (count > target) count = target;
            counter.innerText = count + "+";
            setTimeout(updateCount, 30);
          }
        };
        updateCount();
        observer.unobserve(counter);
      }
    });
  }, observerOptions);

  counters.forEach(counter => counterObserver.observe(counter));

  // 7. Navbar Glassmorphic Scroll Trigger
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled-glow");
    } else {
      navbar.classList.remove("scrolled-glow");
    }
  });

  // 8. Mobile Navigation Burger Menu Controller
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-active");
      menuToggle.classList.toggle("is-open");
    });
  }

  // Initial Execution
  renderGallery();
});