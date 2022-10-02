  export default function averageSalary(salary: number[]): number {
    const max = Math.max(...salary);
    salary.splice(salary.indexOf(max),1);

    const min = Math.min(...salary);
    salary.splice(salary.indexOf(min), 1);

    return salary.reduce((a,b) => a + b) / salary.length;
  }
