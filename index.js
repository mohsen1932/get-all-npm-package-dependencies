/*
* Created by Mohsen Barati
* Github: https://github.com/mohsen1932
* Email: mohsen1932@gmail.com
*/
const axios = require("axios");

const getFromApi = async packageName => {
  const url = `http://registry.npmjs.org/${packageName}/latest`;
  const response = await axios
    .get(url)
    .then(res => res.data)
    .catch(err => {
      throw err;
    });
  if (!response.hasOwnProperty("dependencies")) {
    return [];
  }
  const dependencies = Object.keys(response.dependencies);
  console.info(packageName, " needs: ", dependencies);
  return dependencies;
};

const getDependencies = async (packageName, array) => {
  try {
    var thisDependencies = await getFromApi(packageName);
    const unique = thisDependencies.filter(a => !array.includes(a));
    array.push(...unique);
    let i = 0;
    while (i < unique.length) {
      await getDependencies(unique[i], array);
      i++;
    }
  } catch (error) {
    return error;
  }
};

const getAllDependencies = async packageName => {
  let array = [];
  await getDependencies(packageName, array);
  return array
};

module.exports.getFromApi=getFromApi;
module.exports.getDependencies=getDependencies;
module.exports.getAllDependencies=getAllDependencies;