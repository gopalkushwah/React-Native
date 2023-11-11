import React,{useState} from 'react'
import Context from './Context';

const PostsContext = ({children}) => {
    const [state, setState] = useState("");
    const updateState = newValue => {
        setState(newValue);
    }
  return (
    <Context.Provider value={{ state, updateState }}>
        {children}
    </Context.Provider>
  )
}
const UserContext = ({children}) => {
    const [state, setState] = useState("");
    const updateState = newValue => {
        setState(newValue);
    }
  return (
    <Context.Provider value={{ state, updateState }}>
        {children}
    </Context.Provider>
  )
}

export { PostsContext ,UserContext}