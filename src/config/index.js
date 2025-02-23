const dotEnv = require("dotenv");

if (process.env.NODE_ENV !== "prod") {
  const configFile = `./.env.${process.env.NODE_ENV}`;
  dotEnv.config({ path: configFile });
} else {
  dotEnv.config();
}

  // DB_URL: process.env.MONGODB_URI,
  // APP_SECRET: process.env.APP_SECRET,
  // EXCHANGE_NAME: process.env.EXCHANGE_NAME,
  // MSG_QUEUE_URL: process.env.MSG_QUEUE_URL,

module.exports = {
  PORT: process.env.PORT,
  DB_URL: 'mongodb://mongodb/msytt_customer',
  APP_SECRET: 'jg_youtube_tutorial',
  EXCHANGE_NAME: 'ONLINE_STORE',
  PORT: 8001,
  MSG_QUEUE_URL: 'amqp://guest:guest@rabbitmq-service:5672',
  CUSTOMER_SERVICE: "customer_service",
  SHOPPING_SERVICE: "shopping_service",
};
