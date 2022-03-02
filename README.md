Product requirements

Create a minimal centralized swap (=exchange) service that is similar to Uniswap (https://app.uniswap.org/#/swap ). Implement a mock-up swap feature so that a user can select two assets and execute a swap. Swap ratio (price) should be determined by to the current liquidities of a pool.

V The number of tradable assets is more than 2 

V A pool is initialized with some default amount of your choice if a user clicks on the init button

V Pool info shows liquidity of each pair. And each pair's liquidity can be initialized by user with any amounts. Therefore, there should be two inputs and init button for each asset pairs.

V There are two select buttons for input/output assets. If a user tap on a select button, modal that contains the list of the available assets shows up.

V If a user enters either an input or output amount, the other amount is automatically computed and displayed.

If a user selects two assets and input/output amounts are okay, swap button is activated

        V Input/output assets exchange ratio should be exact
        
        V The reserve for the output asset pool has to have enough balance 
        
V After a swap, pool state has to change.

여러번 시행하고나서 k값이 맘대로 바뀌기도 하는것같습니다.... 