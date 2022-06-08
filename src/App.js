import React from 'react';
import AddCountry from './components/Country/AddCountry';
import CountryList from './components/Country/CountryList';
import EditCountry from './components/Country/EditCountry';
import AddProvince from './components/Province/AddProvince';
import ProvinceList from './components/Province/ProvinceList';
import EditProvince from './components/Province/EditProvince';
import { BrowserRouter as Router, Routes, Route, Link,unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import './App.css';
import AddDistrict from './components/District/AddDistrict';
import DistrictList from './components/District/DistrictList';
import EditDistrict from './components/District/EditDistrict';
import AddWard from './components/Ward/AddWard';
import WardList from './components/Ward/WardList';
import EditWard from './components/Ward/EditWard';
import { createBrowserHistory } from "history";


const history = createBrowserHistory({ window });

function App() {
  return (
    <HistoryRouter history={history}>

      <div className='container my-app'>
        <p>
          Project is running on <b>NODE_ENV: {process.env.REACT_APP_NODE_ENV}</b>
          
        </p>
      </div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navheader">
          {/* country */}
          <div id="menu" >
            <ul>
              <li>
                <a>Country</a>
                <ul className="sub-menu">
                  <li className="nav-item">
                    <Link to={'/AddCountry'} className="nav-link">Add Country</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/CountryList'} className="nav-link">Country List</Link>
                  </li>
                </ul>
              </li>
            </ul>
            {/* province  */}
          </div>
          <ul><div id="menu"  >
            <ul>
              <li>
                <a>Province</a>
                <ul className="sub-menu">
                  <li className="nav-item">
                    <Link to={'/AddProvince'} className="nav-link">Add Province</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/ProvinceList'} className="nav-link">Province List</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>  </ul>
          {/* District */}
          <ul><div id="menu"  >
            <ul>
              <li>
                <a>District</a>
                <ul className="sub-menu">
                  <li className="nav-item">
                    <Link to={'/AddDistrict'} className="nav-link">Add District</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/DistrictList'} className="nav-link">District List</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>  </ul>
          {/* Ward */}
          <ul><div id="menu"  >
            <ul>
              <li>
                <a>Ward</a>
                <ul className="sub-menu">
                  <li className="nav-item">
                    <Link to={'/AddWard'} className="nav-link">Add Ward</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/WardList'} className="nav-link">Ward List</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>  </ul>
        </nav> <br />

        <Routes>
          {/* country */}
          <Route exact path='/AddCountry' element={<AddCountry />} />
          <Route path='/edit/:id' element={<EditCountry />} />
          <Route path='/CountryList' element={<CountryList />} />
          {/* province */}
          <Route exact path='/AddProvince' element={<AddProvince />} />
          <Route exact path='edit/:id' element={<EditProvince />} />
          <Route path='ProvinceList' element={<ProvinceList />} />
          {/* district */}
          <Route exact path='/AddDistrict' element={<AddDistrict />} />
          <Route exact path='edit/:id' element={<EditDistrict />} />
          <Route path='DistrictList' element={<DistrictList />} />
          {/* ward */}
          <Route exact path='/AddWard' element={<AddWard />} />
          <Route exact path='edit/:id' element={<EditWard />} />
          <Route path='WardList' element={<WardList />} />
        </Routes>
      </div>
    </HistoryRouter>
  );
}

export default App;  