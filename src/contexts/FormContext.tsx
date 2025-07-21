'use client'
import { createContext, ReactNode, useState } from "react";
import { useContext } from "react";

interface Props {
    children: ReactNode
}

interface FormContextType {
    isOpen: boolean,
    setIsOpen: (open: boolean) => void
}

const FormContext = createContext<FormContextType | undefined>(undefined);
export const FormProvider = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <FormContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </FormContext.Provider>
    )
}

export const useFormContext = () => {
    const context = useContext(FormContext)
    if (!context) {
        throw new Error('Context is null')
    }
    return context
}

