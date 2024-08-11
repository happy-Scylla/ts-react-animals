import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIfrit = ({
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
    <path fill="url(#ifrit_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="ifrit_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#ifrit_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAMgSURBVGje7ZhRjqQgEIZndrIHGNQDmB0P4DAcwOlwAKX/+19lHxAF/EFpMskm25XwUG37UVQVVcjLy1Oe8pSUvL5nBMvxtyJCg3sloQPqCWMdQVUTNDDXEQASjBJCA8BUEVqABKOE0AFAX00Y/wFCdSzu1Rk11RGElJU7i8r/QBCftYRuTyAWhgsE5ZJYaLaxLxHWDBoAlk3nBFfVBEAz+pQgXFVrAbovTwmNW7yyhLmY0LndbAHcl1lCuxKalXAscVdX0TnCVBwLbd/RjrA8uC+EA9B4XiG0G4E54gph2AnzY4QdwOJJCF+mP5ToTcK3v0xPCEPssM4nBPH8AO6EoGOHKZ+wRNUf44HwK55J+IDAPAEA84HwFru8DQi+eU2GsPBYRua1GYKJFsvj2QGAORB+R0FrEEnk4hRh5LEMH+kcYeKxDLxsg5QiGJbSUTzbLAGJWPrxVHnCxGPpPVozzfBo7hmhj4QlsC5JWG0VIBKw5yRhSblhjad7MvOdtRmhGGH2l3ckvAZRYwAYWxpWg9IEfJOUdubtDwhBeYiBEyaP3OcIuGlOMH5gjoQOJWIIoS0iLIQgiggz6xdFhJERVAmB9qyuyJGM0BS5gXbeIAuklDqtjpwwRPtQ6JR6T3T/Nq5HIqFiSZ0ftD+H/NysilRrEiUM3pwD0LtZI9UWAEoQ+zYW1lbNVFtq+ClIb9FuYGBciwzVtYxxQrvN0WBUxjX6UF1LaeIkpncbbjqwYVfXcp4gtC7rhX1TEXXJnwaVc74GJi8WntrnCdtXTaNvfj7s6nR2Iv04yUmTPpHKVeysYd/x1Nv6tz7TL+w747tQSZX3C11U5fId55L01YTqjnOv7jjmZzpOUTBoxxlISW/cOLiBEQRpK50b1/rFcGxtahuhCT0nCH1Y7D7Cw0yy0kaIudmHL5+Z3W333ZdzRLcP1/uklP2lWxQryhuIvibzhIEnwVRwo5U6dlz/7h746auAQI3oi779hxMvnBMEqQiF9w9tfg1XbjA+smu4dAcSIL4fukX5Ex7MHiBsTeZWfCfmiZQyceP68pSnPOUn5S8curM1tlnXIAAAAABJRU5ErkJggg=="
        id="ifrit_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgIfrit;
