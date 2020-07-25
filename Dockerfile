
FROM node:14-alpine
EXPOSE 8080

RUN \
  apk add --no-cache python make g++ && \
  apk add vips-dev fftw-dev --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community --repository http://dl-3.alpinelinux.org/alpine/edge/main && \
  rm -fR /var/cache/apk/*

RUN apk add git
RUN apk add bash

WORKDIR /usr/src
CMD ["/bin/bash"]
