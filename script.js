const form = document.querySelector(".lead-form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("상담 신청 기능은 연락처 정보가 확정되면 연결할 수 있습니다.");
});
