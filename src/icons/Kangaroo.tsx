import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKangaroo = ({
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
    viewBox="0 0 128 128"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="url(#kangaroo_svg__a)" d="M0 0h128v128H0z" />
    <defs>
      <pattern
        id="kangaroo_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#kangaroo_svg__b" transform="scale(.00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAAECAcBDPvyBQ32DvMK+Pn6dddTsAAAKrSURBVHja7drJcsMgDAbgAGYxi7He/2V7aJqxJ14QFqgH/nvHX4ORBMnrNTIyMjIyMvK/Ikoi1aTFszwCSAAwnAALAOD4ADMAAEg+gGcGBOAFaM8MUMAL0LE1IC1W6fsPoBkgRQCwp3/noDUgAwBAkCdZmgNWKEwrQOAGiAzgDSdA6CRc5AQIIcS0f9iq3dIXIHaLYLYFqBMgbZ9lv0gdSrHaPCum3ymoK2D3H8ecY3eAZN0FQgiRuQF/kwcb4GYRegwkefswDsBu+uEAvE8AjADx7gBuOwp1BfwuQhQclXBzClFHVaHXWG7fB2HPBXBeHQwI3Q8mKfICDp7fFRAisAImtl5wNJt84pXrBkgnDdHOvV7C09nEhz6Ai9mkloCsA1eziU09bkguB0TVAXA9IFrXHPCZTY4TUyNAjqXXBaEJIEN5QgOABmgmKAJIaCcoAjgcANWfyt6BBQeIjhqgV5zANKwDZWuiGgN29yaHSY0BwlAtQi0gUe3F6u8L7hYh6sYA4WnewypAyvZ+K/pmgOApKzIakAxtNcIC5lheD10DQMAU5NzncPrwNUQBtMf1pEQNUMi5YCIG6IgEWGJAAGwcLWBBA2ZaAPr5JRsRAUh4gCUFSDwA2AGSGzBxA1bmXVDQDjAAUyHQlICpAjBTAlwFQJF2w6VBKUIBKvZBpJ2IPF6QSAH4hnw7nCOvaiN5KUJOxRkNMLQAR94QsQcT/E40khRQ05F80IRnw4qdCBBXSQYIUBefEw2gYid+DJOjuB/I8CDmy1DyI5bLW8oJ26TNfi0KAOamzoRH78M9YL7tNSnW7Iu5FKDujz56qdub7vEn8LkMDHV7Y9Ul74Av6bVa1e2KEkA6uxSMu2OHUzWfgiz7xuT4t8XfV2glF5iln8DIyMjIyEj//ACKXRgXTz5bQgAAAABJRU5ErkJggg=="
        id="kangaroo_svg__b"
        width={128}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgKangaroo;
