import {useEffect, useState} from "react";

export const useDebounce = (value: string, delay = 350) => {
   const [delayValue, setDelayValue] = useState<string>('');

   useEffect(() => {
       const timeout = setTimeout(() => {
           setDelayValue(value);

       }, delay)

       return () => clearTimeout(timeout)
   }, [value, delay])

    return delayValue
}
