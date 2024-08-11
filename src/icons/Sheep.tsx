import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSheep = ({
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
    <path fill="url(#sheep_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="sheep_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#sheep_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAICSURBVGje7dfBccMgEAVQJ6lgkShASVQAwRSgZChAgt9/KzkIHGMhsTjJwTP8iw6eeV6hhVlOp5aWlpaWlpaWR80TZSPOcOrnYeBU/IknCAsAKj4AAKpKGAEA3iaPGmH909tMHOHNYj+OIbzjMENREMdAWMsjYSwIc0kolVAW+pLgSoJEkVAHQmfBidoVevDi9wRhmQKmHYFbAuB2BAt4rbU2AAZz3JhZQcSdJwFXKEhlhS5uPAnMRMdtlRHEGQCRGIgkoIhMrWABeBLwRBIYCoLbCuO6xB2gSAKl5twKInwkGYRSDctGkAC0/rjUUL8OJp4c1t/5LYAl2Z6+th+eL2dw3ODqeI9suvolHqDMI2Lb1S9AOOIWnjDtCT0cT5gzglrrv1d4CitpuILLCH7dncu9ggEmEnYthSFsu7oH4ADgK5xR1esgUJdpZ3fzkzsnTQ3gs2e1rhCW4wmE8xK/FT4LU5BhAL8S5vIkJv9bKE9i1P23wJlp/04Is3gY0Cum4svnfL2+HQw1wnipV1s9EAkNPUR35ggSyVUirYwl9Em9N67iCF3cwncLIqn3pjLeLSkrdDWCTa51SWWOJ5icQDXCeF1vKsw8QWYFUyH0mXYIAvPO22UFWSGITEMFgXtzt9t2WCvzXGFEMpr9uBNXEJmXIBL6g/aElpaWlpaWlkfJN20RytUF/gYEAAAAAElFTkSuQmCC"
        id="sheep_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgSheep;
