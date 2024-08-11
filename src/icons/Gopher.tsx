import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGopher = ({
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
    <path fill="url(#gopher_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="gopher_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#gopher_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIC/QDbf7tYAAAI7SURBVGje7ZhtkoMgDIb3CqIeANQD0CkHwI4HUOH+V1lFqwRUPuxsZ3Z4/zUDTwkJCfjzk5SUlJT0J8qgKvnILNPADdMFoZFSCmjqJtPgTcjlLPCPhTJRX0KnhguH6YrA1PDR9GuSL0Fqw1timdwEtA1vl9WQjYADCevSJ4dwHIFJS4EEmQiJ8M8IotCn0jycgPejqU76Nwj3vfhILJ6bhUUSzGIfTuBmsQ8mULP+BxOEZQkljOY2hEcTgzYYQ+j1xh1AyLcJg2nwJJR7DnIQyxgCBbGMIQjjnIQTRhDLGIKawm4Rej2WUYTBXlIgYYpnc5NAM3mT0H+ZQLuFMBZhBLKf5YIpAt1TYqidBAJ2Ec2EJ0iJsb4kIHCHHHlW4AyDvJ7Xwc8JldFgrPqwqj4jNFaPesISBe02wQYsiyjlCcIkHACW060RHgBhEN7ODrgEXR+g8fvBoFIDEoo9Vo76QLblQUJ37DcGZXLJyYKt2QIJ2hbrBAFjibVGPEBCrt0XSniW2MHJUggOCPqDtHTfYZQjFBAa7brgQVCu9YCg93ofwuzbYBJoEKH7PIFFeCE+vJOldunxiab6AQhIKyhuwpLXRlazvX45CUstFAYhX5/oHoT23Q+N+rCm/4M7CKjZzpxB2G4qpLsgoGqv41aVe0m3GPDHqrQ+CLAhdrV/hQGOOg7ymz/y865XVB6Ax3XnRY1rPnd2f3S1DsL9vuy15NB9gr2/DaqLBNHXQkhtD0kfZZOSkpKSkkL1C2qDVr4Dgnq4AAAAAElFTkSuQmCC"
        id="gopher_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgGopher;
