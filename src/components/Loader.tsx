import { SystemStyleObject } from '../../styled-system/types';
import { cva, cx } from '../../styled-system/css';
import { Sizes } from '../types/sizes';

const loaderClassName = cva<{ size: Record<Sizes, SystemStyleObject> }>({
  base: {
    fill: 'primary',
  },
  variants: {
    size: {
      xs: {
        width: '20px',
      },
      sm: {
        width: '24px',
      },
      md: {
        width: '40px',
      },
      lg: {
        width: '48px',
      },
      xl: {
        width: '64px',
      },
    },
  },
});

export const Loader = ({
  size = 'md',
  className,
}: {
  size?: Sizes;
  className?: string;
}) => {
  return (
    <svg
      viewBox='0 0 135 140'
      xmlns='http://www.w3.org/2000/svg'
      className={cx(loaderClassName({ size }), className)}
      role='presentation'
    >
      <rect y='10' width='15' height='120' rx='4'>
        <animate
          attributeName='height'
          begin='0.5s'
          dur='1s'
          values='120;110;100;90;80;70;60;50;40;140;120'
          calcMode='linear'
          repeatCount='indefinite'
        />
        <animate
          attributeName='y'
          begin='0.5s'
          dur='1s'
          values='10;15;20;25;30;35;40;45;50;0;10'
          calcMode='linear'
          repeatCount='indefinite'
        />
      </rect>
      <rect x='30' y='10' width='15' height='120' rx='4'>
        <animate
          attributeName='height'
          begin='0.25s'
          dur='1s'
          values='120;110;100;90;80;70;60;50;40;140;120'
          calcMode='linear'
          repeatCount='indefinite'
        />
        <animate
          attributeName='y'
          begin='0.25s'
          dur='1s'
          values='10;15;20;25;30;35;40;45;50;0;10'
          calcMode='linear'
          repeatCount='indefinite'
        />
      </rect>
      <rect x='60' width='15' height='140' rx='4'>
        <animate
          attributeName='height'
          begin='0s'
          dur='1s'
          values='120;110;100;90;80;70;60;50;40;140;120'
          calcMode='linear'
          repeatCount='indefinite'
        />
        <animate
          attributeName='y'
          begin='0s'
          dur='1s'
          values='10;15;20;25;30;35;40;45;50;0;10'
          calcMode='linear'
          repeatCount='indefinite'
        />
      </rect>
      <rect x='90' y='10' width='15' height='120' rx='4'>
        <animate
          attributeName='height'
          begin='0.25s'
          dur='1s'
          values='120;110;100;90;80;70;60;50;40;140;120'
          calcMode='linear'
          repeatCount='indefinite'
        />
        <animate
          attributeName='y'
          begin='0.25s'
          dur='1s'
          values='10;15;20;25;30;35;40;45;50;0;10'
          calcMode='linear'
          repeatCount='indefinite'
        />
      </rect>
      <rect x='120' y='10' width='15' height='120' rx='4'>
        <animate
          attributeName='height'
          begin='0.5s'
          dur='1s'
          values='120;110;100;90;80;70;60;50;40;140;120'
          calcMode='linear'
          repeatCount='indefinite'
        />
        <animate
          attributeName='y'
          begin='0.5s'
          dur='1s'
          values='10;15;20;25;30;35;40;45;50;0;10'
          calcMode='linear'
          repeatCount='indefinite'
        />
      </rect>
    </svg>
  );
};
