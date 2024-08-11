import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCamel = ({
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
    <path fill="url(#camel_svg__a)" d="M0 0h129v128H0z" />
    <defs>
      <pattern
        id="camel_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#camel_svg__b" transform="scale(.00775 .00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAEC/gDwUuiYAAAKLSURBVGje7dlLcpwwEAZgO+UDBAH7qFIcgGTYW/boACD6/lcJ4ikGdautXsSL6ZVrCn0l+m80Nfjl5VnP+pb1WuzVuIJZPxHBglSA/y9U2YK6L/UJY6bQwVaZQglSwa6ru2xhWn2bFFPmCm+ToBupME2j4C7e/EJRJyehrUTCj2ldI0tTF0o4D/6pFgpWOpPFb7HgS8WFu//0xhKqqGCxrUWEMnbpFjIMDKGOCNXeHzBpoYkIx8kDLi3YqxBs4bKJiBBpWRMKQ44Ap0oJ1VWozoL5iqA+p790fRb6hFAHgpozcN1ZGBNCE1zWQKxcQgjGt4R4JYTuEBpEMLRw3KxCAGhJIThpsZs4h0EJ2E2cw7gI9XGVxQTHFTpMAFKwh4ACpzAuQscRWkoATvWEoFjCSAgVSwCNCyVPcLhQ84Sgl4+CZQpOLBybeBS4ADgdF3hhzjXEBWaYc+mowAwz3MSDUHOX/903kSsMdpvtXGH0PW8lAvgz0IkEvW0iO81220S20M/HmWSq5+8TJ3my/GL7J/+EgeOYyjsnfRlEwL/qIq2MC+xNDJjA7oRDBfZM4ALXMITAm6tWLPRiYRQLIBe0WDBioRcLo1hwYgHkgkkJtztWYSujggo2Ga1muWBIPZu4UAZhEALxjnM7yBIC9QaiO1qZKayNaGmhJ4TqCCNTCH5a5wp2bzYhGEpY89T5gtrDIARNCWuePSmQwJrnIBD2ucWF1Iv7ba5xIfVaza6tzBfqda5xoU8Iam1lvrDkORJCmxKWPAnBpIRlsLVAWPJscUEnhTnPHheSwJLnKBHmPB0qcN70znn+kghznu+YMDCEEhUUZ6C2RkT7UFT3DwZQ+H89nSfqWc/6NvUPwbor78tEf3oAAAAASUVORK5CYII="
        id="camel_svg__b"
        width={129}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgCamel;
