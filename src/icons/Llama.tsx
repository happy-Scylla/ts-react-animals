import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLlama = ({
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
    <path fill="url(#llama_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="llama_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#llama_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAIoSURBVGje7dhRkpswDAbgbbc9gGw4gN34AHTqA5AOB8Dw3/8qfSDewKyxbGvbzrToMZN8GCEJOy8vV1zxb8YnOobCQmxkhQkwIkEDmEWCuoSPEH4AEAkdpMIkFRSkghMKKt5Dq3ADRMJuAW3CDQBW01wPegKAOxGRbxL0tC2AaFp0k+DjAghhW0Sl8PpYwCZ0DcIXrMPjc/9zq8tK4Svm7jlc2wSjgf2gbRBoCiRbA/nxMCLq80Aq5rLpaX6Oz0KFOGTq6wHWEFEf4pxrqUng/s2HR4e09QUArLa1u7XDMVomjL1Jhf2c/YtC2V18t3YQCQ4ATFrQJcJjEg9JQRUI8SpLs9DHLwwpoS8Q3l5LY6PwTNXSKDxvdE0Jjhd2F/k9wv7lHez7MKwANu5eKuwjIag/LKxiISSEvkoYxUKqs3wNkOxuV7UEqZCecuW/t4aEgklPe13xJNNCRUHNYiGkha6iJ9JCTUlewiX8L4K8NyuEhaRT7mTCHLYPTXOy4o0znAjFQ2o925nrqjSQZA9jTgVXkwbidqRsGtidOVdP/AklE2PZOYtNZFooq6ncSa2opkJOKKqpOSfE5jLJff0xDSeCLxCGrNDxwpo988aayglLXiBeGBnBsYJhhJ4ViBEUJwROIE6YWWE6fu2dYFjBM8LACl1eWIkVdF5YeIGmrDAWCC4rmAKhzwpUIKicEEoEyglzkeAygikSlLXpqrbbf2FJ4YortvgF6mQ0tbW5Jc4AAAAASUVORK5CYII="
        id="llama_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgLlama;
