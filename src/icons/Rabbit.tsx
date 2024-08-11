import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRabbit = ({
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
    <path fill="url(#rabbit_svg__a)" d="M0 0h129v128H0z" />
    <defs>
      <pattern
        id="rabbit_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#rabbit_svg__b" transform="scale(.00775 .00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAJCSURBVGje7djbjZwwFAbgbQFfCiCJC9isXMBs5AKA+ftvJQ8GbDMLc/wfRYpW45fhhU/m3Azz9vZa33EN58uUS1Lwo1aI71oBk1KwmJWCx6IUoloAsF3+pARbBLdQgi9C4oQIIBeEAydgEww4we5CIAW/CQbAxAhxExIrYBUcANwIwW5CAoB3QvAAgGEI+ZcQYr7TAADujLDembewEEIOw+IAAJgIIYdhTlgD2i/kMNwzAGY+oF4LIdhGuBGCb4SREGINzMycPG6hW7DHLXQL/riFbiG2iSCE4zN0C1UY/nBnVgnDb/LUi6WaOcG0aSAEV7cUJYQSyE9OyGPlI5Vq6BTWAZe3cmcEvwq+Ksk+Yc3lj0TXZNPZ22P0CK65e3uN6RFC3dhme43pEVLd2Y4Q9pL+SMASCWHvyy0n3XHYx9MYSKHEwMSqueSCq1Lp87HdKdR96asRIRdSW5F7e4sFcwCW7vngTgC5EL/qqi7hbAtioX3xqD7UxEJohalfSFrhmMt+wamFQxjW0dAjQCtYteDVQtQKx1yWr26p4NRCUAtJKzyGoVd4yGU9HkRCVAvQCBH4tBohAkBSCI+V9DgeroWkFQxO1ygT3LkgPC/8ubC/E18L8UKY1UKJBC3c1MKsjWQ5/8lsViOCrKhqXHNVLRacWrjchEww/4Hg1EL4p5EUTTmjrcnBQjClLoWr1ppEQtBOmCEKmpsWSjSUAm58HPZhR+difwy6HmTC9ZASCe6p8PT/6l9PgPt4KbzWa32X9RdFHhYmFcY4SQAAAABJRU5ErkJggg=="
        id="rabbit_svg__b"
        width={129}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgRabbit;
