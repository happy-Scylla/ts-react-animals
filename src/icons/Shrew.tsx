import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShrew = ({
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
    <path fill="url(#shrew_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="shrew_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#shrew_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAH2SURBVGje7dfRkYMgEAbgawEIBUhCAdwNBZgZC1D5+2/lHpIo6C6S+JSZ/d/imC+wEF1+fiQSiUQikUgk3xzFRTunajkSfgEA0zW75K7vCB6vLAOJQN8urACAe6eUUgZAahYiyiSnlAWA0Cho7HP3ANA1CgO4NAoXnBU8L6TQIhhUkloEWxMwNwi+KqwLygt1YB0EK+gDAYeCPRL6I8GjcRqfC+lIwGHCCWHyWSE4obojg8kKwQm6vpBZIU4Iz0J8JPSXbEd8JBQ74oyQTguPQnCCbRH608JcEzxaC3FKQKgITQB6XjBtwswLuk1IvGDbBARWOH5CLYVghPUe7rXnX4WgBQ2grwnds9aJEyKAwM9kCkt7EhhhANKugym+r5QZHoUgBQ1gZPuHMe8vZlqIADpqT7g/AFPe4yRSeLVrRB+mhkwwABAo4fIc6rDvBVXM3rkqAugJwQzPf10sf37RQ37nTAjx9eywADA657pyhl0+2rQX9PIE1Hnls/KNxaedYIb1hUYJtrik98Jjn4R1ucb9Q3zKF347Cz3kzUUkBLVpzDf74VY2i5YSfLacpeDcbduwakqwZVO8Cp5omg0laO6Esmyejl26pRBjTbiHzZxH4twyk0IEANfVFn/ZiFP7OUtTwlunReO2o6oIEolEIpFIJN+WfyxbbKJz9FUwAAAAAElFTkSuQmCC"
        id="shrew_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgShrew;
