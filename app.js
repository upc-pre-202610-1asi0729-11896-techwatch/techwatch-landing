(function () {
    // Conecta los call-to-action del Landing Page con la Web Application.
    // Cada elemento con [data-tw-link="login|register|dashboard"] se resuelve
    // contra window.TechWatchConfig y redirige a la vista correspondiente.
    var config = window.TechWatchConfig || {};

    function resolveTarget(key) {
        return config[key] || config.baseUrl || "#";
    }

    function wireLinks() {
        var links = document.querySelectorAll("[data-tw-link]");
        links.forEach(function (el) {
            var key = el.getAttribute("data-tw-link");
            var url = resolveTarget(key);

            if (el.tagName === "A") {
                // Enlace real: permite abrir en pestaña nueva, copiar URL, etc.
                el.setAttribute("href", url);
                return;
            }

            el.addEventListener("click", function (e) {
                e.preventDefault();
                window.location.href = url;
            });
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", wireLinks);
    } else {
        wireLinks();
    }
})();
