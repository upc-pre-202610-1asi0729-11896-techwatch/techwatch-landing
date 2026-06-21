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

    function i18nText(key, fallback) {
        if (window.TechWatchI18n && typeof window.TechWatchI18n.t === "function") {
            return window.TechWatchI18n.t(key);
        }
        return fallback;
    }

    // Formulario de contacto (landing estático, sin backend): limpia los campos
    // y muestra una confirmacion breve para dar la sensacion de envio.
    function wireContactForm() {
        var section = document.querySelector(".section-contact");
        if (!section) return;
        var btn = section.querySelector(".contact-send");
        if (!btn) return;

        btn.addEventListener("click", function () {
            section.querySelectorAll("input, textarea").forEach(function (field) {
                field.value = "";
            });

            btn.disabled = true;
            btn.textContent = i18nText("contact.sent", "Sent ✓");

            setTimeout(function () {
                btn.disabled = false;
                btn.textContent = i18nText("contact.send", "Send");
            }, 2000);
        });
    }

    function init() {
        wireLinks();
        wireContactForm();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
