import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function CarouselCard({ card, cardsPerPage }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
      <Card onClick={handleOpen}
        key={card.id}
        sx={{
          width: {
            xs: "80%",
            sm: "45%",
            md: `calc(100% / ${cardsPerPage} - 16px)`,
          },
        }}
      >
        <CardActionArea>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "100%", maxWidth: 100, mb: 1 }}
              image={card.image}
              alt={card.title}
            />
            <Typography variant="body2" color="text.secondary" align="center">
              {card.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            {card.title}
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Spotify - {card.songsCount} songs saved, {card.totalTime}
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            by {card.by} <Button>Follow</Button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
