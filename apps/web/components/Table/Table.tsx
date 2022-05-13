import styles from './Table.module.css';

type TableProps = {
  data: { name: string; url: string; solvedAt: string }[];
  columns: string[];
};

export default function Table({ data, columns }: TableProps) {
  return (
    <div className={styles.tableWrapper}>
      <table role="grid">
        <thead>
          <tr className={styles.tableColumn}>
            {columns.map((column, idx) => (
              <th key={idx} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => {
            const date = new Date(row.solvedAt);
            const formattedSolvedAtDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
            return (
              <tr key={idx}>
                <td>{row.name}</td>
                <td>
                  {
                    <a target="_blank" rel="noreferrer" href={row.url}>
                      {row.url}
                    </a>
                  }
                </td>
                <td>{formattedSolvedAtDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
