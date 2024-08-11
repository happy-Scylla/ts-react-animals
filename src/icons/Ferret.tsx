import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFerret = ({
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
    <path fill="url(#ferret_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="ferret_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#ferret_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAGiSURBVGje7ddBboMwEAXQHKEYsy9K2RcRHwAhDgD43/8qXdAmGFyw51eFhWcZlCczMx7j2y1FihTHkW3i3g/uD2+RQg6QgmEFBVbQtFDIBQNbz2kQChoAupIQDAAAjVzo8QqZgAsIhhYKWtAAgFbJBQUAmGsi7EleMOxbLFMpFDQtKFpY7AypYGihoIWcFhQtvFJ5ooAk/E01+Y7S5+8LRe/u/vQzy7DnZgVS0GCFihbMBYQKgGUzaXOumveuzOlTjxeKJCTBL4y0MNECriDUtNDKv+295QwUlrfFVTHCBHfeCwTlDmvEC8VKKKOF1YHhljNIWAFuMf5HyNfCRAuWFhArqI1Qs5mMF/q9Yog6yhmVQUK1V07RvnCKIRTqSGHbEAMtTOSEcRIRNuW2QksLI3M7WE06sTAw096dEWHCtqVeuZQLNlD4wK8xBgkKO1GHCIX/v/PIsWWAYPzr/7672fJY8C+hfZa3kQl22WOdRGidm/x7fB7mRlA/jz73BU87P/fUI2gNem8yqMYc52F72LgfkwFdrRo3sixSSJEixRXiC/2eeWomnVpsAAAAAElFTkSuQmCC"
        id="ferret_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgFerret;
