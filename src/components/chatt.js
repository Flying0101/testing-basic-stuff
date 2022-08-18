import { React, useState } from 'react';


import '../css/chatt.css';



function ChattFile() {

    const btn = document.getElementById('input');

    const [input, setInput] = useState('');
    const [list, setList] = useState([]);

    const Value = () => {

        setList((lista) => [...lista, input]);

        setInput('');
        btn.value = '';


    }

    const Clear = () => {
          setList([]);
    }


    return (
        <div className="ChattFile">


            <h1 className="chattH">Basic Chatt!</h1>
            <div className="Chatt">
                {list.map((msg) => {
                    return (
                        <div>
                            <p>{msg}</p>

                        </div>
                    )

                })}

            </div>

            <div className="lol">
                <p>WRITE SOMETHING</p>
                <input type="text" id="input" onChange={(event) => { setInput(event.target.value) }} ></input>
                <button onClick={(Value)}>SEND</button>
                <button onClick={(Clear)}>CLEAR CHATT</button> 
            </div>
        </div>
    );
}

export default ChattFile;
