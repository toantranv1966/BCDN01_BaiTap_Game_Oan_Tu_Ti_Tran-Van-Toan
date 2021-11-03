
const stateDefault = {
    mangDatCuoc: [
        {ma:'keo', hinhAnh:'./img/keo.png', datCuoc:true},
        {ma:'bua', hinhAnh:'./img/bua.png', datCuoc:false},
        {ma:'bao', hinhAnh:'./img/bao.png', datCuoc:false},
    ],
    ketQua: "I'm iron man, i love you 3000 !!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: {ma:'bao', hinhAnh:'./img/bao.png'},
}

const BaiTapOanTuTiReducer = (state=stateDefault, action) =>{
    switch(action.type){

        case 'CHON_KEO_BUA_BAO': {
            // Reset mảng đặt cược
            let mangDatCuocUpdate = [...state.mangDatCuoc];
            // Tạo ra mảng cược mới từ mảng cược củ & action.
            // maCuoc do người dùng truyền lên
            // Tìm ra maCuoc để change trạng thái đặt cược ứng với mã cược đó
            mangDatCuocUpdate = mangDatCuocUpdate.map((item,index)=>{
                if(item.ma === action.maCuoc){
                    return{...item,datCuoc:true}
                }
                return{...item,datCuoc:false}
            });
            
            // setState mangDatCuoc => render lại giao diện
            state.mangDatCuoc = mangDatCuocUpdate;
            return {...state};
        }

        case 'RAM_DOM':{
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
            state.computer   = {...quanCuocNgauNhien};
            return {...state};
        }

        case 'END_GAME': {
            
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;

            switch(player.ma){
                case 'keo':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'hòa nhau!!!';
                    }else if(computer.ma === 'bua'){
                        state.ketQua = 'thua sml!!!';
                    }else{
                        state.ketQua = "I'm iron man, i love you 3000 !!";
                        state.soBanThang +=1;
                    }
                ;break;
                case 'bua':
                    if(computer.ma === 'keo'){
                        state.ketQua = "I'm iron man, i love you 3000 !!";
                        state.soBanThang +=1;
                    }else if(computer.ma === 'bua'){
                        state.ketQua = 'hòa nhau!!!';
                    }else{
                        state.ketQua = 'thua sml!!!'
                    }
                ;break;
                case 'bao':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'thua sml!!!';
                    }else if(computer.ma === 'bua'){
                        state.ketQua = "I'm iron man, i love you 3000 !!";
                        state.soBanThang +=1;
                    }else{
                        state.ketQua = 'hòa nhau!!!';
                    }
                ;break;

                default: state.ketQua = "I'm iron man, i love you 3000 !!"
            }
        }
        state.soBanChoi +=1;
        return {...state};
        default: return {...state}
    }
}

export default BaiTapOanTuTiReducer;