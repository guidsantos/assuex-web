import api from "../../../../common/infra/services/api";

interface ISignUpData {
  name: string;
  last_name: string;
  cpf: string;
  phone: string;
  email: string;
  password: string;
}

export const signUp = async (data: ISignUpData) => {
  const response = await api.post("user", {
    name: data.name,
    last_name: data.last_name,
    cpf: data.cpf,
    phone: data.phone,
    email: data.email,
    password: data.password,
  });

  return response;
};
