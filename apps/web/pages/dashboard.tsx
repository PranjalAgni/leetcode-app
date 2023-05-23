import { useQuery } from 'react-query';
import Layout from '../components/Layout/Layout';
import Table from '../components/Table/Table';
import { fetchProblems } from '../services/problems';
import { sortByDate } from '../utils/date';

export default function Dashboard() {
  const problems = useQuery('problems', fetchProblems);
  console.log('React query ', problems);
  if (problems.isLoading) return <button aria-busy="true">Loading ⏰</button>;
  if (!problems.data.data.length) {
    return <h2>{'Go and scrape first for problems'}</h2>;
  }

  const solvedLeetCodeProblemsInSortedFashion = sortByDate(problems.data.data);

  const columns = Object.keys(solvedLeetCodeProblemsInSortedFashion[0]).map(
    (column) => column.toUpperCase()
  );
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
