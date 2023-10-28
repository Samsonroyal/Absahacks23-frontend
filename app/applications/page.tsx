import { Card, Title, Text } from '@tremor/react';
import Search from '../search';
import LoanApplicationsTable from './table';

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

export default function ApplicationsPage({
    searchParams,
}: {
    searchParams: { q: string };
}) {
    const { q: search } = searchParams;

    return (
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
            <Title>Loan Applications</Title>
            <Text>A list of loan applications received from the loan application form (Absa Website).</Text>
            <Search />
            <Card className="mt-6">
                <LoanApplicationsTable loanApplications={[]} />
            </Card>
        </main>
    );
}

