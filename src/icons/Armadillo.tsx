import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArmadillo = ({
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
    <path fill="url(#armadillo_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="armadillo_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#armadillo_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAKHSURBVGje7ZjNbqswEIVbXXXf8LMv5PIAjmBfp/K+gOf9X6UUg2OPx8Ymq0o+m0Si/Tg+M5iJX16ysrKysv6IXi8etS3zXXqPIJQdADRPEHqA5wgdPEnYAOcJ/QaAccmj/VUioQCDINS3O0shCJOgv1/jCQOQBPiKJZTgIZiIIMGwAJORySIeRTAtYAKwGEIdIkwxBBEi6HUECPietU2Qx4TB/g9M2JMIEESYMB96QMt2COyQgE3rp9S2ECB0eNldaj8gADQd2Q5+QukQRGJXVw6BaoYQoQ4SFgvdfEDAQQK3LQz71hlPmC0LvV6KQ1i20ytVCphMC/0jTkxYL0kWJvDeyBMRqv1SGSDIwqypTfinF12AX9Iqqk1409duECXm9WDcJ6jRyWGANEmHUCYSlmXgaqaaGB1CqonJ7clUE0RXJxIa98lKNMFdQqKJmXi600xMBCHNhKR2GJGEIAhFWhAfz+ZAEdZF3LvzhEK9FaPz/KY7ihObdTRBbFN0fZZQ7nP4aQ/VPh2Is4Stls1/z8bqzGoOQYR3xWNCsIg8hlAkWFB//IkIoRrOmFBRPUnWcCBz3FoGE6gg5w4NXxYBP91kgHSOW9MhAhWkLOkcVeWnIEG5Hys6R1V5vNM+SiHbvT9ZTeeoisl9hLte57x/OFpvwDxv/6/HYNxcPDmuMUj81uvM3imMkYrIcdvMSII0Wo6rj9GzCI4JwnSs1qn6htGVAGeGsSp/a9fpdPsgLcw0gV8ipHdDisBiCIKeJ1/pJ8h7tsJpwhgNoObq4ImL1k0YGwZBiLu/blyXcBRDgX7uIQJdevJMQbK40yRXVcL5Q6iVrpfzhN8uv3rPgrKysrKysrIi9AOTm3lzorBBtQAAAABJRU5ErkJggg=="
        id="armadillo_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgArmadillo;
