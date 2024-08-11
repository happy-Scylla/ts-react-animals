import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBuffalo = ({
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
    <path fill="url(#buffalo_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="buffalo_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#buffalo_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAIzSURBVGje7dhNjqMwFATgPkKXwfuBiAOw4ABE8n74qftfZRYBgoEXP2Op1dK4VpFQPtmvDCL5+srJycnJycn54WBJ3QKmgjbfJ8Fwbg3n1+e6buMFS84kWwCGJOtooSFJsgfgSJLzI1J4AZyAcvnIsdILRe22r9UNtzzVwu5LfuStaAV5K3qBfLapwnWzccLVOHaCYRsUyLmSBcu+oCJjKwtTSVWeokBHZR6SoM97K3cFskoWVsJr8xaxE4pYYW6PZ9LFEuNR6GIF9gchehucj3fWrUV4wq1F+Hf36yGgnejgyP5iDRO0R2soyckXSpIcoD1aIxzpCzZuDSMsWXlCEzeHEQXZe0JkERPgOKScqAFoOO6FMl6wvmDvCPNeaOKFkky5uwfAeEL0XXESTLJgk4UmWXDJAn/BGtLnsN4WY13pnrknAY5k/Vhfje+c6uL9omWUQkf+Of862L8bhwRH/hUETTE9QFnQFFN9FGyyUCYLRid8mCR0woc2NaOsgNJ/0nrpVAJcLwpWJ1z9UtOPMiAU3um9vBIQdue6F66EhOaw2vOQQ8J7lBCuhITtXM9HwSiFrYzx9ONMKUCo4j2ioOCEKrZBBIVOqGLbYBsSrFDFdqYQEoxQxbbBoFBIVawbDAqQqljPSlhohCrWDYaFTqhiXV5YKIUq1uWFBSNVsTQdFiBVseAKwQlVLE0rhEaoYsEVgpWqePWkEAppkIDZJvRRQCNtAnDrpe/8z25OTs5/kH9FLOvnZmeyrQAAAABJRU5ErkJggg=="
        id="buffalo_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgBuffalo;
