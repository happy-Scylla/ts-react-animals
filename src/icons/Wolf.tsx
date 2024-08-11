import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWolf = ({
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
    <path fill="url(#wolf_svg__a)" d="M0 0h128v128H0z" />
    <defs>
      <pattern
        id="wolf_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#wolf_svg__b" transform="scale(.00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAAGDvvxBQz0BwgK8wIJ+P3+rdXCMAAAOdSURBVHja7ZvbdqUgDIYnHAQR1Lz/y86FtRsQIirYrhlyx+qifEKA5Cf7z59u3bp169atW7ejQWSMIwoJVyzd5SbAgIiI6sr4mS43AQQiIiK7AKC2LroqgCgfX289cKwKcPievO09TF2AqXR8i20A0BUCzK0A5rLxHbYCwLKzYGkHYErGl7wdAC+ZAoPtAIoOo7UlwFpwC2BLgIIpWNsCqNJTuBXA6XksWgPsV5Jji9j3m5qMTk1AEwB0AOBGhZHxaQhO4XYAM+gZk7Ya6bA9AE6YNa7eALhgHaADdIAO0AH+RQA+asaJIWc9qKYA4yHoCG/KxnnBV26UB2B0IlMBYAhyv4MtYVzcAGC14BThA0MQlTXZBZx2fN7Pgf8NQAgh1E8BTGwXjeyoXgfgJhQr7PwuwHTUSrR6D4AnZQI5vwXA7bk81BIgO36cHLcCGAh9YnoBYCkUCZtdRrRWODYHOFNLeX2AcH+fiaULsVr3AEZMiVTnjwUJWfEWAMNLKxBGjNGOvQNgowjI0wnHT/A32YzLcPcQwMURmE7P9ZrzWSUfAcjDBaPToizPnUWB01wHOEpyOn3mzPkLYX4AkLjjdXJ7+Ett8nfiVQCGJEAmAzHpfOkGwIAnAN9esEoSAO0tAMszAMy4yOH3T2TGJQH24+ASgEynQBqWz5K70NG3vyQA9s14BUBmgm0NwvvkJVgWhYgsCfBFcAUgp4lvALvTyWCfbX83aeXiIsCMWYDJO/gYxg2bAcDlEgDDPAD7fPWXn3oNDjkAZBcABiQANu8Ug7Rm99NPw+QBUBcDSE4BENODqyQAuCwFIFQo1JGD8Cne7ybft3gGFA3g3QLKhQ0KQMibMWEQ5mx73i3rlh8fGh7AMXiqBwAAoP1gx2u8BnBaP/BTAHM+hXoHQPwagKpLwMvzAt4EQGBpOZUj0vgHAHNxbjgeArEqACx4MSiqIeFQE8BhMgClSKeqAF6OTrqhXKmCmycADIm1TflKYgUeAXgxAiHSMFpKegLg37JKFlRRudoAfpiUUQqXMyHjEUAYiSX+v1VRbFYbIFQe1sjJ3YznBVcPAaJYlS/fZ61jZWLmQ4BEuqqEEELw1ANqCwDq0TarC1UFyKTspeNXAAC7no5PFP9WAAB58ojHqZrLGgDbTwfyz3hk9XUdAJAmh7AOdM9KAADSpFxhGs76VQMAALuosKByLCh9rwkAAKCZ2WywZR36z3e6devW7VfaX1RWEFui2iCPAAAAAElFTkSuQmCC"
        id="wolf_svg__b"
        width={128}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgWolf;
