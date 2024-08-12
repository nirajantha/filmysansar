import { ReactNode, Children } from 'react';

interface EachElementProps<T>{
    render:(item: T,index:number)=>ReactNode;
    of:T[] | null | undefined;
}

export const EachElement=<T,>({render,of}:EachElementProps<T>):ReactNode=>
    Children.toArray(of?.map((item,index)=>render(item,index)));
 