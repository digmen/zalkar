# Используем базовый образ для Node.js
FROM node:20-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и yarn.lock
COPY package.json yarn.lock ./

# Устанавливаем зависимости
RUN yarn install

# Копируем все файлы проекта в контейнер
COPY . .

# Собираем проект (если это React/Vite)
RUN yarn build

# Базовый образ для сервера (nginx)
FROM nginx:alpine

# Удаляем стандартные файлы из nginx
RUN rm -rf /usr/share/nginx/html/*

# Копируем скомпилированные файлы из builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Запускаем сервер
CMD ["nginx", "-g", "daemon off;"]
