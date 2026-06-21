(function () {
    var STORAGE_KEY = "techwatch-lang";

    var MESSAGES = {
        en: {
            pageTitle: {
                index: "TechWatch | Smart Home Monitoring Platform",
                login: "Login — TechWatch",
                register: "Register — TechWatch",
                dashboard: "Dashboard — TechWatch"
            },
            meta: {
                brandHome: "TechWatch home",
                navMain: "Main",
                langGroup: "Language",
                testimonialsSlider: "Client reviews slider",
                starterFeatures: "Starter plan includes",
                standardFeatures: "Standard plan includes",
                completeFeatures: "Complete plan includes",
                dashboardNav: "Navigation",
                dashboardBrand: "Back to home",
                navMenuToggle: "Open site menu",
                navMenuClose: "Close site menu"
            },
            nav: {
                hero: "Hero",
                features: "Features",
                about: "About us",
                pricing: "Pricing",
                reviews: "Reviews",
                contact: "Contact",
                login: "Login",
                register: "Register"
            },
            hero: {
                eyebrow: "Smart home platform",
                title: "Take Control of Your Smart Home",
                subtitle: "Monitor, analyze, and optimize your home devices with real-time insights and smart dashboards.",
                cta: "Open the app",
                ctaSecondary: "Explore features",
                stat1Value: "Real-time",
                stat1Label: "Device monitoring",
                stat2Value: "24/7",
                stat2Label: "Smart alerts",
                stat3Value: "100%",
                stat3Label: "Cloud synced"
            },
            features: {
                eyebrow: "Why TechWatch",
                title: "Features",
                lead: "Everything you need to understand, organize, and optimize your connected home in one place.",
                coreTitle: "Core",
                coreP1: "Real-Time Monitoring",
                coreP2: "Track your devices and see what’s happening in your home instantly.",
                econTitle: "Economic Value",
                econP1: "Energy Consumption Insights",
                econP2: "Understand which devices consume the most energy and reduce unnecessary costs.",
                expTitle: "Experience",
                expP1: "Mobile control",
                expP2: "Access your home data anytime, anywhere from your smartphone",
                orgTitle: "Organization",
                orgP1: "Device and space management",
                orgP2: "Organize your devices by room and easily manage your home",
                secTitle: "Security",
                secP1: "Smart Alerts",
                secP2: "Get instant notifications when unusual activity is detected at home.",
                anaTitle: "Analytics",
                anaP1: "Actionable Dashboards",
                anaP2: "Transform household data into clear insights to make better daily decisions."
            },
            about: {
                eyebrow: "The team",
                title: "About us",
                lead: "UPC Software Engineering students building TechWatch",
                roleLuis: "Logic & backend-oriented",
                bioLuis: "Software Engineering student at UPC. C++, HTML, CSS, JavaScript, C#, Python, and Java. Backend structure and APIs.",
                roleAlex: "UI / UX & frontend-oriented",
                bioAlex: "Software Engineering student at UPC. C++, HTML, CSS, JavaScript, C#, Python, Java, and Flutter. Design and frontend for web and mobile.",
                roleRonal: "Logic & integration-oriented",
                bioRonal: "Software Engineering student at UPC. C++, HTML, CSS, and JavaScript. Clean integration with future frontend and backend.",
                roleBruno: "Logic & data-oriented",
                bioBruno: "Software Engineering student at UPC. C++, HTML, CSS, and JavaScript. Data flow and persistence.",
                namePlaceholder: "Nombre Apellido",
                roleMember: "Team member",
                bioMember: "Software Engineering student at UPC. C++, HTML, CSS, and JavaScript. Name pending. Same team and roadmap for TechWatch."
            },
            pricing: {
                eyebrow: "Plans",
                title: "Pricing",
                subtitle: "Plans that match how you use your smart home",
                popular: "Most popular",
                introHtml: "Three paid tiers in <strong>PEN</strong>. Choose the plan that fits how you use your smart home.",
                perMonth: "/ month",
                starterName: "Starter",
                starterTag: "Entry monitoring for a small set of devices and rooms.",
                starterBtn: "Choose Starter",
                starterLi1: "Core <strong>device management</strong> views",
                starterLi2: "<strong>Live status</strong> for a limited device count",
                starterLi3: "<strong>Room grouping</strong> for essentials",
                starterLi4: "<strong>7-day</strong> activity snapshot",
                starterLi5: "Email support (community tier)",
                standardName: "Standard",
                standardTag: "More history, alerts, and exports for active households.",
                standardBtn: "Choose Standard",
                standardLi1: "<strong>Everything in Starter</strong>, with a higher device cap",
                standardLi2: "<strong>Extended history</strong> for trends and comparisons",
                standardLi3: "<strong>Custom alerts</strong> for usage and offline events",
                standardLi4: "<strong>CSV-friendly exports</strong> for budgeting",
                standardLi5: "Faster support queue",
                completeName: "Complete",
                completeTag: "Full visibility, reporting, and priority access as we scale.",
                completeBtn: "Choose Complete",
                completeLi1: "<strong>Everything in Standard</strong>, top device tier at launch",
                completeLi2: "<strong>Long-range analytics</strong> and seasonal views",
                completeLi3: "<strong>Reports</strong> suitable for audits and optimisation",
                completeLi4: "<strong>Priority support</strong> and roadmap previews",
                completeLi5: "Early access to <strong>integrations</strong> as they ship"
            },
            testimonials: {
                eyebrow: "Testimonials",
                title: "What our clients say",
                lead: "Real comments from users who improved their daily smart-home experience with TechWatch.",
                rolePremium: "Premium customer",
                roleFree: "Free user",
                q1: "\"I can finally see which device is driving usage. In my first month I lowered my power bill without changing my whole routine.\"",
                q2: "\"The app is easy to use and the live dashboard helped me organize everything by room. Super clear and fast.\"",
                q3: "\"Smart alerts told me when a device stayed on all night. I avoided unnecessary usage right away.\"",
                q4: "\"I love the design and how simple everything looks. I used to struggle with my usage; now I can plan ahead every week.\"",
                q5: "\"TechWatch took me from a messy setup to controlling my home from my phone. Really useful day to day.\""
            },
            contact: {
                eyebrow: "Get in touch",
                title: "Contact Us",
                line1: "Have questions about TechWatch?",
                line2: "We’re here to help you manage your smart home more efficiently.",
                phName: "Friedrich Nietzsche",
                phEmail: "Nietzsche@techwatch",
                phMessage: "Your Message",
                send: "Send",
                illustrationAlt: "Support illustration"
            },
            footer: {
                copy: "© 2026 TechWatch. All rights reserved."
            },
            cta: {
                title: "Ready to take control?",
                subtitle: "Jump into the live dashboard and start managing your smart home today.",
                register: "Create free account",
                login: "Log in"
            },
            auth: {
                loginTitle: "Log in",
                registerTitle: "Create account",
                emailLabel: "Email",
                passwordLabel: "Password",
                fullNameLabel: "Full name",
                confirmPasswordLabel: "Confirm password",
                emailPlaceholder: "you@example.com",
                passwordPlaceholder: "••••••••",
                namePlaceholder: "Your name",
                submitLogin: "Log in",
                submitRegister: "Register",
                footerNoAccount: "No account?",
                footerRegister: "Register",
                footerHasAccount: "Already have an account?",
                footerLogin: "Log in"
            },
            dashboard: {
                topTag: "Dashboard",
                settings: "Settings",
                deviceMgmt: "Device Management",
                simulation: "Simulation",
                analytics: "Analytics",
                subscriptions: "Subscriptions",
                logout: "Log out",
                sidebarFoot: "© 2026 TechWatch",
                contentTitle: "Device Management",
                contentLead: "Manage rooms, devices, and pairing from this workspace.",
                cardTitle: "Devices",
                row1Name: "Living room hub",
                row2Name: "Kitchen sensor pack",
                row3Name: "Garage controller",
                statusOnline: "Online",
                statusSync: "Syncing",
                btnAdd: "Add device",
                btnRooms: "Edit rooms"
            }
        },
        es: {
            pageTitle: {
                index: "TechWatch | Smart Home Monitoring Platform",
                login: "Iniciar sesión — TechWatch",
                register: "Registro — TechWatch",
                dashboard: "Panel — TechWatch"
            },
            meta: {
                brandHome: "Inicio de TechWatch",
                navMain: "Principal",
                langGroup: "Idioma",
                testimonialsSlider: "Carrusel de opiniones",
                starterFeatures: "Incluye plan Starter",
                standardFeatures: "Incluye plan Standard",
                completeFeatures: "Incluye plan Complete",
                dashboardNav: "Navegación",
                dashboardBrand: "Volver al inicio",
                navMenuToggle: "Abrir menú del sitio",
                navMenuClose: "Cerrar menú del sitio"
            },
            nav: {
                hero: "Inicio",
                features: "Funciones",
                about: "Nosotros",
                pricing: "Precios",
                reviews: "Opiniones",
                contact: "Contacto",
                login: "Iniciar sesión",
                register: "Registrarse"
            },
            hero: {
                eyebrow: "Plataforma smart home",
                title: "Controla tu hogar inteligente",
                subtitle: "Monitorea, analiza y optimiza tus dispositivos con información en tiempo real y paneles claros.",
                cta: "Abrir la app",
                ctaSecondary: "Ver funciones",
                stat1Value: "Tiempo real",
                stat1Label: "Monitoreo de dispositivos",
                stat2Value: "24/7",
                stat2Label: "Alertas inteligentes",
                stat3Value: "100%",
                stat3Label: "Sincronizado en la nube"
            },
            features: {
                eyebrow: "Por qué TechWatch",
                title: "Funciones",
                lead: "Todo lo que necesitas para entender, organizar y optimizar tu hogar conectado en un solo lugar.",
                coreTitle: "Núcleo",
                coreP1: "Monitoreo en tiempo real",
                coreP2: "Sigue tus dispositivos y ve al instante qué ocurre en tu hogar.",
                econTitle: "Valor económico",
                econP1: "Consumo energético",
                econP2: "Identifica qué equipos gastan más y reduce costos innecesarios.",
                expTitle: "Experiencia",
                expP1: "Control móvil",
                expP2: "Accede a los datos de tu hogar cuando quieras, desde el móvil.",
                orgTitle: "Organización",
                orgP1: "Dispositivos y espacios",
                orgP2: "Agrupa por habitaciones y gestiona tu hogar con orden.",
                secTitle: "Seguridad",
                secP1: "Alertas inteligentes",
                secP2: "Recibe avisos ante actividad inusual en casa.",
                anaTitle: "Analítica",
                anaP1: "Paneles accionables",
                anaP2: "Convierte los datos del hogar en decisiones cotidianas más claras."
            },
            about: {
                eyebrow: "El equipo",
                title: "Nosotros",
                lead: "Estudiantes de Ingeniería de Software en la UPC construyendo TechWatch",
                roleLuis: "Lógica y backend",
                bioLuis: "Estudiante de Ingeniería de Software en la UPC. C++, HTML, CSS, JavaScript, C#, Python y Java. Estructura de backend y APIs.",
                roleAlex: "UI / UX y frontend",
                bioAlex: "Estudiante de Ingeniería de Software en la UPC. C++, HTML, CSS, JavaScript, C#, Python, Java y Flutter. Diseño y frontend web y móvil.",
                roleRonal: "Lógica e integración",
                bioRonal: "Estudiante de Ingeniería de Software en la UPC. C++, HTML, CSS y JavaScript. Integración ordenada con futuro frontend y backend.",
                roleBruno: "Lógica y datos",
                bioBruno: "Estudiante de Ingeniería de Software en la UPC. C++, HTML, CSS y JavaScript. Flujo de datos y persistencia.",
                namePlaceholder: "Nombre Apellido",
                roleMember: "Miembro del equipo",
                bioMember: "Estudiante de Ingeniería de Software en la UPC. C++, HTML, CSS y JavaScript. Nombre pendiente. Mismo equipo y hoja de ruta de TechWatch."
            },
            pricing: {
                eyebrow: "Planes",
                title: "Precios",
                subtitle: "Planes según cómo usas tu hogar inteligente",
                popular: "Más popular",
                introHtml: "Tres niveles de pago en <strong>PEN</strong>. Elige el plan que encaje con cómo usas tu hogar inteligente.",
                perMonth: "/ mes",
                starterName: "Starter",
                starterTag: "Monitoreo inicial para pocos dispositivos y habitaciones.",
                starterBtn: "Elegir Starter",
                starterLi1: "Vistas básicas de <strong>gestión de dispositivos</strong>",
                starterLi2: "<strong>Estado en vivo</strong> con límite de dispositivos",
                starterLi3: "<strong>Agrupación por habitación</strong> esencial",
                starterLi4: "Resumen de actividad de <strong>7 días</strong>",
                starterLi5: "Soporte por correo (comunidad)",
                standardName: "Standard",
                standardTag: "Más historial, alertas y exportaciones para hogares activos.",
                standardBtn: "Elegir Standard",
                standardLi1: "<strong>Todo lo de Starter</strong>, con más cupo de dispositivos",
                standardLi2: "<strong>Historial ampliado</strong> para tendencias y comparaciones",
                standardLi3: "<strong>Alertas personalizadas</strong> por uso y desconexiones",
                standardLi4: "<strong>Exportaciones CSV</strong> para presupuesto",
                standardLi5: "Cola de soporte más rápida",
                completeName: "Complete",
                completeTag: "Visibilidad completa, informes y prioridad al crecer.",
                completeBtn: "Elegir Complete",
                completeLi1: "<strong>Todo lo de Standard</strong>, máximo nivel de dispositivos al lanzamiento",
                completeLi2: "<strong>Analítica de largo plazo</strong> y vistas estacionales",
                completeLi3: "<strong>Informes</strong> para auditoría y optimización",
                completeLi4: "<strong>Soporte prioritario</strong> y adelantos de roadmap",
                completeLi5: "Acceso anticipado a <strong>integraciones</strong> nuevas"
            },
            testimonials: {
                eyebrow: "Opiniones",
                title: "Lo que dicen nuestros usuarios",
                lead: "Comentarios de quienes mejoraron su día a día con hogar inteligente y TechWatch.",
                rolePremium: "Cliente Premium",
                roleFree: "Usuario gratuito",
                q1: "\"Por fin veo qué dispositivo concentra el consumo. En el primer mes bajé la luz sin cambiar toda mi rutina.\"",
                q2: "\"La app es fácil y el panel en vivo me ayudó a ordenar todo por habitaciones. Muy claro y rápido.\"",
                q3: "\"Las alertas me avisaron cuando un equipo quedó encendido toda la noche. Evité gasto al instante.\"",
                q4: "\"Me encanta el diseño y lo simple que se ve todo. Antes no entendía mis consumos; ahora planifico cada semana.\"",
                q5: "\"Pasé del desorden a controlar la casa desde el móvil. Muy útil en el día a día.\""
            },
            contact: {
                eyebrow: "Escríbenos",
                title: "Contáctanos",
                line1: "¿Tienes dudas sobre TechWatch?",
                line2: "Te ayudamos a gestionar tu hogar inteligente con más eficiencia.",
                phName: "Friedrich Nietzsche",
                phEmail: "Nietzsche@techwatch",
                phMessage: "Tu mensaje",
                send: "Enviar",
                illustrationAlt: "Ilustración de soporte"
            },
            footer: {
                copy: "© 2026 TechWatch. Todos los derechos reservados."
            },
            cta: {
                title: "¿Listo para tomar el control?",
                subtitle: "Entra al panel en vivo y empieza a gestionar tu hogar inteligente hoy.",
                register: "Crear cuenta gratis",
                login: "Iniciar sesión"
            },
            auth: {
                loginTitle: "Iniciar sesión",
                registerTitle: "Crear cuenta",
                emailLabel: "Correo",
                passwordLabel: "Contraseña",
                fullNameLabel: "Nombre completo",
                confirmPasswordLabel: "Confirmar contraseña",
                emailPlaceholder: "tu@correo.com",
                passwordPlaceholder: "••••••••",
                namePlaceholder: "Tu nombre",
                submitLogin: "Entrar",
                submitRegister: "Registrarse",
                footerNoAccount: "¿No tienes cuenta?",
                footerRegister: "Registrarse",
                footerHasAccount: "¿Ya tienes cuenta?",
                footerLogin: "Iniciar sesión"
            },
            dashboard: {
                topTag: "Panel",
                settings: "Ajustes",
                deviceMgmt: "Gestión de dispositivos",
                simulation: "Simulación",
                analytics: "Analítica",
                subscriptions: "Suscripciones",
                logout: "Cerrar sesión",
                sidebarFoot: "© 2026 TechWatch",
                contentTitle: "Gestión de dispositivos",
                contentLead: "Gestiona habitaciones, dispositivos y emparejado desde este espacio.",
                cardTitle: "Dispositivos",
                row1Name: "Hub sala de estar",
                row2Name: "Pack sensores cocina",
                row3Name: "Control garaje",
                statusOnline: "En línea",
                statusSync: "Sincronizando",
                btnAdd: "Añadir dispositivo",
                btnRooms: "Editar habitaciones"
            }
        }
    };

    function getLocale() {
        var stored = localStorage.getItem(STORAGE_KEY);
        if (stored === "en" || stored === "es") return stored;
        return "en";
    }

    function setLocale(lang) {
        if (MESSAGES[lang]) localStorage.setItem(STORAGE_KEY, lang);
    }

    function lookup(lang, key) {
        var parts = key.split(".");
        var cur = MESSAGES[lang];
        for (var i = 0; i < parts.length; i++) {
            if (!cur || typeof cur !== "object") return null;
            cur = cur[parts[i]];
        }
        return typeof cur === "string" ? cur : null;
    }

    function t(key) {
        var lang = getLocale();
        return lookup(lang, key) || lookup("en", key) || key;
    }

    function applyI18n() {
        var lang = getLocale();
        document.documentElement.lang = lang;

        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            var key = el.getAttribute("data-i18n");
            if (!key) return;
            var val = t(key);
            el.textContent = val;
        });

        document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
            var key = el.getAttribute("data-i18n-html");
            if (!key) return;
            el.innerHTML = t(key);
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
            var key = el.getAttribute("data-i18n-placeholder");
            if (!key) return;
            el.setAttribute("placeholder", t(key));
        });

        document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
            var key = el.getAttribute("data-i18n-aria");
            if (!key) return;
            el.setAttribute("aria-label", t(key));
        });

        document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
            var key = el.getAttribute("data-i18n-alt");
            if (!key) return;
            el.setAttribute("alt", t(key));
        });

        var page = document.body.getAttribute("data-page");
        if (page && MESSAGES[lang].pageTitle && MESSAGES[lang].pageTitle[page]) {
            document.title = MESSAGES[lang].pageTitle[page];
        }

        document.querySelectorAll(".lang-switch .lang-btn[data-lang]").forEach(function (btn) {
            var active = btn.getAttribute("data-lang") === lang;
            btn.classList.toggle("lang-btn--active", active);
        });

        if (typeof window.TechWatchNavDrawerSync === "function") {
            window.TechWatchNavDrawerSync();
        }
    }

    function bindLangSwitch() {
        document.querySelectorAll(".lang-switch .lang-btn[data-lang]").forEach(function (btn) {
            btn.addEventListener("click", function () {
                var lang = btn.getAttribute("data-lang");
                if (!MESSAGES[lang]) return;
                setLocale(lang);
                applyI18n();
            });
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        applyI18n();
        bindLangSwitch();
    });

    window.TechWatchI18n = { apply: applyI18n, getLocale: getLocale, setLocale: setLocale, t: t };
})();
