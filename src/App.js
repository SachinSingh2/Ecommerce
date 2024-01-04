import React, { useState } from 'react';
import PrivateRoute from './Component/PrivateRoute';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import FormLogin from './Component/FormLogin';
import NavBar from './Component/NavRelated/NavBar';
import Users from './Component/Users';
import Cart from './Component/Cart/Cart';
import Home from './Component/HomePage/Home';
import Footer from './Component/Footer';
import Gaming from './Component/Categories/Gaming/Gaming';
import Skin from './Component/Categories/SkinCare/Skin';
import Electronic from './Component/Categories/Electronic/Electronic'
import Fashion from './Component/Categories/Fashion/Fashion';
import Bestselling from './Component/Categories/BestSelling'
import NewArrival from './Component/Categories/NewArrival'
import VendorSignup from './Component/Profile/VendorSignup';
import VendorLogin from './Component/Profile/VendorLogin'







export default function App() {
  const [isUserAuth, setIsUserAuth] = useState(false);

  return (
    <>
        <BrowserRouter>
        
          <Routes>
             <Route path='/login' element={<FormLogin setIsUserAuth={setIsUserAuth} />} />

            <Route path='/' element={<PrivateRoute isUserAuth={isUserAuth}  />}>
              <Route path='/' element={<Home />} />
            </Route>

            <Route path='/gaming' element={<PrivateRoute isUserAuth={isUserAuth}  />}>
              <Route path='/gaming' element={<Gaming />} />
            </Route>

            <Route path='/skincare' element={<PrivateRoute isUserAuth={isUserAuth}  />}>
              <Route path='/skincare' element={<Skin />} />
            </Route>

            <Route path='/electronics' element={<PrivateRoute isUserAuth={isUserAuth}  />}>
              <Route path='/electronics' element={<Electronic/>} />
            </Route>

            <Route path='/fashion' element={<PrivateRoute isUserAuth={isUserAuth}  />}>
              <Route path='/fashion' element={<Fashion/>} />
            </Route>

            <Route path='/cartpage' element={<PrivateRoute isUserAuth={isUserAuth}  />}>
              <Route path='/cartpage' element={<Cart/>} />
            </Route>

            <Route path='/bestSelling' element={<PrivateRoute isUserAuth={isUserAuth}  />}>
              <Route path='/bestSelling' element={<Bestselling/>} />
            </Route>

            <Route path='/newArrival' element={<PrivateRoute isUserAuth={isUserAuth}  />}>
              <Route path='/newArrival' element={<NewArrival/>} />
            </Route>

  {/* Other routes with hideNavFooter set to false */}

            <Route path='/VendorSignUp' element={<PrivateRoute isUserAuth={isUserAuth} hideNavFooter={true} />}>
            <Route path='/VendorSignUp' element={<VendorSignup />} />
            </Route>

            <Route path='/VendorLogin' element={<PrivateRoute isUserAuth={isUserAuth} hideNavFooter={true} />}>
            <Route path='/VendorLogin' element={<VendorLogin/>} />
            </Route>

            
          </Routes>
        </BrowserRouter>
    </>
  );
}
