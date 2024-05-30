'use client';

// external
import { LoadingButton } from '@mui/lab';
import { Box, CircularProgress } from '@mui/material';
// internal
import { useAppSelector } from '@/app/hooks/useAppSelector';
import { RootState } from '@/store/store';

interface CustomButtonProps {
  loading?: boolean;
  label: string;
  type: 'button' | 'submit' | 'reset';
  fullWidth: boolean;
  color: 'primary' | 'secondary' | '#ffffff' | any;
  variant: 'contained' | 'outlined' | 'text';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  bgColor?: any;
  width?: number;
  height?: number;
  radius?: any;
  borderColor?: any;
}

export default function CustomButton({
  label,
  width,
  height,
  color,
  bgColor,
  radius,
  borderColor,
  ...props
}: CustomButtonProps) {
  const isLoading = useAppSelector((state: RootState) => state.fetchStatus.isLoading);

  return (
    <Box sx={{ cursor: isLoading ? 'not-allowed' : '' }}>
      <LoadingButton
        sx={{
          textTransform: 'none',
          borderRadius: radius,
          height: height,
          color: color,
          bgcolor: isLoading ? 'gray' : bgColor,
          pointerEvents: isLoading ? 'none' : 'all',
          width: width,
          borderColor: borderColor,
        }}
        loadingIndicator={<CircularProgress color="secondary" size={20} />}
        disableElevation
        {...props}
        loading={isLoading ? true : false}
        disabled={isLoading ? true : false}
      >
        {label}
      </LoadingButton>
    </Box>
  );
}
