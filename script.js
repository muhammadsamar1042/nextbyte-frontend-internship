// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("#contact form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Form ko page reload hone se rokna

            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();

            if (name === "" || email === "") {
                alert("Please fill in all fields before submitting!");
            } else {
                alert(`Thank you, ${name}! Your message has been received successfully.`);
                contactForm.reset(); // Form clear karna
            }
        });
    }
});