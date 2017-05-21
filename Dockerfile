FROM node:4-onbuild

ADD package.json package.json
RUN npm install -g sails && npm install
EXPOSE 1337

CMD sails lift
