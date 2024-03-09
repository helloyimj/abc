import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Header';
import Main from './Main';
import Sub1 from './Sub1';
import Sub2 from './Sub2';
import Sub3 from './Sub3';
import Sub4 from './Sub4';
import Footer from './Footer';
import NotFound from './NotFound';

const App = () => {
	return (
		<div className='App'>
			 <BrowserRouter basename={process.env.PUBLIC_URL}>
				<Header />
				<Routes>
				<Route path="/" exact={true} element={<Main />} />
				<Route path="/sub1" element={<Sub1 />}></Route>
				<Route path="/sub2" element={<Sub2 />}></Route>
				<Route path="/sub3" element={<Sub3 />}></Route>
				<Route path="/sub4" element={<Sub4 />}></Route>
				<Route path="*" element={<NotFound />}></Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
