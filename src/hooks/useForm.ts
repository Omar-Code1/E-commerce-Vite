import React, { useState } from 'react';

type FuctionType = (
  initialState: any,
) => [any, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void];

export const useForm: FuctionType = (initialState) => {
  const [inputs, SetInputs] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetInputs(() => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };

  const reset = () => {
    SetInputs(initialState);
  };

  return [inputs, handleChange, reset];
};
