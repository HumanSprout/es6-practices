// Exercise 1. Create a PlayerCharacter and a NonPlayerCharacter with a common ancestor Character. The characters are located in a 10×10 game field. All characters appear at a random location. Create the three classes, and make sure you can query where each character is

// Exercise 2. Each character has a direction (up, down, left, right). Player characters initially go right, and their direction can be changed using the faceUp, faceDown, faceLeft, faceRight methods. Non-player characters move randomly. A move is automatically taken every 5 seconds in real time. Right after the synchronized moves, each character console logs its position. The player character can only influence the direction he is facing. When a player meets a non-player character, the non-player character is eliminated from the game, and the player’s score is increased by 1

// Exercise 3. Make sure the Character class cannot be instantiated

let characters = {}, numNPC = 0, totalNPC = 3, time = 500 // 5000

let randomize = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1 )) + min
}
     
let rStart = () => [randomize(1,10), randomize(1,10)]

let moveCharacter = (c) => {
    let direction = c.facing,
        position = c.position
    console.log("position is ", typeof c.position)
    switch (direction) {
        case 1:
            direction = "left"
            position[0] = position[0] - 1
            break;
        case 2:
            direction = "right"
            position[0] = position[0] + 1
            break
        case 3:
            direction = "down"
            position[1] = position[1] - 1
            break
        case 4:
            direction = "up"
            position[1] = position[1] + 1
            break
        default:
            new Error('invalid NPC move')
    }
    if ( moveIsValid(direction, position) ) {
        c.setPosition(position)
    }
}

let moveIsValid = (direction, position) => {
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
        console.log("character made at ", this.position)
    }
    setPosition(position) {
        this.position = position
    }
    setScore(score) {
        this.score = score
    }
}

class PlayerCharacter extends Character {
    constructor(start) {
        super(start)
        this.facing = "right"
    }
    face(direction) { this.facing = direction }
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
        moveCharacter(this)
        console.log(this.position)
    }
}

class NonPlayerCharacter extends Character {
    constructor(start) {
        super(start)
        this.live()
        numNPC += 1
    }
    move() {
        moveCharacter(this)
    }
    live() {
        setTimeout( this.move, time)
    }
}

let initPlayer = () => {
    let player = new PlayerCharacter( rStart() )
    return player
}

let initNPC = () => {
    let player = new NonPlayerCharacter( rStart() )
    return player
}

(function(){
    let count = numNPC
    characters.player = initPlayer()
    while (numNPC < totalNPC) {
        initNPC()
    }
})()

console.log(characters.player.position)