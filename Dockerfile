## Build Stage
# Pull base image
FROM node:lts-alpine as build-stage
# Clone git repo
RUN git clone https://github.com/Riverbend-High-School/rhs-mesial-dashboard.git /app
# Set the working directory
WORKDIR /app
# Run dependency install
RUN npm install
# Run Vue Build
RUN npm run build

## Production Stage
# Pull base image
FROM nginx:stable-alpine as production-stage
# Copy build to NGINX directory
COPY --from=build-stage /app/dist /usr/share/nginx/html
# Expose web http port
EXPOSE 80
# NGINX start command
CMD ["nginx", "-g", "daemon off;"]