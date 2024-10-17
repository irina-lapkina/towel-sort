// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == undefined) {
        return [];
    }
    const reverse = matrix.map((el, i) => {
        const isOdd = i % 2 != 0;
        if (isOdd) {
            return el.reverse();
        } else return el;
    });
    return reverse.flat();
};
