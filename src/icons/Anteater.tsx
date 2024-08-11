import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAnteater = ({
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
    <path fill="url(#anteater_svg__a)" d="M0 0h129v128H0z" />
    <defs>
      <pattern
        id="anteater_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#anteater_svg__b" transform="scale(.00775 .00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIC/QDbf7tYAAAFlSURBVGje7dhBboMwEIVhjlAbsw+0HCCR2DdtOQCEd/+rdEELjvyCZ+Ruos5/gE9jYRLjqrIsy7IsRW7LA7PL9nIgDADOJUINALcSYQQAXAuEHgDQmvBHwqVLe1MJvLkVCB6HXbLCJzLNGaFGtuVQCBB0PhIGibC+M1yoRcC6Di7IRliHoIJwhHUIKkhHAK5c8GIACxdGuXDjgnwRQMsExSKAiQmNRpiZ0GsEMEEFoE2FoBOmVPA6YUmFRifMB0In21Op0G8bVrY3HwuTcGOUC6dE2Bb4NRQK0kwwwYT/JfycN/1QKrgQE9PvGbRTCHfE5OhxNyPER6rJUSInRMeRSIj/SrJCTYWgEPYhYiEaIi+MVAgKwVNhHy0vOC40CqGnglcIIxWcQmi4MMiFmgu9XPBcGIuFRir47pUJXSddRUDpm9VwAc8l8N+o+Avi9Pj2YO1ju3WIH3HYLyPeK8uyLMuynrJvpv50Hre/CZ4AAAAASUVORK5CYII="
        id="anteater_svg__b"
        width={129}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgAnteater;
