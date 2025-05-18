import React from 'react'
import { Button } from '@mui/material';
export const CustomButton = ({text}) => {
    return (
        <Button
          type="submit"
          variant="outlined"
          color="text.secondary"
          size="small"
          disableElevation
          fullWidth
          sx={{ my: 1, background: 'var(--color-yellow)'}}
        >
          {text}
        </Button>
      );
}
