function gameObject(){ 
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black','White'],
            players: {
                'Alan Anderson': {
                    Number: 0,
                    Shoe: 16,
                    points: 22,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans':{
                    Number: 30,
                    Shoe: 14,
                    points: 12,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez':{
                    Number: 11,
                    Shoe: 17,
                    points: 17,
                    Rebounds: 19,
                    Assists: 10,
                    Steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee':{
                    Number: 1,
                    Shoe: 19,
                    points: 26,
                    Rebounds: 12,
                    Assists: 6,
                    Steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry':{
                    Number: 31,
                    Shoe: 15,
                    points: 19,
                    Rebounds: 2,
                    Assists: 2,
                    Steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise','Purple'],
            players: {
                'Jeff Adrien': {
                    Number: 4,
                    Shoe: 18,
                    points: 10,
                    Rebounds: 1,
                    Assists: 1,
                    Steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    Number: 0,
                    Shoe: 16,
                    points: 12,
                    Rebounds: 4,
                    Assists: 7,
                    Steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    Number: 2,
                    Shoe: 14,
                    points: 24,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    Number: 8,
                    Shoe: 15,
                    points: 33,
                    Rebounds: 3,
                    Assists: 2,
                    Steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    Number: 33,
                    Shoe: 15,
                    points: 6,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        
        }
    }
}

function players(){
    const game = gameObject()
    return Object.assign({}, game.home.players, game.away.players)
}
function numPointsScored(playerInput){
    for ( const playerName in players()){
        if ( playerName === playerInput){
            return players()[playerName].points
        }
    }
}
numPointsScored('Brendan Haywood')

function shoeSize(playerInput){
    for (const playerName in players()){
        if ( playerName === playerInput){
            return players()[playerName].Shoe
        }
    }
}
shoeSize('Brendan Haywood')
function teamColors(Team){
    const game = gameObject()
    for (const gameKey in game){
      if (game[gameKey].teamName === Team) {
          return game[gameKey].colors
      } 
    }
    
}
teamColors('Brooklyn Nets')
function teamNames(){
    const game = gameObject()
    const listteamName = []
    for (const gameKey in game){
         listteamName.push(game[gameKey].teamName)
    }
    return listteamName
}
function playerNumbers(team){
    const game = gameObject()
    const arrayNum = []  
    for (const gameKey in game){
        if (game[gameKey].teamName = team){
            for (playerName in game[gameKey].players){
                arrayNum.push(game[gameKey].players[playerName].Number)
            }
        }
    }
    return arrayNum
}
function playerStats(name){
    const game = gameObject()
    for (const gameKey in game){
        for (const playerName in game[gameKey].players){
            if (playerName === name){
                return game[gameKey].players[playerName]
            }
        }
    }

}
playerStats('Jeff Adrien')

function shoeSizearr(){
    const arrayOfshoe = []
    for (const name in players()){
        arrayOfshoe.push(players()[name].Shoe)
    }
    return arrayOfshoe
}
function bigShoeRebounds(){
    for (const name in players()){
        if (players()[name].Shoe === Math.max(...shoeSizearr())){
            return players()[name].Rebounds
        }
    }
}
bigShoeRebounds()

const game = gameObject()
const players1 = [game.home.players,game.away.players]
function allplayers(){
    const all = players1.map(function(team){
        const newArr = []
        for(const player in team){
            newArr.push({nameOfPlayer: player, ...team[player]})
        }
        return newArr
    })
    return all.flat()
}


function mostPointsScored(){
    const pointArr = []
    for ( const player in players()){
        pointArr.push(players()[player].points)
    }
    const myPoint = allplayers().filter( player =>player.points === Math.max(...pointArr)
    )
    return myPoint.map(e => e.nameOfPlayer)
}
function pointHometeam (){
    const homeTeamarr = []
        for( player in game.home.players){
            homeTeamarr.push(game.home.players[player].points)
    }
return homeTeamarr.reduce((a,b) => a + b,0)
}
function pointAwayteam(){
    const homeAwayarr = []
        for( player in game.away.players){
            homeAwayarr.push(game.away.players[player].points)
        
    }
return homeAwayarr.reduce((a,b) => a + b,0)
}

function winningTeam(){
if (pointHometeam() > pointAwayteam()) {
    return game.home.teamName
} else {game.away.teamName
}
}

function playerWithLongestName(){
    const playerNamelength = allplayers().map(player => player.nameOfPlayer.length)
    const playersArr = allplayers().filter(a => a.nameOfPlayer.length === Math.max(...playerNamelength))
    return playersArr.map(e => e.nameOfPlayer)
}
function Question(q){
    if(q = 'Which player has the most points?'){
      return  mostPointsScored()
    }
    if(q = 'Which team has the most points?'){
        return winningTeam()
    }
    if( q = 'Which player has the longest name?'){
        return playerWithLongestName()
    }
}

function playerWithmoststeal(){
    const steals = []
    for(player of allplayers()){
        steals.push(player.Steals)
    }
    const mostSteal = allplayers().find(player => player.Steals === Math.max(...steals))
    return mostSteal.nameOfPlayer
}

function doesLongNameStealATon(){
    if(playerWithLongestName() === playerWithmoststeal()){
        return true
    }
    else {false}
}