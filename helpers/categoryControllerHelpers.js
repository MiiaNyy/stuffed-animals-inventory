// Depending on where the calls comes (/animal, /size, /price), return right category obj
function getCategoryObj (str, req) {
    return str === 'animals' ? req.itemCategories.breeds : str === 'sizes' ? req.itemCategories.sizes : str === 'prices' ? req.itemCategories.prices : undefined;
}

function firstLetterToUpper (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function getPriceRange (query) {
    switch (query) {
        case 'budget':
            return [0, 20];
        case 'medium':
            return [21, 50];
        case 'high':
            return [51, 100]
        case 'premium':
            return [101, 520]
        default:
            break;
    }
}

module.exports = {
    getCategoryObj,
    firstLetterToUpper,
    getPriceRange,
}
