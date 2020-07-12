const recording = require('../../../logger');
const logEvent = require('./myEmitter');
const { ERROR, FATAL, INFO } = require('../../constant/error-event.constant');
// const { ERROR, FATAL, INFO } = require('../../constant/log-type.constant');
const loggingListener = () => {
    logEvent.on(ERROR, function (ev) {
        recording({ logType: ERROR, logTitle: ev.logTitle, logMesagge: ev.logMesagge });
    });
    logEvent.on(FATAL, function (ev) {
        recording({ logType: FATAL, logTitle: ev.logTitle, logMesagge: ev.logMesagge });
        process.exit(1);
    });
    logEvent.on(INFO, function (ev) {
        recording({ logType: INFO, logTitle: ev.logTitle, logMesagge: ev.logMesagge });
    });
};
module.exports = loggingListener;