exports.min = function min(array) {
    if (array == null || array.length <= 0) {
        return 0;
    } else {
        return Math.min.apply(null, array);
    }
};

exports.max = function max(array) {
    if (array == null || array.length <= 0) {
        return 0;
    } else {
        return Math.max.apply(null, array);
    }
};

exports.avg = function avg(array) {
    if (array == null || array.length <= 0) {
        return 0;
    } else {
        let sum = 0;
        array.forEach(element => {
            sum += element;
        });
        return sum / array.length;
    }
};
