export const validatePrice = (value, min, max, testid, error, setError) => {
    var errorStr = ''

    switch(true) {
        case value < 0: {
            errorStr = 'Value should be in between 0 and 1000';
            break;
        }
        case value > 1000: {
            errorStr = 'Value should be in between 0 and 1000';
            break;
        }

        case testid === "min-price" && value > max: {
            errorStr = 'Minimum value should be less than maximum';
            break;
        }
        
        case testid === "max-price" && value < min: {
            errorStr = 'Minimum value should be less than maximum';
            break;
        }

        default: {
            errorStr = '';
            break;
        }
    }

    errorStr !== error && setError(errorStr);

    return !errorStr
}

