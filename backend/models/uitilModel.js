function lengthCheck(item, l, r) {
    item = String(item);
    return item.length >= l && item.length <= r;
}

module.exports = {
    lengthCheck,
};