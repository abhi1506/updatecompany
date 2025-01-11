# Use an official Node.js image that also includes Nginx
FROM node:20-alpine

# Install Nginx
RUN apk add --no-cache nginx

# Set working directory for the React app
WORKDIR /app/web

# Copy package.json and install dependencies for the React app
COPY web/package*.json ./
RUN npm install

# Copy the rest of the files and build the React app
COPY web/ .

# Increase memory limit for the build process
RUN NODE_OPTIONS="--max-old-space-size=4096" npm run build

# Set working directory for the backend
WORKDIR /app/company-portal

# Copy package.json and install dependencies for the backend
COPY company-portal/package*.json ./
RUN npm install

# Copy the rest of the files for the backend
COPY company-portal/ .

# Copy Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose ports
EXPOSE 80 8080

# Start Nginx and the Node.js backend
CMD ["sh", "-c", "nginx && node /app/company-portal/server.js"]
