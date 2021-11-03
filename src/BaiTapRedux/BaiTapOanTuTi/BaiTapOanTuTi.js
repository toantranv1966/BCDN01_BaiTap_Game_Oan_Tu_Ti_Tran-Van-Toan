import React, { Component } from 'react'
import './BaiTapOanTuTi.css'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'
import {connect} from 'react-redux'

class BaiTapOanTuTi extends Component {
    render() {
        return (
            <div className="gameOanTuTi">
                <div className="row text-center mt-5">
                    <div className="col-4 mt-3">
                        <Player/>
                    </div>
                    <div className="col-4 mt-3">
                        <KetQuaTroChoi/>
                        <button className="btn btn-success p-2 display-4 mt-5"
                        onClick={()=>this.props.playGame()}>Play Game</button>
                    </div>
                    <div className="col-4 mt-3">
                        <Computer/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: ()=>{
            let count = 0;
            // setInterval: lặp đi lặp lại đến vô tận
            let ramdomComputerItem = setInterval(()=>{
                dispatch({
                    type: 'RAM_DOM'
                });
                count++;
                if(count >= 10){
                    // Dừng hàm setInterval
                    clearInterval(ramdomComputerItem);

                dispatch({
                    type: 'END_GAME',
                    });
                }
            },100)
        }
    }
}

export default connect(null, mapDispatchToProps)(BaiTapOanTuTi);

