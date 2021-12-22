import React, { FC } from 'react';

export const MintOptions: FC = () => {
    
    function buyNft(amount: number) {
        alert(`Buying ${amount}`);
    }

    return <div>
        <button onClick={() => buyNft(1)}>Buy 1</button>
        <button onClick={() => buyNft(3)}>Buy 3</button>
        <button onClick={() => buyNft(5)}>Buy 5</button>
    </div>;
};
