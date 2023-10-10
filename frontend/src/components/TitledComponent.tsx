import React, {PropsWithChildren} from 'react';
import classnames from "classnames";

type Props = {
    title: string,
    className?: string
}

const TitledComponent = ({title, className, children}: PropsWithChildren<Props>) => {
    return <div className={classnames("flex flex-col items-stretch", className)}>
        <div className="text-neutral-500 text-2xl pb-8">
            {title}
        </div>
        <div className="flex justify-center">
        {children}
        </div>
    </div>
}

export default TitledComponent
