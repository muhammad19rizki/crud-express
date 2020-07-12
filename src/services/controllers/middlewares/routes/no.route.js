const logEvent = require('../../../events/myEmitter');
const { ERROR } = require('../../../../constant/error-event.constant');
const noRoute = (req, res) => {
    logEvent.emit(ERROR, {
        logTitle: 'ROUTE-FAILED',
        logMessage: `${req.originalUrl} was requested`
    });
    res.status(404);
    res.json({ message: 'Page not found.' });
};
module.exports = noRoute;