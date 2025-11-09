import Spline from "@splinetool/react-spline";

interface SplineSceneProps {
  scene: string;
  className?: string;
}

const SplineScene = ({ scene, className = "" }: SplineSceneProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Spline scene={scene} />
    </div>
  );
};

export default SplineScene;
