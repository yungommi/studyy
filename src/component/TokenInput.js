import PropTypes from "prop-types";

export default function TokenInput(props) {
    return (
        <div class="text-center" >
            <input class="form-group form-control" type='number' value={props.amount}
                   onChange={ev => props.onAmountChange(ev.target.value)}
                   disabled={ev => props.swapDisabled(ev.target.value)}
                   />
            <select placeholder="select" class="form-group form-control" value={props.currency} 
                onChange={ev => props.onCurrencyChange(ev.target.value)}>
                    {props.currencies.map((currency => (
                    <option value={currency}>{currency}</option>
                )))}
            </select>
        </div>
    );
}
TokenInput.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    swapDisabled: PropTypes.bool,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,
};

