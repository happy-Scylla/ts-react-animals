import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHippo = ({
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
    <path fill="url(#hippo_svg__a)" d="M0 0h129v128H0z" />
    <defs>
      <pattern
        id="hippo_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#hippo_svg__b" transform="scale(.00775 .00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAHsSURBVGje7ZjNbcMwDIWzgmR7AKPxAKqjAdJAA1jW23+VHuI2cUiqJHwqoncKEuCz+SjxJ6dTU1NTU9O/kVPJX0rYPtoIfp7n4JxzEcBoJ3QJAFA+nQeAbCZc8KN1AIBiJUS8ykiYCGAzQkvoKQDBQvCJIZiiYGKwOekZgC2b3CvYThSOEnocjSKyBIOTrI+m89ALhKwmPDIxJxqGhpAeD/X0UFYIft70HHgiRogEH1nrdt8uNUInmJ+IlQKhE8zf+7DKBOkE7HNxTwZPSNBJJPQ4SPBaAIJAmA4Tkpqw8AS1C/dkMISoJyBwBG8AIHOE3kIoHGGyEBAYQjIRFkrwQEkWIwihA0JnMYIQBkDoMMLVIIQJCJaEBkKIwBoPEWypAK6EYARgeSfCTfY3qwihUvlUhFxrAKooRuecGw4Q1kof5AhJmrjUhMiWdNmIoCdELWEwvgOtD73Nh8LWSXbyFHKxMrVaOA+TulYzjuXqXKvqWcKOc/9J1Tflbsz2TZq2Vb5XV938sMj9nJ8fPHWrNt0r5qgi15dRN8tl0QZ5Kp5eHuQrr8ATdtkvYn36quwX3T5hSbgStQ3l/Bwrf6nKH/vm+SnWqQaQd5ztL5MgXKrb7zJV2bM+5oTA1vkyj04mNDU1NTU1NTW9lb4BGUyCMqGLcs0AAAAASUVORK5CYII="
        id="hippo_svg__b"
        width={129}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgHippo;
