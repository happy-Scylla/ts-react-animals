import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLiger = ({
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
    <path fill="url(#liger_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="liger_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#liger_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAMPSURBVGje7ZhBetwgDIXTNN1XYO9jUg7gtD6A03IAbN79r9KFgcEOmZHw1m81yWf/A0h6EvP0dOnSpUuP9Y2IiEiZQiMd9PMxwWKnDylBOxy0CAkWn/RXROhQ0SghuBohCAjVJewX8YDg6oSVTdD4QmxC/xVh4BIsAHyYnexhG/cJxz0TEelDVt0lfAeA+VgIdn8QdwnPhy0XhJFHePl6DQOP8GPbcvf5HEQELGX09bIl2Swh7MsgJoQXERai+J0Y2ggr0faGxpD8QkbwRNEezZgIsnPYxXOCJBYvxdMq5ncvIjwXT/cxlbujxzyui1gDXSwndTSI+7Xpbk/reP4Kktrc/GEhosmTw6BDSinPJXSJYFeaQAqJMIh8MhDRFMhhnBALK/C92sYe1eX8tjKvjm+OpB1ggTn+Y5b2rIVImUGbt9SHg7hvzoecLpvWw949AUCIb6hK02LOD/ENV2laj2eYYh9/0ETYvjhkj20g6DS42OokxCDEACyu3v45hMoU4akbJYSu0v0nLyHkRCoIOS95hE+zDKmcqDzCcR+BphwPJuEwmC7kcnFwCWR2s5y6hZRN2K3C97fEbCMM7uaWfEK5i99oIOwC2hc+wyaoMpgWDedQjrchxVSP5wgrTV5AqNx1PLkgIFTuCYMGZj6hNuD3wMImqNolwwEYhYTyNIIGAM8lbKFYcpX/S38sXMIUu4a7ZaXfFiTzhzGlxWoBv318ZRJSy46E2QK/Ggg+E+h2qkyCSrW4vbYWlfoqcNqQYzIoMaFPI2C/oXoxId/O+liUTYSQD2QoK5VJyOauN5QTEoy5zbEO8LtK5eRkngBVMlglJOSho0+ooo0GPmFIBL8zzYVPyOk07kxz5RDejTHmjYh0+rClQzCDwGHqUsBwjtADdI5gEc4RNLCeI3SijlPfBMZTBA0sdIowAfMpgt7y8wRh2iyjnaCjZbQTbPS9ZkKXLl+tBJXvrY0EBflkvtN78aNzC0HZ8ronJph4TQhjIyG5dAaICdGll5HOEQxRM0E7fBj+L/+XLl26VOo/UnlsF9augV0AAAAASUVORK5CYII="
        id="liger_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgLiger;
