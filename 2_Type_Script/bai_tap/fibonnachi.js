fibonnachi = function (number) {
    if (number <= 1) {
        return number;
    }
    return fibonnachi(number - 1) + fibonnachi(number - 2);
};
console.log(0);
console.log(1);
fibonnacci(0, 1, 1, 8, 0);
