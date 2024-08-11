import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLemur = ({
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
    <path fill="url(#lemur_svg__a)" d="M0 0h129v129H0z" />
    <defs>
      <pattern
        id="lemur_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#lemur_svg__b" transform="scale(.00775)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAI5SURBVGje7dbdceMgFAXgZBMXcEEqQDgUIG8oQJ6hAAGn/1b2wXZW/FkgMpk8cB5t6zNwL6CXl56enp6enuK8CkGbiDPtJhQA8/Ud10C18AfA8vhO4YDwBsDhFqMTApuIC3EmughBxERqFl6c/zyXWIkBhkgCRCNMJGhfMD6gEQpYQkH5wuIJErFgQ4H5wuytARKC2RmDJ5BOCNhZB38WvEB4AxwNj6c1rF8LFQsuEN6B5TJrOA3Hz0NQCyK9uw4nYMaqYBXsCLbtKLYQ0bBbzRPwF6vCMmBV4FthxExEKhTmWJj0IkEcZnDeGCQsEfFAmCgWLPHbL2ZSW0GHlUnvrBOAq8ZKNMJ9eDsr3iVZAcB0b8BACIv7RHg8sRFYokdTwnsg/B83F0IIMRWdMABGIyfkhr1zTt72xRm4JPZFkaAef61y894T7iW4fiSOqDKB/O1N1Sv5SixzPtw+XwsE+kyftBWCT8xHhEc7+o/UCTpx5dQJcjOIqbqaoWAPCSrdEhXCmL8yjgjmiDAkbr66WvidvTYL7oBA/vU7NQu2WXB150PUlHstUSTYeiF4F3p64KaFEeXTKBNc9UoOiKZRWU0WCrZZcLUCDwUslQJFgm0W7nd5uSAj4dos4MeF8RcIQ7PAfoHw2SrkilksKDQKA1oF3SpwtApjsyCbBbQKvFlgXfgmob0WT/thae5Jat0XpkxgVZOoPB/mQiF7RtniN7HMWrq5WOCyHMjdFyKRsvfJnp6enp5M/gEmYfhKXHc6HgAAAABJRU5ErkJggg=="
        id="lemur_svg__b"
        width={129}
        height={129}
      />
    </defs>
  </svg>
);
export default SvgLemur;
