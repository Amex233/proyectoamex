import { Link } from "react-router-dom";

function Landing() {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>AMEX Finanzas</h1>
        <p style={styles.subtitle}>
          Gestiona tu dinero de manera inteligente y organizada.
        </p>

        <div style={styles.buttons}>
          <Link to="/register" style={styles.primaryBtn}>
            Crear Cuenta
          </Link>
          <Link to="/scrum" style={styles.secondaryBtn}>
            Ver Proyecto Scrum
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center"
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: "50px",
    borderRadius: "15px"
  },
  title: {
    fontSize: "3rem",
    marginBottom: "20px"
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "30px"
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px"
  },
  primaryBtn: {
    backgroundColor: "#00c9a7",
    padding: "12px 25px",
    borderRadius: "8px",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold"
  },
  secondaryBtn: {
    backgroundColor: "#ff6f61",
    padding: "12px 25px",
    borderRadius: "8px",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold"
  }
};

export default Landing;
