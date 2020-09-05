import React, { Component } from 'react'
import './css.css';


class Selector extends React.Component {

    constructor(props) {
        super(props)       
        this.selection=""
        this.enumback="_1_"
    }
   
    changedMenu = (e) => {
        this.selection=e.target.value
    }

    changedMenuEnumerator = (e) => {
        this.enumback=e.target.value
    }

    render(){
            console.log("SELECTOR> ",this.props)
        return (
        <div className="selector">
            <div className="selector_container">
        <select className="selector_menu" name="selector" id="selector" onChange={this.changedMenu}>
                    <option value=''>select</option>
                    <option value='[["2x1"],["_1_","_2_"]]'>2x1</option>
                    <option value='[["1x2"],["_1_","_2_"]]'>1x2</option>
                    <option value='[["3x1"],["_1_","_2_","_3_"]]'>3x1</option>
                    <option value='[["1x3"],["_1_","_2_","_3_"]]'>1x3</option>
                    <option value='[["Hwings"],["_1_","_2_","_3_"]]'>Hwings</option>
                    <option value='[["Vwings"],["_1_","_2_","_3_"]]'>Vwings</option>
                    <option value='["erc721"]'>erc721</option>
        </select>
        <input type="button" className="selector_button"  value="INJECT" onClick={() => this.props.layoutBack(this.selection)}></input>
        <select className="selector_menu" name="selector_enumerator" id="selector_enumerator" onChange={(event) => this.props.enumBack(event.target.value)}>
                    <option value='_1_'>{'{ }'}</option>
                    <option value='_1_'>{'{1}'}</option>
                    <option value='_2_'>{'{2}'}</option>
                    <option value='_3_'>{'{3}'}</option>
                    <option value='_4_'>{'{4}'}</option>
                    <option value='_5_'>{'{5}'}</option>
                    <option value='_6_'>{'{6}'}</option>
                    <option value='_7_'>{'{7}'}</option>
                    <option value='_8_'>{'{8}'}</option>
                    <option value='_9_'>{'{9}'}</option>
                    <option value='_10_'>{'{10}'}</option>
                    <option value='_11_'>{'{11}'}</option>
                    <option value='_12_'>{'{12}'}</option>
                    <option value='_13_'>{'{13}'}</option>
                    <option value='_14_'>{'{14}'}</option>
                    <option value='_15_'>{'{15}'}</option>
                    <option value='_16_'>{'{16}'}</option>
                    <option value='_17_'>{'{17}'}</option>
                    <option value='_18_'>{'{18}'}</option>
                    <option value='_19_'>{'{19}'}</option>
                    <option value='_20_'>{'{20}'}</option>
                    <option value='_21_'>{'{21}'}</option>
                    <option value='_22_'>{'{22}'}</option>
                    <option value='_23_'>{'{23}'}</option>
                    <option value='_24_'>{'{24}'}</option>

        </select>
        </div>
        </div>);
    }


}


export default Selector