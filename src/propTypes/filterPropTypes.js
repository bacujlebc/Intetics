import PropTypes from 'prop-types';

const filterPropTypes = {
    text: PropTypes.string.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    minPrice: PropTypes.number.isRequired,
    maxPrice: PropTypes.number.isRequired,
    sort: PropTypes.string.isRequired,
    productsCount: PropTypes.number,
    dispatch: PropTypes.func.isRequired,
}

export default filterPropTypes;