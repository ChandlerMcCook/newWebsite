import { useEffect, useRef } from 'react';
import Phaser from 'phaser';

const sizes = {
  width: 800,
  height: 600
};

const speedDown = 300;

class GameScene extends Phaser.Scene {
  constructor() {
    super('scene-game');
    this.player = null;
    this.cursor = null;
    this.playerSpeed = speedDown + 50;
    this.target = null;
    this.points = 0;
    this.scoreText = null;
  }

  preload() {
    this.load.image('bg', '/games/Pig_Schmunch/mud.png');
    this.load.image('pig', '/games/Pig_Schmunch/maw.png');
    this.load.image('apple', '/games/Pig_Schmunch/apple.png');
  }

  create() {
    const centerX = this.cameras.main.centerX;
    const centerY = this.cameras.main.centerY;

    // background
    this.add.image(centerX, centerY, 'bg').setOrigin(0.5);

    // player (pig)
    this.player = this.physics.add.image(centerX, sizes.height - 100, 'pig').setOrigin(0.5);
    this.player.setImmovable(true);
    this.player.body.allowGravity = false;
    this.player
      .setSize(this.player.width - this.player.width/4, this.player.height/6)
      .setOffset(this.player.width/10, this.player.height - this.player.height/2);

    // cursor
    this.cursor = this.input.keyboard.createCursorKeys();

    // apple
    this.target = this.physics.add.image(centerX, 0, 'apple');
    this.target.setMaxVelocity(0, speedDown);

    // text
    this.scoreText = this.add
      .text(sizes.width - 100, 100, 'Score: 0', { fontSize: '32px', fill: 'white' })
      .setOrigin(.5);

    // overlap of pig and apple
    this.physics.add.overlap(this.player, this.target, this.targetHit, null, this);
  }

  update() {
    if (this.target.y >= sizes.height) {
      this.target.setY(0);
      this.target.setX(this.getRandomX() + 10);
    }

    const {left, right} = this.cursor;
    if (left.isDown) {
      this.player.setVelocityX(-this.playerSpeed);
    } else if (right.isDown) {
      this.player.setVelocityX(this.playerSpeed);
    } else {
      this.player.setVelocityX(0);
    }
  }

  getRandomX() {
    return Math.floor(Math.random() * (sizes.width - 20));
  }

  targetHit() {
    this.target.setY(0);
    this.target.setX(this.getRandomX() + 10);
    this.points++;
    this.scoreText.setText(`Score: ${this.points}`);
  }
};


const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.RESIZE,
    parent: 'game',
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: speedDown },
      debug: true
    }
  },
  width: sizes.width,
  height: sizes.height,
  title: 'Pig Schmunch',
  scene: GameScene
};

function PigSchmunch() {
  const firstTime = useRef(true);
  useEffect(() => {
    if (firstTime.current) {
      const game = new Phaser.Game(config);
      firstTime.current = false;
    }
    return;
  }, []);

  return (
    <div id="game" style={{ width: `${sizes.width}px`, height: `${sizes.height}px` }}></div>
  );
}

export default PigSchmunch;