import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgJackal = ({
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
    viewBox="0 0 276 266"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="url(#jackal_svg__a)" d="M.5.5h275v265H.5z" />
    <defs>
      <pattern
        id="jackal_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use
          xlinkHref="#jackal_svg__b"
          transform="matrix(.00775 0 0 .00804 0 -.019)"
        />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAEC/gDwUuiYAAAHESURBVGje7ddbcoMwDAXQ9JEFiMcCmIQF0AkLcGIWEMjd/1b6QdPBxEgymulPfb+TM0aWZTgccnJycnJy/jJvpE0xEhFZhBaNUQA6m1ACD5vQA5NJKADAJLQA0BiEAgDgDEJpFnqrMC/BIrSzsGsvzt57N9dxl+CxTHpHFX0ApHf1GsA9UXgB4OJCMUyOq/8iG/OhnSu01QKrQkaEd2AeHfEuXBcyInw8SyQuYespjr+6tARg3BYm77333vFL2OjJIxLSxYRP4U/uFNYysps9C4xhXzQxoeSXEJaki3b1mROIqAqWFD0XCcKULjiiOmiqZGFc9ZaLCuxuXG7hiIgKbUJPxYUiQXjEZ1RrFsj3amJrTg5moTYLJeBtQoWJqt4iEEaiYrAIfUdEdDMIQzPf1PuF+mfCisWQ702hGJPm5h32dHWYk1ngOvSuErgN6TQC2xROsRf8dspvQRXfDZMonIR+GgVBPlodLyiON/82KJ8qjKxQKoZDxwqKCcW/V1eaC4sVNNOa/+ZV3Ftf/Hf3oKqCTXCCUKuegRNKHcAIwkvElUSB3YxLQwrh5bPMP3Ndnn/2bK5+G88hJycnJycnJ+ef5xsrVMzomf1AWAAAAABJRU5ErkJggg=="
        id="jackal_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgJackal;
