/**
 * Return a new Date() plus x days
 * @param  {number} days - Number of Days that we want to add
 * @return {string} ISO Format date
 */
const datePlus = (days) => {
    const now = new Date();
    const newDate = now.setDate(now.getDate() + days);
    return new Date(newDate);
};

/**
 * Return `true` if the date is two days old or higher
 * @param  {Date} date
 * @return {boolean}
 */
const twoDaysAgo = (date) => {
    let originalDate = date;
    const twoDaysAgo = new Date() - 1000 * 60 * 60 * 24 - 2;

    try {
        originalDate = date.getTime();
    } finally {
        return originalDate <= twoDaysAgo;
    }
};

/**
 * Return `true` if is a past date
 * @param {Date} date
 * @return boolean
 */
const pastDate = (date) => {
    let originalDate = date;
    const now = new Date();

    try {
        originalDate = date.getTime();
    } finally {
        return originalDate <= now;
    }
};

module.exports = {
    datePlus,
    twoDaysAgo,
    pastDate
};
