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
    },
    buildPollGeneralConfigsBulk: (configs, pollId) => {
        const bulkContainer = [];
        configs.map((config) => {
            let checkedBool = config.checked ? 1 : 0;
            bulkContainer.push([ pollId, config.id, checkedBool])
        })
        return bulkContainer;
    }
}