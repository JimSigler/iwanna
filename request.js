const rp = require('request-promise');

function Request() {
    return {
        makeCall
    };
};

module.exports = Request;

function makeCall(options) {
    return rp(options)
        .then((response) => {
            return response;
        })
        .then((body) => {
            if (typeof (body) == 'string') {
                return JSON.parse(body);
            } else {
                return body;
            }
        })
        .catch((err) => {
            console.error(err.message);
        });
}