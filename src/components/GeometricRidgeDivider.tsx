import React from 'react';

interface GeometricRidgeDividerProps {
  topColor?: string;
  bottomColor?: string;
  flip?: boolean;
}

/**
 * Subtle geometric horizon ridge referencing the mountain silhouette in the ArizoTek logo.
 * Architectural and restrained — keeps the tech/automation aesthetic clean.
 */
export const GeometricRidgeDivider: React.FC<GeometricRidgeDividerProps> = ({
  topColor = '#FFFFFF',
  bottomColor = '#FAF8F5',
  flip = false,
}) => {
  return (
    <div
      className="w-full overflow-hidden leading-none select-none pointer-events-none"
      style={{ backgroundColor: topColor }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-7 md:h-11 block ${flip ? 'scale-x-[-1]' : ''}`}
        preserveAspectRatio="none"
      >
        <path
          d="M0 48V34L260 22L480 35L760 12L980 28L1210 16L1440 30V48H0Z"
          fill={bottomColor}
        />
        <path
          d="M0 34L260 22L480 35L760 12L980 28L1210 16L1440 30"
          stroke="#E9A04A"
          strokeOpacity="0.35"
          strokeWidth="1.25"
        />
      </svg>
    </div>
  );
};
