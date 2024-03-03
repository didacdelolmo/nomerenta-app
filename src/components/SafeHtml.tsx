import DOMPurify from 'dompurify';

export default function SafeHtml({ html }) {
  const createMarkup = (htmlString) => {
    return {
      __html: DOMPurify.sanitize(htmlString),
    };
  };

  return <div dangerouslySetInnerHTML={createMarkup(html)} />;
}
