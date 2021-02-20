let d = new Date();
let n = d.getFullYear();

function koreanAge(input) {
    return (n - input) + 1
}

module.exports = koreanAge