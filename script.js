import { 
    checkFailure,
    snakeSpeed, 
    update as updateSnake, 
    draw as drawSnake} from "./snake.js"
import {
    update as updateFood,
    draw as drawFood
} from "./food.js"


let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board')

function main(currentTime){
    window.requestAnimationFrame(main)
    const secSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(secSinceLastRender < 1 / snakeSpeed) return
    
    console.log('Render');
    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)
function update() {
    updateSnake()
    updateFood()
    checkFailure()
}

function draw() {
    gameBoard.innerHTML = ""
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

