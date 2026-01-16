import { Routes, Route, Link } from "react-router-dom";

/* ----------------------------
   HOMEPAGE COMPONENT
--------------------------------*/
function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily:
          'system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
        background:
          "linear-gradient(180deg, #020617 0%, #0f172a 40%, #020617 100%)",
        color: "#e5e7eb",
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "24px 16px 40px",
          lineHeight: 1.5,
        }}
      >
        {/* HEADER */}
        <header
          style={{
            background: "rgba(15, 23, 42, 0.96)",
            borderRadius: 24,
            padding: 24,
            border: "1px solid #1e293b",
            boxShadow: "0 18px 45px rgba(15, 23, 42, 0.7)",
          }}
        >
          <div style={{ textAlign: "center", lineHeight: 1.2 }}>
            <div
              style={{
                fontSize: "1.6rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#cbd5f5",
              }}
            >
              Interactive Technology
            </div>

            <div
              style={{
                fontSize: "2.3rem",
                fontWeight: 800,
                marginTop: 6,
              }}
            >
              <span style={{ color: "#f97316" }}>Emerging Media</span>
            </div>
          </div>

          <p
            style={{
              margin: "14px 0 0",
              opacity: 0.9,
              textAlign: "center",
              letterSpacing: "0.08em",
              fontSize: "0.9rem",
              textTransform: "uppercase",
              color: "#e5e7eb",
            }}
          >
            Create. Design. Produce. Innovate.
          </p>
        </header>

        {/* WELCOME SECTION */}
        <section
          style={{
            marginTop: 20,
            background: "rgba(15, 23, 42, 0.92)",
            borderRadius: 22,
            padding: 20,
            border: "1px solid #1e293b",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              marginBottom: 8,
              fontSize: "1.3rem",
              color: "#e5e7eb",
            }}
          >
            Welcome
          </h2>
          <p style={{ marginBottom: 0, color: "#cbd5e1", fontSize: "0.98rem" }}>
            This is your mobile friendly program showcase app. You will be able
            to add images, videos, student work, descriptions, and marketing
            information for tours, presentations, and current students.
          </p>
        </section>

        {/* FEATURE CARDS */}
        <div
          style={{
            marginTop: 20,
            display: "grid",
            gap: 14,
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          {/* ====== FOR STUDENTS ====== */}
          <div
            style={{
              background: "rgba(15, 23, 42, 0.92)",
              borderRadius: 20,
              padding: 18,
              border: "1px solid #1e293b",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                marginBottom: 8,
                fontSize: "1.05rem",
                color: "#f97316",
              }}
            >
              <Link
                to="/students"
                style={{
                  color: "#f97316",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                For Students
              </Link>
            </h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: 20,
                color: "#cbd5e1",
                fontSize: "0.95rem",
              }}
            >
              <li>Class resources and project expectations</li>
              <li>Examples of finished work and rubrics</li>
              <li>Links to certifications and competitions</li>
            </ul>
          </div>

          {/* ====== FOR MARKETING ====== */}
          <div
            style={{
              background: "rgba(15, 23, 42, 0.92)",
              borderRadius: 20,
              padding: 18,
              border: "1px solid #1e293b",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                marginBottom: 8,
                fontSize: "1.05rem",
                color: "#e5e7eb",
              }}
            >
              For Marketing
            </h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: 20,
                color: "#cbd5e1",
                fontSize: "0.95rem",
              }}
            >
              <li>Gallery of student work and lab photos</li>
              <li>Program overview and career pathways</li>
              <li>Quick talking points for tours and visits</li>
            </ul>
          </div>
        </div>

        {/* FOOTER */}
        <footer
          style={{
            marginTop: 22,
            textAlign: "center",
            color: "#94a3b8",
            fontSize: "0.8rem",
          }}
        >
          CCCTC • Interactive Technology and Emerging Media
        </footer>
      </div>
    </div>
  );
}

/* ----------------------------
   STUDENTS PAGE COMPONENT
--------------------------------*/
function StudentsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: 32,
        background: "#0f172a",
        color: "#e5e7eb",
        fontFamily:
          'system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
      }}
    >
      <h1 style={{ marginTop: 0, color: "#f97316" }}>Student Resources</h1>
      <p style={{ fontSize: "1rem" }}>
        This is where student links, rubrics, project briefs, certifications,
        and other resources will live.
      </p>

      <p style={{ marginTop: 24 }}>
        <Link to="/" style={{ color: "#38bdf8" }}>
          ← Back to Home
        </Link>
      </p>
    </div>
  );
}

/* ----------------------------
   MAIN APP (ROUTER)
--------------------------------*/
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/students" element={<StudentsPage />} />
    </Routes>
  );
}
