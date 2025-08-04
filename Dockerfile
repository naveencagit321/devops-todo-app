# Stage 1: Use a lightweight web server
FROM nginx:stable-alpine

# Stage 2: Copy your app's files into the web server's public folder
COPY . /usr/share/nginx/html

# Stage 3: Tell Docker that the container will listen on port 80
EXPOSE 80

# Stage 4: The command to start the web server when the container runs
CMD ["nginx", "-g", "daemon off;"]