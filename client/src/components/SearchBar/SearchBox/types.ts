export interface SearchBoxProps {
    label: string;
    placeholder: string;
    icon?: React.ReactNode; 
    value?: string; 
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}