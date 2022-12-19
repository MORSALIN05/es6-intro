const fish = {
    name: 'Hilsha',
    size: 23,
    weight: '2kg'
}
console.log(fish.name);
// now destructunitg
const { name } = fish;
console.log(name);

// array destructunitg
const arr1 = ['hilsha', 'karfu', 'katol'];
const [first] = arr1;
console.log(first);

// function destructunitg
function getNames() {
    return ['Alim', 'halim'];
}
const [baba, chacha] = getNames();
console.log(baba);