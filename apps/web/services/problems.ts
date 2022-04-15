import getConfig from 'next/config';

const {
  publicRuntimeConfig: { API_URL },
} = getConfig();

export const fetchProblems = async () => {
  const response = await fetch(`${API_URL}/problems`);
  const data = await response.json();
  let result = Object.assign({}, { data: data, error: null });
  if (response.status === 500) {
    const errorMessage = data?.message;
    result = Object.assign({}, result, { error: errorMessage, data: null });
  }
  console.log('Result = ', result);
  return result;
};
