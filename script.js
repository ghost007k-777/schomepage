const form = document.querySelector(".lead-form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("상담 신청 기능은 연락처 정보가 확정되면 연결할 수 있습니다.");
});

const routeTabs = document.querySelectorAll(".route-tab");
const routePanels = document.querySelectorAll(".route-panel");

routeTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const route = tab.dataset.route;

    routeTabs.forEach((item) => item.classList.toggle("active", item === tab));
    routePanels.forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.routePanel === route);
    });
  });
});
