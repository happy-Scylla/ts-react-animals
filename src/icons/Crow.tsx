import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCrow = ({
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
    <path fill="url(#crow_svg__a)" d="M0 0h128v128H0z" />
    <defs>
      <pattern
        id="crow_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#crow_svg__b" transform="scale(.00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAADCAn7+PcBDf72BAIM+vUAXZf8wAAAJ/SURBVHja7ZpZdusgDECLQTaDwbD/zfYjTZvEwlgM9jvn6a7gBoQm5+uLYRiGYRiGYf4tRIZJKgCYl0l0gCygpUlPjNSXC8j0hnXXCqwmfaL0dQIeEkLQFwlomXDgGgFnUw55gcAK6QA/WkCr3bG/RaMaLLB8nr6dhFCdjqAsgDy9WQihO0VBScBvyJ3vBKweJJB5ersraIiCQ4HJ5OIeTK+HcChg02nUCAGdCKxDrkC+ciwA44tR4Qjc3QJG3yxQmY06CtQ9RYJA8VHCYAEoHsFyt0BNSSAIzOVstA0VkCfyYRwpEE8I0C+BILCeKQkwUOBcbVrGCZysztM4Adg1Rvt2mTwpUQRm5LSbexOKgEOqD7QWZorAhPzUuTUMSOP5RxSaXHKgZAOSwIbUX/RphEECCxKFqrFJJgl8BoERQvjG9oi2orFIL67aelSagEIyv7dNBjSBiI0jS8oOkP3XdBYLd2gxIAooLNh0aDAgCkQ067UYUDelBs16WYO1u4DEy69WtRMjVcDnGoBo6jok8rYca0EeVy1xhcIymSyApV77043HDUtKwXcVwFPv9vyZk5MKfjFvfp0E8Opj8W8XPwV81h0FchOSlchRP2cJs3YU0NnlXZBrtoXJxWLNR6vDESnA9rfXCuVLqhE4MyejW6RFdxIQoc4g2dn3EciHQXl6dbqDgJhsqifM0bcKtBk8ghVAuXoBMYXUAVUvIPTWw8DVCyDfkiqQLQL5NoRwB00CQnhlb7yCxyk4Ze4JwtdzWF++azx0QJ6h5RlmgZHDKQuwAAuwAAuwwAHSXrEpzROvWdXm2f57gVj7l5J+QVj5R0v+6y7DMAzDMAzDvPENFbLLU98o0AIAAAAASUVORK5CYII="
        id="crow_svg__b"
        width={128}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgCrow;
