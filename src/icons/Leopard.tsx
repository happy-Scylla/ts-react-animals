import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLeopard = ({
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
    <path fill="url(#leopard_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="leopard_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#leopard_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAKhSURBVGje7ZhLcqMwFEXT3RvIE3jeJGEekL0AdYoFGOnufysZ6A8SEnFVUl2lO7KhfHi6eh/hp6empqampu/SLyrqxX16PiSwIQMYsVYRGJBGMPg7h4QR/lFEXRgCMNUQbu5RjAMA5OxCwL2WsBIRvcJKDiaEegIGojd4qUGHcIKgIgCghvEkAR+IpXCWkNG3E1bt/wOEifqHCd2Px7DuXf3qXiyPEu7dowTBHiXIt5/Lyf+YYH2XYUrPlrtWEEw5Kv9R/85k1VAmuB/xyaXBxDhdoiAOCLaWRA9pnwsaIeyaigT7o+kC2MUrWrDagESB4APfEmwMqkBw5oke0noSrUIHkScEvSHtpPEyS/A9KbOb/KY3NEtYgoKMM+pqUJ3m5QgMBd2J9IbmCGOZwLSXOYKx4JolKOq1RxlCb1M/H4s0G5ohLMbC/aDZcjIE5ltAyY8hTRgdwe2J4pzzhC1rmuBC9KuYwq4VHkr+pgh/XIjeyZCgwin6niL8drd9pxRBxd9De97z/WGz3qDiLUFyzufnWgKIyPe34EBYT5iC9j/cvDcHhNt+PiSgdYRh1CXQuy91hNEX0cVvrfItCqVefYnLEBPdAMgTBJ81OjN3BFki+LIcaHE+CO/PWjv1AEG9TsoFKrh8LxKWINxOz9k5XNxUO7vtmO7WzSaXZ3c8MmiBiC7K+hMIADm/LgD4y3VTa4VT0HLY36a6980D1ZzEko36H6s/R6WXYTufqCLYBA5nl7mqKt/99x0Xxp66d3/rpQzTQLAlOAsWCSw3/dbKfzBMEFEM0XG0gsDSMzz4W6JEMEHwzeFhOEFI5oSgM4TEiWqlU4R9bks6SdgiYkAVIUZ80BcIxFxdqIm+RCBi/AaAz/s7SUJTU1NTU1NTU50+AWGj5Ye8I1WFAAAAAElFTkSuQmCC"
        id="leopard_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgLeopard;
