import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTurtle = ({
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
    <path fill="url(#turtle_svg__a)" d="M0 0h128v128H0z" />
    <defs>
      <pattern
        id="turtle_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#turtle_svg__b" transform="scale(.00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAAECAr78gcFBg388Q758wj20ggR8AAALKSURBVHja7ZnZdoMgFEUbZgRU/v9nGwcSwYsMMV19uPupXUllywEu0J8fBEEQBEEQBEEQBEEQBEEQ5N/w6IRQxn2AM0pKf3CngJDvtt9wKf5GQDGfg6nvC+jBXzHo7woQ40sY0itgyRNb6H5XFPBjl4CV+7sZeukgSl3gVFcE9PBmjmbefns0vQ5gnQlCtQnY5LXMBI2+Z+eunUMuYqAhKN0iYE/d6iao/WBmc/PQrePPjsvPukEAiPVkoPcP5PqbBDuBrR007Y/T1QJgqImBSlrJI1/fVJUCNryNk4pnDIRL+znDKx3DeaKaFXgpLy1yeD4ZYKSB61QUjakTCA/ncVcfU0xCcmHVilj8Z583zQnYyFd6wEC481I3n6vAMgATU1EhQI7NTUlTm8GYNKXgmbN0gcuvymWB58A5PXQxEP6cgAAmzgy4iiaBzNI2AsVGQpU4HUNxF3QKPJdfV5cAmIGz9YMwW14qE4Az0OVpOPg2WCaBbR4p4NsFAXoqqNNlzde5BLYhlwZWFhDnp6grAZtLYKtUaQaktRjxx7VAPgE4A1oWiLcDizHrSwDMgFXsB45L7fzI93BIID9x5Nne1GzJ3jvNdeHghQR0fsoCn1ZtSu18CEyX5sBFQuLcP5XbcjEPflxX7sl3JwBm0Hwy0r47gW0OJZ+HzUL90UxDO/1uaBhcDWfD+Pw1Pe4Q8FPL4TTal5B7BETT6fhoYNSfR1A8ADZhlkEoGu8HRn8j+/mgReDW9kM5aBDQ/mbmNoHJ345qEoiK7UBLtzbwGU2adG/atRTn77wa77PmBoHhuCX/aAmYozJZK6CL110Nd4rHnVmtAIsq24eMh2NTpYCFj7ad2HeetcVIVVxDdIVAKwUodLD9gFdVY5UCDL5f+XwUmEoBHi2fd2bQKkDvESCtAprukHsERHgexf+OIQiCIAiCIAiCIAjyz/gF0u64To/v8lwAAAAASUVORK5CYII="
        id="turtle_svg__b"
        width={128}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgTurtle;
