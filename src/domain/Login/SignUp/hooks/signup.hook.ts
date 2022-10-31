import api from "../../../../common/infra/services/api";

interface ISignUpData {
  name: string;
  email: string;
  password: string;
}

export const signUp = async (data: ISignUpData) => {
  const response = await api.post("user", {
    name: data.name,
    email: data.email,
    password: data.password,
  });

  return response
};
