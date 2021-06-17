def on_a_pressed():
    global laser
    laser = sprites.create_projectile_from_sprite(img("""
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        """),
        ship,
        500,
        0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

shipY = 0
laser: Sprite = None
ship: Sprite = None
scene.set_background_color(15)
ship = sprites.create(img("""
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
    """),
    SpriteKind.player)
ship.set_position(12, 60)
controller.move_sprite(ship)
info.set_life(3)

def on_on_update():
    global shipY
    ship.x = 12
    shipY = ship.y
    if shipY < 12:
        ship.y = 12
    elif shipY > 108:
        ship.y = 108
    else:
        pass
game.on_update(on_on_update)
