(function () {
    var mq = window.matchMedia("(max-width: 640px)");

    function getHeader() {
        return document.querySelector("header.header");
    }

    function getToggle() {
        return document.querySelector(".nav-menu-toggle");
    }

    function getBackdrop() {
        return document.querySelector("header.header .nav-menu-backdrop");
    }

    function isOpen() {
        var h = getHeader();
        return !!(h && h.classList.contains("nav-drawer-open"));
    }

    function syncToggleAria() {
        var btn = getToggle();
        if (!btn || !window.TechWatchI18n) return;
        var open = isOpen();
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        var key = open ? "meta.navMenuClose" : "meta.navMenuToggle";
        btn.setAttribute("aria-label", window.TechWatchI18n.t(key));
    }

    function setOpen(open) {
        var h = getHeader();
        var bd = getBackdrop();
        if (!h) return;
        h.classList.toggle("nav-drawer-open", open);
        document.body.classList.toggle("nav-drawer-lock", open);
        if (bd) {
            bd.hidden = !open;
            bd.setAttribute("aria-hidden", open ? "false" : "true");
        }
        var btn = getToggle();
        if (btn) btn.classList.toggle("nav-menu-toggle--open", open);
        syncToggleAria();
    }

    function close() {
        setOpen(false);
    }

    function toggle() {
        if (!mq.matches) return;
        setOpen(!isOpen());
    }

    function onResize() {
        if (!mq.matches) close();
    }

    document.addEventListener("DOMContentLoaded", function () {
        var header = getHeader();
        var btn = getToggle();
        var bd = getBackdrop();
        if (!header || !btn) return;

        btn.addEventListener("click", function (e) {
            e.stopPropagation();
            toggle();
        });
        if (bd) {
            bd.addEventListener("click", function () {
                close();
            });
        }

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") close();
        });

        header.querySelectorAll(".navbar-links .nav-link").forEach(function (a) {
            a.addEventListener("click", function () {
                if (mq.matches) close();
            });
        });

        window.addEventListener("resize", onResize);
        mq.addEventListener("change", onResize);

        syncToggleAria();
    });

    window.TechWatchNavDrawerSync = syncToggleAria;
})();
