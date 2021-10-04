import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer'
import Details from './component/Details/Details';
import Courses from './component/Services/Services';
import Categories from './component/Categories/Categories';
import About from './component/About/About';
import NotFound from './component/NotFound/NotFound' ;
import { createContext } from 'react';
import useCategories from './hooks/useCategories';
export const SidebarContext = createContext('sidebar')

function App() {
  const [categories, setCategories] = useCategories()
  return (
    <SidebarContext.Provider value={[categories, setCategories]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Courses></Courses>
          </Route>
          <Route path="/details/:courseId">
            <Details></Details>
          </Route>
          <Route path="/categories"> 
            <Categories></Categories>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </SidebarContext.Provider>
  );
}

export default App;
