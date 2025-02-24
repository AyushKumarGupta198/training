import { useEffect } from 'react'
import {BrowserRouter,Routes,Route,useLocation} from 'react-router-dom'
import Rewards from './components/Rewards/components'
import Header from './components/Header/components'
import { useDispatch } from "react-redux";
import { showLoading,hideLoading } from './store/loadingSlice';
import LoadingScreen from './common/loadingScreen/components';

const PageWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(showLoading());
    const timer = setTimeout(() => dispatch(hideLoading()), 1000); // Show loading for 2s

    return () => clearTimeout(timer);
  }, [location.pathname, dispatch]);

  return children;
};


function App() {
  

  return (
    <BrowserRouter>
    <Header/>
    <LoadingScreen/>
    <PageWrapper>
    <Routes>
      <Route path='/' element={<Rewards/>}/>
    </Routes>
    </PageWrapper>
    </BrowserRouter>
  )
}

export default App
