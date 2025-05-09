import React from "react";
import Box from "@mui/material/Box";
import CarouselCard from "./CarouselCardComponent";
import { IoCaretBackSharp, IoCaretForwardSharp } from "react-icons/io5";
import { useMediaQuery, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { motion } from "framer-motion";

export default function CarouselComponent({ cards }) {
  const theme = useTheme();
  const isSmallOrMedium = useMediaQuery(theme.breakpoints.down("md"));
  const cardsToShow = isSmallOrMedium ? 1 : 2;
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const handleBack = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const shouldShowButtons = cards.length > cardsToShow;
  const buttonsStyle = {
    backgroundColor: "rgba(247, 184, 1, 0.3)",
    borderRadius: "50%",
    color: "var(--color-blue)",
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      backgroundColor: "rgba(247, 184, 1, 0.5)",
    },
    "&:hover svg": {
      color: "var(--color-dark-blue)",
    },
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        gap: 1,
        width: "auto",
        padding: 2,
      }}
    >
      {shouldShowButtons && (
        <IconButton onClick={handleBack} sx={buttonsStyle}>
          <IoCaretBackSharp size={24} />
        </IconButton>
      )}

      <Box
        sx={{
          overflow: "hidden",
          justifyContent: "center",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            gap: 0.5,
          }}
          animate={{
            x: `-${activeIndex * (100 / cardsToShow)}%`,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          {cards.map((card) => (
            <Box
              key={card.id}
              sx={{
                flex: `0 0 ${100 / cardsToShow}%`,
              }}
            >
              <CarouselCard card={card} cardsPerPage={cardsToShow} />
            </Box>
          ))}
        </motion.div>
      </Box>

      {shouldShowButtons && (
        <IconButton onClick={handleNext} sx={buttonsStyle}>
          <IoCaretForwardSharp size={24} />
        </IconButton>
      )}
    </Box>
  );
}
