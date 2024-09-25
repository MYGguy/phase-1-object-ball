function gameObject() {
    const teams = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1,
                },
                'Reggie Evans': {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7,
                },
                'Brook Lopez': {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15,
                },
                'Mason Plumlee': {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5,
                },
                'Jason Terry': {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1,
                },
            },
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2,
                },
                'Bismak Biyombo': {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10,
                },
                'DeSagna Diop': {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5,
                },
                'Ben Gordon': {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0,
                },
                'Brendan Haywood': {
                    "number": 33,
                    "shoe": 15,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12,
                },
            },
        },
    }
    // console.log(teams);
    return teams;
}

function numPointsScored(player) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].players[player]) {
            return game[team].players[player].points;
        }
    }
    return null;
}
// console.log(numPointsScored('Reggie Evans'));
// console.log(numPointsScored('Ben Gordon'));

function shoeSize(player) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].players[player]) {
            console.log(game[team].players[player].shoe);
            return game[team].players[player].shoe;
        }
    }
}
// shoeSize('Ben Gordon')

function teamColors(teamDes) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamDes) {
            return game[team].colors
        }
    }
    return null;
}
// console.log(teamColors('Brooklyn Nets'));
// console.log(teamColors('Charlotte Hornets'));

function teamNames() {
    let teamNameList = [];
    for (let team in gameObject()) {
        teamNameList.push(gameObject()[team].teamName);
    }
    return teamNameList;
}
// console.log(teamNames());

function playerNumbers(theTeam) {
    const game = gameObject();
    let numbers = [];

    for (let team in game) {
        if (game[team].teamName === theTeam) {
            numbers.push(game[team].players);
        }
        return numbers;
    }
    return null;
}
console.log(playerNumbers('Brooklyn Nets'));
console.log(playerNumbers('Charlotte Hornets'));


