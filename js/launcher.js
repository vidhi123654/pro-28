class Launcher{
    constructor(body,pt){
        var options={
            bodyA:body,
            pointB:pt,
            stiffness:0.03,
            length:10
               
        }
      

    this.launcher=Matter.Constraint.create(options)
    World.add(world,this.launcher)

    }

    fly(){
        this.launcher.bodyA=null
    }
}