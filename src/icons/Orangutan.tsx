import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOrangutan = ({
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
    viewBox="0 0 128 128"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="url(#orangutan_svg__a)" d="M0 0h128v128H0z" />
    <defs>
      <pattern
        id="orangutan_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#orangutan_svg__b" transform="scale(.00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAADBwn7/vj2BQ3yCAEEDPr7t9UTcAAAPTSURBVHja7ZrbcuMgEEQjxJ0Bif//2X1IbIMlYAZwamuXfktVbI4QDD1tvr6WlpaWlpaWlv42bVixnQsZvyWF0gz3sUkAhj/Gfsly80sADq6j/zCA/zyA47Em7j8L4ItP/5CETwIEG9s62McAIOK0fwbAnxEr/gkAf0S8Dj8dgDR+maAbgDh+kaAbgDp+jOdUAB7pUhMBdOyRmQbgZBeA9LMAROwTnwRgYq/CHADbDSCmAOgY501BD4AdABATAEIcERsH4EMAagTAGxBCyCEAKYTSvgug7b7wFMrTAdi04WOMUTIqgImTpWkAc58/mQMsQLH6n2BCURoqtuGgAJiS5/cDfYsmANz738Nh+sYgaxYJCUD02m99c4kAD8BIThtNwNAAAVPVK9rLR2M/AN8IsoMAd6/guQBBylu/63m0ujoFbGQR2syeQMm5/xgQN7gIb7YhzwyquAGIKdnoNrwWIsgeVJTeO1QqqR4qxZDtMVOwjtKVAcTYYaSSjArCfQkEcOVtQDyMLi9BUHbh5ot9Wr8h8RQAPW5Its2rO0OBkyieogQAk0+BJUxBKDw+CQBQ7T4uTUkI0AC86Oraqn0WC8CJ8V8zzdM0gEIiKZ77nNnslSR/Glvt0XAA135YwB5CCM8KdGYHNJPPc8iHEEIAdXGnP0USBfCeyAh9v894VjLeyqPbbXcpznexCMVKw5PxbxybttfjBAOgMSvvRVAcf9s8v7wEBICXhRpyT1AZ//1hOA4AUOM/vvuUdces32wdAsDixk+/u+bY93wK2gAGX/s0qmM4s+SyDXC24uYLQaNjSdeURgDcOfH6/HrMPz0eqQkQSK1IeLhtZJsi2wBA6sVwAImzCU0AcW1FhgGSRmtvAlhSM4gD2F7LEJoANP+BBHhNqyAAhHkA8M8B6IdFfQEwWylI0wHkY40+AZgsNO2fAfiuwOEFADHOB9ibleU0JsYYGdjU9VV3wdkEOFB1QNXy6LE6cCZ1u3YOXpI44TGVUFPOAkOIZK3GdUqsCcDQkYBTz7J9aqQhQJyGyftqlyIXAEAHdBmKHAHA3wP2UbksJmkDhLtkakRJkyaprpgWi7R7dYUC0BHry8lZAa4vyCM2PXF8hewN84RH+YH1d1zuM6C64zzikL2T4OEmYEEB+LfO3qqOpWD4QFTLbn4CVkAQF6ULJciMaOTOQv23W2xKNp3AUHPCuQSSnBNekto5v52TsmJ2zBo//cWVdIMC5owP/XdIHB8fXrihSyyOjy2FMwzfovH67GU4wE26zMY0cEGU0q7rPuHS0tLS0tLS0n+nP5b8JKuOyxvUAAAAAElFTkSuQmCC"
        id="orangutan_svg__b"
        width={128}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgOrangutan;
