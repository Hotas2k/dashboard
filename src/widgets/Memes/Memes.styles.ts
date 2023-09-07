import { styled, Button as ButtonComponent } from '@mui/material';

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Image = styled('img')`
  padding: 10px;
  max-height: 100%;
  max-width: 100%;
`;

export const ImageContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 100%;
`;

export const Button = styled(ButtonComponent)`
  width: 100%;
  border-radius: 5px;
`;
