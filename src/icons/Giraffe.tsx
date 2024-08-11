import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGiraffe = ({
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
    <path fill="url(#giraffe_svg__a)" d="M0 0h129v128H0z" />
    <defs>
      <pattern
        id="giraffe_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#giraffe_svg__b" transform="scale(.00775 .00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAL9SURBVGje7ZjZceMwDIazs9kCoKMA2lEB9EQFyDMsgDLRfyv7IFMnAILkWyZ4zPGJBH7i+vj4tZ9mfwAAAG53yDCC0CHaOsKIaOoIA6IH6OaqM0wAA1b54QWAFQR4YICmigAObV9HGNEPdYQOZ6wjtIhVhMcNawiPL4xWRGgdbmZKCBEQbIM4FRD+xs+/ABy+CgifkeABBgwFhH87gtNmCZoQoFW7kibg7JaTFPvhjamIRY6mjnoYjwSTT4DhQJgKCIv1m7CK80MMaimhidewpYQ2x5UkAXbqLiS4DE3RhCFDUzRhzHAETegzNEUTOtRriiY0qNcUTVgFodAUTYCM58kQnF5TDGHQ5ymGMOrzFEPo9Y5gCJ0+TzGEVRBpTTGETRChkLAJIqkpjuDUruQIW9r3hYRRXfs4Qq+ufRyhU9c+jtCoax9H2ASR0hRHAHUfwRL2nWUwJYRjH3AvIJyakWc+oT91ROGeS+jwbLPNIzR4tWcWoSUIZFBYAiBp6zFuNklwNOJ9jG599TxhQBSO4RSEkSNgMNChgtAvw84Xxbg7NcGu/ojP63HOfjIhrOIMF6npPDmv0pouQdIRfCSEq969Sg9z/Ad/VetLpckQo2quWgs6VU/vL1pCa8q3eXPXmtEfqoDydVOEKSvDAKF3n5XlKD/MWZmWiEUMhjLbeyp7ZREC5SGjrnr0u4g/0xK2Q3yfrqao3cdq8X2uyIr+gbd6glX2UbwZDeF5o2zvylQ3SFfbYZdkUh0pXfH7XTASBKaFanb8RGfumbZjd8cEgWvB3PbrxHxhGcIuycgzDjuedFswZALbzrbbF+RZz7M9oFuDIRMMSxjXP5BnXhawy/giQWjJm/Wa4uTOuyEKZk5sDyaBMMRgiAQLSUfIWxRx3G1iMCSCPNvEi0q7IC8SorOlfZQRCeP7nBJBBMTHJe3lEnuD9+OyAiG1u1gcYYTt4pQgLI7wwobTJAiLs14CIQGIouE3veld1uJKnuCThIEngFPt9LrrLX7tZ9h/7BkrxdEaHVQAAAAASUVORK5CYII="
        id="giraffe_svg__b"
        width={129}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgGiraffe;
