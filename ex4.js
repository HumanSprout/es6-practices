// Exercise 1. Create a PlayerCharacter and a NonPlayerCharacter with a common ancestor Character. The characters are located in a 10×10 game field. All characters appear at a random location. Create the three classes, and make sure you can query where each character is

// Exercise 2. Each character has a direction (up, down, left, right). Player characters initially go right, and their direction can be changed using the faceUp, faceDown, faceLeft, faceRight methods. Non-player characters move randomly. A move is automatically taken every 5 seconds in real time. Right after the synchronized moves, each character console logs its position. The player character can only influence the direction he is facing. When a player meets a non-player character, the non-player character is eliminated from the game, and the player’s score is increased by 1

// Exercise 3. Make sure the Character class cannot be instantiated

let characters = {}, numNPC = 3

characters.NPC = []

let randomize = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1 )) + min
}
    
let rStart = () => [randomize(1,10), randomize(1,10)]

let moveCharacter = (i) => {
    let direction,
        rMove = randomize(1,4),
        position,
        newPosition

    if (i = false) {
        position = playerPosition()
    } else {
        position = characters[i].getPosition()
    }

    newPosition = position

    switch (rMove) {
        case 1:
            direction = "left"
            newPosition[0] = position[0] - 1
            break;
        case 2:
            direction = "right"
            newPosition[0] = position[0] + 1
            break
        case 3:
            direction = "down"
            newPosition[1] = position[1] - 1
            break
        case 4:
            direction = "up"
            newPosition[1] = position[1] + 1
            break
        default:
            new Error('invalid NPC move')
    }
    if ( isMoveValid(direction, position) ) {
        character[i].setPosition(newPosition)
    }
}

let isMoveValid = (direction, position) => {
    let x = position[0], y = position[1]
    if (!position.includes(1) && !position.includes(10)) {
        return true
    }
    if (position === "left" && x === 1) {
        return false
    }
    if (position === "right" && x === 10) {
        return false
    }
    if (position === "down" && y === 1) {
        return false
    }
    if (position === "up" && y === 10) {
        return false
    }
    return true
}

class Character {
    constructor(start) {
        if (new.target === Character) {
            throw new Error('abstract class Character cannot be instantiated')
        }
        this.position = start
        this.score = 0
    }
    setPosition(position) {
        this.position = position
    }
    getPosition() {
        return this.position
    }
    setScore(score) {
        this.score = numNPC - characters.NPC.length
    }
    getScore() {
        return this.score
    }
}

class PlayerCharacter extends Character {
    constructor(start) {
        super(start)
        this.facing = "right"
    }
    face(direction) {
        this.facing = direction
    }
    faceLeft() {
        this.face("left")
    }
    faceRight() {
        this.face("right")
    }
    faceDown() {
        this.face("down")
    }
    faceUp() {
        this.face("up")
    }
    move() {
        moveCharacter(false)
    }
}

class NonPlayerCharacter extends Character {
    constructor(start) {
        super(start)
        this.index = characters.NPC.length + 1
    }
    getIndex() {
        console.log(this.index)
    }
    move() {
        moveCharacter(this.index)
    }
}

let initPlayer = () => {
    let player = new PlayerCharacter(rStart())
    return player
}

let initNPC = () => {
    let player = new NonPlayerCharacter( rStart() )
    return player
}

(function(){
    let count = numNPC
    characters.player = initPlayer()
    while (count > 0) {
        characters.NPC.push( initNPC() )
        count -= 1
    }
})()

let checkPosition =() => {
    for (npc of characters.NPC ) {
        if (npc.getPosition() === playerPosition()) {
            characters.NPC.splice(npc.getPosition(), 1)
        }
    }
}

let moveCharacters = () => {
    for (npc of characters.NPC) {
        npc.move()
    }
    characters.player.move()
    checkPosition()
}

let playerPosition = () => characters.player.getPosition()

// while (characters.NPC.length > 0) {
//     setTimeout()
//         moveCharacters()
// }


console.log(playerPosition())