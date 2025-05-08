import Box from "@mui/material/Box";
import CardToReproduce from "../../components/CardToReproduceComponent";
import PlayList from "../../components/PlayListComponent";
import Typography from "@mui/material/Typography";
import useMediaQuery from '@mui/material/useMediaQuery';

export const HomePage = () => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const isMediumScreen = useMediaQuery('(min-width: 0px)');

  const columnBoxStyle = {
    flex: 1,
    background: "var(--color-yellow)",
    borderRadius: "8px",
    padding: 2,
  };

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
            columnBoxStyle,
            {
              minHeight: "500px",
              width: isSmallScreen ? '100%' : 'auto',
              flex: isMediumScreen ? 1 : 1, 
            },
          ]}
        >
          <Typography variant="h6" noWrap component="div">
            Lists you'd like to try
          </Typography>
          <div style={{ flexGrow: 1, overflow: 'hidden' }}>
            <PlayList />
          </div>
        </Box>

        <Box
          sx={[
            columnBoxStyle,
            {
              height: "200px",
              width: isSmallScreen ? '100%' : 'auto',
              flex: isMediumScreen ? 1 : (isSmallScreen ? 1 : 0.5),
            },
          ]}
        >
          <CardToReproduce />
        </Box>
      </Box>
    </>
  );
};