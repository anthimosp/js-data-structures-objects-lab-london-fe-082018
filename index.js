// Write your solution in this file!
let driver = ["driver"]

function updateDriverWithKeyAndValue(driver, key, value){
    return  Object.assign({key,value}, driver) }

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    }
  
function deleteFromDriverByKey(driver, key){
    }

function destructivelyDeleteFromDriverByKey(driver, key){
    let newdriver = destructivelyDeleteFromDriverByKey(driver, 'name');
expect(newdriver['name']).to.equal(undefined);
  
}