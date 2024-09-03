export interface SearchBoxProps {
    label: string;
    placeholder: string;
    icon?: React.ReactNode; 
    value?: string | number; 
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}