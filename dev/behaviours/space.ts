            //laat de bal vliegen
class Space implements BallBehaviour {
    // protected readonly gravity    : number = 0.1
    // protected readonly friction   : number = 0.9

    // protected x           : number = 0
    // protected y           : number = 0
    // protected speedX      : number = 5
    // protected speedY      : number = -3
    // protected minWidth    : number = 0
    // protected maxWidth    : number = 0
    // protected maxHeight   : number = 0
    
    // constructor() {
    //     super(window.innerWidth/2, window.innerWidth)
    // }
    
    public performUpdate(ball: Ball) { //die Ball geef je mee zodat het weet op welk balletje hij het effect moet toepassen. 
        ball.x += ball.speedX
        ball.y += ball.speedY
        
        if (ball.x < ball.minWidth || ball.x > ball.maxWidth)
        {
            ball.speedX *= -1
            
        }
        if (ball.y < 0 || ball.y > ball.maxHeight)
        {
            ball.speedY *= -1
        }

        ball.draw()
    }
}