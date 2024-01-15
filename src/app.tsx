//import { Route, Routes } from 'react-router-dom';

import Public from "./public";
import Layout from "./layout/index";

import List from "./examples/table";
import LayoutComponent from "./examples/layout";
import View from "./examples/view";
import Card from "./examples/card";
import Form from "./examples/form";
import LoadDataAsync from "./examples/load-data";
import Notifications from "./examples/notifications";
import Code from "./examples/code";
import ListAssign from "./examples/list-assign";
import Buttons from "./examples/buttons";
import Download from "./examples/downloads";
import SimpleList from "./examples/simple-list";
import Toggle from "./examples/toggle";
import Tabs from "./examples/tabs";
import FileUpload from "./examples/file-upload";
import StatusChange from "./examples/status-change";
import Detail from "./examples/detail";
import Badge from "./examples/badge";
import Auth from "./examples/auth";
import DateRange from "./examples/date-range";

import CrudBrowser from "./examples/crud-browser";
import FormBuilder from "./builder/form";
import TableBuilder from "./builder/table";

import { links } from "./links";

//import Home from "./examples/home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { basename } from "./config";

const NotFound = () => (
  <p>
    <i>Page Not Found</i>
  </p>
);

export default () => (
  <BrowserRouter basename={basename}>
    <Layout>
      <Routes>
        <Route path={links.detail.link} element={<Detail />} />
        <Route path={links.list.link} element={<List />} />
        <Route path={links.layout.link + "/*"} element={<LayoutComponent />} />
        <Route path={links.view.link} element={<View />} />
        <Route path={links.card.link} element={<Card />} />
        <Route path={links.form.link + "/*"} element={<Form />} />
        <Route path={links.loadDataAsync.link} element={<LoadDataAsync />} />
        <Route path={links.notifications.link} element={<Notifications />} />
        <Route path={links.code.link} element={<Code />} />
        <Route path={links.listAssign.link} element={<ListAssign />} />
        <Route path={links.buttons.link} element={<Buttons />} />
        <Route path={links.badge.link} element={<Badge />} />

        <Route path={links.simpleList.link} element={<SimpleList />} />
        <Route path={links.toggle.link} element={<Toggle />} />
        <Route path={links.tabs.link + "/*"} element={<Tabs />} />
        <Route path={links.fileUpload.link} element={<FileUpload />} />
        <Route path={links.detail.link} element={<Detail />} />
        <Route path={links.statusChange.link} element={<StatusChange />} />
        {/*
        <Route path={links.download.link} element={<Download />} />
        <Route path={links.superadmin.link + "/*"} element={<Superadmin />} />
        //<Route path={links.crudBrowser.link + "/*"} element={<CrudBrowser />} />
        <Route path={links.auth.link + "/*"} element={<Auth />} /> <Route path={links.dateRange.link} element={<DateRange />} />*/}

        <Route path={"/builder/form"} element={<FormBuilder />} />
        <Route path={"/builder/table"} element={<TableBuilder />} />
        <Route path={"/"} element={<Public />} />
        <Route path={"/:any"} element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
