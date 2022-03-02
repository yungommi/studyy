import './PoolInfo.css';
import { useState, useEffect } from "react"; 
import { HStack, Box, Center } from '@chakra-ui/react';

export default function PoolInfo () {
    //pool A & B
    const [AofAB, setAofAB] = useState("");
    const [BofAB, setBofAB] = useState("");
    const onChangeAofAB = (event) => setAofAB(event.target.value);
    const onChangeBofAB = (event) => setBofAB(event.target.value);
    const onSubmitAB = (event) => {
        event.preventDefault();
        if (AofAB !=='') {
            localStorage.setItem('AofAB', AofAB);  
        }
        if (BofAB !=='') {
            localStorage.setItem('BofAB', BofAB); 
        }
        localStorage.setItem('KofAB', localStorage.getItem('AofAB')*localStorage.getItem('BofAB')); 
        setAofAB('');
        setBofAB('');
    };
    //pool A & C
    const [AofAC, setAofAC] = useState("");
    const [CofAC, setCofAC] = useState("");
    const onChangeAofAC = (event) => setAofAC(event.target.value);
    const onChangeCofAC = (event) => setCofAC(event.target.value);
    const onSubmitAC = (event) => {
        event.preventDefault();
        if (AofAC !=='') {
            localStorage.setItem('AofAC',AofAC);  
        }
        if (CofAC !=='') {
            localStorage.setItem('CofAC',CofAC); 
        }
        localStorage.setItem('KofAC', localStorage.getItem('AofAC')*localStorage.getItem('CofAC') ); 
        setAofAC('');
        setCofAC('');
    };
    //pool A & D 
    const [AofAD, setAofAD] = useState("");
    const [DofAD, setDofAD] = useState("");
    const onChangeAofAD = (event) => setAofAD(event.target.value);
    const onChangeDofAD = (event) => setDofAD(event.target.value);
    const onSubmitAD = (event) => {
        event.preventDefault();
        if (AofAD !=='') {
            localStorage.setItem('AofAD',AofAD);  
        }
        if (DofAD !=='') {
            localStorage.setItem('DofAD',DofAD); 
        }
        localStorage.setItem('KofAD', localStorage.getItem('AofAD')*localStorage.getItem('DofAD') ); 
        setAofAD('');
        setDofAD('');
    };

    //pool B & C 
    const [BofBC, setBofBC] = useState("");
    const [CofBC, setCofBC] = useState("");
    const onChangeBofBC = (event) => setBofBC(event.target.value);
    const onChangeCofBC = (event) => setCofBC(event.target.value);
    const onSubmitBC = (event) => {
        event.preventDefault();
        if (BofBC !=='') {
            localStorage.setItem('BofBC',BofBC);  
        }
        if (CofBC !=='') {
            localStorage.setItem('CofBC',CofBC); 
        }
        localStorage.setItem('KofBC', localStorage.getItem('BofBC')*localStorage.getItem('CofBC') ); 
        setBofBC('');
        setCofBC('');
    };
    //pool B & D
    const [BofBD, setBofBD] = useState("");
    const [DofBD, setDofBD] = useState("");
    const onChangeBofBD = (event) => setBofBD(event.target.value);
    const onChangeDofBD = (event) => setDofBD(event.target.value);
    const onSubmitBD = (event) => {
        event.preventDefault();
        if (BofBD !=='') {
            localStorage.setItem('BofBD',BofBD);  
        }
        if (DofBD !=='') {
            localStorage.setItem('DofBD',DofBD); 
        }
        localStorage.setItem('KofBD', localStorage.getItem('BofBD')*localStorage.getItem('DofBD') ); 
        setBofBD('');
        setDofBD('');
    };
    //pool C & D
    const [CofCD, setCofCD] = useState("");
    const [DofCD, setDofCD] = useState("");
    const onChangeCofCD = (event) => setCofCD(event.target.value);
    const onChangeDofCD = (event) => setDofCD(event.target.value);
    const onSubmitCD = (event) => {
        event.preventDefault();
        if (CofCD !=='') {
            localStorage.setItem('CofCD',CofCD);  
        }
        if (DofCD !=='') {
            localStorage.setItem('DofCD',DofCD); 
        }
        localStorage.setItem('KofCD', localStorage.getItem('CofCD')*localStorage.getItem('DofCD') ); 
        setCofCD('');
        setDofCD('');
    };

    const reset = (event) => {
        localStorage.setItem('BofBC', 0)
        localStorage.setItem('CofBC', 0)
    }
    /* <button onClick={reset}>
            reset
        </button> */
    return(
        <div className="pool-info">
            <h2>pool info</h2>
            <div>
            <HStack>
                <Box w='100px' h='40px' className='poolName'><Center> A-B </Center></Box>
                <Box w='350px' h='40px' className='poolAmount'>
                    <Center>
                            {localStorage.getItem('AofAB')}/ {localStorage.getItem('BofAB')}
                    </Center>
                </Box>
                <Box w='80px' h='40px' className="k"><Center>k : {localStorage.getItem('KofAB')}</Center></Box>
                <Box w='415px' h='40px' className='poolForm'>
                    <Center>
                    <form onSubmit={onSubmitAB}>
                        <HStack>
                            <input 
                                onChange={onChangeAofAB} 
                                value={AofAB} 
                                type='number'
                                placeholder="A"
                            />
                            <input 
                                onChange={onChangeBofAB} 
                                value={BofAB} 
                                type='number'
                                placeholder="B"
                            />
                            <button>Init</button>
                        </HStack>
                    </form>
                    </Center>
                </Box>
            </HStack>
            </div>

            <div>
            <HStack>
                <Box w='100px' h='40px' className='poolName'><Center> A-C </Center></Box>
                <Box w='350px' h='40px' className='poolAmount'>
                    <Center>
                        {localStorage.getItem('AofAC')} / {localStorage.getItem('CofAC')}
                    </Center>
                </Box>
                <Box w='80px' h='40px' className="k"><Center>k : {localStorage.getItem('KofAC')}</Center></Box>
                <Box w='415px' h='40px' className='poolForm'>
                    <Center>
                    <form onSubmit={onSubmitAC}>
                        <HStack>
                            <input 
                                onChange={onChangeAofAC} 
                                value={AofAC} 
                                type='number'
                                placeholder="A"
                            />
                            <input 
                                onChange={onChangeCofAC} 
                                value={CofAC} 
                                type='number'
                                placeholder="C"
                            />
                            <button>Init</button>
                        </HStack>
                    </form>
                    </Center>
                </Box>
            </HStack>
            </div>

            <div>
            <HStack>
                <Box w='100px' h='40px' className='poolName'><Center> A-D </Center></Box>
                <Box w='350px' h='40px' className='poolAmount'>
                    <Center>
                        {localStorage.getItem('AofAD')} / {localStorage.getItem('DofAD')}
                    </Center>
                </Box>
                <Box w='80px' h='40px' className="k"><Center>k : {localStorage.getItem('KofAD')}</Center></Box>
                <Box w='415px' h='40px' className='poolForm'>
                    <Center>
                    <form onSubmit={onSubmitAD}>
                        <HStack>
                            <input 
                                onChange={onChangeAofAD} 
                                value={AofAD} 
                                type='number'
                                placeholder="A"
                            />
                            <input 
                                onChange={onChangeDofAD} 
                                value={DofAD} 
                                type='number'
                                placeholder="D"
                            />
                            <button>Init</button>
                        </HStack>
                    </form>
                    </Center>
                </Box>
            </HStack>
            </div>

            <div>
            <HStack>
                <Box w='100px' h='40px' className='poolName'><Center> B-C </Center></Box>
                <Box w='350px' h='40px' className='poolAmount'>
                    <Center>
                        {localStorage.getItem('BofBC')} / {localStorage.getItem('CofBC')}
                    </Center>
                </Box>
                <Box w='80px' h='40px' className="k"><Center>k : {localStorage.getItem('KofBC')}</Center></Box>
                <Box w='415px' h='40px' className='poolForm'>
                    <Center>
                    <form onSubmit={onSubmitBC}>
                        <HStack>
                            <input 
                                onChange={onChangeBofBC} 
                                value={BofBC} 
                                type='number'
                                placeholder="B"
                            />
                            <input 
                                onChange={onChangeCofBC} 
                                value={CofBC} 
                                type='number'
                                placeholder="C"
                            />
                            <button>Init</button>
                        </HStack>
                    </form>
                    </Center>
                </Box>
            </HStack>
            </div>

            <div>
            <HStack>
                <Box w='100px' h='40px' className='poolName'><Center> B-D </Center></Box>
                <Box w='350px' h='40px' className='poolAmount'>
                    <Center>
                        {localStorage.getItem('BofBD')} / {localStorage.getItem('DofBD')}
                    </Center>
                </Box>
                <Box w='80px' h='40px' className="k"><Center>k : {localStorage.getItem('KofBD')}</Center></Box>
                <Box w='415px' h='40px' className='poolForm'>
                    <Center>
                    <form onSubmit={onSubmitBD}>
                        <HStack>
                            <input 
                                onChange={onChangeBofBD} 
                                value={BofBD} 
                                type='number'
                                placeholder= 'B'
                            />
                            <input 
                                onChange={onChangeDofBD} 
                                value={DofBD} 
                                type='number'
                                placeholder="D"
                            />
                            <button>Init</button>
                        </HStack>
                    </form>
                    </Center>
                </Box>
            </HStack>
            </div>

            <div>
            <HStack>
                <Box w='100px' h='40px' className='poolName'><Center> C-D </Center></Box>
                <Box w='350px' h='40px' className='poolAmount'>
                    <Center>
                        {localStorage.getItem('CofCD')} / {localStorage.getItem('DofCD')}
                    </Center>
                </Box>
                <Box w='80px' h='40px' className="k"><Center>k : {localStorage.getItem('KofCD')}</Center></Box>
                <Box w='415px' h='40px' className='poolForm'>
                    <Center>
                    <form onSubmit={onSubmitCD}>
                        <HStack>
                            <input 
                                onChange={onChangeCofCD} 
                                value={CofCD} 
                                type='number'
                                placeholder="C"
                            />
                            <input 
                                onChange={onChangeDofCD} 
                                value={DofCD} 
                                type='number'
                                placeholder="D"
                            />
                            <button>Init</button>
                        </HStack>
                    </form>
                    </Center>
                </Box>
            </HStack>
            </div>
        </div>
    )
};