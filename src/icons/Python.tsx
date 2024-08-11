import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPython = ({
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
    <path fill="url(#python_svg__a)" d="M0 0h129v128H0z" />
    <defs>
      <pattern
        id="python_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#python_svg__b" transform="scale(.00775 .00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAH4SURBVGje7dnRcYMwDAbgtBsYhwFMmwGcawdIex4AsPdfpYQCwWA7lv4kzfXQQx6/E7Isq9fdbot/FS9CiNIJenjCARbKTbiF4M6hAeG1F1o4B0YSXh2kc9bZN0AQn30e34AgHZ3whSEJUjUWwpCE5QtjEie+MCRB+I6lMCbR8oWi/waT/x2+cKz6BM53zCId1QvZSQQ7qhcsrw774SxN96t4lTRuipYnFBfBYv3wWw6WIC+C4glDMfMvx1q4FLPmCgUsTMVs2IKEhXNP/7lwuJXAP4uxIwAB7geJdvXUlIot7GGhxObD7F7wBVJDBQUDTVpyO4QEWjukZpSCBQ0Lgi0sG0pW3eE0ii6M7fDu0iviNaEw1x6guGDnCSRKm6iDFkczByJNmnqzVqFhoYUFS7xZgVC02x2Imjij8gqRmrTraIjvRSCI7yYgrD6jMvGeCgqL06iScysszCvR6FmPZAviYwK+vC7LF0ai0X5SBKGbbV3ojOkbFfwoiKe5jvIJhAPtXtxFIN7uuFCzhSLx6NAExRZS292jhNR292Ch5gsGFlI7CElQTyDglVwvFIp4msGNAhVsphDfKJym3azQWkObD6G1hjblQmsNbVYDwh4WJCzEz7POFWSssVWuEKtEbk/6i9E8TgRh+ffKOHu3f+RtscUW944f4vbZ6VOGM18AAAAASUVORK5CYII="
        id="python_svg__b"
        width={129}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgPython;
