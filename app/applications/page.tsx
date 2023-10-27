import { Card, Title, Text } from '@tremor/react';
import { queryBuilder } from '../../lib/planetscale';
import Search from '../search';
import LoanApplicationsTable from './table';

export const dynamic = 'force-dynamic';

interface LoanApplication {
    application_id: number;
    applicant_name: string;
    applicant_id_number: string;
    applicant_phone_number: string;
    applicant_email: string;
    residence_address: string;
    employment_status: string;
}

export default async function ApplicationsPage({
    searchParams
}: {
    searchParams: { q: string };
}) {
    const search = searchParams.q ?? '';
    const loanApplications = await queryBuilder
        
        .selectFrom('loan_applications')
        .select([
            'application_id',
            'applicant_name',
            'applicant_id_number',
            'applicant_phone_number',
            'applicant_email',
            'residence_address',
            'employment_status'
        ])
        .where('applicant_name', 'like', `%${search}%`)
        .execute();

    return (
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
            <Title>Loan Applications</Title>
            <Text>
                A list of loan applications received from the loan application form (Absa Website).
            </Text>
            <Search />
            <Card className="mt-6">
                <LoanApplicationsTable loanApplications={loanApplications} />
            </Card>
        </main>
    );
}
