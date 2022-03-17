// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import Home from './pages/home';
import PersonAll from './pages/person_all';
import PersonHistorySearch from './pages/person_history_search';
import PersonHistory from './pages/person_history/index';
import PersonHistoryAdd from './pages/person_history_add';
import './index.css';
import {

  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PersonHistoryEdit from './pages/person_history_edit';
import PersonHistoryEditSearch from './pages/person_history_edit_search';
import PersonHistoryRemoveSearch from './pages/person_history_remove_search';
import PersonHistoryRemove from './pages/person_history_remove';
import SettingImportDatabase from './pages/setting_import_database';
import SettingExportDatabase from './pages/setting_export_database';

window.onload = () => {
  ReactDOM.render(<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="person-all" element={<PersonAll />} />
        <Route path="person-history" element={<PersonHistory />} />
        <Route path="person-history-search" element={<PersonHistorySearch />} />
        <Route path="person-history-add" element={<PersonHistoryAdd />} />
        <Route path="person-history-edit" element={<PersonHistoryEdit />} />
        <Route path="person-history-edit-search" element={<PersonHistoryEditSearch />} />
        <Route path="person-history-remove-search" element={<PersonHistoryRemoveSearch />} />
        <Route path="person-history-remove" element={<PersonHistoryRemove />} />
        <Route path="setting-import-database" element={<SettingImportDatabase />} />
        <Route path="setting-export-database" element={<SettingExportDatabase />} />
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      </Route>
    </Routes>
  </BrowserRouter>, document.getElementById('app'));
};
