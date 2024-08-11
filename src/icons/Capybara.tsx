import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCapybara = ({
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
    <path fill="url(#capybara_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="capybara_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#capybara_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIC/QDbf7tYAAAIiSURBVGje7ZjZbcMwEETTgkS6AAtgATbCAoSABeiY/lvJR2Tz3uWBAEHA+Taexd3hHvz4GBoaGvr7mjzN2CdWJEEDWxdhBnB0EQQAdBFug2AJzw7CDABgTZUnSFw6Wwn6RcCjjWBgtbYQhAPAsdYTJDzt9QTtE/BZSzAIda8jiAhAhCJFkEhoryHoFCFrrARBIa1HKeEnCM9liUhrGUHaTw4RRxnB5AnpUESE68epU6RDERIESN15gqEJCWOFBDDaOYLkCPEdCwiCJUShCAg3nhCGop4QGisgqAJCYKwWgm+sJoJ3xyLCsVSGIiKcU8l37EQutiKCY6yIcEhdFIp7uydDY1XfiygUtXczDkVlfUgYq7JGJUKRq5MoviCZWo1yd2f6RcVH5HpWodJ9832Ooygdqd79BQBYVllkq/QMsyz39CiTOAa545iSY5AEVZINklB0v3oJYDc13pbspsbWKnZD4bRRBNNNUN2EsnL5q4S5myC6CVcyd91MuFLxuPUSmEJDZfM9KphGwvXXG5MUgjDbLq/bbpaw845oI9xsY5NtFUY5/dk0VTkF+wQimyqtN6johmovvelV5Lt3ljD7w2t+NM0ShD+7mqrOa5O5TZkHCWcEyRJUsM+Y8gnEif7rEFLVTEFu6E6m7J/US450c6mpNSNHmN1cVk2kbip22gznxBI2krAzL1rKNaShVhSCYA0ZLS3HsuZ2nKGhoaGh/6xvk0DROAm1K88AAAAASUVORK5CYII="
        id="capybara_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgCapybara;
