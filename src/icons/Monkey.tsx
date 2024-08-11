import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMonkey = ({
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
    <path fill="url(#monkey_svg__a)" d="M0 0h129v128H0z" />
    <defs>
      <pattern
        id="monkey_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#monkey_svg__b" transform="scale(.00775 .00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAALpSURBVGje7Zg9muMgDIbnCCuD+zGJD0Ce+ABOHvq1Y93/KluQOEKIP1dbWKUz84KE+CT083PaaaedljeQzRhjjE38+KdI6Eb0tl2OEa74tW1oJyiHgV1aCRyA+GwjxADEuYkgABCHBsIkAXCrJ2iU7VVNcAkC8yNNSG2B+5EkKEzbXEXoM4StiuCjYGhePyzALdpEiqBJzO40HTt+HCnCSJea6H9pRERbJChExJW6tFmaaEuR0IcLaeq6CmOZIDgW8WDfY0CXCYoHfHqxXFsKBB4t0DNLtrVAmHjaKMtvTIHgglUim+j1EgkKd09Hqmv395n2NBAiQe8ETeOhPnml6RZFQr9n9EhX05/odDRMImHcCUFq9viOYIcklCLB1RCGHAFrCHOSoK5EiBy9yiHhrR4xYa8yy+fk5+gsdv1aJYILRF0FuTm+feup8nPCt8p491XQN5jhe1Yf5WcEqtDprA5ElxF0rsbuPQnVbcsIY7q6JerpEhLCMmPLTiCuIaHLldhEOQwJrFCJm+Dl8DcgTPlWgR+lQOC/rhYAtHfHoQUAxf8E/2YJOPhFLYD2eR6X4QLB+jwfAHpPcK0E4ITxCGFC9Ik4VxB497b6JH4CAIwbiITfXD4INaNE0EVC3Bzl7kUVYWN30zUTXowwNROGjEaJF6OPGsO0Tso61UfNKScUNqHi3jRSe51t5Fk6bFaqWV3mWXQXLn+qI+0kxA5YKnpaspPHW+yIuNQTVn80DwPK+ILsWgk8dGvfTAgRH2I9YQufzRdoJiBtSR4WDhIAQO3Dg2aClWtmA2GQ70UDYZFbhwbCKl/ulqyWpbqGAOIbWwlfCy9Wpg9aaCyShEnqQlzLq1kLIiV9q3j723giUff23y/lGktU6wTjyT+8mqcoKxuO2QOTHGPMkUlOapRj6wmdCHi2zMTuAmBtm+zFPc9mG6eLYxFQnHBe40LZOiO9kRMxx+a0cPOubKZm0nvaaaeddtpp/7v9AxWSGnNu0TMGAAAAAElFTkSuQmCC"
        id="monkey_svg__b"
        width={129}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgMonkey;
