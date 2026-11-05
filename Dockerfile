# syntax=docker/dockerfile:1

# @description Imagen de desarrollo/produccion para el scaffold React + Vite.
# @author Steveen Cues
# @version 1.0.0

ARG NODE_VERSION=20-alpine

# ---------- Etapa 1: dependencias ----------
FROM node:${NODE_VERSION} AS deps
WORKDIR /app

# La dependencia satoshi-rc-ui es file:resource/*.tgz: el tgz debe copiarse
# antes de npm install para que la resolucion de dependencias funcione.
COPY package.json ./
COPY resource/ ./resource/
RUN npm install --ignore-scripts

# ---------- Etapa 2: build ----------
FROM node:${NODE_VERSION} AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---------- Etapa 3: runtime (produccion, solo estaticos) ----------
FROM nginx:1.27-alpine AS runtime
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# ---------- Etapa dev: servidor Vite con hot reload ----------
FROM node:${NODE_VERSION} AS dev
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
