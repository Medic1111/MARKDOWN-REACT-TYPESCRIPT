const Browser: React.FC<{ input: string }> = ({ input }) => {
  return (
    <section className="section">
      <h2 className="h2">Browser</h2>
      <pre
        dangerouslySetInnerHTML={{ __html: input }}
        className="p"
        id="preview"
      ></pre>
    </section>
  );
};

export default Browser;
