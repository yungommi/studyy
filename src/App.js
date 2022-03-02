import './App.css';
import PoolInfo from './component/PoolInfo';
import Swap from './component/Swap';

export default function App() {
  return (
    <div className="App">
      
      <div>
        this is mock up programm of uniswap 
      </div>

      <div className="poolInfo">
          <PoolInfo/>
      </div>

      <div className='swap'>
          <Swap/>
      </div>

    </div>
  );
}

