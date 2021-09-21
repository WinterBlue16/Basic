let count=0;

function increase() {
    count++;
}

function getCount() {
    return count;
}


module.exports.getCount = getCount;
console.log(module.exports == exports);
exports = {};
console.log(module.exports == exports);
module.exports.increase = increase;
console.log(module);