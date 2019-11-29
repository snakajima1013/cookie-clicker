import "phaser";
import { GameScene } from "./scenes/game-scene";

export const CONFIG: Phaser.Types.Core.GameConfig = {
  width: 600,
  height: 300,
  parent: "game",
  scene: [GameScene],
  input: {
    keyboard: true
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 }
    }
  },
  render: { pixelArt: true }
};
