document.addEventListener("DOMContentLoaded", function () {
    const zoomDiv = document.getElementById("zoomDiv");

    zoomDiv.addEventListener("mouseenter", function () {
        zoomDiv.style.transform = "scale(1.05)";
    });

    zoomDiv.addEventListener("mouseleave", function () {
        zoomDiv.style.transform = "scale(1)";
    });
});
