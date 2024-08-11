import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFrog = ({
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
    <path fill="url(#frog_svg__a)" d="M0 0h128v128H0z" />
    <defs>
      <pattern
        id="frog_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#frog_svg__b" transform="scale(.00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAADCPv9+vYBCA73BQz59AIO0gd0oAAAL1SURBVHja7ZnbeqwgDIXLSQERyPu/7L6YsbUtJFGh377Ius0M+cWAYfHxIRKJRCKRSCQSiUQikej/kqKkjQUAALes/kckvCJx2Tw+xgOAtMOXYj4lKvYUgVynAPhvSQAgrkdk+RnZJgDoCL+UXxHXiPjRAK38L4J2ZB8MUJtZAIzyrh3JYwEsdFSWXiSNBFh7WSD2I34QQAq2nwXTUgYApAUeKObyCMAHB0/l1vsAW4QRcukegN57A4bcjZgms603ALbeA1mlVGnn90rpdi2kqwA+A7q8m7OzIRtGuAbgdxgMcNoYGQBYfth9b19yXqnU/V/mA6D5AZzp7Q3RZOR/mQ2QYY42JsAGs1RYAHpafnCeA7DPAwDDAFhhpjQN4KYCWBJg7gQAFAqAmICdrhCLDpEJgIJ/2r1SKlmsCdJKqRqQ77jHAbA9aDl6vND9ydF81B3ZjVAABP3U6Gciv1I+9ssQA9DECjqGd90Sp9toFGBjTYBShj4IdKegYABICxzOo5dOfZ3UHSpgAPYRwLfWs1upGQOAcQDdGbA3ARZFdqzfasCNBoBKjs5bBXAXwNLvN1EL9RHAV1fZfbpYOF3tbQDYE7HE33uhX7EzXbwPcJxw+t+CWNEFQBcheRp9FcKOrtUK9wEs+bVPfcPqWKqEo2AwAMNsbDvGmO9vUqcywQAYDZnpmnavfsFTTaXGACqjq1vbtumxV1NvMeINCacnfi/2srfsYfJYl3EAwwD4dBsO6/xkkGdGFaMAnHfwecqk7ezWGyDacssiWJoeZGG8wEABFBYAxPALobIcxUoezXhTABCNvmFoGvpsyJwCAACXt1JKKSksTEcxesbx3MA8bRx/wM87H1ueRTPNInn797RJNeuIrtk+4RybbL3glOaJ+XlesZmXn+mWD66DqC/b9XqkXWf9jQsLH4Y9/nbzyqaOqUXj79+aPUeIoT67tvPrg3u7mNOQm9OyGXvx7tJZG1Z9/eZUJBKJRCKRSCQSiUQi0d/rH8TPTqVq8oN/AAAAAElFTkSuQmCC"
        id="frog_svg__b"
        width={128}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgFrog;
