class Main {

    private balls : Ball[] = []
    private basketball : Ball

    constructor() {
        console.log("Hoi");
        this.balls.push(new Ball(0, window.innerWidth/2, new Bouncing()))
        this.balls.push(new Ball(window.innerWidth/2, window.innerWidth, new Space()))

        this.basketball = new Ball(0, window.innerWidth, new Space(), "basketball")
        this.gameLoop()
    }

    gameLoop() {
        for (const ball of this.balls) {
            ball.update()
        }

        this.basketball.update()
        // if basketball is aan de linkerkant
        if(this.basketball.x > window.innerWidth / 2) {
            this.basketball.setBehaviour(new Space())
        }

        // else
        else {
            this.basketball.setBehaviour(new Bouncing())
        }

        requestAnimationFrame(() => this.gameLoop())
    }
}

window.addEventListener("load", () => new Main())