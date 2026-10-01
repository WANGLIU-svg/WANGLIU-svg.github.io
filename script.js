const currentPage = document.body.dataset.page;
if (currentPage) {
  const currentNav = document.querySelector(`[data-nav="${currentPage}"]`);
  if (currentNav) currentNav.setAttribute("aria-current", "page");
}
