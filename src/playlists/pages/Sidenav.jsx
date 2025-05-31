import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { HomePage } from "./HomePage";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FaPerson } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { RiLogoutBoxFill } from "react-icons/ri";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { useContext } from "react";
import { UserContext } from "../../auth/contexts/UserContext";
const drawerWidth = 240;
import { useNavigate } from "react-router-dom";
import PlayListPage from "./PlayListPage";
import ProfileUserPage from "../../users/pages/ProfileUserPage";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { loginWithSpotify } from "../../api/providerapi";
import { useEffect } from "react";
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const listItems = [
  {
    text: "Home",
    link: <HomePage />,
    icon: <IoMdHome color="black" />,
  },
  {
    text: "Profile",
    link: <ProfileUserPage />,
    icon: <FaPerson color="black" />,
  },
  {
    text: "PlayLists",
    link: <PlayListPage />,
    icon: <MdOutlinePlaylistPlay color="black" />,
  },
];
export const Sidenav = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState("Home");
  const { logout } = useContext(UserContext);
  const [showSpotifyModal, setShowSpotifyModal] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setShowSpotifyModal(!user?.isloggedWithSpotify);
  }, []);

  const navigate = useNavigate();

  const onLogoutUser = (target) => {
    logout({});

    navigate("/", { replace: true });
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {open ? (
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          )}
        </DrawerHeader>
        <Divider />
        <List>
          {listItems.map((item, index) => (
            <ListItem
              key={item.text}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenu(item.text)}
            >
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  color="text.secondary"
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => setMenu("Logout")}
          >
            <ListItemButton
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                <RiLogoutBoxFill color="black" />
              </ListItemIcon>
              <ListItemText
                color="text.secondary"
                primary="Logout"
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, background: "var(--background-color)" }}
      >
        {menu === "Home" && <HomePage setMenu={setMenu} />}
        {menu === "Profile" && <ProfileUserPage />}
        {menu === "PlayLists" && <PlayListPage />}
        {menu === "Logout" && onLogoutUser()}
      </Box>
      <Dialog
        open={showSpotifyModal}
        onClose={() => setShowSpotifyModal(false)}
        disableEscapeKeyDown
      >
        <DialogTitle>Connect with Spotify</DialogTitle>
        <DialogContent>
          <Typography>
            You need to log in with Spotify to access your playlists, explore
            those of other users, and enjoy personalized content.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="success"
            size="small"
            onClick={() => {
              loginWithSpotify();
            }}
            sx={{ marginLeft: 1 }}
          >
            Log in with Spotify
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
