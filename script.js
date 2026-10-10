
document.addEventListener("DOMContentLoaded", () => {
  console.log("NEXUS ESTATES: sistema iniciado.");

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const destino = link.getAttribute("href");

      if (!destino || destino === "#") return;

      const secao = document.querySelector(destino);

      if (!secao) return;

      event.preventDefault();

      secao.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
});
