function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brooke Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            } 
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "Desagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
}

let game = gameObject();
let homePlayers = game["home"]["players"];
let awayPlayers = game["away"]["players"];
let allPlayers = {...homePlayers, ...awayPlayers};

function numPointsScored(player) {
    return allPlayers[`${player}`]["points"];
}

function shoeSize(player) {
    return allPlayers[`${player}`]["shoe"];
}

function teamColors(teamName) {
    if (teamName === game["home"]["teamName"]) {
        return game["home"]["colors"];
    } else if (teamName === game["away"]["teamName"]) {
        return game["away"]["colors"];
    }
}

function teamNames(teamName) {
    if (teamName === game["home"]["teamName"]) {
        return Object.keys(homePlayers);
    } else if (teamName === game["away"]["teamName"]) {
        return Object.keys(awayPlayers);
    }
}

function playerNumbers(teamName) {
    if (teamName === game["home"]["teamName"]) {
        let homeNumbers = Object.values(homePlayers).map((homePlayer) => {
            return homePlayer["number"];
        })
        return homeNumbers.flat()
    } else if (teamName === game["away"]["teamName"]) {
        let awayNumbers = Object.values(awayPlayers).map((awayPlayer) => {
            return awayPlayer["number"];
        })
        return awayNumbers.flat();
    }
}

function playerStats(player) {
    return allPlayers[`${player}`];
}

function bigShoeRebounds() {
    let shoeSizes = Object.values(allPlayers).map((shoes) => {
        return shoes["shoe"];
    })
    let biggestShoe = Math.max(...shoeSizes);
    for (let player in allPlayers) {
        if (biggestShoe === allPlayers[player]["shoe"]) {
            return allPlayers[player]["rebounds"];
        }
    }
}