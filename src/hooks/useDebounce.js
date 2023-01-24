import { useEffect, useState } from "react";

export default function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);


    /* FIXME: pending functionality */

    useEffect( () => {
        let shouldWait = false;

        console.log('1. shouldwait=false...')

        if(shouldWait){
            return;
        } else {
            console.log('2. inside return...')
            setDebounceValue(value);
            shouldWait = true;

            setTimeout( () => {
                shouldWait = false;
                console.log('3. timeout...')
            }, delay )
        }




    }, [value,delay] )


    return debounceValue;
}