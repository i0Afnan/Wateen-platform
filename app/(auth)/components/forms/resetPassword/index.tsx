'use client';

// external
import { Box, Stack, InputAdornment, IconButton, FormHelperText } from '@mui/material';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
// internal
import CustomOutlinedInput from '@/app/components/ui/customOutlinedInput';
import CustomFormLabel from '@/app/components/ui/customFormlabel';
import CustomButton from '@/app/components/ui/customButton';
import { useState } from 'react';
import PasswordRequirements from '../../passwordRequirements';

export default function ResetPasswordForm({
  formik,
  handleChange,
  moreThan8Chars,
  containsNumber,
  containsSpecialChar,
}: any) {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility((passwordVisibility) => !passwordVisibility);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack>
        <Box>
          <CustomFormLabel>Password</CustomFormLabel>
          <CustomOutlinedInput
            fullWidth
            type={passwordVisibility ? 'text' : 'password'}
            id="password"
            placeholder="Enter your new password"
            name="password"
            value={formik.values.password}
            onChange={handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={togglePasswordVisibility}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {passwordVisibility ? <IconEyeOff size="20" /> : <IconEye size="20" />}
                </IconButton>
              </InputAdornment>
            }
          />
          <PasswordRequirements
            moreThan8Chars={moreThan8Chars}
            containsNumber={containsNumber}
            containsSpecialChar={containsSpecialChar}
          />
        </Box>
        <Box mb={3}>
          <CustomFormLabel>Confirm Password</CustomFormLabel>
          <CustomOutlinedInput
            fullWidth
            type={passwordVisibility ? 'text' : 'password'}
            id="confirmPassword"
            placeholder="Confirm your new password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={togglePasswordVisibility}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {passwordVisibility ? <IconEyeOff size="20" /> : <IconEye size="20" />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText
            sx={{ color: '#d32f2f', marginLeft: 2 }}
            id="outlined-adornment-password-helper-password"
          >
            {formik.touched.confirmPassword && formik.errors.confirmPassword}
          </FormHelperText>
        </Box>
      </Stack>
      <CustomButton
        fullWidth={true}
        color="primary"
        variant="contained"
        type="submit"
        label="Reset"
      />
    </form>
  );
}
