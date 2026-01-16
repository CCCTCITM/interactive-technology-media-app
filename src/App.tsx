export default function App() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial" }}>
      <div
        style={{
          padding: 20,
          maxWidth: 900,
          margin: "0 auto",
          lineHeight: 1.5,
        }}
      >
        <header
          style={{
            background: "#0f172a",
            color: "white",
            borderRadius: 18,
            padding: 20,
          }}
        >
          <h1 style={{ margin: 0, textAlign: "center", lineHeight: 1.2, }}> 
            <div style={{ fontSize: "1.75rem", fontWeight: 600 }}>
            Interactive Technology
          </div>
          <div style={{ fontSize: "2.25rem", fontWeight: 800 }}>
             <span style={{ color: "#FFA500" }}> & Emerging Media</span>
             </div>
             </h1>
          <p style={{ margin: "8px 0 0", opacity: 0.9, textAlign: "center", }}>
            Create. Design. Produce. Innovate.
          </p>
        </header>

        <section
          style={{
            marginTop: 16,
            background: "white",
            borderRadius: 18,
            padding: 20,
            border: "1px solid #e2e8f0",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Welcome</h2>
          <p style={{ marginBottom: 0 }}>
            This will become your mobile-friendly program showcase app. You’ll be able to
            add images, videos, student work, descriptions, and marketing info.
          </p>
        </section>

        <div
          style={{
            marginTop: 16,
            display: "grid",
            gap: 12,
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: 18,
              padding: 16,
              border: "1px solid #e2e8f0",
            }}
          >
            <h3 style={{ marginTop: 0 }}>For Students</h3>
            <ul style={{ marginBottom: 0 }}>
              <li>Class resources</li>
              <li>Project expectations</li>
              <li>Showcase examples</li>
            </ul>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: 18,
              padding: 16,
              border: "1px solid #e2e8f0",
            }}
          >
            <h3 style={{ marginTop: 0 }}>For Marketing</h3>
            <ul style={{ marginBottom: 0 }}>
              <li>Gallery of student work</li>
              <li>Program overview</li>
              <li>Career pathways</li>
            </ul>
          </div>
        </div>

        <footer style={{ marginTop: 18, textAlign: "center", color: "#64748b" }}>
          CCCTC • ITM Program
        </footer>
      </div>
    </div>
  );
}
