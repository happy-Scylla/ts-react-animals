import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBadger = ({
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
    <path fill="url(#badger_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="badger_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#badger_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAALDSURBVGje7ZhdlpwgEIUnyQou4gLMNAtwHBZg57CAVmr/W8mDrRSKUJjHWI8e/eRWXYqfj4877rjjjjv+s/iBOD4tEdH8tXsMKaGx9A7fXyI0xOJ5gaCJThEiQkO7GMWEYRgAwOwJMwA0w9AVCMuv+4MIohFQlojoT5awjh2A2xE6wK6jOSf8XKt3lDEDaNesnhN+vV+ZjrUYWXbnLMH3aNwIAAcRAA1Q3yVCB0B1wKY66AK6pUp5Qih6ywlTeF4i9GlPMT9ZemWqGb16SMP6OE+Y+M92aViH1mcIlr9rdpbennYZQstlMEe8AsGRL7jap1IZ8vsgmrIzy/FMJBLZEFGfJWiuOUwurswX+oNjmm2iFERjgaBZ6U2iFNYXe9Rj0TtwX78ADEs2dSfsk45GVs4XoLkUCYHoxcrZAy2fdHnC70BQCcJnmWCfmwowO7xVPKhMcPRcMwluh6Ff7FAmcAe6naEUCQl+byluEBFhm582NpQmMcGnCU5OWAdhIoKmCoKP2vXM8yqpZhhERFAkJFi2PkQEU0dYPNHyLslaRZ5g2FecoNl48oSW/YsTbC2BupigeN/PExr2KiNovoDmCeq4aXmxntkLepQLMhgh6vsFgg3jDa5uor5fILRh0xH6g4l2IgXC1l+/vrf1Yoh3IqVeTZnoRARzDvCy9UKfE0bhiuMKIsqEUxmzdNVrCiIE6+aZDPnK26YBk5yg8iIkq7/LmEFG0FkREoLKmEG4hzE5ESKCDtPSHnfGEgLYj93hgCAimFBAvd9TVp2aw3jGWsIy9jlsI+rP/m1MmOoJKpjI7kRIbzAcH4O/cgeieSanKwTFq9lduskxwVH+2l2QXq6SbOzoGgKSR94qQuqUVEdoUvdAVQS+lbhIMIfLh1qCSouoICwyPP6BoI+3epUEPI6lrCS873/EhDvuuOOOO+44ib9ci0H+lvoC1QAAAABJRU5ErkJggg=="
        id="badger_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgBadger;
