var Hashids = require('hashids');
var hashids = new Hashids('', 6);

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
    },
    generateHashId: (pollId, createdTimeStamp) => {
        let encodedHashId = hashids.encode(pollId);
        return encodedHashId;
    },
    decodeHashId: (hashId) => {
        let decodedHashId = hashids.decode(hashId);
        return decodedHashId[0];
    },
    buildPollObject: (poll, pollOptions, pollGeneralConfigs) => {
        poll.pollOptions = pollOptions;
        pollGeneralConfigs.map((config, i) => {
            const value = config.config_value === 1 ? true : false;
            poll[config.config] = value;
        })
        return poll;
    },
    getVotesTotal: (votes) => {
        let total = 0;
        votes.map((pollOption, index) => {
            total += pollOption.votes
        })
        return total;
    },
    appendPercantagePollOptions: (total, results) => {
        results = results.map((pollOption, index) => {
            let percentage = Math.floor((pollOption.votes / total) * 100);
            return Object.assign({}, pollOption, { percentage: percentage})
        })
        return results;
    }
}