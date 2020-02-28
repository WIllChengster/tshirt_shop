export const formatPrice = (price) => {
    let priceArr = price.toString().split('');
    priceArr.splice(priceArr.length -2, 0, '.');
    return Number(priceArr.join('')).toFixed(2);
}

export const getSubtotal = (cart, default_format=true) => {
    
    let total = 0;
    for( let i = 0; i<cart.length; i++){
        total += cart[i].price
    }
    if(default_format===false){
        return total
    } else return Number(formatPrice(total))
}