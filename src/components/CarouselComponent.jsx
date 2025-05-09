import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CarouselCard from "./CarouselCardComponent";
import { IoCaretBackSharp, IoCaretForwardSharp } from "react-icons/io5";
import { useMediaQuery, useTheme } from "@mui/material";

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

  const visibleCardCount = Math.min(cardsToShow, cards.length);
  const visibleCards = Array.from({ length: visibleCardCount }).map((_, i) => {
    const index = (activeIndex + i) % cards.length;
    return cards[index];
  });

  const shouldShowButtons = cards.length > cardsToShow;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        gap: 1,
        padding: 2,
      }}
    >
      {shouldShowButtons && (
        <Button
          onClick={handleBack}
          sx={{
            color: "var(--color-orange)",
            transition: "background-color 0.3s, color 0.3s",
            "&:hover svg": {
              color: "var(--color-dark-orange)",
            },
          }}
        >
          <IoCaretBackSharp size={24} />
        </Button>
      )}

      <Box
        sx={{
          display: "flex",
          gap: 2,
          flex: 1,
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {visibleCards.map((card) => (
          <CarouselCard
            key={card.id}
            card={card}
            cardsPerPage={cardsToShow}
          />
        ))}
      </Box>

      {shouldShowButtons && (
        <Button
          onClick={handleNext}
          sx={{
            color: "var(--color-orange)",
            transition: "background-color 0.3s, color 0.3s",
            "&:hover svg": {
              color: "var(--color-dark-orange)",
            },
          }}
        >
          <IoCaretForwardSharp size={24} />
        </Button>
      )}
    </Box>
  );
}