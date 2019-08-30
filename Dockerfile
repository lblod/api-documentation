FROM madnificent/ember:3.12.0 as builder

LABEL maintainer="info@redpencil.io"

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN ember ember-cli-yuidoc

FROM nginx:1.15.3
COPY --from=builder /app/dist/docs /usr/share/nginx/html

