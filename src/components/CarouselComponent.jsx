import React from "react";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import CarouselCard from "./CarouselCardComponent";

const cardsPerPage = 3;

export default function CarouselComponent({ cards }) {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const handleBack = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const visibleCards = Array.from({ length: cardsPerPage }).map((_, i) => {
    const index = (activeIndex + i) % cards.length;
    return cards[index];
  });
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          width: "100%",
          justifyContent: "center",
          padding: 2,
        }}
      >
        {visibleCards.map((card) => (
          <CarouselCard key={card.id} card={card} cardsPerPage={cardsPerPage} />
        ))}
      </Box>
      {cards.length > cardsPerPage && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: 400,
          }}
        >

            {/* TODO: improve buttons */}
          <Button size="small" onClick={handleBack}>
            {theme.direction === "ltr" ? (
              <KeyboardArrowLeft sx={{ color: "var(--color-primary)" }} />
            ) : (
              <KeyboardArrowRight sx={{ color: "var(--color-primary)" }} />
            )}
            Back
          </Button>
          <Button size="small" onClick={handleNext}>
            Next
            {theme.direction === "ltr" ? (
              <KeyboardArrowRight sx={{ color: "var(--color-primary)" }} />
            ) : (
              <KeyboardArrowLeft sx={{ color: "var(--color-primary)" }} />
            )}
          </Button>
        </Box>
      )}
    </>
  );
}
