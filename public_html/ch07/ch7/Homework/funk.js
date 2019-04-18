function one(x, y){
    
    return document.getElementById('result').innerHTML=("The value of " + x +
                " to the power of " + y + " is " + (Math.pow(x,y)));
    
}

function two(x, y){
    
    var ans = (0.5 * x * y);
    return document.getElementById('result').innerHTML=("The area of a right triangle with base = " + x + " and height = " +
                y + " is result " + ans);
}

function three(x, y){
    
    var a = (0 - x);
    var b = (0 - y);
    var ans = ((a*a)-(b*b));
    return document.getElementById('result').innerHTML=("The distance from the origin to a point at coordinates (" + x +" , "+
                y + ") is result " + ans);
    
}

