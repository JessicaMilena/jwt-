// Importações necessárias
import React, { useState } from "react";
import { Box, Paper, Typography, Grid, Link } from "@mui/material";
import EntradaTexto from "../../components/EntradaTexto";
import Botao from "../../components/Botao";
import styles from "../styles";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import * as AuthService from "../../services/AuthService";

// Componente de Login
export default function Login() {
  const [cookies, setCookie] = useCookies(["jwt"]);
  const navigate = useNavigate();
  const [mensagem, setMensagem] = useState("");
  const [values, setValues] = useState({ email: "", senha: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await AuthService.login(values);

      if (data) {
        if (data.errors) {
          console.error(data.errors);
          setMensagem("Erro ao fazer login. Verifique seus dados.");
        } else {
          setCookie("jwt", data.accessToken, { path: "/" });
          setMensagem("Logado com sucesso!");
          navigate("/logado");
        }
      }
    } catch (ex) {
      setMensagem("Ocorreu um erro durante o login. Verifique seus dados.");
      console.error(ex);
    }
  };

  return (
    <Grid container sx={styles.container}>
      <form onSubmit={handleSubmit} sx={styles.form}>
        <Paper sx={styles.paper}>
          <Typography variant="h4" sx={styles.title}>
            Logue-se no sistema
          </Typography>
          <EntradaTexto
            id="outlined-required"
            label="E-mail"
            name="email"
            type="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <Box sx={{ marginBottom: 3 }} />
          <EntradaTexto
            id="outlined-password-input"
            label="Senha"
            name="senha"
            type="password"
            value={values.senha}
            onChange={(e) => setValues({ ...values, senha: e.target.value })}
          />
          <Botao title="Entrar" sx={styles.submitButton} />
          <Link href="/registrar" sx={styles.registroLink}>
            Não tem registro? Cadastre-se
          </Link>

          <Typography variant="body2" sx={styles.errorMessage}>
            {mensagem}
          </Typography>
        </Paper>
      </form>
    </Grid>
  );
}
