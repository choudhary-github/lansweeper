# Stage 1: Build the React application
#FROM node:16.16.0-alpine AS build
FROM node:20.16.0-alpine AS build

# Set working directory
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json ./
RUN npm install --legacy-peer-deps


# Add app source code
COPY . ./

# Build the app and list directory contents for debugging
RUN npm run build && ls -al /app && ls -al /app/dist

# Stage 2: Serve the React application with Nginx
FROM nginx:latest

# Copy build output to Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf
