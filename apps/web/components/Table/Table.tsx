type TableProps = {
  data: { name: string; url: string; solvedAt: string }[];
  columns: string[];
};

export default function Table({ data, columns }: TableProps) {
  return (
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
        {data.map((row, idx) => {
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
  );
}
