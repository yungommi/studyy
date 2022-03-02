import './Swap.css'
import TokenInput from "./TokenInput";
import {useEffect, useState} from "react"; 

function format(number) {
    return number.toFixed(2);
}

export default function Swap () {
    const prices = {"A":10, "B":20, "C":5, "D":15};
    const [amount1, setAmount1] = useState('');
    const [amount2, setAmount2] = useState('');
    const [currency1, setCurrency1] = useState('A');
    const [currency2, setCurrency2] = useState('B');
    const [price1, setPrice1] = useState(0);
    const [price2, setPrice2] = useState(0);
    
    const [selected1, setSelected1] = useState();
    const [selected2, setSelected2] = useState();
    const [selectedK, setSelectedK] = useState();

    function handleCurrency1Change(currency1) {
        setCurrency1(currency1);        
    };
    function handleCurrency2Change(currency2) {
        setCurrency2(currency2);        
    };

    function handleAmount1Change(amount1) {
        if (currency1=='A' & currency2=='B') {
            setSelected1(parseFloat(localStorage.getItem('AofAB'),3));
            setSelected2(parseFloat(localStorage.getItem('BofAB'),3));
            setSelectedK(parseFloat(localStorage.getItem('KofAB'),3));
        }
        if (currency1=='B' & currency2=='A') {
            setSelected1(parseFloat(localStorage.getItem('BofAB'),3));
            setSelected2(parseFloat(localStorage.getItem('AofAB'),3));
            setSelectedK(parseFloat(localStorage.getItem('KofAB'),3));
        }
        if (currency1=='A' & currency2=='C') {
            setSelected1(parseFloat(localStorage.getItem('AofAC'),3));
            setSelected2(parseFloat(localStorage.getItem('CofAC'),3));
            setSelectedK(parseFloat(localStorage.getItem('KofAC'),3));
        }
        if (currency1=='C' & currency2=='A') {
            setSelected1(parseFloat(localStorage.getItem('CofAC'),3));
            setSelected2(parseFloat(localStorage.getItem('AofAC'),3));
            setSelectedK(parseFloat(localStorage.getItem('KofAC'),3));
        }
        if (currency1=='A' & currency2=='D') {
            setSelected1(parseFloat(localStorage.getItem('AofAD'),3));
            setSelected2(parseFloat(localStorage.getItem('DofAD'),3));
            setSelectedK(parseFloat(localStorage.getItem('KofAD'),3));
        }
        if (currency1=='D' & currency2=='A') {
            setSelected1(parseFloat(localStorage.getItem('DofAD'),3));
            setSelected2(parseFloat(localStorage.getItem('AofAD'),3));
            setSelectedK(parseFloat(localStorage.getItem('KofAD'),3));
        }
        if (currency1=='B' & currency2=='C') {
            setSelected1(parseFloat(localStorage.getItem('BofBC'),3));
            setSelected2(parseFloat(localStorage.getItem('CofBC'),3));
            setSelectedK(parseFloat(localStorage.getItem('KofBC'),3));
        }
        if (currency1=='C' & currency2=='B') {
            setSelected1(parseFloat(localStorage.getItem('CofBC'),3));
            setSelected2(parseFloat(localStorage.getItem('BofBC'),3));
            setSelectedK(parseFloat(localStorage.getItem('KofBC'),3));
        }
        if (currency1=='B' & currency2=='D') {
            setSelected1(parseFloat(localStorage.getItem('BofBD'),3));
            setSelected2(parseFloat(localStorage.getItem('DofBD'),3));
            setSelectedK(parseFloat(localStorage.getItem('KofBD'),3));
        }
        if (currency1=='D' & currency2=='B') {
            setSelected1(parseFloat(localStorage.getItem('DofBD'),3));
            setSelected2(parseFloat(localStorage.getItem('BofBD'),3));
            setSelectedK(parseFloat(localStorage.getItem('KofBD'),3));
        }
        if (currency1=='C' & currency2=='D') {
            setSelected1(parseFloat(localStorage.getItem('CofCD'),3));
            setSelected2(parseFloat(localStorage.getItem('DofCD'),3));
            setSelectedK(parseFloat(localStorage.getItem('KofCD'),3));
        }
        if (currency1=='D' & currency2=='C') {
            setSelected1(parseFloat(localStorage.getItem('DofCD'),3));
            setSelected2(parseFloat(localStorage.getItem('CofCD'),3));
            setSelectedK(parseFloat(localStorage.getItem('KofCD'),3));
        }
        setAmount2( selected2 - (selectedK / (selected1 + parseFloat(amount1,3))) );
        setAmount1(amount1);
        setPrice1(format(amount1 * prices[currency1]));
        setPrice2(format(amount2 * prices[currency2]));
    };
    
    function handleAmount2Change(amount2) {
        if (currency1=='A' & currency2=='B') {
            setSelected1(parseFloat(localStorage.getItem('AofAB'),3));
            setSelected2(parseFloat(localStorage.getItem('BofAB'),3));
            setSelectedK(parseFloat(localStorage.getItem('KofAB'),3))
        }
        if (currency1=='B' & currency2=='A') {
            setSelected1(parseFloat(localStorage.getItem('BofAB'),3));
            setSelected2(parseFloat(localStorage.getItem('AofAB'),3));
            setSelectedK(parseFloat(localStorage.getItem('KofAB'),3))
        }
        if (currency1=='A' & currency2=='C') {
            setSelected1(parseFloat(localStorage.getItem('AofAC'),3));
            setSelected2(parseFloat(localStorage.getItem('CofAC'),3));
            setSelectedK(parseFloat(localStorage.getItem('KofAC'),3));
        }
        if (currency1=='C' & currency2=='A') {
            setSelected1(parseFloat(localStorage.getItem('CofAC'),3));
            setSelected2(parseFloat(localStorage.getItem('AofAC'),3));
            setSelectedK(parseFloat(localStorage.getItem('KofAC'),3));
        }
        if (currency1=='A' & currency2=='D') {
            setSelected1(parseFloat(localStorage.getItem('AofAD'),3));
            setSelected2(parseFloat(localStorage.getItem('DofAD'),3));
            setSelectedK(parseFloat(localStorage.getItem('KofAD'),3));
        }
        if (currency1=='D' & currency2=='A') {
            setSelected1(parseFloat(localStorage.getItem('DofAD'),3));
            setSelected2(parseFloat(localStorage.getItem('AofAD'),3));
            setSelectedK(parseFloat(localStorage.getItem('KofAD'),3));
        }
        if (currency1=='B' & currency2=='C') {
            setSelected1(parseFloat(localStorage.getItem('BofBC'),3));
            setSelected2(parseFloat(localStorage.getItem('CofBC'),3));
            setSelectedK(parseFloat(localStorage.getItem('KofBC'),3));
        }
        if (currency1=='C' & currency2=='B') {
            setSelected1(parseFloat(localStorage.getItem('CofBC'),3));
            setSelected2(parseFloat(localStorage.getItem('BofBC'),3));
            setSelectedK(parseFloat(localStorage.getItem('KofBC'),3));
        }
        if (currency1=='B' & currency2=='D') {
            setSelected1(parseFloat(localStorage.getItem('BofBD'),3));
            setSelected2(parseFloat(localStorage.getItem('DofBD'),3));
            setSelectedK(parseFloat(localStorage.getItem('KofBD'),3));
        }
        if (currency1=='D' & currency2=='B') {
            setSelected1(parseFloat(localStorage.getItem('DofBD'),3));
            setSelected2(parseFloat(localStorage.getItem('BofBD'),3));
            setSelectedK(parseFloat(localStorage.getItem('KofBD'),3));
        }
        if (currency1=='C' & currency2=='D') {
            setSelected1(parseFloat(localStorage.getItem('CofCD'),3));
            setSelected2(parseFloat(localStorage.getItem('DofCD'),3));
            setSelectedK(parseFloat(localStorage.getItem('KofCD'),3));
        }
        if (currency1=='D' & currency2=='C') {
            setSelected1(parseFloat(localStorage.getItem('DofCD'),3));
            setSelected2(parseFloat(localStorage.getItem('CofCD'),3));
            setSelectedK(parseFloat(localStorage.getItem('KofCD'),3));
        }
        setAmount1(( selectedK / (selected2 - parseFloat(amount2,3))) - selected2 );
        setAmount2(amount2);
        setPrice1(format(amount1 * prices[currency1]));
        setPrice2(format(amount2 * prices[currency2]));
    };

    function onSubmit(){
        if (currency1 == 'A' & currency2 == 'B') {
            localStorage.setItem('AofAB', selected1 + parseFloat(amount1,3) )
            localStorage.setItem('BofAB', selected2 - parseFloat(amount2,3))
        }
        if (currency1 == 'B' & currency2 == 'A') {
            localStorage.setItem('BofAB', selected1 + parseFloat(amount1,3) )
            localStorage.setItem('AofAB', selected2 - parseFloat(amount2,3))
        }
        if (currency1 == 'A' & currency2 == 'C') {
            localStorage.setItem('AofAC', selected1 + parseFloat(amount1,3) )
            localStorage.setItem('CofAC', selected2 - parseFloat(amount2,3))
        }
        if (currency1 == 'C' & currency2 == 'A') {
            localStorage.setItem('CofAC', selected1 + parseFloat(amount1,3) )
            localStorage.setItem('AofAC', selected2 - parseFloat(amount2,3))
        }
        if (currency1 == 'A' & currency2 == 'D') {
            localStorage.setItem('AofAD', selected1 + parseFloat(amount1,3) )
            localStorage.setItem('DofAD', selected2 - parseFloat(amount2,3))
        }
        if (currency1 == 'D' & currency2 == 'A') {
            localStorage.setItem('DofAD', selected1 + parseFloat(amount1,3) )
            localStorage.setItem('AofAD', selected2 - parseFloat(amount2,3))
        }
        if (currency1 == 'B' & currency2 == 'C') {
            localStorage.setItem('BofBC', selected1 + parseFloat(amount1,3) )
            localStorage.setItem('CofBC', selected2 - parseFloat(amount2,3))
        }
        if (currency1 == 'C' & currency2 == 'B') {
            localStorage.setItem('CofBC', selected1 + parseFloat(amount1,3) )
            localStorage.setItem('BofBC', selected2 - parseFloat(amount2,3))
        }
        if (currency1 == 'B' & currency2 == 'D') {
            localStorage.setItem('BofBD', selected1 + parseFloat(amount1,3) )
            localStorage.setItem('DofBD', selected2 - parseFloat(amount2,3))
        }
        if (currency1 == 'D' & currency2 == 'B') {
            localStorage.setItem('DofBD', selected1 + parseFloat(amount1,3) )
            localStorage.setItem('BofBD', selected2 - parseFloat(amount2,3))
        }
        if (currency1 == 'C' & currency2 == 'D') {
            localStorage.setItem('CofCD', selected1 + parseFloat(amount1,3) )
            localStorage.setItem('DofCD', selected2 - parseFloat(amount2,3))
        }
        if (currency1 == 'D' & currency2 == 'C') {
            localStorage.setItem('DofCD', selected1 + parseFloat(amount1,3) )
            localStorage.setItem('CofCD', selected2 - parseFloat(amount2,3))
        }
    };
    return (
    <div className="swap">
        <div>
            <h2>swap</h2>
            <form onSubmit={onSubmit}>
                <TokenInput
                    onAmountChange={handleAmount1Change}
                    onCurrencyChange={handleCurrency1Change}
                    currencies={Object.keys(prices)}
                    amount={amount1}
                    currency={currency1} 
                />
            $:{price1}
            <hr/>
            <TokenInput
                onAmountChange={handleAmount2Change}
                onCurrencyChange={handleCurrency2Change}
                currencies={Object.keys(prices)}
                amount={amount2}
                currency={currency2}
                max= {selected2} 
            />
            $:{price2}
            <hr/>
            <button disabled={ ( amount1 < 0 ) || ( amount2 < 0 )}>swap</button>
            </form>
        </div>
    </div>   
  );
};


