export const generateId = (prefix = 'input') => `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
