import {Budget, BudgetGroup, State} from './types';

const generateBudget = (name: string): Budget =>
    ({
        name,
        values: new Array(12)
            .fill(0)
        // .map(()=> ~~(Math.random() * 1e2))
    });

const generateBudgetGroup = (name: string, budgets: string[]): BudgetGroup =>
    ({name, budgets: budgets.map(generateBudget)});

export const generateTemplate = (): State => ({
    version: 1,
    unit: '€',
    locale: navigator.language ?? 'en-US',
    startingBalance: 5000,
    title: 'Annual Budget',
    expenses: [
        generateBudgetGroup('Children', [
            'Activities',
            'Medical',
            'Childcare',
            'Clothing',
            'School',
            'Toys',
            'Other'
        ]),
        generateBudgetGroup('Debt', [
            'Credit cards',
            'Student loans',
            'Other loans',
            'Taxes',
            'Other'
        ]),
        generateBudgetGroup('Education', [
            'Tuition',
            'Books',
            'Music lessons',
            'Other'
        ]),
        generateBudgetGroup('Entertainment', [
            'Books',
            'Concerts/shows',
            'Games',
            'Hobbies',
            'Films',
            'Music',
            'Outdoor activities',
            'Photography',
            'Sport',
            'Theatre/plays',
            'TV',
            'Other'
        ]),
        generateBudgetGroup('Everyday', [
            'Groceries',
            'Restaurants',
            'Personal supplies',
            'Clothes',
            'Laundry/dry cleaning',
            'Hair/beauty',
            'Subscriptions',
            'Other'
        ]),
        generateBudgetGroup('Gifts', [
            'Gifts',
            'Donations (charity)',
            'Other'
        ]),
        generateBudgetGroup('Health / medical', [
            'Doctors/dental/vision',
            'Specialist care',
            'Pharmacy',
            'Emergency',
            'Other'
        ]),
        generateBudgetGroup('Home', [
            'Rent/mortgage',
            'Property taxes',
            'Furnishings',
            'Lawn/garden',
            'Supplies',
            'Maintenance',
            'Improvements',
            'Moving',
            'Other'
        ]),
        generateBudgetGroup('Insurance', [
            'Car',
            'Health',
            'Home',
            'Life',
            'Other'
        ]),
        generateBudgetGroup('Pets', [
            'Food',
            'Vet/medical',
            'Toys',
            'Supplies',
            'Other'
        ]),
        generateBudgetGroup('Technology', [
            'Domains & hosting',
            'Online services',
            'Hardware',
            'Software',
            'Other'
        ]),
        generateBudgetGroup('Transportation', [
            'Fuel',
            'Car payments',
            'Repairs',
            'Registration/license',
            'Supplies',
            'Public transit',
            'Other'
        ]),
        generateBudgetGroup('Travel', [
            'Airfare',
            'Hotels',
            'Food',
            'Transportation',
            'Entertainment',
            'Other'
        ]),
        generateBudgetGroup('Utilities', [
            'Phone',
            'TV',
            'Internet',
            'Electricity',
            'Heat/gas',
            'Water',
            'Other'
        ]),
        generateBudgetGroup('Other', [
            '[Category 1]',
            '[Category 2]'
        ])
    ],
    income: [
        generateBudgetGroup('Wages', [
            'Pay slip',
            'Tips',
            'Bonus',
            'Commission',
            'Other'
        ]),
        generateBudgetGroup('Other', [
            'Transfer from savings',
            'Interest income',
            'Dividends',
            'Gifts',
            'Refunds',
            'Other'
        ])
    ]
});
