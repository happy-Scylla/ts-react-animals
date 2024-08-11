import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAuroch = ({
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
    <path fill="url(#auroch_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="auroch_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#auroch_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAEC/gDwUuiYAAAJsSURBVGje7dhRcqQgEAbgXKERDmBlOYCpeAC3hgOg/Pe/yj7oKFGgG82kKlv2Y2rmC9JNN+Pb2x133HHHbwh6RyBJqB4dpQQFoJMIFpiSQgPIFtEDGFKCkQoA0OUESAWfEuxlwQkF/WphEArhNUJ/WYBQMN8jTFnBCwVcEWxZEBwMVxYmWVEX9gGtKJmFeuB7jEG5JvmN6DmBe4xm/pTPdhhglCwhLSx6uSzXD6UEDZ748/xMm5wXkEe62y/FJoqQFoxcSM8s0nKhTQtUsQ0ZwUoFnxOU/CEywrPguBgpKzTiJeQEWUmMVBCUdAlZgd4l1VQU+Of4IEbgiAUoCdsJTsVfEgil0txaYElQXCJZwbKZZATFVxMjWEE5FQWuKkdWYHtEywj8wRgZQdCmWrp6NsfyGhwAhFyDjUZaficfmB650+W1QxgE5yJ7PuNr2suFzPwbflKYJ+jn+jCPeZBQpTCtozgsg6RCoPl7tAp6+UOdsK1hmtdQJbiv+/DZ75MpE0rlwAqGS+YPCNGVartT0DnBN+eE7VI2rE0nnBOmLS+VgttamkklUy50255UCiZqzH0imWIhRBOgUmiilTeJZPKCjv6vOiWoZy63IVIpUFwC5pTQR2uwx2QKBLfOqWQ5CAS7F4ZawVwWmr1AtYK+LKidMFULtBNCvdADCBpeo7M4vhIQCA7AqOA1BnMsB4lgAQSC12gtjm9XBIIBMJHzeiJ3LAeJ0ABAq73u6OsvC7Gg17tjkygHiaCefVL1iXKQCMu7r0Gn+otMcNnJLxXs8WdqpRDf0o8v/CRCvIjunLDtxAeJhDvuuOP/in/ityNMHXEf0AAAAABJRU5ErkJggg=="
        id="auroch_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgAuroch;
