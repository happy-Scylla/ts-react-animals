import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCoyote = ({
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
    <path fill="url(#coyote_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="coyote_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#coyote_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAYAAADnoNlQAAADfklEQVR42u3dUXKdMAyFYZbmpXlnWpqbTEmGNLeJAdtIR79nzuSpdwh8tWwBN1trbSO5w0kgICAgICAgICAgICAgICAgICAgICAgIEMQvI+3n+Uttf0ddWMsG15mgtJeDC5PLgS1vR7MCCBoBgQQHEfhcgkj2A/EOiAYGIQRHHYIYMiM4AChd4BBEcGJ0vDfXcSh5/AZLnUwBBchtM5/A4goCPaDmzkoI0EQlMkQDALOEewHWIGQHMGN9cG3zuMPn1NA4G+L+HGxPlf2NyBYDygQ+EIwevqvnQvOCgJdBNb7+SCI2TE8NRt0Akt359Jrx3D21vDsgrKAIE7HcPaQBOG9WeQRghyICM0itxCYCdY2izwOA8FaBMUhggKChQgcQpBaHIZBsOhmUspb0NEQrJgNyoubTdINJGYCbi2HQ8CUn3xhuHQ9AAKfCOgDJO8TVHYCIPj2HsE/McpCkoXhQ+XCQAAC+bIggWBFEwkE/hHQRLr+n6eAIFlZeHGuKgiSlIUfzhEIMpSFX7bQIFAvCx09FBAol4XOJhoIVMvCiS4qCBTLwsm+CQgUIVx4fwIESmXhws00EAwaNWAZkEPAY+jb5be1QKBUFq7OYiAQKQs3SiIIVMrCHbggECgLN5+nAIFCWbi5OwKBQlm4CxYEAmUBBH4RLCkLAxplIIheFkAQA4E5LgUaCJrPr7JZVhZAsLn59pJHysKg3z0lAlMpCyC4fiKqSlkAwT0EEk8ijYKZDoGDxaSBwAECB9vKCoLnEFRHu4riZGucF4GD2cCcbI3TISgDnslzURZAcPFkOG00FRCsQ2BO7zsYCO4juDX1Nh9/VKOC4FkEXu49lAe2h7kQqL23AAJNBKdmAxCcPxk1yK1oA8EzCFwNEMxDUAI9lVRBMAFBsKeSQDABgUV7NA0E4xGEWQ+AAAQgmHVPPeL7CiAY3D9XQzBhHSOPoKogmLidTY/AvCPYL/7M49RGEPTtJVt8fAUEDptFbfHfb1BGYItX2SGHOoLe9qslNlDVEZRRvQbhUaQRnPycjLPBcQEKgqSzQQmHYMF+OeUsEAZB8ro9FUAkBMwAkwBEQsCYBAAEAABBhovf0y+JgqByPcdf/IhbRBaHHW3gduFV91DNon2rWMnXDPjuo+cREJ1wEggICAgICAgICAgICAgICAgICAgICAgICAgIyNf8Af2TGzAC1d25AAAAAElFTkSuQmCC"
        id="coyote_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgCoyote;
