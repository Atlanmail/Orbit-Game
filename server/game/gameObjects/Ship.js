export class Ship extends Phaser.Physics.Arcade.Sprite {
    
    clientId = null; /// integer
    socketId = null; /// string
    id = null;

    updates = {};
    shouldUpdate = true;

    prevPosition = {
        x: -1,
        y: -1
    }

    dead = false;
    prevDead = false;

    
    constructor (scene, x, y, texture, frame)
    {
        super(scene, x, y, texture, frame);
        scene.

    }
}