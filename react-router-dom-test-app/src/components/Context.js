import {createContext} from "react";

//Если не использовать в компоненте NotMain MyContext.Provider
//То значанеие контекста будут такие какие указаны при инициализации (см строку ниже)
//MyContext.Provider - Позволяет изменять контекст для компонента и его потомков.
export const MyContext = createContext("without provider gomozek");