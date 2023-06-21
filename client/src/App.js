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
          </Route>
        </Routes>
       </ThemeProvider>
    </BrowserRouter>
    </div>
  )
}

export default App
