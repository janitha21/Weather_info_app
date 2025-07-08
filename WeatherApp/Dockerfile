# Step 1: Build Stage
FROM maven:3.8.4-openjdk-17-slim AS build

WORKDIR /app

# Copy pom and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy source and build
COPY src ./src
RUN mvn clean package -DskipTests

# Step 2: Run Stage
FROM openjdk:17-jdk-slim

WORKDIR /usr/app

# Copy jar from build stage
COPY --from=build /app/target/WeatherApp-1.0-SNAPSHOT.jar ./weather-backend.jar

# Expose port
EXPOSE 8080

# Run the app
CMD ["java", "-jar", "weather-backend.jar"]
