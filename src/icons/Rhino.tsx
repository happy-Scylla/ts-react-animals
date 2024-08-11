import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRhino = ({
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
    <path fill="url(#rhino_svg__a)" d="M0 0h128v128H0z" />
    <defs>
      <pattern
        id="rhino_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#rhino_svg__b" transform="scale(.00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAACAQn1DvYEBwgL+vzzDfj9X7HdoAAAM8SURBVHja7ZrReoMgDIWnICAgyvu/7GpXW0VACKHugnO7Af9HA54k/Pw0NTU1Nf0/da76DqjdQDgAodZaSvJXPw4EAwzMrmJD7vrOQCgAt5t43vruQCDAZ5pMgtNAGMBg98r4Fc4DQQA9O8zD3NPQi1Gu4sL5i2cgCEDZo/R+jVHvV2F63EFoZ6CCAQjrSmwnbJzsWROPDIQA6NM8f1tAJLN+MUlCAwEAvWeFdZvH0PJPBB4YCAAYPfOMnZlsXKr3DgQAaM88mjN7JeZD1ACA2SJqBgBYVDWABnD3KWBI9wBYGukmBGtE+haABfkWnOxAgRSSHwBL4Diigg1A8YTwMwj1hAdzXSAOzwskxvqyJDOSSOvDc0NeGAeMl2bHfdFZUH1xev7Ks+HhVw5QEAiyATSABtAAGgAUgGtFzY0A9Pgl+ToAd+qCXwdQ74rQTQBbWkrvAngXdu4GsOYMcJW0z6gAiwvATEdihcKJdIYVA3zSYkac4vtaeCcRAOKU6kt3YJuAHqrV4V9hdnPaYoDXFry3fZ3QRHbAOBFTDLC1CD4EYojWqgchEYKQnZ090XfchK+4f5WM2PcAFusjCPcpan2MXILHCaPr5jAlB/GQVLUAjBtZwe7s1aZA/cAcnOeEsFQ0JPsr1lz1iHEBhvNUNNjDN6yCJ5y9/aJAD19UAAg4ALXIZ/jT9WKc37ZV4gOQtCO/kIvKPjwvSDRBE4nXE+EAiVuwfaxm/Mwo1Qf+XVJLhdRsSvwRogehBMCktiK6iE0rSk4TWzYi1mIry4713QBkuhkgjcBUBOjMdfOSRSNWlFZIrvdARgO2GKAjF7brlTiE/gvjNd2SEIJ99JYqLVJFLM/mFkMNhQUFINyw2FySiH8oyst0vhXYMmwGiczRE4IB4LkUdy41GKcUD0AEfEA8azR4AOFMIfKySnWIANxXilhTo8sjigRwfltIOjLQBLeGBZDqTw4tc0yA7GLh2CEDpJpE7w+AAkCy6hMDPkA0Cz2HgMEHyCQg+AB5BBPBB7h+UVrtJgS9JaAVAB7+JOOVnawBkFUv5DUAshBEFYBnyZLlXQfYAOuJGKlKeOYMAGhqampqamr6rn4B+pGIWV4OTWAAAAAASUVORK5CYII="
        id="rhino_svg__b"
        width={128}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgRhino;
