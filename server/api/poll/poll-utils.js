module.exports = {
    getClockInt: (date) => {
        var clock = date.split(' ')[1];
        var clockCombined = clock.split(':').join('');
        return parseInt(clockCombined);
    },
    buildPollOptionBulk: (pollOptions, pollId) => {
        const bulkContainer = [];
        pollOptions.map((option) => {
            bulkContainer.push([ option.value, pollId])
        })
        return bulkContainer;
    } 
}