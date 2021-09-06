class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.s1 = loadImage("sprites/sling1.png");
        this.s2 = loadImage("sprites/sling2.png");
        this.s3 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.s1,200,50);
        image(this.s2,170,50);
      
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
           
           if(this.sling.bodyA.position.x>200){
            image(this.s3,pointA.x+20,pointA.y-10,15,35); 
            line(pointA.x+20, pointA.y, pointB.x, pointB.y);
            line(pointA.x+20, pointA.y, pointB.x+40, pointB.y);
           }
           else{
            image(this.s3,pointA.x-20,pointA.y-10,15,35);
            line(pointA.x-20, pointA.y, pointB.x, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+40, pointB.y);
           } 

        }
        }
    }
    
