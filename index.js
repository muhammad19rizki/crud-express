const dotenv = require('dotenv');
const server = require('./server');
const connection = require('./dbConn');

dotenv.config();
if (process.env.APP_NAME) {
    connection.connect((err) => {
        if (err) {
            console.log("DB FAILED", err)
        } else {
            server.listen(process.env.APP_PORT, '0.0.0.0',
                function () {
                    if (server.listening) {
                        console.log(`Server is listening on ${process.env.APP_PORT}`)
                    }
                });
        }
    });
} else {
    process.exit(1);
}