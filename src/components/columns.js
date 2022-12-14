import { compareAsc, format } from 'date-fns'
import { ColumnFilter } from './ColumnFilter';

export const COLUMNS = [
    {
        Header:"Id",
        accessor: 'id',
        Footer:"Id",
        disableFilters: true
    },
   
    {
        Header:"First Name",
        accessor: 'first_name',
        Footer: "First Name",
        
    },
    
    {
        Header: "Last Name",
        accessor: 'last_name',
        Footer: "Last Name",
        
        
    },
    {
        Header: "Age",
        accessor: 'age',
        Footer: "Age",
        
    },
    {
        Header:"Date of Birth",
        accessor: 'date_of_birth',
        Footer: "Date of Birth",
        Cell:  ({value}) => {return format(new Date(value), 'MM/dd/yy')},
        
    },

    {
        Header: "Country",
        accessor: 'country',
        Footer: "Country",
        
    },
    {
        Header:"Phone",
        accessor: 'phone',
        Footer: "Phone",
        
    }
];

export const GROUPED_COLUMNS  = [
    {
        
        Header:"Id",
        accessor: 'id',
        Footer:"Id"
        
    },
    {
        Header:'Name',
        Footer: 'Name',
        columns:[
            {
                Header:"First Name",
                accessor: 'first_name',
                Footer: "First Name"
            },
            
            {
                Header: "Last Name",
                accessor: 'last_name',
                Footer: "Last Name"
                
            }
        ]
    },
    {
        Header:'Info',
        Footer: 'Info',
        columns:[
            {
                Header:"Email",
                accessor: 'email',
                Footer: "Email"
            },
            {
                Header: "Country",
                accessor: 'country',
                Footer: "Country"
            },
            {
                Header:"Phone",
                accessor: 'phone',
                Footer: "Phone"
            }
        ]
    }
]
