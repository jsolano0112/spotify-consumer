import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import Link from "@mui/material/Link";
import { UserContext } from "../../auth/contexts/UserContext";
import { useContext } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 4,
};
export const CarouselCard = ({ card, setMenu }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    userState: { user },
  } = useContext(UserContext);

  const handleFollow = (spotifyUserId) => {
    const url = `https://open.spotify.com/user/${spotifyUserId}`;
    window.open(url, "_blank");
  };
  return (
    <>
      <Card
        onClick={handleOpen}
        key={card.id}
        sx={{
          maxWidth: "168px",
          minWidth: "168px",
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
              image={card.images.url}
              alt={card.title}
            />
            <Typography
              variant="caption"
              color="text.primary"
              align="center"
              fontWeight="bold"
              sx={{ mt: 1 }}
            >
              {card.name}
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
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="keep-mounted-modal-title"
              variant="h6"
              component="h2"
            >
              {card.name}  ({card.public ? 'public' : 'false'})
            </Typography>
            <Link
              href="#"
              variant="body2"
              onClick={() => {
                setMenu("PlayLists");
                handleClose();
              }}
            >
              {"See playlist"}
            </Link>
            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
              {card.songs} songs saved.
            </Typography>
            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
              {card.by !== user.id ? `by ${card.by}` : "by me"}
              {card.by !== user.id && (
                <Button
                  variant="contained"
                  color="success"
                  size="small"
                  sx={{ marginLeft: 1 }}
                  onClick={(event) => {
                    event.stopPropagation();
                    handleFollow(card.by_id);
                  }}
                >
                  Follow
                </Button>
              )}
            </Typography>
          </Box>
        </Modal>
      </Card>
    </>
  );
};
