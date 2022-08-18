var Twitter = function() {
    let userMap = new Map();
    let followerMap = new Map();
    let timestamp = 0;
    return {
        postTweet,
        getNewsFeed,
        follow,
        unfollow,
    };

    function postTweet(userId, tweetId) {
        timestamp++;
        if (!userMap.has(userId)) userMap.set(userId, []);
        userMap.get(userId).push([tweetId, timestamp]);
    }
    function getNewsFeed(userId) {
        let res = userMap.get(userId) || [];
        let fe = followerMap.get(userId) || new Set();
        for (const e of fe) {
            res = res.concat(userMap.get(e) || []);
        }
        res.sort((x, y) => y[1] - x[1]);
        return res.slice(0, 10).map((x) => x[0]);
    }
    function follow(followerId, followeeId) {
        followerMap.set(followerId, (followerMap.get(followerId) || new Set()).add(followeeId));
    }
    function unfollow(followerId, followeeId) {
        if (followerMap.has(followerId)) {
            followerMap.get(followerId).delete(followeeId);
        }
    }
};
