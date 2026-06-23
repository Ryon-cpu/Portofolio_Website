function halo() {
    alert("Halo! Selamat Datang Di Portofolio Ryon Ozora");
}
function openImage() {
    document.getElementById("imageModal").style.display = "flex";
}
function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}
function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    alert("Link berhasil disalin!");
}