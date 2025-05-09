import Box from "@mui/material/Box";
import CardToReproduce from "../../components/CardToReproduceComponent";
import PlayList from "../../components/PlayListComponent";
import useMediaQuery from '@mui/material/useMediaQuery';
import SongsCardComponent from "../../components/SongsCardComponent";

export const HomePage = ({ setMenu }) => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const isMediumScreen = useMediaQuery('(min-width: 0px)');
  return (
    <>
      <Box height={50} />
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          padding: 2,
          flexDirection: isSmallScreen ? 'column-reverse' : 'row',
        }}
      >
        <Box
          sx={[
            {
              minHeight: "500px",
              width: isSmallScreen ? '100%' : 'auto',
              flex: isMediumScreen ? 1 : 1, 
            },
          ]}
        >
          <div style={{ flexGrow: 1, overflow: 'hidden' }}>
            <PlayList setMenu={setMenu}/>
          </div>
        </Box>

        <Box
          sx={[
            {
              marginTop: "50px",
              width: isSmallScreen ? '100%' : 'auto',
              flex: isMediumScreen ? 1 : (isSmallScreen ? 1 : 0.5),
            },
          ]}
        >
          <CardToReproduce />
          <SongsCardComponent/>
        </Box>
      </Box>
    </>
  );
};