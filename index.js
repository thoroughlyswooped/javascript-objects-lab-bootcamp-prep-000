var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  console.log(key);
  return Object.assign({}, object, {key : value});
}