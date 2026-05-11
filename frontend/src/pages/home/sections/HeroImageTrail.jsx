import ImageTrail from "../../../components/ImageTrail.jsx";

// Lightweight dummy “clothes” URLs (using existing in-project optimized walls)
import wallOne from "../../../assets/optimized/wall-one.webp";
import wallTwo from "../../../assets/optimized/wall-two.webp";
import wallThree from "../../../assets/optimized/wall-three.webp";
import wallFour from "../../../assets/optimized/wall-four.webp";

export default function HeroImageTrail() {
  return (
    <div className="absolute inset-0 z-50 w-full h-full">
      {/*
        ImageTrail is pointer-driven and uses absolute-positioned tiles.
        Give it a tangible box to listen for mouse/touch events.
      */}
      <div className="absolute inset-0 pointer-events-auto">
        <ImageTrail
          items={[wallOne, wallTwo, wallThree, wallFour]}
          variant={1}
        />
      </div>
    </div>
  );
}
