import View from "./View";
import ViewManager from "../ViewManager";
import Player from "../../GameSystem/Player";
import Vector from "../../Helpers/Vector";
import Physic from "../../GameSystem/Physic";

class SessionView extends View {
    public gameObjects = new Array<Player>();

    constructor(viewManager: ViewManager) {
        super(viewManager);

        this.gameObjects = [
            new Player(new Vector(250, 50), new Vector(0, 0.50)),
            new Player(new Vector(250, 300), new Vector(0, -0.50)),
            new Player(new Vector(150, 0), new Vector(0.50, 0.50)),
            new Player(new Vector(250, 150), new Vector(0.50, 0.50)),
            new Player(new Vector(350, 75), new Vector(-0.50, 0.50)),
            new Player(new Vector(300, 300), new Vector(0.50, -0.50)),
            /* new Player(new Vector(250, 50), new Vector(0, 0.50)),
            new Player(new Vector(250, 350), new Vector(0, -0.50)), */
        ];
    }


    public loadContent(): void {
        super.loadContent();

        this.gameObjects.forEach(obj => {
            this.viewManager.onMouseDown.subscribe(obj.handlerSetPosition);
            this.viewManager.onMouseMove.subscribe(obj.handlerSetPosition);

            this.viewManager.onKeyDown.subscribe(obj.handlerKeyDown);
            this.viewManager.onKeyUp.subscribe(obj.handlerKeyUp);
        });
    }

    public update(gameTime: DOMHighResTimeStamp): void {
        this.gameObjects.forEach((obj) => obj.update())
        Physic.analyzeCollisions(this.gameObjects);
    }

    public draw(gameTime: DOMHighResTimeStamp): void {
        this.gameObjects.forEach(obj => {
            this.viewManager.canvasManager.drawObject(obj);
        });
    }

    public unloadContent(): void {
        super.unloadContent();
    }
}

export default SessionView;