controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.pewPew.play()
    laser = sprites.createProjectileFromSprite(assets.image`laser1`, ship, 500, 0)
    laser.setFlag(SpriteFlag.DestroyOnWall, true)
    animation.runImageAnimation(
    laser,
    assets.animation`laser2`,
    1,
    true
    )
    score.count += -1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.pewPew.play()
    laser = sprites.createProjectileFromSprite(assets.image`laser1`, ship, 500, 0)
    laser.setFlag(SpriteFlag.DestroyOnWall, true)
    animation.runImageAnimation(
    laser,
    assets.animation`laser2`,
    1,
    true
    )
    score.count += -1
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    score.count += -1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.zapped.play()
    otherSprite.destroy()
    sprite.destroy()
    score.count += 3
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.smallCrash.play()
    otherSprite.destroy()
    hearts.count += -1
})
let enemysquare: Sprite = null
let laser: Sprite = null
let score: DigitCounter = null
let hearts: DigitCounter = null
let ship: Sprite = null
scene.setBackgroundColor(15)
ship = sprites.create(img`
    1 1 . . . . . . . . . . . . . . 
    1 . 1 1 . . . . . . . . . . . . 
    1 . . . 1 1 . . . . . . . . . . 
    1 . . . . . 1 1 . . . . . . . . 
    1 . . . . . . . 1 1 . . . . . . 
    1 . . . . . . . . . 1 1 . . . . 
    1 . . . . . . . . . . . 1 1 . . 
    1 . . . . . . . . . . . . . 1 1 
    1 . . . . . . . . . . . . . 1 1 
    1 . . . . . . . . . . . 1 1 . . 
    1 . . . . . . . . . 1 1 . . . . 
    1 . . . . . . . 1 1 . . . . . . 
    1 . . . . . 1 1 . . . . . . . . 
    1 . . . 1 1 . . . . . . . . . . 
    1 . 1 1 . . . . . . . . . . . . 
    1 1 . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
ship.setPosition(80, 60)
controller.moveSprite(ship)
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
hearts = sevenseg.createCounter(SegmentStyle.Thin, SegmentScale.Half, 1)
hearts.count = 3
hearts.x = 53
hearts.y = 8
hearts.setDigitColor(1)
score = sevenseg.createCounter(SegmentStyle.Thin, SegmentScale.Half, 3)
score.x = 106
score.y = 8
score.setDigitColor(1)
game.onUpdate(function () {
    ship.x = 24
    if (ship.y < 25) {
        ship.y = 25
    } else if (ship.y > 112) {
        ship.y = 112
    } else {
    	
    }
    if (hearts.count == 3) {
        ship.setImage(img`
            1 1 . . . . . . . . . . . . . f 
            1 . 1 1 . . . . . . . . . . . . 
            1 . . . 1 1 . . . . . . . . . . 
            1 . . . . . 1 1 . . . . . . . . 
            1 . . . . . . . 1 1 . . . . . . 
            1 . . . . . . . . . 1 1 . . . . 
            1 . . . . . . . . . . . 1 1 . . 
            1 . . . . . . . . . . . . . 1 1 
            1 . . . . . . . . . . . . . 1 1 
            1 . . . . . . . . . . . 1 1 . . 
            1 . . . . . . . . . 1 1 . . . . 
            1 . . . . . . . 1 1 . . . . . . 
            1 . . . . . 1 1 . . . . . . . . 
            1 . . . 1 1 . . . . . . . . . . 
            1 . 1 1 . . . . . . . . . . . . 
            1 1 . . . . . . . . . . . . . f 
            `)
    } else if (hearts.count == 2) {
        ship.setImage(img`
            1 1 . . . . . . . . . . . . . f 
            1 . 1 1 . . . . . . . . . . . . 
            1 . . . 1 1 . . . . . . . . . . 
            1 . . . . . 1 1 . . . . . . . . 
            1 . . . . . . . 1 1 . . . . . . 
            1 . . . . . . . . . 1 1 . . . . 
            1 . . . . . . . . . . . 1 1 . . 
            1 . . . . . . . . . . . . . 1 1 
            1 . . . . . . . . . . . . . . . 
            1 . . . . . . . . . . . . . . . 
            1 . . . . . . . . . . . . . . . 
            1 . . . . . . . . . . . . . . . 
            1 . . . . . . . . . . . . . . . 
            1 . . . . . . . . . . . . . . . 
            1 . . . . . . . . . . . . . . . 
            1 . . . . . . . . . . . . . . f 
            `)
    } else if (hearts.count == 1) {
        ship.setImage(img`
            1 1 . . . . . . . . . . . . . f 
            . . 1 1 . . . . . . . . . . . . 
            . . . . 1 1 . . . . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . . . . 1 1 . . . . . . 
            . . . . . . . . . . 1 1 . . . . 
            . . . . . . . . . . . . 1 1 . . 
            . . . . . . . . . . . . . . 1 1 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . f 
            `)
    } else {
        ship.setImage(img`
            . . . . . . . . . . . . . . . f 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . f 
            `)
    }
})
forever(function () {
    if (hearts.count == 0) {
        effects.blizzard.startScreenEffect(500)
        pause(500)
        info.setScore(score.count)
        game.over(false, effects.dissolve)
    }
})
game.onUpdateInterval(500, function () {
    enemysquare = sprites.create(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, SpriteKind.Enemy)
    enemysquare.setFlag(SpriteFlag.DestroyOnWall, true)
    enemysquare.setPosition(160, randint(24, 108))
    enemysquare.ax = -100
})
