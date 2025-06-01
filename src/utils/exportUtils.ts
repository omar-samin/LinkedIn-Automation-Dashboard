import { Post, WeeklyReport } from '../types';

export const exportToCSV = (data: any[], filename: string) => {
  const headers = Object.keys(data[0]);
  const csvContent = [
    headers.join(','),
    ...data.map(row => headers.map(header => JSON.stringify(row[header])).join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const generateReportEmail = (reports: WeeklyReport[]) => {
  const subject = 'LinkedIn Performance Report';
  const body = `
Weekly Performance Report

${reports.map(report => `
${report.week}
- Total Posts: ${report.totalPosts}
- Total Impressions: ${report.totalImpressions}
- Engagement Rate: ${report.engagementRate}%
`).join('\n')}
`;

  const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
};