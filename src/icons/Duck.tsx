import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDuck = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 129 128"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="url(#duck_svg__a)" d="M0 0h129v128H0z" />
    <defs>
      <pattern
        id="duck_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#duck_svg__b" transform="scale(.00775 .00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAGuSURBVGje7dhtbgIhEAZgjyC7eABi+V9i9wCbhgO4C/e/Stda3S/mAyY2bcL73yfDDBjHw6Gmpqam5p9EzTn7GGNwisoREt7iPa5UeAA0AQjNE4jBFAl2FuJQIixKmGIKBLsSrgXCCoghX9BrAT9GUrAboc8W/EYYsoUNgDciJbRbIWYI3fypseO1EhTC8lq5EmHqXlci2OVFtCXCaW5DYQ2LMZi2qA+7q5AvWLGgxUK6iCxBfYiFxMtChNYIhSYGoTB17V0k3B6fTLBiIUoFLRa8VLi/AIngpcLPIxQIXio8vgfKBZ8lYKkCInS/KxxfI1ixcMoAxhcJbYYwiIUr53c1mj4teL7g0kLGhQC2A/4wAiBo/ihYWxI6CmhTY7fScXY9vJGQwG3EyNlYiTaAWzOzEQYWeI0IChZ4j2tABN4xDCZY5iFggTONHhU479Pggmb1ERPoXhpK0KwSMIEqwtCC5pSACvg4DEdoqLtACsg5RsUTwLu9+JuLEKB5OMUWGk8ApJAknMoR9jPd/GfJENR5BXxydt7dSS7z550qEW51XL5D7901NTU1NX84X2MIkYtmHKAWAAAAAElFTkSuQmCC"
        id="duck_svg__b"
        width={129}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgDuck;
