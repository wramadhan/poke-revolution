FROM node:18.18-alpine

RUN apk update && apk upgrade && apk add bash curl 

RUN apk add --no-cache ca-certificates git
# Set working directory
WORKDIR /usr/app

# Copy all files
COPY . .

# Install dependencies
RUN npm install --production

# Install dependencies
RUN npm audit fix

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The "node" user is provided in the Node.js Alpine base image
USER node

# Launch app with PM2
CMD npm run start