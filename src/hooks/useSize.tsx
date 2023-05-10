/* eslint-disable react-hooks/exhaustive-deps */

'use client'
import { useEffect, useState } from "react"



const useSize = () => {
    const [isPhone, setIsPhone] = useState<{ phone: boolean, tablet: boolean }>({ phone: false, tablet: false })
    const [set, setSize] = useState<any>(0)


    const checkWindow = () => {
        setSize(window.innerWidth)
        console.log(isPhone);
    }
    useEffect(() => {
        if (typeof window !== undefined) {
            setSize(window.innerWidth)
            window.addEventListener('resize', checkWindow)
            if (set > 900) {
                setIsPhone({ phone: false, tablet: false })
                console.log('desktop')
            }
            if (set <= 900 && set > 450) {
                setIsPhone({ phone: false, tablet: true })
                console.log('tablet');
            }
            if (set <= 450) {
                setIsPhone({ phone: true, tablet: true })
                console.log('phone');
            }

        }




        // if (set <= 485) {
        //     setIsPhone({ phone: true, tablet: false })
        //     console.log('phone')
        // }
        return () => window.removeEventListener('resize', checkWindow)
    }, [set])


    return isPhone;
}

export default useSize;