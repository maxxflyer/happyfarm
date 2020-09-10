import React, { Component } from 'react'
import './css.css';


class Instructions extends Component {
   constructor(props){
       super(props)
   }
    render(){
        console.log(this.props.update) 
        return ( 
        <div id="Instructions_panel">
            <div id="Instructions_mainlabel">🌈 Instructions</div>
                <div className="Instruction">
                    <div className="Instruction_image">🚜</div>
                    <div className="Instruction_label">What is HappyFarm DFO?</div>
                    <div className="clear"></div>
                    <div className="Instruction_desc">HappyFarm is a Decentralized Flexible Organization ruled by BEANS🌱 tokens, oriented to DEFI and hinabited by a community of DEFI farmers to:
                    <br></br><br></br><i>
                    ☘️ Offer Individual Farming 
                    <br></br>          
                    🍀 Research Collective Farming
                    <br></br>
                    🎄 Build Farming Services for the public</i>
                    </div>
                    <input  className="Instruction_button2" type="button" value="👽 PAPER" onClick={() => this.props.update("HappyFarm")}/>
                    <input  className="Instruction_button3" type="button" value="👻👻👻 DFO" onClick={() => this.props.update("HappyFarm")}/>
                </div>
                <div className="Instruction">
                    <div className="Instruction_image">🌱</div>
                    <div className="Instruction_label">What is Farming?</div>
                    <div className="clear"></div>
                    <div className="Instruction_desc">Farming is an innovative DEFI way of gaining tokens producing value to your favorite projects by:
                    <br></br><br></br><i>
                     🐳 Providing Liquidity
                    <br></br>          
                     🐘 Staking
                    <br></br>
                     🐷 and more...</i>
                    </div>
                    <input  className="Instruction_button" type="button" value="🚜 FARM NOW" onClick={() => this.props.update("HappyFarm")}/>
                </div>
                <div className="Instruction">
                    <div className="Instruction_image">🌾</div>
                    <div className="Instruction_label">What can I Farm?</div>
                    <div className="clear"></div>
                    <div className="Instruction_desc">You can farm ERC20 tokens or NFTs, from any of the offers coming from: the  or from , and also any asset of HappyFarm economy:
                    <br></br><br></br><i>
                    👻 DFOHUB ecosystem offers
                    <br></br>          
                    🌱 HappyFarm Economy Assets
                    <br></br>
                    ⚡️ HappyFarm offers or offers coming from external sources...</i>
                    </div>
                    <input  className="Instruction_button2" type="button" value="🚜 FARM NOW" onClick={() => this.props.update("HappyFarm")}/>
                    <input  className="Instruction_button3" type="button" value="👻 ACCOUNT" onClick={() => this.props.update("Beanometer")}/>
                </div>
                <div className="Instruction">
                    <div className="Instruction_image">💧</div>
                    <div className="Instruction_label">How Can I Farm?</div>
                    <div className="clear"></div>
                    <div className="Instruction_desc">You will need at least one ingredient depending on the offer, and you will have to stake it somehow in DFOHUB staking contract or uniswap or via combined logics. 🍾
                    <br></br><br></br>
                    
                    </div>
                    <input  className="Instruction_button" type="button" value="🥗 RECIPIES" onClick={() => this.props.update("Math")}/>
                </div>
        </div>
        );
    }


}




export default Instructions