document.addEventListener("DOMContentLoaded", function () {

  const sections = document.querySelectorAll("h1, h2, h3");
  const tocLinks = document.querySelectorAll(".toc-box a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {

        if (entry.isIntersecting) {
          const id = entry.target.id;
          
          tocLinks.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + id) {
              link.classList.add("active");
            }
          });

        }

      });
    },
    {
      rootMargin: "-40% 0px -50% 0px"
    }
  );

  sections.forEach(section => {
    if (section.id) {
      observer.observe(section);
    }
  });

});
