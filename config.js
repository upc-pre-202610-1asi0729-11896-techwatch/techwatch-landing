(function () {
    // Punto único de configuración de la Web Application (Frontend desplegado en Railway).
    // Lo consumen los CTA del Landing Page (app.js) y las páginas puente
    // login.html / register.html / dashboard.html.
    var WEB_APP_BASE_URL = "https://techwatch-frontend-production.up.railway.app";

    window.TechWatchConfig = {
        baseUrl: WEB_APP_BASE_URL,
        login: WEB_APP_BASE_URL + "/login",
        register: WEB_APP_BASE_URL + "/register",
        dashboard: WEB_APP_BASE_URL + "/dashboard"
    };
})();
