import React from 'react';

const Ulangan2 = (props) => {
    let rec = JSON.parse(props.kirim);
    console.log(rec);
    // rec[0].

    return (<div>
        <div>
            <label>1. {rec[0].soal}</label>
            <br/>
            <input type={rec[0].type} id="radio1" checked />{rec[0].a}
            <input type={rec[0].type} id="radio2" />{rec[0].b}
            <br/>
            <input type={rec[0].type} id="radio3" />{rec[0].c}
            <input type={rec[0].type} id="radio4" />{rec[0].d}
        </div>
        <div>
            <label> 2. {rec[1].soal}</label>
            <br/>
            <input type={rec[1].type} id="cb1" checked />
            <label>{rec[1].option[0]}</label><br/>
            <input type={rec[1].type} id="cb2" checked />
            <label>{rec[1].option[1]}</label><br/>
            <input type={rec[1].type} id="cb3" />
            <label>{rec[1].option[2]}</label><br/>
        </div>
        <div>
            <label> 3. {rec[2].soal}</label>
            <br/>
            <input type={rec[2].type} />
        </div>
    </div>)
}

export default Ulangan2;