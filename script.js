const header = document.querySelector("[data-header]");
const accordionItems = document.querySelectorAll(".accordion-item");

const syncHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 40);
};

accordionItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.parentElement
      ?.querySelectorAll(".accordion-item")
      .forEach((sibling) => sibling.classList.remove("is-active"));
    item.classList.add("is-active");
  });
});

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });
