const input = document.querySelector("input");
const upperCaseOutput = document.querySelector("#uppercase span");
const lowerCaseOutput = document.querySelector("#lowercase span");
const camelCaseOutput = document.querySelector("#camelcase span");
const pascalCaseOutput = document.querySelector("#pasclecase span");
const snakeCaseOutput = document.querySelector("#snakecase span");
const kebabCaseOutput = document.querySelector("#kebabcase span");
const trimCaseOutput = document.querySelector("#trim span");

function capitalizeString (str) {
    if(str.length == 0) return str
    const firstCharactor = str[0].toUpperCase()
    return firstCharactor + str.slice(1, str.length)
}
//===== CAMELCASE ======
function camelCase(str) {
    const lowerCaseString = str.toLowerCase()
    const wordsArray = lowerCaseString.split(' ')
    const finalArray = wordsArray.map((word, i) => {
        if(i === 0) return word
        return capitalizeString(word)
    })
    return (finalArray.join(''));
}

//===== PASCALCASE ======
function pascalCase(str) {
    const lowerCaseString = str.toLowerCase()
    const wordsArray = lowerCaseString.split(' ')
    const finalArray = wordsArray.map((word) => {
        return capitalizeString(word)

    })
    return (finalArray.join(''));
}

//===== SNAKECASE =====
function snakeCase(str) {
    const wordsArray = str.split(' ')
    return wordsArray.join('_')
}

//===== KEBAB CASE =====
function kebabCase(str) {
    const wordsArray = str.split(' ')
    return wordsArray.join('-')
}

//===== TRIM CASE =====
function tirmCase(str) {
    const wordsArray = str.split(' ')
    return wordsArray.join('')
}

function updateScreen() {
    lowerCaseOutput.innerText = input.value.toLowerCase();
    upperCaseOutput.innerText = input.value.toUpperCase();
    camelCaseOutput.innerText = camelCase(input.value);
    pascalCaseOutput.innerText = pascalCase(input.value)
    snakeCaseOutput.innerText = snakeCase(input.value);
    kebabCaseOutput.innerText = kebabCase(input.value);
    trimCaseOutput.innerText = tirmCase(input.value)
}
updateScreen()


input.addEventListener("input", () => {
    updateScreen()
})