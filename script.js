document.addEventListener("DOMContentLoaded", () => {

    const title = document.querySelector(".hero h1");

    if (title) {

        title.style.opacity = "0";
        title.style.transform = "translateY(20px)";

        setTimeout(() => {

            title.style.transition = "1s ease";
            title.style.opacity = "1";
            title.style.transform = "translateY(0)";

        }, 250);

    }

});
