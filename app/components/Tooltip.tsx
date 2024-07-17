import { FloatingPosition, Tooltip as MTooltip } from '@mantine/core';
import { token } from '../../styled-system/tokens';
import { DefaultProps } from '../types/defaultProps';
import { ReactNode } from 'react';

export const Tooltip = ({
  children,
  label,
  position = 'top',
}: Omit<
  DefaultProps<{ label: ReactNode; position?: FloatingPosition }>,
  'className'
>) => {
  return (
    <MTooltip
      withArrow
      position={position}
      label={label}
      arrowSize={12}
      styles={{
        tooltip: {
          backgroundColor: token('colors.card'),
          borderRadius: token('radii.quote'),
          paddingTop: token('spacing.50'),
          paddingBottom: token('spacing.50'),
          paddingLeft: token('spacing.100'),
          paddingRight: token('spacing.100'),
        },
      }}
    >
      {children}
    </MTooltip>
  );
};
