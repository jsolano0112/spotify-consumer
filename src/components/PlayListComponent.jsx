import * as React from "react";
import Box from "@mui/material/Box";
import CarouselComponent from "./CarouselComponent";

//TODO: call to bringing users playlists
const cards = [
  {
    id: 1,
    by: 'Juana0112',
    title: "Romeo Santos | Formula",
    description: 'lalala',
    followers: '',
    createdDate: '',
    updatedDate: '',
    image: "/public/album1.jpg",
    songsCount: 12,
    totalTime: "3h 15 min approximately",

    songs: [
      {
        id: 1,
        title: "Cry for me",
        album: "Hurry Up Tomorrow",
        time: "3:44",
        artist: 'Shakira'
      },
    ],
  },
  {
    id: 2,
    by: 'Juana0112',
    title: "Willie Colón | Greatest Hits",
    image: "/public/album2.jpg",
    description: 'lalala',
    followers: '',
    createdDate: '',
    updatedDate: '',
    songsCount: 12,
    totalTime: "3h 15 min approximately",

    songs: [
      {
        title: "Cry for me",
        album: "Hurry Up Tomorrow",
        time: "3:44",
      },
    ]
    artist: 'Shakira',
  },
  {
    id: 3,
    by: 'Juana0112',
    title: "Los Adolescentes Mix",
    image: "/public/album3.jpg",
    description: 'lalala',
    followers: '',
    createdDate: '',
    updatedDate: '',
    songsCount: 12,
    totalTime: "3h 15 min approximately",

    songs: [
      {
        title: "Cry for me",
        album: "Hurry Up Tomorrow",
        time: "3:44",
      },
    ]
    artist: 'Shakira',
  },
  {
    id: 4,
    by: 'Juana0112',
    title: "Rauw Alejando | Viceversa",
    image: "/public/album4.jpg",
    description: 'lalala',
    followers: '',
    createdDate: '',
    updatedDate: '',
    songsCount: 12,
    totalTime: "3h 15 min approximately",

    songs: [
      {
        title: "Cry for me",
        album: "Hurry Up Tomorrow",
        time: "3:44",
      },
    ]
    artist: 'Shakira',
  },
  {
    id: 5,
    by: 'Juana0112',
    title: "The best songs of Luis Miguel",
    image: "/public/album5.jpg",
    description: 'lalala',
    followers: '',
    createdDate: '',
    updatedDate: '',
    songsCount: 12,
    totalTime: "3h 15 min approximately",

    songs: [
      {
        title: "Cry for me",
        album: "Hurry Up Tomorrow",
        time: "3:44",
      },
    ]
    artist: 'Shakira',
  },

  {
    id: 6,
    by: 'Juana0112',
    title: "This is The Weekend",
    image: "/public/album 6.jpg"
    description: 'lalala',
    followers: '',
    createdDate: '',
    updatedDate: '',,
    songsCount: 12,
    totalTime: "3h 15 min approximately",

    songs: [
      {
        title: "Cry for me",
        album: "Hurry Up Tomorrow",
        time: "3:44",
      },
    ]
    artist: 'Shakira',
  },
];

export default function PlayList() {
  const shuffled1 = [...cards].sort(() => 0.5 - Math.random());
  const shuffled2 = [...cards].sort(() => 0.5 - Math.random());
  return (
    <Box
      sx={{
        width: "100%",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {cards.length === 0 ? (
        //TODO: improve message
        <p>There are no playlists to display.</p>
      ) : (
        <>
          <CarouselComponent cards={shuffled1} />
          <CarouselComponent cards={shuffled2} />
        </>
      )}
    </Box>
  );
}
