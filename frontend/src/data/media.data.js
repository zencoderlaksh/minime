// Women
import heroWomen1 from "../assets/images/Woemn1.jpg";
import heroWomen2 from "../assets/images/Woemn2.jpg";
import heroWomen3 from "../assets/images/Woemn3.jpg";
import heroWomen4 from "../assets/images/Woemn4.jpg";
import heroWomen5 from "../assets/images/Woemn5.jpg";
import heroWomen6 from "../assets/images/Woemn6.jpg";
import heroWomen7Thumb from "../assets/images/Woemn7.jpg";
import heroWomen8Thumb from "../assets/images/Woemn8.jpg";
import heroWomen9Thumb from "../assets/images/Woemn9.jpg";

// Kids
import heroKids1 from "../assets/images/Kid1.jpg";
import heroKids2 from "../assets/images/Kid2.jpg";
import heroKids3 from "../assets/images/Kid3.jpg";
import heroKids4 from "../assets/images/Kid4.jpg";
import heroKids5 from "../assets/images/Kid5.jpg";
import heroKids6 from "../assets/images/Kid6.jpg";
import heroKids7 from "../assets/images/Kid7.jpg";
import heroKids8 from "../assets/images/Kid8.jpg";

// Homepage thumbnails / category tiles
import knitwearThumb from "../assets/images/KnitWearLogo.jpg";
import skirtsThumb from "../assets/images/Skirts.jpg";
import occasionwearThumb from "../assets/images/OcassionWear.jpg";

export const mediaLibrary = {
  // Backwards-compatible keys used throughout the home data.
  // NOTE: “full” and “thumb” are used by various home + collection layouts.

  // Assign Kids visuals (Kid1..Kid8) to collection-related walls.
  // Assign Kids visuals (Kid1..Kid8) to collection-related walls.
  wallOne: { full: heroKids1, thumb: heroKids4 },
  wallTwo: { full: heroKids2, thumb: heroKids5 },
  wallThree: { full: heroKids3, thumb: heroKids6 },
  wallFour: { full: heroKids4, thumb: heroKids7 },
  wallFive: { full: heroKids5, thumb: heroKids8 },

  // Assign Women visuals (Woemn1..Woemn13) to remaining walls.
  wallSix: { full: heroWomen1, thumb: heroWomen7Thumb },
  wallSeven: { full: heroWomen2, thumb: heroWomen8Thumb },
  wallEight: { full: heroWomen3, thumb: heroWomen9Thumb },
  wallNine: { full: heroWomen4, thumb: occasionwearThumb },
};
