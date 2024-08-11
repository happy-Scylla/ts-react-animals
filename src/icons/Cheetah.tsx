import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCheetah = ({
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
    <path fill="url(#cheetah_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="cheetah_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#cheetah_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAMFSURBVGje7ZhRspwgEEXfFhplAZDnAkiNC3ASFiBy97+VfKhjg6CIlUo+7I9Xb4qZY9N9+4p+fT3xxBNP/N0gIiLSFIYwdBh7AqDYemODj0WEDp5dtUcNAeOWAgCqIPjPsqwhSACfbQS4KwT10wLwPwiAu0xoAXjM8a4iCIQx/gMCRYThNkH9BwS6TugAYGgBDPIGQYn1Ty1hajFh6M8FlSUAMBaoI8gZ4Km/SZhmdY71BGf0TQIUagntnIJV+F0gyRRhHs6xUxDcri4TXKtcWyCoFKFZ5EBkz10ySaC1F98lcjggLJwqgr0y3ElCd8VgzgnTbYKvIcjA5cxtwnCbMFUQxCWzPiY4jYozDCcY6k8dIkVoWCflqbBTBGJDIU/7eUgAUX/az2PCL3HezyShC9vpbxOOC1FEGC8TZERwtwmoIgyi0KiShBaAosL5TBIEgKEp7GeW4NeGeJvop9banBE2MTQ7Yc/r7wMChZ2MT1MiaHIJIToTNqFOCnPg/exDF04TbFyH6NHLK2q+lx6lCXwwvA372a8fXnMS54R4Prf/X4C/QBi2RkxssypDkHvCtC0Zpv6pPAf/WfK84j5JeCEVav3RFDTWZM+Ty7PizqgChQtAJQgWwcE6MqrQLIDx4GnRRPVYV/mcdpj2hJ5dU+76KULL6+GSz/5pwhQSWgxEMkWwOYJfpkKtVxozBL7vfi/skNACB4RhcQLX8X5+2tphJBKHBGjLDGLdxkeTmHeBfB1Y7g3bRr/sRgAqU4fUjbvbhN0u2ppJJQTHNLIUAu/VG471wAmSKaLng5LUpMzn4AKrNrm5kIk6WD5cry2hBhhOCRi2yzrmH24xApN+mxQl0UUnEaG1Xqew4F3Q0VkGcHmC684JLTBmCZ4am/Vr5vYmQWjWL/c7wrhLIb7jCK211uuXZc6uWQrRXa8JLyfzd75PU01IkGHRuuNCvpbCcEL4pCqyt04iIvoG5he6WUIi3nqLDXmFkN7VDYLbn+XaGkCoB3vh9yp1pn3iiSeeeCIXfwB4uELis2OycQAAAABJRU5ErkJggg=="
        id="cheetah_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgCheetah;
