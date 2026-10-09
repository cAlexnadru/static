/* ==========================================================================
   Alexandru-Tudor Chiujdea — Portfolio
   Application Logic
   ========================================================================== */

(function () {
  "use strict";

  /* ---- Theme ---- */
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });

  /* ---- Section Collapse ---- */
  window.toggleSection = function (buttonElement) {
    const isExpanded = buttonElement.getAttribute("aria-expanded") === "true";
    buttonElement.setAttribute("aria-expanded", !isExpanded);
    const contentId = buttonElement.getAttribute("aria-controls");
    const contentElement = document.getElementById(contentId);
    if (!isExpanded) {
      contentElement.classList.remove("collapsed-content");
    } else {
      contentElement.classList.add("collapsed-content");
    }
  };

  /* ---- Scroll-reveal ---- */
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".fade-in-section").forEach((section) => {
    observer.observe(section);
  });

  /* ---- Responsive back-button label ---- */
  const backText = document.getElementById("desktop-back-text");
  function updateBackText() {
    if (backText) {
      backText.style.display = window.innerWidth > 550 ? "inline" : "none";
    }
  }
  updateBackText();
  window.addEventListener("resize", updateBackText);

  /* ---- Build flat project list from config ---- */
  const allProjects = [
    ...projectsConfig.concepts,
    ...projectsConfig.useCases,
  ];

  /* ---- Dynamically render project list items ---- */
  function renderProjectList() {
    const conceptsContainer = document.getElementById("concepts-list");
    const useCasesContainer = document.getElementById("usecases-list");

    projectsConfig.concepts.forEach((p) => {
      conceptsContainer.appendChild(createProjectButton(p));
    });

    projectsConfig.useCases.forEach((p) => {
      useCasesContainer.appendChild(createProjectButton(p));
    });
  }

  function createProjectButton(project) {
    const btn = document.createElement("button");
    btn.className = "list-item project-link";
    btn.setAttribute("data-id", project.id);
    btn.setAttribute("aria-label", `View ${project.title} project`);
    btn.innerHTML = `
      <div class="item-left">
        <span class="item-title">${project.title}</span>
        <span class="item-desc">${project.description}</span>
      </div>
      <span class="item-meta">${project.meta}</span>
    `;
    btn.addEventListener("click", () => {
      const index = allProjects.findIndex((p) => p.id === project.id);
      openProject(index);
    });
    return btn;
  }

  renderProjectList();

  /* ---- Project Detail View ---- */
  let currentProjectIndex = 0;
  const homeView = document.getElementById("home-view");
  const projectView = document.getElementById("project-view");
  const breadcrumbTitle = document.getElementById("breadcrumb-title");

  function openProject(index) {
    currentProjectIndex = index;
    renderProject();
    homeView.style.display = "none";
    projectView.style.display = "block";
    window.scrollTo(0, 0);
    breadcrumbTitle.focus();
  }

  window.closeProject = function () {
    projectView.style.display = "none";
    homeView.style.display = "block";
    window.scrollTo(0, 0);
    const previousProjectBtn = document.querySelector(
      `.project-link[data-id="${allProjects[currentProjectIndex].id}"]`
    );
    if (previousProjectBtn) previousProjectBtn.focus();
  };

  window.navigateProject = function (direction) {
    const newIndex = currentProjectIndex + direction;
    if (newIndex >= 0 && newIndex < allProjects.length) {
      currentProjectIndex = newIndex;
      renderProject();
      window.scrollTo(0, 0);
      breadcrumbTitle.focus();
    }
  };

  function renderProject() {
    const project = allProjects[currentProjectIndex];
    breadcrumbTitle.textContent = project.title;
    document.getElementById("project-body-content").innerHTML = project.html;

    const prevBtn = document.getElementById("nav-prev");
    const nextBtn = document.getElementById("nav-next");

    if (currentProjectIndex > 0) {
      prevBtn.style.visibility = "visible";
      document.getElementById("nav-prev-title").textContent =
        allProjects[currentProjectIndex - 1].title;
      prevBtn.setAttribute(
        "aria-label",
        `Previous Project: ${allProjects[currentProjectIndex - 1].title}`
      );
    } else {
      prevBtn.style.visibility = "hidden";
    }

    if (currentProjectIndex < allProjects.length - 1) {
      nextBtn.style.visibility = "visible";
      document.getElementById("nav-next-title").textContent =
        allProjects[currentProjectIndex + 1].title;
      nextBtn.setAttribute(
        "aria-label",
        `Next Project: ${allProjects[currentProjectIndex + 1].title}`
      );
    } else {
      nextBtn.style.visibility = "hidden";
    }

    attachImageModalTriggers();
  }

  /* ---- Image Modal Lightbox Logic ---- */
  const modal = document.getElementById("image-modal");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modalClose = document.getElementById("modal-close");
  const modalImg = document.getElementById("modal-image");
  const modalCaption = document.getElementById("modal-caption");
  const modalStage = document.getElementById("modal-stage");
  const zoomInBtn = document.getElementById("modal-zoom-in");
  const zoomOutBtn = document.getElementById("modal-zoom-out");
  const zoomResetBtn = document.getElementById("modal-zoom-reset");
  const zoomLevelLabel = document.getElementById("modal-zoom-level");

  let zoomScale = 1;
  let translateX = 0;
  let translateY = 0;
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let lastTapTime = 0;
  let initialPinchDistance = null;
  let initialScaleOnPinch = 1;

  function updateTransform() {
    modalImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${zoomScale})`;
    zoomLevelLabel.textContent = `${Math.round(zoomScale * 100)}%`;
  }

  function resetZoom() {
    zoomScale = 1;
    translateX = 0;
    translateY = 0;
    updateTransform();
  }

  function setZoom(newScale) {
    zoomScale = Math.min(Math.max(newScale, 0.75), 4);
    if (zoomScale <= 1) {
      translateX = 0;
      translateY = 0;
    }
    updateTransform();
  }

  function openImageModal(src, alt, captionText) {
    modalImg.src = src;
    modalImg.alt = alt || "Case study image preview";
    modalCaption.textContent = captionText || alt || "";
    resetZoom();
    modal.hidden = false;
    // Trigger transition next frame
    requestAnimationFrame(() => {
      modal.classList.add("is-open");
      document.body.classList.add("modal-open");
      modalClose.focus();
    });
  }

  function closeImageModal() {
    modal.classList.remove("is-open");
    document.body.classList.remove("modal-open");
    setTimeout(() => {
      modal.hidden = true;
      modalImg.src = "";
      resetZoom();
    }, 250);
  }

  function attachImageModalTriggers() {
    const projectImages = document.querySelectorAll(".project-body img");
    projectImages.forEach((img) => {
      img.setAttribute("role", "button");
      img.setAttribute("tabindex", "0");
      img.setAttribute("aria-label", "Click to enlarge image");

      img.onclick = () => {
        const figure = img.closest("figure");
        const caption = figure ? figure.querySelector("figcaption") : null;
        openImageModal(img.src, img.alt, caption ? caption.textContent : "");
      };

      img.onkeydown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          img.click();
        }
      };
    });
  }

  /* Modal Event Listeners */
  modalClose.addEventListener("click", closeImageModal);
  modalBackdrop.addEventListener("click", closeImageModal);

  zoomInBtn.addEventListener("click", () => setZoom(zoomScale + 0.35));
  zoomOutBtn.addEventListener("click", () => setZoom(zoomScale - 0.35));
  zoomResetBtn.addEventListener("click", resetZoom);

  // Wheel zoom
  modalStage.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 0.2 : -0.2;
      setZoom(zoomScale + delta);
    },
    { passive: false }
  );

  // Drag pan
  modalStage.addEventListener("mousedown", (e) => {
    if (zoomScale <= 1 && e.target !== modalImg) return;
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    modalStage.classList.add("is-dragging");
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    updateTransform();
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
    modalStage.classList.remove("is-dragging");
  });

  // Double click / tap to toggle zoom
  modalImg.addEventListener("click", (e) => {
    e.stopPropagation();
    if (zoomScale > 1) {
      resetZoom();
    } else {
      setZoom(2);
    }
  });

  // Touch support for pinch zoom and drag
  modalStage.addEventListener(
    "touchstart",
    (e) => {
      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        initialPinchDistance = Math.hypot(dx, dy);
        initialScaleOnPinch = zoomScale;
      } else if (e.touches.length === 1) {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTapTime;
        if (tapLength < 300 && tapLength > 0) {
          // Double tap
          e.preventDefault();
          if (zoomScale > 1) {
            resetZoom();
          } else {
            setZoom(2);
          }
        } else {
          isDragging = true;
          startX = e.touches[0].clientX - translateX;
          startY = e.touches[0].clientY - translateY;
        }
        lastTapTime = currentTime;
      }
    },
    { passive: false }
  );

  modalStage.addEventListener(
    "touchmove",
    (e) => {
      if (e.touches.length === 2 && initialPinchDistance) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const distance = Math.hypot(dx, dy);
        const factor = distance / initialPinchDistance;
        setZoom(initialScaleOnPinch * factor);
      } else if (e.touches.length === 1 && isDragging && zoomScale > 1) {
        e.preventDefault();
        translateX = e.touches[0].clientX - startX;
        translateY = e.touches[0].clientY - startY;
        updateTransform();
      }
    },
    { passive: false }
  );

  modalStage.addEventListener("touchend", () => {
    isDragging = false;
    initialPinchDistance = null;
  });

  // Keyboard controls
  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("is-open")) return;
    if (e.key === "Escape") {
      closeImageModal();
    } else if (e.key === "+" || e.key === "=") {
      setZoom(zoomScale + 0.35);
    } else if (e.key === "-" || e.key === "_") {
      setZoom(zoomScale - 0.35);
    } else if (e.key === "0") {
      resetZoom();
    }
  });
})();

