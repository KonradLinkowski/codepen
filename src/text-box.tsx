import { forwardRef } from 'react';
import styled from 'styled-components';

interface TextBoxProps {
  title: string;
}

const TextBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Textarea = styled.textarea`
  resize: none;
`;

export const TextBox = forwardRef<HTMLTextAreaElement, TextBoxProps>(
  ({ title }, ref) => {
    return (
      <TextBoxWrapper>
        <label htmlFor={title}>{title}</label>
        <Textarea
          autoComplete="off"
          data-gramm="false"
          rows={30}
          id={title}
          ref={ref}
        />
      </TextBoxWrapper>
    );
  }
);
