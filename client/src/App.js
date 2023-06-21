import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";
import { BrowserRouter, Navigate,Route,Routes } from "react-router-dom";
// import { Dashboard } from "@mui/icons-material";
import Dashboard from "scenes/Dasboard/Dashboard";
import Layout from "scenes/Layout/Layout";
import Products from "scenes/Products/Products";
import Customers from "scenes/Customers/Customers";
import Transaction from "scenes/Transaction/Transcation";
import Geography from "scenes/Geography/Geography";
import Overview from "scenes/Overview/Overview";
import Daily from "scenes/Daily/Daily";
import Monthly from "scenes/Monthly/Monthly";
import Breakdown from "scenes/Breakdown.js";
import Admin from "scenes/Admin/Admin";
import Performance from './scenes/Performance/Performance'
import Workflow from "./scenes/Workflow/Workflow"
import Kanban from './scenes/Kanban/Kanban'
const App = () => {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  //usememo is used to memoize the value which is stored prv
  //above code is used to call themesetting function and change and memioze the theme value when its rendering or when dom state  changes
  return (
    <div className="app">
    <BrowserRouter>

       <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route element={<Layout/>}>
              <Route path="/" element={<Navigate to ="/dashboard" replace/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/customers" element={<Customers/>}/>
              <Route path="/transactions" element={<Transaction/>}/>
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/workflow" element={<Workflow />} />
              <Route path="/kanban" element={<Kanban />} />
          </Route>
        </Routes>
       </ThemeProvider>
    </BrowserRouter>
    </div>
  )
}

export default App
