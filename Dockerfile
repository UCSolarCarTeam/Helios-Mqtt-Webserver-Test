FROM node:18-alpine

# Set working directory
WORKDIR /src

# Copy source code
COPY . .

# Install dependencies
RUN npm install

# Expose port (adjust if your app uses a different port)
EXPOSE 4000

# Start the application in development mode
CMD ["npm", "run", "dev"]
