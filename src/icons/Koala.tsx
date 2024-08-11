import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKoala = ({
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
    <path fill="url(#koala_svg__a)" d="M0 0h129v128H0z" />
    <defs>
      <pattern
        id="koala_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#koala_svg__b" transform="scale(.00775 .00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAH2SURBVGje7ddLboMwEAbgHCHD4wAWYV/kcgCKfIBgz/2v0gWQ+DEGD1EXleZfpTJ8BWOP7dtNIpFIJBKJ5GJgS6cHyKfTavt1zwjfiIguZ/itGWHENTQRtNLCfglNhK2k0LwuQZcCUSspmPc1uAAAgP5GtGvnVV4jTrTQ+NegAuj23zMAtH6jowWD4b8ZvTtU0koIdXAJujH46xG2WkrokRNFCIYlTITAAnBJhZon2FRoeQL+hTAyha//JMxafyb8xLOSK7i4MrCFaS0u5rqwlaf+smDTAscUnptQfSzApVGt+kBY4u48nVkL1N6qgThAyxSe621Z4bw+OGgCYYo+qT2vUbMJBKcvVbkh/y2eZZX2QBjKqj1TGFkCtWa1HIFc9RqOsFBCxRGmgtX/eGYpUuiJZ83MbkvvQOryCjMV7KP2h6WrnMoIfa7SUm9HClWm2j+oR6N3pHRf1mQHZ3bFaU/YdNVz6kCoStbcw5051Obs/n3jf8+eL3TQkWYv23s0wJngd6iFBhGX17T19+uHQuN9zE7rN/ksFSAaUVU0RAuEPhxRI/ESJ8J7DFnlnW2mciGzxwaGQO57Fo5APYRTLKHO7qlKhXSaWmAK8XtE71AiVIYu/OVCSKRn4AJhO6jv4+qSALVGRJzJc3wqSCQSiUQikRTmFw6W8JpZ3lUtAAAAAElFTkSuQmCC"
        id="koala_svg__b"
        width={129}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgKoala;
