import { useQuery } from 'react-query';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import Layout from '../components/Layout/Layout';
import Table from '../components/Table/Table';
import { fetchProblems } from '../services/problems';
import { sortByDate } from '../utils/date';

TimeAgo.addDefaultLocale(en);
export default function Dashboard() {
  const timeago = new TimeAgo('en-US');
  const problems = useQuery('problems', fetchProblems);
  console.log('React query ', problems);
  if (problems.isLoading) return <button aria-busy="true">Loading ⏰</button>;
  if (!problems.data.data.length) {
    return <h2>{'Go and scrape first for problems'}</h2>;
  }

  const solvedLeetCodeProblemsInSortedFashion = sortByDate(problems.data.data);
  solvedLeetCodeProblemsInSortedFashion.forEach((leetcodeProblem) => {
    const [day, month, year] = leetcodeProblem.solvedAt.split('/');
    const solvedAtMs = new Date(`${month}/${day}/${year}`).getTime();
    const solvedAgo = timeago.format(solvedAtMs);
    console.log(`${leetcodeProblem.solvedAt} ---> ${solvedAgo}`);
  });

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
