import Home from "./Home"
import Bookmark from "./Bookmark"
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from '@mui/material/styles';

  const theme = createTheme(
    {
      typography: {
        fontFamily: "Poppins",
        fontSize: 16,
      }
    }
  );


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display:'flex', width: '100%', flexDirection : 'column', justifyContent: 'center', alignItems: 'center',}}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="random" element={<Navigate to="/" />}/>
              <Route path="home" element={<Navigate to="/" />}/>
            </Route> 
            <Route path="/bookmark" element={<Bookmark />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  )
}

export default App

