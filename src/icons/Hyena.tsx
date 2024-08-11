import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHyena = ({
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
    <path fill="url(#hyena_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="hyena_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#hyena_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAHLSURBVGje7dZBkoMgEAVQryCYA1iGA2QsDuCCA8T473+VWYwxOgP8xp5MzYK/YNFFXgLBlqapqampyaaNZ1j6dFEiXAH0yaJAsACwJIsCIQAA5lSRCx2+0ieKXAjr5DlRpMLz2w47YXdFKrjnZNxixYkLYZs8x4tMMNvc3TIORSZ0r8mIF5lw2U2+RYtM8LvJU7RYItyjRSYgJuBXhblEeESLfyvM6lWc20n9v6k/UQ4kt5LnIpqeCZYA/OluiTCXdLlopoJOG09Jt08sQiBklyF54xjyE3ivDuQntCWn+ud5FLy7rzngIbiB5E+kQDDQCkEreCiFdReX4fAsDnLBbs+OOzxJTipsR+n27e17kQrh1V/dodt6ofD61DIe9mEU7sMVguQEC6VgglaQARnBQSl0UAoWWmG994fTwrqGyZ0W1u9m3SUtdFsbDyeFsHXh7pxgXtd4c0647G5M/pTgUZCoAK1g1IJVC5d/IPgqNE3TNMM4+nGkQ74/+IkPeQEzH0iHWfiQFRzQ84H0qDsfSI968IH1KMHwzh7l1EKnFlq94NSCVQvSG1BGsGqhYCeS96igFkzQCq3xWqFtzSjJR0Soqampqal5cz4BN8AwiHqfkQMAAAAASUVORK5CYII="
        id="hyena_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgHyena;
