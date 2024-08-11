import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgManatee = ({
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
    <path fill="url(#manatee_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="manatee_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#manatee_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIC/QDbf7tYAAAIcSURBVGje7dnBcoIwEMZxH6Eb4F5w8gA4k3vRcm9Jvvd/lR4cFGWT7Ca3Dnt15uffEIKOp9MxxxxzTGaIyFjgQsL5YIQWALBUCA4AgLFYaO4AfLHgAPizOGIvtPdP4KQRe6EBgImsNGIvdADQk5WuxF6wABAMACCUC+tM1UIoEi7wVhHBCL1djCKCa3D+rFiJzDoIIrJCNoITRofQiCM4obcYG3EEJyxA34lXIrIOZMUrwQuB5JeDF0bzcjl6nXAdhoHmF8FrT9r1tH7OqBbmN8GrBUAeIRR8tZCIkApeKThFBC9YRYRYiEbIBa8SOsgjFIKfaoXIXc4LhhX4o0YlBLnQQB4hv5qxCFZoAXkEKzRRIQgFC0UEK8QBJoITTELYR3BCA00EJ8zQRHCCTQqLQHBJ4f0u54Q08H7UFAhvEYzQQhXBCAaqiCLB167Da0RCmGURccG3soj4nvwlWUT8vuiTm3NMCt36Lo0kIvqrOVD6sBqTZ5Rbv0O2Ln+Xs8L8qDT5oyZ22q+v37IRsSfO44vwLRcReW5urvctE8EL9L3ZtiYdERFeprWpCIlAdHXxCJlAdLWxCKlARMOwljx+0QadwC3uVC2EagGlAm1u0VrBVwsYq4WlUNjsr3rhq1r4LBM2j5KfMqH7F4KpXsm2WqDqHfXcEKW7+vlY/y0VHh9jKhZu6zFXLNxXYqEKgc73vwf2wjHHHHPMv5w/eO4CLCiP+HIAAAAASUVORK5CYII="
        id="manatee_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgManatee;
