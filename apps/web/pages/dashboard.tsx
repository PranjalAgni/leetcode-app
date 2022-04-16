import { useQuery } from 'react-query';
import Layout from '../components/Layout/Layout';
import Table from '../components/Table/Table';
import { fetchProblems } from '../services/problems';

export default function Dashboard() {
  const problems = useQuery('problems', fetchProblems);
  console.log('React query ', problems);
  if (problems.isLoading) return <button aria-busy="true">Loading ⏰</button>;
  const columns = Object.keys(problems.data.data[0]);
  return (
    <Layout>
      {problems.data.error ? (
        <p>{problems.data.error.message} ❌💥</p>
      ) : (
        <>
          <span style={{ margin: '12px' }}>
            Total problems solved <strong>{problems.data.data.length}</strong>
          </span>
          <Table columns={columns} data={problems.data.data} />
        </>
      )}
    </Layout>
  );
}
