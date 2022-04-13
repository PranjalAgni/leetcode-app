import getConfig from 'next/config';

const {
  publicRuntimeConfig: { API_URL },
} = getConfig();

export const fetchProblems = async () => {
  const response = await fetch(`${API_URL}/problems`);
  const data = await response.json();
  console.log('Data: ', data);
  return data;
};
