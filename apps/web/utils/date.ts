import { TableData } from '../components/Table/Table';

export const sortByDate = (tableData: Array<TableData>) => {
  return tableData.sort((data1, data2) => {
    const [day1, month1, year1] = data1.solvedAt.split('/');
    const [day2, month2, year2] = data2.solvedAt.split('/');
    const timestamp1 = new Date(`${month1}/${day1}/${year1}`).getTime();
    const timestamp2 = new Date(`${month2}/${day2}/${year2}`).getTime();
    return timestamp2 - timestamp1;
  });
};
