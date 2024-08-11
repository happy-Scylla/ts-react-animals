import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChupacabra = ({
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
    <path fill="url(#chupacabra_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="chupacabra_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#chupacabra_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIC/QDbf7tYAAAIhSURBVGje7dhRkqMgEAbguUKDOYDOeABTwwGsXQ8g+N//KvsQBTRoNzK1tbXF/5aU+WxoICYfHzU1NTU1NdlRLTFR7bXQIyZUZwDX7d6C5QQXLu6xxgbD8AKW9dpfiPK9vjlBIGAgIqIeu1giItIQCRh3gGs80UAouN0QLPmBGKmAReFdQDtBLMCkBIcMASkBmcJiSoX2AcBpwCkAy3RTsM36atB3Bd8HlSUsOi38FguzSgpOvqJmBcCao2BfS10s7Ds5P0oFZ0qF14s7gioV0BcL+FEBhFIhc1UXCbsj6p6A/0V4Hr+zPjMFR4eOtmTyBEuHEzp8D/61Gvw82P7mPPjMj9Jujk2h4IhMmbAQTWVC+3ryKRCIjguDE6bE89dBna+FQ++G7QHutvDsuq77zBI0v7uZ52pVLDS8QNcClQvsMWc5YeKEhRPYZgycwDZj5ATar6YtfbRTOGGKt0RIH7Y7J+hrYeCFJgyY1GsIbbTFR16I7zb5cuLKWEGHI7L3H4tYXoiGsR2yu6Hxgu/G4gdPj9AJibDd0Pk7tyYcvBLBF/HchC5MjUzwRbzvCaFwtkHXH/USoTnb2GLhpIgxQ9AXJcgEMsmzJUfQp/MoFRJFDJmCPptHsfBWxEK5gj4rQSwcigh/MskFnZ7HDGFXRFRChqCT85gjxEWM94QpWUKO0CRLyBH8THzTXWH9c+1J9wVSPewX5Qg1NTU1Nf9g/gCB2vn74kClTQAAAABJRU5ErkJggg=="
        id="chupacabra_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgChupacabra;
