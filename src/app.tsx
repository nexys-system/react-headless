//import { Route, Routes } from 'react-router-dom';

//import Public from './public';
//import Layout from './layout/index';

/*import List from './examples/table';
import LayoutComponent from './examples/layout';
import View from './examples/view';
import Card from './examples/card';
import Form from './examples/form';
import LoadDataAsync from './examples/load-data';
import Notifications from './examples/notifications';
import Code from './examples/code';
import ListAssign from './examples/list-assign';
import Buttons from './examples/buttons';
import Download from './examples/downloads';
import SimpleList from './examples/simple-list';
import Toggle from './examples/toggle';
import Tabs from './examples/tabs';
import FileUpload from './examples/file-upload';
import Detail from './examples/detail';*/

//import { links } from './links';
import { Route, Routes } from "react-router-dom";
//import Home from "./home";

const Home = () => (
  <p>
    <i>Home Not Found</i>
  </p>
);

const NotFound = () => (
  <p>
    <i>Page Not Found</i>
  </p>
);

export default () => {
  return (
    <Routes>
      <Route path={"/"} element={<p>sdf</p>} />
    </Routes>
  );
};
