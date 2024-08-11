import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMink = ({
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
    <path fill="url(#mink_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="mink_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#mink_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAHmSURBVGje7dhBboMwEAXQtD1BDBwgKD5AInwAKvkAEP79r9JNIUT2zHwHqYvKf90+ZexhbDidampqampq/jIf52zc5SyFEwbgdkhoAYxHhCYCmI8IAYBchiVcgSUCShmG4LFleksYnoC4EKrgcFBo4l5Y3hA8XlIuDDgoNDgqxKNCWLdgk8YyoV3/77ZV8ygSto2cd+XcSoSw6yOv93VeaHd91Bg9lRX2G/m966uRFjzyebBCCyk3Tlj3oU+FkRPCugtpMQslOMhCroxU2Bqo59YyEeRlFB6vRIi6MJrCpw5kpmWpkK6lJMwewJhZlMkSvn7/8OIAvI57oSWSlbxfn0LuN+BCdtQsPV1JS8g9ybZEKjSWMJpPVixrCfnZZFsiNx/KysjNqMEQFntO3kvKEM6Le68JD/Ls7iNVhn6P6q/2Wpr3yc4qwxRaay1NobHKsG/F0VhLW/BGGbbQGS1hC85oCeLtwGgJQoh6GYQQ9GFHCK1eBiE4fdgx71n6lGAE4eiYeKFTpwQjOHXiUm+s6rCj3pqjtpaUELQyKKHTJi4lOO3g4L4/aAcHJ3ilDE4IyiHMCa1yl+CERjmEyW9B4hE6sYKXD2FS6OQy2C9aojCRwlm+ErGCfEVkhUALNTU1NTU1/z8/wuvL5gp0xtIAAAAASUVORK5CYII="
        id="mink_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgMink;
