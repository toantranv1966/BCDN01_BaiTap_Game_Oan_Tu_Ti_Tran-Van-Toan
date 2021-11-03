import React, { Component } from 'react'
import {connect} from 'react-redux'

class Player extends Component {
    
    render() {
        return (
            <div className="text-center playerGame">
                <div className="theThink">
                <img className="mt-3" style={{width:100, height:100, transform:'rotate(120deg)'}}
                src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh} 
                alt={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh}/>
                </div>
                <div className="speech-bubble"></div>
                <img style={{width:200, height:200}} src="./img/player.png" alt="./img/player.png"/>
                <div className="row">
                    {this.props.mangDatCuoc.map((item, index) => {
                        // Xét giá trị đặt cược thêm viền cho item được chọn
                        let border = {};
                            if(item.datCuoc == true){
                                border = {border:'3px solid red'};
                            }
                        return <div className="col-4" key={index}>
                            <button style={border} className="btnItem"
                            onClick={()=> this.props.datCuoc(item.ma)}>
                                <img style={{width:50, height:50}} src={item.hinhAnh} alt="./img/bao.png"/>
                            </button>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        mangDatCuoc: state.BaiTapOanTuTiReducer.mangDatCuoc
    }
}

const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type: 'CHON_KEO_BUA_BAO',
                maCuoc
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player);
