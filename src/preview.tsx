import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Data, useCodeContext } from './code.context';
import { createHtml } from './html-utils';

const PreviewFrame = styled.iframe`
  width: 100%;
  height: 100%;
`;

export const Preview = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { addRunListener, removeRunListener } = useCodeContext();

  useEffect(() => {
    const runFn = (data: Data) => {
      if (!iframeRef.current) return;
      const { current: iframe } = iframeRef;
      const html = createHtml(data);
      iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
    };
    addRunListener(runFn);
    return () => removeRunListener(runFn);
  }, []);

  return <PreviewFrame ref={iframeRef} />;
};
