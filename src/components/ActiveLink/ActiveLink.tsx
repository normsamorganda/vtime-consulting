'use client'
import { useSearchParams } from 'next/navigation';
function ActiveLink({ children, href, key, text }:any) {

    const searchParams = useSearchParams();
    console.log(searchParams)
    const style = {
    marginRight: 10,
    color: searchParams === href ? 'red' : 'black',
  };
 
  return (
    <a href={href} style={style}>
      {children}
      {text}
    </a>
  );
}
 
export default ActiveLink;