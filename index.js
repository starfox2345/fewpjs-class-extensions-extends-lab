// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides
        this.count = this.sides.length
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        let sum = 0;
        let i = 0;
        while (i < this.sides.length){
            sum += this.sides[i];
            i++;
        }
        return sum
    }
}

class Triangle extends Polygon{
    get isValid(){
        if (this.count === 3){
            let sideOne = this.sides[0]
            let sideTwo = this.sides[1]
            let sideThree = this.sides[2]
            return ((sideOne + sideTwo > sideThree) && (sideOne + sideThree > sideTwo) && (sideTwo + sideThree > sideOne))
            // {return true} else {return false}
        // } else {
        //     return false        
        }
    }
}

class Square extends Polygon{
    get isValid(){
        if (this.count === 4) {
            let sideOne = this.sides[0]
            let sideTwo = this.sides[1]
            let sideThree = this.sides[2]
            let sideFour = this.sides[3]
            return ((sideOne * sideTwo) === (sideThree * sideFour))
        }
    }

    get area(){
        return this.sides[0]**2
    }
}