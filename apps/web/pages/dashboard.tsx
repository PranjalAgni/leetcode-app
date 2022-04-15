import { useQuery } from 'react-query';
import Layout from '../components/Layout/Layout';
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
          <table>
            <thead>
              <tr>
                {columns.map((column, idx) => (
                  <th key={idx} scope="col">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {problems.data.data.map((row, idx) => {
                const date = new Date(row.solvedAt);
                const formattedSolvedAtDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
                return (
                  <tr key={idx}>
                    <td>{row.name}</td>
                    <td>{row.url}</td>
                    <td>{formattedSolvedAtDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </Layout>
  );
}
