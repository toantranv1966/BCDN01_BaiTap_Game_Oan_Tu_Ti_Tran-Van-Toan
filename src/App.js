import logo from './logo.svg';
import './App.css';

import {store} from './redux/rootReducer';
import { Provider } from 'react-redux';

import BaiTapOanTuTi from './BaiTapRedux/BaiTapOanTuTi/BaiTapOanTuTi';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BaiTapOanTuTi/>
      </Provider>
    </div>
  );
}

export default App;
