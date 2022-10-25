const Html: React.FC<{ input: string }> = ({ input }) => {
  return (
    <section className="section">
      <h2 className="h2">HTML</h2>
      <pre className="p" id="preview">
        {input}
      </pre>
    </section>
  );
};

export default Html;
