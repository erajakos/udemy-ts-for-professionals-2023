type InputOnChange = (newValue: string) => void;
type InputValue = 'text' | 'email';

export interface InputProps {
    type: InputValue
    value: string,
    onChange: InputOnChange,
};

// same 
type InputPropsType = {
    type: InputValue
    value: string,
    onChange: InputOnChange,
};




