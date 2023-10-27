import {
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text
  } from '@tremor/react';
  
  interface LoanApplication {
    application_id: number;
    applicant_name: string;
    applicant_id_number: string;
    applicant_email: string;
    // Add other columns as needed
  }
  
  export default function LoanApplicationsTable({ loanApplications }: { loanApplications: LoanApplication[] }) {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Application ID</TableHeaderCell>
            <TableHeaderCell>Applicant Name</TableHeaderCell>
            <TableHeaderCell>ID Number</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            {/* Add headers for other columns as needed */}
          </TableRow>
        </TableHead>
        <TableBody>
          {loanApplications.map((application) => (
            <TableRow key={application.application_id}>
              <TableCell>{application.application_id}</TableCell>
              <TableCell>
                <Text>{application.applicant_name}</Text>
              </TableCell>
              <TableCell>{application.applicant_id_number}</TableCell>
              <TableCell>
                <Text>{application.applicant_email}</Text>
              </TableCell>
              {/* Add cells for other columns as needed */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
  