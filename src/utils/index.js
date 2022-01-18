import { useEffect, useState } from "react"

export const isFalsy = value => value === 0 ? false : !value

export const cleanObj = (obj) => {
    const result = { ...obj }
    Object.keys(result).forEach(key => {
        const value = result[key]
        if (isFalsy(value)) {
            delete result[key]
        }
    })
    return result
}

export const useMount = (callback) => {
    useEffect(() => {
        callback()
    }, [])
}

//export const useDebounce = (fn, delay) =>{
//   let timeout;
//   return (...param)=>{
//       if(timeout) clearTimeout(timeout);
//       timeout = setTimeout(()=>{
//           fn(...param);
//       }, delay);
//   }
//

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(() => {
        //每次value变化后，设置一个定时器
        const timeout = setTimeout(() => setDebouncedValue(value), delay)
        //每次上一个useEffect之后运行
        return () => clearTimeout(timeout)
    }, [value, delay])
    return debouncedValue
}
