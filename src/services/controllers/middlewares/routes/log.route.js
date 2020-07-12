const logRoute = (req, res, next) => {
    console.log("ROUTE TRACK",
        `${req.originalUrl} was requested`)
    next();
};

module.exports = logRoute;