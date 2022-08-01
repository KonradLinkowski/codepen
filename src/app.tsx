import { useRef } from 'react';
import styled from 'styled-components';
import { useCodeContext } from './code.context';
import { Preview } from './preview';
import { TextBox } from './text-box';

interface DataRef {
  html?: HTMLTextAreaElement;
  css?: HTMLTextAreaElement;
  js?: HTMLTextAreaElement;
}

const AppWrapper = styled.div`
  padding: 2rem;
`;

const TextBoxsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const PreviewWrapper = styled.div`
  height: 50vh;
`;

const RunButton = styled.button`
  width: 100%;
`;

export const App = () => {
  const data = useRef<DataRef>({});
  const { assignData, run } = useCodeContext();

  const handleRun = () => {
    assignData({
      html: data.current.html?.value,
      css: data.current.css?.value,
      js: data.current.js?.value,
    });
    run();
  };

  return (
    <AppWrapper>
      <TextBoxsContainer>
        <TextBox
          title="HTML"
          ref={(r) => (data.current.html = r || undefined)}
        />
        <TextBox title="CSS" ref={(r) => (data.current.css = r || undefined)} />
        <TextBox title="JS" ref={(r) => (data.current.js = r || undefined)} />
      </TextBoxsContainer>
      <RunButton onClick={handleRun}>run</RunButton>
      <PreviewWrapper>
        <Preview />
      </PreviewWrapper>
    </AppWrapper>
  );
};
