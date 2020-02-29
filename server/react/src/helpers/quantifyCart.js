let quantifiedCart = (inputCart) => {
    const cartOutput = [];
    for(let i = 0; i < inputCart.length; i++){
         if(cartOutput.length === 0){
            cartOutput.push({
                ...inputCart[i],
                quantity: 1,
            })
            continue;
        }

        let itemFound = false;
        for(let j = 0; j < cartOutput.length; j++){
            if( inputCart[i].shirt_id === cartOutput[j].shirt_id ){
                cartOutput[j].quantity += 1;
                itemFound = true
                break;
            }
        }

        if( !itemFound ) {
            cartOutput.push({
                ...inputCart[i],
                quantity: 1,
            })
        }
        
    }

    return cartOutput
}

export default quantifiedCart