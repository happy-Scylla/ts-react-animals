import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTiger = ({
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
    <path fill="url(#tiger_svg__a)" d="M0 0h128v128H0z" />
    <defs>
      <pattern
        id="tiger_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#tiger_svg__b" transform="scale(.00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAAGDvvxBQz99AcIAgn4+vMHRevv4AAARBSURBVHja7ZrJoqsgDEBfGQQERP7/Z1/HW4YAgaorsrMqOTUQMvDv35QpU6ZMmTJlSiy3Y4RQ7xmH7owAlEcryeIfIg4CqIxWEvl8xatjANhrNILXv77e8OuhABRtBE7fAPpQAHA4ULQ/B8AbnH7jzwKwOAB7GkA4qw3Z2MfUwungzu7PA2Af7avwiVC3ZI8fD/Baisp6UKh+rBPlzwSQ/GacLwrVfz7oJACvdXAh2aa1tuF9uflzAb7iyHdV7psEnzkRwKY+QbErARjkkhZ6FQB97zF80Y4xZj9OgLuLAF7b4hKoo2+LsGsAHn9YpZ7I8nAXOhfA8dsG+AB1M/KiSUgpuOjElcvw7f81Uasu3j8ZgC1/EdAqrweQCg6CrgIQaYC4XwzwHNo8YhLhCK8+dQ6Au1vehq6Ry4vngNPhWmRanGcCQqN9QBFajki8VYuozJQRABIpWJOgK7fMNy2BCXoBYv3+OWAZgKQmywk6AVKnv0SJRyZbkJm+/cX+E0AW/97HM6IyB5bsHbr/AADF37UpCN5OCHoArD9EYoIOgIP0JwR4gLZ+6bQmi9ZOtghUPwAXjUHFasJUldWfJr0ALf1uz6oCFkeAA2joF1D1KQ9UQQIUQEO/LVWLNgQBBqChv1IuI+33EAD7sP4GwYYD2Ou+bm3UaKu2wwA09LsgEJXQorANghaAqesPqpVRGMq+VUpZJ2gBWKxDieMShjSC31sAS935QgXZNPqrfQJqUH6AJXHen5hCMhLVkc33eZv4L4V0RKwZ2ybWXltV46+dUADOF+xbWHKy9IQbBNBVAPK3D7KkhEtWU0sp9CCAzxz+x+QqJtyypgIdBEiWQrz1hn/ZRmX8rEtj8pAaB7DXvC8NftnDKj7PAAjwR3DxQNH9vu3KwuZQdGEqUW1HQMKAfCjqSG2vD0CDRsbzQlamgOgA2Co78Gu3YAtX+lut+VyQvN8X78ZIgORVhijHAM1FB8xBbEwI1CZh01IXefrKGngbEhkVu9o0DL4B4/FFZQqyrrCcVD/BPQanr55BdlH+AKQvL6ga9/lEuDVyZZqVHd6XGdm+ULDU8s6tiAVQ9SS73T6lBSOik1PWKk3WRZRiKTQAqcTDPe3bsdwQ+g/Y1jFc2hmoDyg/TJCH1mqkQpKn/I4P6mdDJRogRxGIIwQcqFWYsSLVCsT1zZMkQPswiqu7ynRQ3YVVPwLY2mbDdUI4UbRFBK4pmA2NV0oLdWkLusXd0lL1dLxWvJaSxC3ZH9UmcQWF3mp5JVtmVpNHAkjiIwQN59HdLxisl9KVws6rv2MyRCD2e5wiPSNH9IzeBETj9VcOXQ0d57vvS+4+6XaGU89qscNvBxoX2VYv687y1xOVpFFEFi1f/fuRzpK/eZ6kaAduh5wpXTbgO4htwbx71KHWezJo2RvjeZAFGzLOc8NTpkyZMmXKlClTpkyZksp/8EESW03DelwAAAAASUVORK5CYII="
        id="tiger_svg__b"
        width={128}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgTiger;
