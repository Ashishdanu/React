
const ProductReducer = (state , action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...state , action.product];

}
}

export default ProductReducer
