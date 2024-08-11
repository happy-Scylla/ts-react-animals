import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBat = ({
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
    <path fill="url(#bat_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="bat_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#bat_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAEC/gDwUuiYAAAJ2SURBVGje7dfNbpwwEAfwpGruHT7uJSs/AKl8Lwk8AIb/+79KDxjsscesLbU9eaRI2bX3x9hYMPPyUqNGjRo1atQojVdiMVAcwXc/boXHKgjLlC88MAqCwpQrtOBzbfTAkCc04FM9eMsTNAABoA6AyREeuBG85SWFBpfQ8BvZAf46ksLihP7cjXa6BHw8E1p4wspOwiFcm5wStC9s58J8wdwLNgUr2IOlmHAmkRC0P6s/9q2xd+DUzZ3Q2EnHT+whbN1HeLdDFlQomCMvJti1icKVAtbzJwO1J7iAJSEK7SUYdtFD0NfHISlcV8EuCOAZSoJbxHE7udC5wS0ltJ4wRULvjQ4JYQFPtAdmAPMhhKOS4E3BTkQ9DCkYeybDUUHwFwEQUY/V/k1sG45lCIJic8bjVGtspDEJo4Kg2RwT7GQ0GgsNECTqC3yJ2CShC4SRCSoYlYQe4WU8IUwQkyAs4aTRE8IUsAqCDidtTvgMx2AEIZoEDez0ixYg0rHHQgcx3jHJA7HQyhM1dnlgiIQeZTFFgioUxkhYCoU1EnShYCKhEMD+94VvpcIWCt9LBVThXwlvxcLv58L2df43z4Lw8+kqPq/31EREX+X74Iqv0RXLJcLHVdttrNjNFnbXU5zNSqOLhMHV6QPxgjlPcG2E35ToW4E/H1ybtex+o5X/hCFR6PIFIwtsGfvts3pMCOr2WW2Ffe5mv9NjQrvN77NOCeo8ykGbaqKO7ZF44/RB+ueBGKTmV3zrBd3kbWjx3Z3qdCnV/UoVSG4KRFqqQGjJToGoFesotWUD1GCUqsH8RRDpQapIxwJBxRVpjRo1atSoUaPG/4s/rlXskknqYaUAAAAASUVORK5CYII="
        id="bat_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgBat;
