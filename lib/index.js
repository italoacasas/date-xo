/**
 * Return a new Date() plus x days
 * @param  {number} days - Number of Days that we want to add
 * @return {string} ISO Format date
 */
const datePlus = function (days) {
    const now = new Date();
    const newDate = now.setDate(now.getDate() + days);
    return new Date(newDate);
};

/**
 * Return if the date is two days old or higher
 * @param  {Date} date
 * @return {boolean}
 */
const twoDaysAgo = function (date) {
    let originalDate = date;
    const twoDaysAgo = new Date() - 1000 * 60 * 60 * 24 - 2;

    try {
        originalDate = date.getTime();
    } finally {
        return originalDate <= twoDaysAgo;
    }
};

module.exports = {
    datePlus,
    twoDaysAgo
};
