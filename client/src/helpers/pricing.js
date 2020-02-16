export const formatPrice = (price) => {
    let priceArr = price.toString().split('');
    priceArr.splice(priceArr.length -2, 0, '.');
    return priceArr.join('')
}