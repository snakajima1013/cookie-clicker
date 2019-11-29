export class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: "GameScene"
    });
  }

  create(): void {
    this.add.text(250, 150, 'Hello World', { fill: '#fff' });
  }
}
