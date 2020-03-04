import App from "next/app";
import { Provider } from "react-redux";
import ReduxWrapper from 'next-redux-wrapper';
import { initialStore } from "../src/redux/store";

class MyApp extends App {
    render() {
        const { pageProps, Component, store} = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
        )
    }
}

export default ReduxWrapper(initialStore)(MyApp);