
class Ball extends HTMLElement{

    public readonly gravity    : number = 0.1
    public readonly friction   : number = 0.9

    private ballBehaviour : BallBehaviour

        // public htmlElement : HTMLElement

    public x           : number = 0
    public y           : number = 0
    public speedX      : number = 5
    public speedY      : number = -3
    public minWidth    : number = 0
    public maxWidth    : number = 0
    public maxHeight   : number = 0

    
    // public get X() : number { return this.x }
    
    public setBehaviour(behaviour : BallBehaviour) {
        this.ballBehaviour = behaviour
    }

    
    constructor(minWidth : number, maxWidth : number, behaviour : BallBehaviour, type : string = "ball") {
        super()
        // aah hoe kon je weten dat je nieuwe parameters aan de constructor 
        // mocht meegeven, er stond niks over in die UML ofzo.
        console.log('created')
        
        if (type == "basketball") {
            this.classList.add("basketball")
        }

        this.ballBehaviour = behaviour


        let content = document.getElementsByTagName("content")[0]
        content.appendChild(this)

        maxWidth -= this.clientWidth
        this.x = (Math.random() * (maxWidth - minWidth)) + minWidth
        this.y = 100

        this.minWidth   = minWidth
        this.maxWidth   = maxWidth
        this.maxHeight  = window.innerHeight - this.clientHeight
    }

    public update() : void {
        this.ballBehaviour.performUpdate(this)
    }

    public draw() {
        this.style.transform = "translate("+this.x+"px, "+this.y+"px)"
    }
}

window.customElements.define("ball-component", Ball as any, {extends : 'template'})
