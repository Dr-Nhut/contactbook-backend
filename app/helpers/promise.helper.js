const handlePromise = (promise) => {
    return promise 
        .then((data) => [null, data])
        .catch((err) => [error, undefined]);
};

module.exports = handlePromise;
