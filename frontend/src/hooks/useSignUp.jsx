import { useState } from 'react';
import { fetchWithAuth } from '../../../helpers/fetchWithAuth';

const useSignUp = () => {
  const [data, setData] = useState();

  const signUp = async (fullname, phone, email, password, confirmPassword) => {
    const payload = {
      fullname,
      phone,
      email,
      password,
      confirmPassword,
    };

    const res = await fetchWithAuth(
      `${import.meta.env.API_URL}/signup`,
      'POST',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    setData(res.json());
  };

  return { signUp, data };
};

export default useSignUp;
