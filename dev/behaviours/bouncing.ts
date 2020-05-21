            //laat de bal stuiteren

class Bouncing implements BallBehaviour {

    // constructor() {
    //     super(0, window.innerWidth/2)
        
    // }

    // protected readonly gravity    : number = 0.1
    // protected readonly friction   : number = 0.9

    // protected x           : number = 0
    // protected y           : number = 0
    // protected speedX      : number = 5
    // protected speedY      : number = -3
    // protected minWidth    : number = 0
    // protected maxWidth    : number = 0
    // protected maxHeight   : number = 0
    
    public performUpdate(ball: Ball) { //die Ball geef je mee zodat het weet op welk balletje hij het effect moet toepassen. 
        if (ball.x < ball.minWidth)
        {
            ball.x = ball.minWidth
            ball.speedX *= -1
            ball.speedX *= ball.friction
        }
        if(ball.x > ball.maxWidth) {
            ball.x = ball.maxWidth
            ball.speedX *= -1
            ball.speedX *= ball.friction
        }
        if (ball.y + ball.speedY > ball.maxHeight)
        {
            ball.y = ball.maxHeight;
            ball.speedY *= -1
            // Weerstand
            ball.speedY *= ball.friction
            ball.speedX *= ball.friction
        }
        else {
            ball.speedY += ball.gravity
        }

        ball.x += ball.speedX
        ball.y += ball.speedY
        
        ball.draw()
    }
}