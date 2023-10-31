const log4js = require("log4js");
log4js.configure({
  appenders: { applog: { type: "file", filename: "./logs/app.log", maxLogSize: "1M" } },
  categories: { default: { appenders: ["applog"], level: "info" } },
});

const logger = log4js.getLogger("applog");
module.exports = logger
