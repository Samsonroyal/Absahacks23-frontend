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
    applicant_phone_number: string;
    applicant_email: string;
    residence_address: string;
    employment_status: string;
    monthly_income: number;
    loan_amount: number;
    loan_period: number;
    loan_purpose: string;

  }
  
  export default function LoanApplicationsTable({ loanApplications }: { loanApplications: LoanApplication[] }) {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Application ID</TableHeaderCell>
            <TableHeaderCell>Applicant Name</TableHeaderCell>
            <TableHeaderCell>ID Number</TableHeaderCell>
            <TableHeaderCell>Phone Number</TableHeaderCell>
            <TableHeaderCell>Email Address</TableHeaderCell>
            <TableHeaderCell>Residence</TableHeaderCell>
            <TableHeaderCell>Employment Status</TableHeaderCell>
            <TableHeaderCell>Monthly Income</TableHeaderCell>
            <TableHeaderCell>Loan Amount</TableHeaderCell>
            <TableHeaderCell>Loan Period</TableHeaderCell>
            
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
              <TableCell>{application.applicant_phone_number}</TableCell>              
              <TableCell>
                <Text>{application.applicant_email}</Text>
              </TableCell>
              <TableCell>{application.residence_address}</TableCell>
              <TableCell>{application.employment_status}</TableCell>
              <TableCell>{application.monthly_income}</TableCell>
              <TableCell>{application.loan_amount}</TableCell>
              <TableCell>{application.loan_period}</TableCell>
              {/* Add cells for other columns as needed */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
  