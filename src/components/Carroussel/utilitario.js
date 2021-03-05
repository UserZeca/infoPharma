function ConvertStringToHex(str) {
    var arr = [];
    str = str.replace(/[#]/, '');
    
    let r = (16 * parseInt(`0x${str.charAt(0)}`,16)) + parseInt(`0x${str.charAt(1)}`,16);
    let g = (16 * parseInt(`0x${str.charAt(2)}`,16)) + parseInt(`0x${str.charAt(3)}`,16);
    let b = (16 * parseInt(`0x${str.charAt(4)}`,16)) + parseInt(`0x${str.charAt(5)}`,16);
    
    let media = (r + g + b)/3;
    console.log(r);
    console.log(g);
    console.log(b);
    console.log('Média');
    console.log(media);
  
    if(media < 127){
      r = Math.min(r + 127, 255).toString(16);
      g = Math.min(g + 127, 255).toString(16);
      b = Math.min(b + 127, 255).toString(16);
  
    }else{
      r = Math.max(r - 127, 0).toString(16);
      g = Math.max(g - 127, 0).toString(16);
      b = Math.max(b - 127, 0).toString(16);  
    }
  
    arr.push(("0" + r).slice(-2));
    arr.push(("0" + g).slice(-2));
    arr.push(("0" + b).slice(-2));
  
    console.log(str);
    console.log(arr);
    /*for (var i = 0; i < str.length; i++) {
           
           arr[i] =  (15 - parseInt(`0x${str.charAt(i)}`, 16)).toString(16);
    }
  
    */
    return "#" + arr.join("");
  }

  export default ConvertStringToHex;