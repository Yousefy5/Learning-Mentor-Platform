import { createContext, useContext, useState } from 'react';

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
    // Store progress for each field: { fieldId: percentage }
    const [fieldProgress, setFieldProgress] = useState({});
    
    const updateProgress = (fieldId, percentage) => {
        setFieldProgress(prev => ({
            ...prev,
            [fieldId]: percentage
        }));
    };
    
    const getProgress = (fieldId) => {
        return fieldProgress[fieldId] || 0;
    };
    
    return (
        <ProgressContext.Provider value={{ fieldProgress, updateProgress, getProgress }}>
            {children}
        </ProgressContext.Provider>
    );
};

export const useProgress = () => {
    const context = useContext(ProgressContext);
    if (context === undefined) {
        throw new Error('useProgress must be used within a ProgressProvider');
    }
    return context;
};