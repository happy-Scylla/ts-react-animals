import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIbex = ({
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
    <path fill="url(#ibex_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="ibex_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#ibex_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAALtSURBVGje7ZhdkqMgEIAne4IB5H11x/fNVDyAM8UBYvT+V1m1AYnS3UAepmrLfrIS+6P/aBrf3k455ZRTTuHkIptF/ohk+QSFd0+YrAx1irr8cO//dYRfk5fhyumrj+3t3xHCNDG+yPBdT7iY8OdvCnAL39y8uMx/NY3HDAmAsWlmf99DwmJgy1lx20V8T5gZhkTIfaiOBKGsGdGsKuvAlq4IQQhAjDGC2QPiBIt4YEEIAQhBmbgf1oeniosTbLwOfnTrz71IIFhz+5gJO+cwAoRsZ0R7CAJFkEcjVMwunAA+j/QvNOGwYtwEggBLPjgTKILa5d5ETaAIO5UKqXSK8KyzOnHPI4gnN471nEAIl8WcoAlV0O8wJ2hCaLlBnGAIrc+GRHsOTah8UWmk5XAE5Vdu4+XEEiAQZBg4QmubnULDwBG0zWGFhoEjSKupsWpgCc76Fj2COIILJR5IlmAX9zkpJUhiICD7w+hC6AimFpk9qrcEm4oqZgdBkMuysMEtwcSiSRAWNSiIAZqDyu20rY/huMXzXkaYgKCjCeEIUAmmnPDVbIPjV1tCOMgjh9DFCPfcbB6kz6yoo9QvE7JqUlilJ1zuztqWtYTM0z+crzV6aaAIczp7ZROo4fmRR9DQY+9gz/acM8MMC2YAwvqc2aMkrDtAXtbnTIIA3yd7btQq2q75OWpVw8uBJmzprPAbID+JrQRdSNB+R3fY3k6Z5dYyagsJ0ttu8AskSVB+O6F7O2menHOo8GSmzJPz0vjeTiTURDIZgtXsNdbq02baOYlEMhmCS2eLtfq0qXgmTMT3hJSpmGj1PAFqcTB4OSTN1VPfEV93UuZqV1HlBLcviuZqGe7u8sncdbnyyTwgFRCMDaB5ZTIfmqtsygl6293DTxHkRri/TOjLCMvp29V6rLBk8gQza17lVWEXNZ7QQQQ75MabQJDr19IbGkie4A48zIkEQkV0+jQCnPz41+cEgvg0UyN4wimnnPI/yj/HMZwWjDCORwAAAABJRU5ErkJggg=="
        id="ibex_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgIbex;
