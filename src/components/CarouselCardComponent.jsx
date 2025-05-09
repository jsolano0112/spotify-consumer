import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CustomButton from "../auth/components/CustomButton";
import Link from "@mui/material/Link";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 4,
};
export default function CarouselCard({ card, setMenu }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card
        onClick={handleOpen}
        key={card.id}
        sx={{
          width: {
            xs: "50%",
            sm: "40%",
            md: "80%",
          },

          backgroundColor: "rgba(255, 255, 255, 0.4)",
          aspectRatio: "2 / 3",
          transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          },
        }}
      >
        <CardActionArea sx={{ height: "100%" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
              p: 1,
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: "80%",
                height: "auto",
                mb: 1,
                flexGrow: 1,
                objectFit: "cover",
              }}
              image={card.image}
              alt={card.title}
            />
            <Typography
              variant="caption"
              color="text.primary"
              align="center"
              fontWeight="bold"
              sx={{ mt: 1 }}
            >
              {card.title}
            </Typography>
            <Typography
              variant="caption"
              color="text.primary"
              align="center"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                mt: 0.5,
              }}
            >
              {card.description}
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
          <Link href="#" variant="body2"  onClick={() => {
                setMenu("PlayLists"); 
                handleClose();
              }}>
              {"See playlist"}
            </Link>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Spotify - {card.songsCount} songs saved, {card.totalTime}
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            by {card.by}
            <CustomButton text="Follow" />
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
