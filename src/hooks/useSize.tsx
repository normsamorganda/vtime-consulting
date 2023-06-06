/* eslint-disable react-hooks/exhaustive-deps */

'use client'
import { useEffect, useState } from "react"



const useSize = () => {
    const [isPhone, setIsPhone] = useState<{ phone: boolean, tablet: boolean }>({ phone: false, tablet: false })
    const [set, setSize] = useState<any>(() => {
        return typeof window !== 'undefined' ? window.innerWidth : 0;
    })


    const checkWindow = () => {
        setSize(window.innerWidth)
    }
    useEffect(() => {
        if (typeof window !== undefined) {
            setSize(window.innerWidth)
            window.addEventListener('resize', checkWindow)
            if (set > 900) {
                setIsPhone({ phone: false, tablet: false })
            }
            if (set <= 900) {
                setIsPhone({ phone: false, tablet: true })
            }


        }


        return () => window.removeEventListener('resize', checkWindow)
    }, [set])


    return isPhone;
}

export default useSize;