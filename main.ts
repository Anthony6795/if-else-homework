input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    player.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})
let player: game.LedSprite = null
let enemy = game.createSprite(randint(0, 10), randint(0, 10))
player = game.createSprite(0, 0)
basic.forever(function () {
    if (player.isTouching(enemy)) {
        enemy.delete()
        enemy = game.createSprite(randint(0, 10), randint(0, 10))
    }
})
