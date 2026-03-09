document.addEventListener("DOMContentLoaded", function () {

  const tocLinks = Array.from(document.querySelectorAll(".toc-box a"));

  const sections = tocLinks
    .map((link) => {
      const id = link.getAttribute("href")?.replace("#", "");
      const el = id ? document.getElementById(id) : null;
      return el ? { id, el, link } : null;
    })
    .filter(Boolean);

  function setActiveLink() {

    const scrollY = window.scrollY + 1;
    const offset = 260;

    let currentSection = sections[0];

    sections.forEach((section) => {
      if (section.el.offsetTop - offset <= scrollY) {
        currentSection = section;
      }
    });

    /* activate last section near page bottom */
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 600) {
      currentSection = sections[sections.length - 1];
    }

    tocLinks.forEach((link) => link.classList.remove("active"));

    if (currentSection) {
      currentSection.link.classList.add("active");
    }
  }

  window.addEventListener("scroll", setActiveLink);
  window.addEventListener("resize", setActiveLink);

  setActiveLink();

});
