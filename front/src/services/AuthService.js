import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

export const login = async (credentials) => {
  try {
    const { data } = await api.post("/auth/login", credentials);
    return data;
  } catch (error) {
    throw error;
  }
};

export const registrar = async (dadosUsuario, token) => {
  try {
    const { data } = await api.post("/usuarios", dadosUsuario, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const verificarToken = async (token) => {
  try {
    console.log("verificando");
    const response = await api.post("/auth/verifyToken", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data.valid);
    return response.data.valid;
  } catch (error) {
    console.error("Erro ao verificar token:", error);
    return false;
  }
};
