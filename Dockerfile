FROM node:8  
WORKDIR /app
COPY ./index.js ./index.js
CMD ["node index.js"] 