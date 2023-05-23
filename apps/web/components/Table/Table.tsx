import styles from './Table.module.css';

export interface TableData {
  name: string;
  url: string;
  solvedAt: string;
}
export interface TableProps {
  data: Array<TableData>;
  columns: string[];
}

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
                <td>{row.solvedAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
