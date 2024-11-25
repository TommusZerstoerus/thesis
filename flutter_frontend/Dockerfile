FROM debian:latest AS build-env

# Install required dependencies
RUN apt-get update && apt-get install -y curl git unzip

# Define variables
ARG FLUTTER_SDK=/usr/local/flutter
ARG FLUTTER_VERSION=3.24.5
ARG APP=/app/

# Clone Flutter
RUN git clone https://github.com/flutter/flutter.git $FLUTTER_SDK
RUN cd $FLUTTER_SDK && git fetch && git checkout $FLUTTER_VERSION

# Setup Flutter path
ENV PATH="$FLUTTER_SDK/bin:$FLUTTER_SDK/bin/cache/dart-sdk/bin:${PATH}"
ENV FLUTTER_SUPPRESS_ANALYTICS=true
ENV PUB_CACHE=/root/.pub-cache

# Verify Flutter installation
RUN flutter doctor -v

# Prepare application
RUN mkdir $APP
COPY . $APP
WORKDIR $APP

# Build application
RUN flutter clean
RUN flutter pub get
RUN flutter build web

FROM nginx:1.25.2-alpine
COPY --from=build-env /app/build/web /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
