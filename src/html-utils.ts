import { Data } from './code.context';

export const createHtml = (data: Data) => {
  return `
    <html>
      <head>
        <style>
          ${data.css}
        </style>
      </head>
      <body>
        ${data.html}
        <script>
          ${data.js}
        </script>
      </body>
    </html>
  `;
};
