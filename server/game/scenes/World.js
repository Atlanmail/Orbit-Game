import { Scene } from 'phaser';

export class World extends Scene
{
    constructor () {
        super('World');
    }

    create () {

        

        this.input.once('pointerdown', () => {

        });
    }

    render_background() {
        this.add.image(512, 384, 'background');
    }


}
