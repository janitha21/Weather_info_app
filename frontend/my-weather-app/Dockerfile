# Step 1: Build stage
FROM node:22.14.0 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . ./

RUN npm run build   # Vite will output to /app/dist by default

# Step 2: Serve with nginx
FROM nginx:alpine

# Copy the build output from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
