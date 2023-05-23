/**
 * Converts the ISO date string to dd/mm/yyyy format
 * @param {string} isoString ISO format date-time string
 */
const convertIsoToDate = (isoString) => {
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(isoString));
};

module.exports = {
  convertIsoToDate,
};
