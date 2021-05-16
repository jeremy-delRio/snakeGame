import { getInputDir } from "./input.js"

export const snakeSpeed = 5
const snakeBody = [{x: 11, y: 11}]
let newSegments = 0;


export function update() {
    addSegments()

    const inputDir = getInputDir()
    for(let x = snakeBody.length - 2; x >= 0; x--){
        snakeBody[x + 1] = {... snakeBody[x] }
    }

    snakeBody[0].x += inputDir.x
    snakeBody[0].y += inputDir.y

}


export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount) {
    newSegments += amount
}

export function onSnake(position) {
    return  snakeBody[0].x === position.x && snakeBody[0].y === position.y
}

function addSegments() {
    for(let x = 0; x < newSegments; x++){
        snakeBody.push({... snakeBody[snakeBody.length - 1]})
    }
    
    newSegments = 0
} 

export function checkFailure(){
    if(snakeBody[0].x < 1 || snakeBody[0].x > 21 ||
       snakeBody[0].y < 1 || snakeBody[0].y >21){
           if(confirm("You Lost! Press ok to restart.")){
               window.location = '/'
           }
           return
        }else if(snakeBody.some(
            (segment, index) => {
                if (index === 0) return false
                return onSnake(segment)
            }
        )){
            if(confirm("You Lost! Press ok to restart.")){
                window.location = '/'
            }
            return
        }
}