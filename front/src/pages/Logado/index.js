import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import Botao from "../../components/Botao";
export default function Logado() {
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);

  const handleLogout = () => {
    removeCookie("jwt", { path: "/" });
  };
  useEffect(() => {
    if (!cookies.jwt) {
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    }
  }, [cookies.jwt]);
  if (cookies.jwt) {
    return (
      <>
        <p>Parabéns, você está logado!</p>
        <p>Seu token é: {cookies.jwt}</p>
        <Botao onClick={handleLogout} title="Sair" />
      </>
    );
  } else {
    return (
      <p>Você não está logado. Redirecionando para a página de login...</p>
    );
  }
}
