import { useEffect } from 'react';
import { useQuery } from 'react-query';
import Layout from '../components/Layout/Layout';
import { fetchProblems } from '../services/problems';

export default function Dashboard() {
  const problems = useQuery('problems', fetchProblems);
  if (problems.error) return <p>Phat gya ❌💥</p>;
  return (
    <Layout>
      {problems.isLoading ? (
        <p>Loading ⏰</p>
      ) : (
        <pre>{JSON.stringify(problems.data, null, 3)}</pre>
      )}
    </Layout>
  );
}
