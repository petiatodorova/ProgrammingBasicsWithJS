function radiansToGradusi(radiansString){
    let radians = radiansString[0];
    let gradusi = (radians * 180) / Math.PI;
    console.log(gradusi);
}
radiansToGradusi(["6.2832"]);