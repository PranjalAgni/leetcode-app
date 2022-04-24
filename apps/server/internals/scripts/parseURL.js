const fs = require('fs/promises');

/**
 * @param {string} filePath
 */
const readFileData = async (filePath) => {
  const data = await fs.readFile(filePath, 'utf8');
  return data;
};

/**
 *
 * @param {string} filePath
 */
const parseURLFromFile = async (filePath) => {
  let url = null;
  try {
    const data = await readFileData(filePath);
    const problemName = filePath.substring(filePath.lastIndexOf('/') + 1);
    const targetPrefix = 'https://leetcode.com';
    const isProblemURLPresent = data.includes(targetPrefix);
    if (isProblemURLPresent) {
      const startIndex = data.indexOf(targetPrefix);
      let position = startIndex + targetPrefix.length;
      while (data[position] !== ' ' && data[position] !== '\n') {
        position += 1;
      }
      url = data.substring(startIndex, position);
    }
  } catch (error) {
    console.log('Error fetching the URL from file ', error);
  }

  return url;
};

module.exports = parseURLFromFile;
