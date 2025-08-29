
  // 1) Your existing scroll-to-card on submit
  function handleSearch(event) {
    event.preventDefault();
    const input = document.getElementById("searchInput")
                       .value.trim()
                       .toLowerCase();

    const validServices = ["cleaning","gardening","catering","plumbing","electrical","teaching","mechanical", "capentry","transport","painting", "delivery"];

    if (validServices.includes(input)) {
      const target = document.getElementById(input);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        target.classList.add("highlight");
        setTimeout(()=> target.classList.remove("highlight"), 1500);
      }
    } else {
      alert("Service not found. Try: cleaning, gardening, catering, plumbing, teaching, painting or electrical.");
    }
  }

  // 2) Live-filter cards as you type
  const inputEl = document.getElementById("searchInput");
  const cards   = document.querySelectorAll("#services .card");
  inputEl.addEventListener("input", () => {
    const q = inputEl.value.trim().toLowerCase();

    cards.forEach(card => {
      const title = card.querySelector(".card-title")
                        .textContent
                        .toLowerCase();
      const wrapper = card.parentElement; // the .col- wrapper

      if (q === "" || title.includes(q)) {
        wrapper.style.display = "";
        card.classList.add("highlight");
        setTimeout(() => card.classList.remove("highlight"), 300);
      } else {
        wrapper.style.display = "none";
      }
    });
  });

  // 3) Reset button to clear everything
  const resetBtn = document.getElementById("resetBtn");
  resetBtn.addEventListener("click", () => {
    inputEl.value = "";
    cards.forEach(card => card.parentElement.style.display = "");
    inputEl.focus();
  });
