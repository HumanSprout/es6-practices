// Exercise 1. Create a PlayerCharacter and a NonPlayerCharacter with a common ancestor Character. The characters are located in a 10×10 game field. All characters appear at a random location. Create the three classes, and make sure you can query where each character is

// Exercise 2. Each character has a direction (up, down, left, right). Player characters initially go right, and their direction can be changed using the faceUp, faceDown, faceLeft, faceRight methods. Non-player characters move randomly. A move is automatically taken every 5 seconds in real time. Right after the synchronized moves, each character console logs its position. The player character can only influence the direction he is facing. When a player meets a non-player character, the non-player character is eliminated from the game, and the player’s score is increased by 1

// Exercise 3. Make sure the Character class cannot be instantiated

let PC, numNPC = 0, totalNPC = 10, time = 5000,
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

let moveIsValid = (dir, pos) => {
    let x = pos[0], y = pos[1]
    if( x < 1 || x > 10 || y < 1 || y > 10) {
        return false
    }
    return true
}

let moveCharacter = (c) => {
    let dir = c.facing,
        pos = c.position,
        newPos = pos.slice(0, 2)
    switch (dir) {
        case "left":
            newPos[0] = pos[0] - 1
            break;
        case "right":
            newPos[0] = pos[0] + 1
            break
        case "down":
            newPos[1] = pos[1] - 1
            break
        case "up":
            newPos[1] = pos[1] + 1
            break
        default:
            new Error('invalid NPC move')
    }
    if ( moveIsValid(dir, newPos) ) {
        c.setPosition(newPos)
    }
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
        this.windUp(this)
    }
    setPosition(newPos) {
        this.position = newPos
    }
    move(c) {
        moveCharacter(this)
        console.log(this.type, " is at ", this.position)
        if ( this.points < totalNPC ) this.windUp(c)
    }
    windUp(c) {
        setTimeout( function() { c.move(c) }, time )
    }
}

class PlayerCharacter extends Character {
    constructor(start) {
        super(start)
        this.facing = "right"
        this.points = 0
    }
    score(id) {
        this.points += 1
        console.log("NPC ", id, " has been killed, the score is now ", this.points)
        if ( this.points === totalNPC ) console.log("all of the NPCs have been eliminated!")
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
    constructor(start, id) {
        super(start)
        this.id = id
        this.alive = true
        numNPC += 1
    }
    turn() {
        this.facing = rMove[randomize(1, 4)]
    }
    isSafe() {
        if ( this.position === PC.position ) {
            return false
        } else {
            return true
        }
    }
    kill() {
        this.alive = false
        PC.score(this.id)
    }
    move(c) {
        if ( this.alive && !this.isSafe() ) this.kill()
        this.turn()
        if ( this.alive && this.isSafe() ) {
            moveCharacter(this)
            console.log(this.type, " is at ", this.position)
            this.windUp(c)
        } else{    
            if (this.alive) this.kill()
        }
    }
}

let initPlayer = () =>  new PlayerCharacter( rStart() )

let initNPC = () => {
    return new NonPlayerCharacter( rStart(), numNPC + 1 )
}

(function(){
    let count = numNPC
    PC = initPlayer()
    while (numNPC < totalNPC) {
        initNPC()
    }
})()