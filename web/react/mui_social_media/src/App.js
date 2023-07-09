import Sidebar from "./Components/Sidebar"
import Navbar from "./Components/Navbar"
import Rightbar from "./Components/Rightbar"
import Feed from "./Components/Feed"
import { Box, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";
function App() {

  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add/>
    </Box>
  );
}
/* Spacing is a multiple of 8px */

export default App;
