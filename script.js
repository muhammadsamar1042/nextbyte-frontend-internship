document.addEventListener("DOMContentLoaded", function () {
    const headerTitle = document.querySelector("header h1");
    if (headerTitle) {
        headerTitle.style.cursor = "pointer";
        headerTitle.addEventListener("click", function () {
            alert("Welcome to NextByte Studio Internship Project!");
        });
    }

    const listItems = document.querySelectorAll("#services li");
    listItems.forEach(function (item) {
        item.style.cursor = "pointer";
        item.addEventListener("click", function () {
            alert("Selected Focus Area: " + item.textContent);
        });
    });
});
