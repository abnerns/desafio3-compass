export interface SearchBoxProps {
    label: string;
    placeholder: string;
    icon?: React.ReactNode; 
    value?: string | number; 
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SearchBarProps {
    onDestinationNameChange: (name: string) => void;
    onTypeChange: (name: string) => void;
    onDateChange: (name: string) => void;
    onPeopleChange: (maxPeople: number | null) => void;
  }