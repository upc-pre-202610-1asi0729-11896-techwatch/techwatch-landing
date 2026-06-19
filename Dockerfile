# Dockerfile for techwatch-landing (static HTML/CSS/JS)
# Serves the static landing page with nginx. No build step is required.
# Version: 1.0
# Maintainer: TechWatch Development Team

FROM nginx:1.27-alpine AS runtime
# nginx config listening on 8080 (Railway's default target port)
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy only the static site assets (not infra files) into the web root
COPY *.html *.css *.js /usr/share/nginx/html/
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
