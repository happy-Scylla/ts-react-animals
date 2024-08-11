import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDingo = ({
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
    <path fill="url(#dingo_svg__a)" d="M0 0h129v128H0z" />
    <defs>
      <pattern
        id="dingo_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#dingo_svg__b" transform="scale(.00775 .00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAIOSURBVGje7dhLTsMwFAVQlsCLwwIS6BxXzbyh8pzYvvvfCgM3HycO8jUz5DdqkTi69ffJLy+1av3/kqaXk+q71xxBAS4NDMBnjvAG+LRggHumAJ0CFIDvHOECYEwJLSO4k2HIF/zJMOQLqYFQoITuKDScMB2FN06wR+HCCTgKIIUuOQyMMCWHgRFcchgYwafWEyU819S179/X9cQJo4j6CB+/dNhWpODkiqXeZeAFf8OmHoYX0lWFKlThT4Jr4n/tBlbQEmWxz0OKui92QsF9EQmez2Cv8Tg8LnVFVeEPwg2Ibr3JYOL6SQOYpTluAAvYkl/h1na4dBy27UuZ0G3aF/qMMktHF9qXlu7E1n4s/KF0d+u5mS1eUePczBYIXkyYz2H5Qgo2LIMwl7akl7Ohkw7D4OZzlxPaMBkGwFQiQNQ6DlpK5qKTG7wWUQaPZUIoIWwrpaPNxa0HLSIyuGhrcIIPR8MomzuUXJO+/wCAr97U074K5UL7m3DPEbYXzL78a5bwS4gxTzgP4SVTOA0x5gqnIXS2cBLCSbagziJkC9ueI+5HsgV1EiFfSIVwQgkqHYEQjiHC9UEIKhmBEfYhno0hI6hUBEqIQ8yPbJQQhehKhG2I5ZWOE5qopSsR1k2+PhSSQnuIwApziM1bJSu0+wi0EEJsn0tpod1F4AUxuxdbXlAXq2mhVq1atUL9AI8l9lXf4BgxAAAAAElFTkSuQmCC"
        id="dingo_svg__b"
        width={129}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgDingo;
