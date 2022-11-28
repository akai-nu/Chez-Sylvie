const cnv = document.querySelector(".cnv");
const ctx = cnv.getContext("2d");

cnv.width = (window.innerWidth * 100) / 100;
cnv.height = (window.innerWidth * 100) / 100;
ctx.fillStyle = "#fff";

class Drop {
    constructor() {
        this.x = Math.random() * cnv.width;
        this.y = Math.random() * cnv.height;
        this.size = Math.random() * 2;
        this.speed = Math.random() * 8;
    }

    run() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 1.5);
        ctx.fill();
        ctx.closePath();

        this.y += this.speed;

        if (this.y > cnv.height) {
            this.x = Math.random() * cnv.width;
            this.y = 0;
        }
    }
};

let drops = [];

for (let i = 0; i < 750; i++) {
    drops.push(new Drop());
}

const animation = () => {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    drops.map((drop) => {drop.run()});
    requestAnimationFrame(animation);
}

animation();
