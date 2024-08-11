import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPenguin = ({
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
    <path fill="url(#penguin_svg__a)" d="M0 0h128v128H0z" />
    <defs>
      <pattern
        id="penguin_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#penguin_svg__b" transform="scale(.00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAAGCf38+PMBCA70CvUL8gcCWO3EkAAALDSURBVHja7dvbcqQgFAXQAHJXdP//z85DOmlFQCccMJViv6XTFVZxFBTIx8fIyMjIyK8Py4WLCQAglWbltAAY6/CO9L0BfsIxs+kK4Dhl0h0BifYBp7sBku0Dk+kEyLQPzH0A2fYB3wNwaH9e1P7H0AFg4z4/fLA2B4hDly+MMb//YGsNOLYPdSpJY4CIrzrruTvciW0BFpdpC8DTgPA04DURTw8DmH4aUBqMO03H4mmAkQ8D2OoeBrDlaQBTTwMyo1I/gE5fh7YXIDsviT63YWFWEB0A+WEAAHhzQLl9QLcGiIspWT73XpC7FUgB2VF495ZoWgJuPBadHo4pARx3sjQDGHcLEBWBEDDjXuZGgMQsLEMI7qIIZIBTAQL/7GutXKkIZICoANNuPcDMhSJQAaICSFO8PxZyQFQAacpD5K4IRIBjJ7vzYsScKwINYLl89llzRSABxHfAev3C8r1uRwKYr+bcxDChCAG5v12swde6HQHgNASlH38zi6cEAIEfAV4dVQ/w+CHgswjVgMSiyF3AZCgACj8GQBEAPCoA8NWA5KrUfcBkagEKVQCoSoBHJQC+DhCqAaEOIJ8GbNUAXnkR8koArx4H9PdloNRNwPuLQZPMBUICUq3vpZkLgGWrkIAUnvjN6D6g0avZAAzAAAzAAAzA7wEkjyr4joDkUYWtIyB5ZEf2BITiAkkHwPnEzP4Vrgcg3p06bCV1ARz7YJXoDkDw6QOW3QCAtN57z0V5Dash4N7G2QD8PcCU3ztzUw9AyO7ff/2mNYCxLdUJbvvaWW0POA09gLOGdQQwZvh+D2F+7eA1Amj7mRBNxZ5bG6zlPtrcDq/vayJAtFofCgfZQ+JISTUg3i75DwAWCoCtAFgKwHbnsFDmhMlGsmHhrs7JZM9bOpINC6bn8M5c/n8Of/iurr8IR0ZGRkZGRv56/gGnLNFoqsMJBgAAAABJRU5ErkJggg=="
        id="penguin_svg__b"
        width={128}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgPenguin;
