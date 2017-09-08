// Exercise 1. Create a PlayerCharacter and a NonPlayerCharacter with a common ancestor Character. The characters are located in a 10×10 game field. All characters appear at a random location. Create the three classes, and make sure you can query where each character is

// Exercise 2. Each character has a direction (up, down, left, right). Player characters initially go right, and their direction can be changed using the faceUp, faceDown, faceLeft, faceRight methods. Non-player characters move randomly. A move is automatically taken every 5 seconds in real time. Right after the synchronized moves, each character console logs its position. The player character can only influence the direction he is facing. When a player meets a non-player character, the non-player character is eliminated from the game, and the player’s score is increased by 1

// Exercise 3. Make sure the Character class cannot be instantiated

let PC, numNPC = 0, totalNPC = 3, time = 300, // 5000
    rMove = {
        1: "left",
        2: "right",
        3: "down",
        4: "up"
    }

let randomize = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1 )) + min
}
     
let rStart = () => [randomize(1,10), randomize(1,10)]

let moveCharacter = (c) => {
    let direction = c.facing,
        position = c.position
    switch (direction) {
        case "left":
            position[0] = position[0] - 1
            break;
        case "right":
            position[0] = position[0] + 1
            break
        case "down":
            position[1] = position[1] - 1
            break
        case "up":
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
        let type = "PC"
        if (this instanceof NonPlayerCharacter) type = "N" + type
        this.type = type
        this.position = start
        console.log(this.type, " made at ", this.position)
        this.windUp(this)
    }
    setPosition(position) {
        this.position = position
    }
    move() {
        moveCharacter(this)
        console.log(this.type, " is at ", this.position)
        if (type === "NPC") this.turn()
    }
    windUp(c) {
        setTimeout( function() { c.move() }, time )
    }
}

class PlayerCharacter extends Character {
    constructor(start) {
        super(start)
        this.facing = "right"
        this.score = 0
    }
    score() {
        this.score += this.score
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
}

class NonPlayerCharacter extends Character {
    constructor(start) {
        super(start)
        this.alive = true
        numNPC += 1
        this.turn()
    }
    turn() {
        this.facing = rMove[randomize(1,4)]
    }
    isSafe() {
        if (this.position === PC.position) this.kill()
    }
    kill() {
        this.alive = false 
        PC.score()
    }
}

let initPlayer = () =>  new PlayerCharacter( rStart() )

let initNPC = () => {
    return new NonPlayerCharacter( rStart() )
}

(function(){
    let count = numNPC
    PC = initPlayer()
    while (numNPC < totalNPC) {
        initNPC()
    }
})()