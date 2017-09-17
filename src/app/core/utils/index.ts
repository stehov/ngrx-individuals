export function removeByKey(object, keysToRemove) {
  return {
    ...Object.keys(object)
      .filter(item => !isInArray(item, keysToRemove))
      .reduce((newObj, item) => {
        return {
          ...newObj, [item]: object[item]
        };
      }, {})
  };
}

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}
