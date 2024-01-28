FROM node:alpine3.19

# Specify project path
WORKDIR /bright/frontend

# Copy files
COPY src/ /bright/frontend/src
COPY assets/ /bright/frontend/assets
COPY vite.config.js /bright/frontend/
COPY tailwind.config.js /bright/frontend/
COPY package.json /bright/frontend/
COPY index.html /bright/frontend/

# Install dependancies
RUN npm i -g pnpm
RUN pnpm i
RUN pnpm install prop-types

# Run
CMD [ "npm", "start" ]