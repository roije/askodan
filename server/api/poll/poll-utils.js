module.exports = {
    getClockInt: (date) => {
        var clock = date.split(' ')[1];
        var clockCombined = clock.split(':').join('');
        return parseInt(clockCombined);
    } 
}