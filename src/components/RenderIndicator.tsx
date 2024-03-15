import type { ReactNode } from 'react';

import { useLayoutEffect, useRef } from 'react';

import { CONFIG } from '@utils/common/constants';

interface RenderIndicatorProps {
  children?: ReactNode;
}

/**
 * 컴포넌트 렌더링 횟수를 시각적으로 표시하는 컴포넌트입니다.
 *
 * 개발 모드에서 컴포넌트의 렌더링 횟수와 마지막 렌더링 시간을 표시하여,
 * 성능 최적화를 위한 참고 정보를 제공합니다. `USE_RENDER_INDICATOR` 값이 `true`일 때만 활성화됩니다.
 *
 * @param {RenderIndicatorProps} props - RenderIndicator 컴포넌트에 전달된 props 객체입니다.
 * @param {ReactNode} props.children - RenderIndicator 내부에 렌더링될 자식 요소들입니다.
 * @returns {ReactElement | null} 렌더링 횟수를 표시하는 요소 또는 아무것도 렌더링하지 않습니다.
 */
export default function RenderIndicator({ children }: RenderIndicatorProps) {
  const count = useRef(0);

  useLayoutEffect(() => {
    count.current += 1;
  });

  return (
    <>
      {CONFIG.RENDER_INDICATOR_USE && (
        <div
          className="render-indicator"
          style={{ backgroundColor: getBackgroundColor() }}
          title={`렌더링: ${getTimeLabel()}`}
        >
          {count.current}
          {children}
        </div>
      )}
    </>
  );
}

const backgroundColors = [
  '#f0f7a9',
  '#c1e6dd',
  '#ade0ee',
  '#ff94ff',
  '#ff94b2',
  '#c7e3c6',
];

/**
 * 렌더링 인디케이터의 배경색을 무작위로 선택하여 반환합니다.
 *
 * @returns {string} 무작위로 선택된 배경색의 CSS 색상 코드입니다.
 */
function getBackgroundColor(): string {
  const index = Math.floor(Math.random() * backgroundColors.length);
  return backgroundColors[index];
}

/**
 * 현재 시간을 `HH:MM:SS.mmm` 형식의 문자열로 반환합니다.
 *
 * 이 함수는 렌더링 인디케이터에 마지막 렌더링 시간을 표시하기 위해 사용됩니다.
 * 시간은 시, 분, 초, 밀리초로 구성됩니다.
 *
 * @returns {string} 현재 시간을 나타내는 문자열입니다.
 */
function getTimeLabel(): string {
  const now = new Date();
  return `${now.toTimeString().slice(0, 8)}.${now.getMilliseconds()}`;
}
