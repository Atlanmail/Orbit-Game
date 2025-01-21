import { Scene } from 'phaser';
import Client from '../client.js'

export class World extends Scene
{
    constructor () {
        super('World');
    }

    create () {
        this.render_background();

        

        this.input.once('pointerdown', () => {

            Client.sendTest();

        });
    }

    render_background() {
        this.add.image(512, 384, 'background');
    }
}
