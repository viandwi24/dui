import { LinearGradient } from 'expo-linear-gradient';
// @ts-ignore


// console.log(typeof NW.styled === 'function' ? NW.styled(<View />) : 'ga ada');
// const StyledLinearGradient = NW.styled(LinearGradient);

export function GradientBackground({
  children,
  colors,
  start,
  end,
  locations,
  className
}: {
  children: React.ReactNode;
  colors: [string, string, ...string[]];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  locations?: [number, number, ...number[]];
  className?: string;
}) {
  return (
    <LinearGradient
      colors={colors}
      start={start}
      end={end}
      locations={locations}
      className={className}
    >
      {children}
    </LinearGradient>
  );
}
