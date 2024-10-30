export const metadata = {
  title: "Article page",
};

export default function ({ children }) {
  return (
    <div>
      <h1>Article</h1>
      <div
        style={{
          backgroundColor: "black",
          color: "wheat",
          padding: "30px",
          margin: "5px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
