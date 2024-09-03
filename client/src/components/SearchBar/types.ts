export interface SearchBoxProps {
    label: string;
    placeholder: string;
    icon?: React.ReactNode; 
    value?: string | number | null; 
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SearchBarProps {
    initialDestination: string;
    initialType: string;
    initialDate: string;
    initialPeople: number | null;
    onDestinationNameChange: (name: string) => void;
    onTypeChange: (name: string) => void;
    onDateChange: (name: string) => void;
    onPeopleChange: (maxPeople: number | null) => void; 
    onSearchSubmit: (destinationName: string, type: string, date: string, people: number | null) => void;
}