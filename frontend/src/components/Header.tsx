import React from 'react'

const Header = () => {

    return <div className="h-32 bg-orange-50 w-full flex">
        <div className="max-w-5xl flex mx-auto items-center text-neutral-500">
            <img
                className="h-20"
                src="/logo.png"
                alt="Resilient Quest Logo"
            />
            <div className="ml-8 flex flex-col">
                <div className="text-4xl ml-8">
                    Antelop'Mark
                </div>
                <div className="pt-2 text-md">
                    The Benchmark for all Antelopes
                </div>
            </div>
        </div>
    </div>
}

export default Header
