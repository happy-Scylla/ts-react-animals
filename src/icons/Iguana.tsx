import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIguana = ({
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
    viewBox="0 0 129 129"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="url(#iguana_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="iguana_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#iguana_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAIrSURBVGje7ZhRkqMgFEV7Znr+BzH/CWkWYFdcgOlyAUHP/rcyHxobbYSnVk1XTXG+rRMu8HiQl5dMJpPJZDLfwA/lcVUJ/iQMNdUxQwmXQwbdQqUKt99QQ6M07DaU4JSy+w1DhhK6vQY7ZuirnYYpQ6P0W7XDoIHLmKHmscNgAe7QV6pkj6FkpFMa2J5Ct0xYaLbPZM2M62ZDwYLebDS0fOV+2WCoAT5uXwZylRo0AEoFBmIqkaFdN4C7pg0/h08rTZj5rIYMv4H+hLOs4s3qmsGdiDPNasjwCnQ1KcaiDxl+AU2LUBFcixvXEgF9rC6sxMBHxCAaA1SR86EVGbqIQctypDrOuzEJUZPsvEOZ9oUxxoSCubTBgnfOBmIkDcBn//aOrn4c0SVl0NPOWRjceBY/UoZiXDPP95yAYct0KcPJD+HPgxu3jEvfgrwQvuHx3Lcpg2XW/K23EcZMUYOePp6FelbEECNqqJ87d+S2KGwLcI4ZLLOV8KutmX7hnB5DE5jH/jPTOXET80N4hovQsKRetPJasppR7GFDe9SgRbs6RimqrGSIxwFDITthUkMQnHLxpaTbZdDewd1sMOhQ7+iV3PC2uesFU2/qvCs1tex5UsPKXcApsaFdF8gMwxCcMfMboZIbaubPNW2MMelX0rz7rr/3JIaC2OtbYjhF36wSw7531mIt1THDc+WPGB7fbdDxf1L+iUER/T9IYrjd1UZDJpPJZDL/PX8Bb0ETGmcF168AAAAASUVORK5CYII="
        id="iguana_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgIguana;
