import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgElephant = ({
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
    viewBox="0 0 128 128"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="url(#elephant_svg__a)" d="M0 0h128v128H0z" />
    <defs>
      <pattern
        id="elephant_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#elephant_svg__b" transform="scale(.00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAADBAIIC/73CP369gz1CfEGiXxkoAAAMWSURBVHja7ZrZkuMgDEVbYMAsNuj/f3Ye3HHhhdWme2pG9zVFdCKEkES+vkgkEolEIpFIJBKJRCIdBWcxPkGvEmurAZiQChERlZxbKZiWiIiIxl7WVgK4BWNJ3mDemcNay9sB+NE8IqJklea5ua6dGgEE3slV2dd3S9XaBODxXj6yM3EhhJRaiDV2TVgSa+cGgJT9nSA4qw6/b4+0pH1EUQ2Qtr/9jtXefSIdAIDNrHWVACvmxJ1JfWQczLmlilUBBIXdMvmPZRWAxnFyFQBhoH00FQDzSABkZYBlKIAuAgzdAcSlCMDHAmARQAwG4ATw1wPI3wbwFAP/OkAxEc2/DVBMxerRx7IIwAqXSQCmskVXyF6nvnwd5wFCvmZ0APmKZn5YDxgAAJ6PcTCFQ1AA0MWKJnNQBACwUgwWAFw+xlaePSeCr7kwtBUA08hDWFMVDy0KQw3AwFRkqxqTgXuw1vWGdmxbUgbgY0Owoj2XYx1QBmDjSoHKCcmQBlm3zIgG5IIltABM6m37KrSN6djLBIq1DiqZKTt16fF/9ag22PJv4pV+0qFrWL2aYlapqqEvU+b6cb2ThYutImn63TwXm1zLe8HktFTp2iYPYKRYI+d/3CXbHixShiaA7M05X77kCcDNDbl5Nj8MOso/AbiOTzcAVXPu4ZhedQ/AdRO22bcs3LxxOO2b0wVwqdR87tryd884u+/6AM5D/G2T11ztd78DCjoBzgQBUn3YMfGe99B2A5wIXOJ43Po/ihbXD3DsmnxiD0R+qQoPAA535PcNb9KvY/ERUFFh9AAAgj7vwbGX9OF+2RJn0CcAAJM8JTtTfl2N7At4CgDA/SEZ8lL4xfZVeAEAIDgbvUHZxAvtDqxOzdlzgO1299+PySGOTHEOgslfTs47APHZiK8kJWIvMH+ToV4HOCeDRTvOOeezN7cZ8n2AwlznY3+CYQCwqobSfARAuY+wTa1Zh/J9hJq7yvI28bQT7AQ/AHD578punvc2Jh1e8OdoNHrq/h9RJ4OQH0dIP7PWPzKRSCQSiUQikUik/09/AHC6S49BDWCyAAAAAElFTkSuQmCC"
        id="elephant_svg__b"
        width={128}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgElephant;
