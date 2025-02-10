import { createContext } from 'react';
import { NotificationContextType } from '../models/NotificationContextType';

// Create the context
export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);
