
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
    }

    function destructivelyPrependCat(name) {
       return cats.unshift(name);
    }

    function destructivelyRemoveLastCat() {
        cats.pop();
    }

    function destructivelyRemoveFirstCat() {
        cats.shift();
    }
    function appendCat(name) {
        return [...cats, name];
    }

    function prependCat(name) {
        return [name, ...cats];
    }

    function removeFirstCat() {
        cats.shift();
    }

    function destructivelyRemoveLastCat() {
        cats.shift();
    }

    function removeLastCat() {
        return cats.slice(1)
    }