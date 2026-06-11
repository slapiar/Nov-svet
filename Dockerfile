FROM node:18-alpine

WORKDIR /app

# Copy root package files
COPY package.json ./
COPY web/package.json ./web/

# Install dependencies
RUN npm install --workspace=web --ignore-scripts

# Copy source
COPY web/ ./web/

WORKDIR /app/web

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000

CMD ["node", "src/server.js"]
