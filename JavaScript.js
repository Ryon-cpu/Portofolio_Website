function openImage() {
    const modal = document.getElementById("imageModal");

    if (modal) {
        modal.style.display = "flex";
    }
}

function closeImage() {
    const modal = document.getElementById("imageModal");

    if (modal) {
        modal.style.display = "none";
    }
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href)
        .then(() => {
            alert("Link berhasil disalin!");
        })
        .catch(() => {
            alert("Gagal menyalin link!");
        });
}

window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");

    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeImage();
    }
});

window.addEventListener("click", (event) => {
    const modal = document.getElementById("imageModal");

    if (event.target === modal) {
        closeImage();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("Portofolio Ryon Ozora berhasil dimuat.");
});
