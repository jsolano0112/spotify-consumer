
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


export const CircularProgressComponent = () => {
  return (
    <Box className="progress">
      <CircularProgress color="inherit" />
      <Typography variant="body1" sx={{ mt: 2 }}>
        Loading playlists...
      </Typography>
    </Box>
  );
};
