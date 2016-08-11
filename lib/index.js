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

module.exports = {
    datePlus
};
