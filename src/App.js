import React,{Component} from 'react';
import '../src/styles/main.css';
import Main from "./views/main";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import createSagaMiddleware from "redux-saga";
import RootSaga from "./store/sagas";
import RootReducer from "./store/reducers";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSaga);


class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Main/>
                </div>
            </Provider>
        );
    }
}

export default App;