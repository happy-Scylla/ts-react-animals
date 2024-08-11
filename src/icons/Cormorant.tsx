import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCormorant = ({
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
    <path fill="url(#cormorant_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="cormorant_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#cormorant_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAJ/SURBVGje7ZjdsaMwDIVvC8ZQgJOlAJi4ACbrAiCc/lvZh+SCY0tCxo+L3pLJfJH1cyT75+eyyy677P8wI9ttiD+dIDR4VRMw1RFMAIY6QgusdQQTgKcxPfA8S2gBuAAAy0mCCfi16SSh3QgrQ7hRdk+deFoAjiTsf/Flr8SJwfTATBJ6mhAXUgBgTA+8SAIDiKugBTAZAEsRIXFi7VlC4AhRJLrPVzTBK45hRYJhnYg66vM3dC6M5RAuc4IhmOY4lB8nJq6qmaKaM4Jj++JBEpYvqQIAobPowtwA4y9S6M3AJcPe4mMJBDIhLjnfIOpDQ4ayT+IiKgyRkNcjza6sUXlC1qzKD1Suh2hOodVBAjw188KGA8CxVjcs4K6dWWSHrDdXMPUeYnuoJk4vCY1uZgVeLpWEhlcq7eSt9iE7RnEcslguxYQuqwdXSGi5klYTLCW6Q9EmVtNZkk5MBQTPD2IloeOHoJLAqMSizwWnl+rOCoLUagijKNYKgqT4s0ZpRb1XEEZ55My1M+uQIJ9AQRiBOsKf9Od/ywjEwHT5qSSCJ0u4L/GB7uWxIA6eXuy/TycSLLPPNvpceGbW6QmWWWe9vqI8fTtp9QRLTzpb0BceAO7ZxaDXEyywujZbGrqC7vbrsEVjoGbgIcHuPq/kOqFROUOsDL5MJ4kbVlNE6IhbnikieGJ12o9RQqB3Gg3B5oGM8qnKhc8CGZWlimDzQO7xVRHeTjh6NdMRbBbIvSx1BOPTQEavDzqCTXbxqCyVBOPTQG5lqSXYNJBxknWbmOee5uazb4NbPmsI77KsInTVBFtNMKGa4KsJjeYNRLa39tUQHvzt4LLLLrvs2/4BYcIX9FEtOToAAAAASUVORK5CYII="
        id="cormorant_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgCormorant;
