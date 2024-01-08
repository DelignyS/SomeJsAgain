function rgb(r, g, b){ // this fonction is mainly used to convert the rgb value to hexadecimal value
  return toHex(r) + toHex(g) + toHex(b); // return the hexadecimal value
}

function toHex(d) { // this function is used to convert the decimal value to hexadecimal value
    return  ("0"+(Number(d < 0 ? 0 : d > 255 ? 255 : d).toString(16))).slice(-2).toUpperCase() // return the hexadecimal value
}