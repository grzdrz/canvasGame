import MainMenuView from "./MainMenuView";
import View from "./View";
import EntryType from "./EntryType";
import Texture from "./Texture";
import Vector from "../../Helpers/Vector";
import MathFunctions from "../../Helpers/MathFunctions";
import IDrawableImage from "../../DrawingSystem/IDrawableImage";

class MainMenuEntry implements IDrawableImage {
  public view: View;
  public type: EntryType;
  public menu: MainMenuView;
  public position = Vector.zero;

  public size = new Vector(200, 200);

  public image: HTMLImageElement;
  public isImageLoaded = false;

  public isExitItem() {
    return this.type === EntryType.ExitItem;
  }

  public isSelectable() {
    return this.type !== EntryType.Separator;
  }

  constructor(menu: MainMenuView, type: EntryType, view: View) {
    this.view = view;
    this.type = type;
    this.menu = menu;

    const canvas = this.view.viewManager.canvasManager;
    this.position = new Vector(canvas.width / 2 - this.size.width / 2, canvas.height / 2 - this.size.height / 2);

    this.image = new Image();
    this.image.src = `/src/game/Images/Interface/buttonPlay.png`;
    this.image.onload = () => {
      this.isImageLoaded = true;
    };
  }

  public initialize(): void {
  }

  public update(isSelected: boolean, gameTime: DOMHighResTimeStamp) {
  }

  public draw() {
    const canvas = this.view.viewManager.canvasManager;
    canvas.drawImage(this);
  }
}

export default MainMenuEntry;
