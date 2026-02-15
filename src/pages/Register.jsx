function Register() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Crear Cuenta</h2>

        <input type="text" placeholder="Nombre completo" style={styles.input} />
        <input type="email" placeholder="Correo electrónico" style={styles.input} />
        <input type="password" placeholder="Contraseña" style={styles.input} />

        <button style={styles.button}>Registrarse</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #ff9966, #ff5e62)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "15px",
    width: "350px",
    textAlign: "center",
    boxShadow: "0px 10px 25px rgba(0,0,0,0.2)"
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc"
  },
  button: {
    backgroundColor: "#2a5298",
    color: "white",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    width: "100%",
    marginTop: "10px",
    cursor: "pointer"
  }
};

export default Register;
