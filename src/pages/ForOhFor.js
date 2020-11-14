import React from 'react';
import forohfor from './404.png';

function ForOhFor() {
    console.log(forohfor);
    return (
        <div className="App">
            <img src={forohfor} alt="404 Page You Are Lost" height={580} width={1024} /> 
        </div>
    )
}

export default ForOhFor;