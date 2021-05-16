import { onSnake, expandSnake } from './snake.js'

let food = randomGridPosition()
const ExpansionRate = 1

export function update() {
    if(onSnake(food)) {
        expandSnake(ExpansionRate)
        food = randomGridPosition()
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * 21) + 1,
        y: Math.floor(Math.random() * 21) + 1
    }
}