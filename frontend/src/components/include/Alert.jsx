import React from 'react';

const Alert = ({ type, message, close,children }) => {

    let alert = "";

    if (type == 'error') {
        alert = (<div className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative`} role="alert">
            <strong className="font-bold px-1">Error!</strong>
            <span className="block sm:inline">{message}</span>
            {children}
            {close && <span onClick={close} className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg className={`fill-current h-6 w-6 text-red-500`} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
            </span>}
        </div>)
    } else if (type == 'success') {
        alert = (<div className={`bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative`} role="alert">
            <strong className="font-bold px-1">Success!</strong>
            <span className="block sm:inline text-sm">{message} {children}</span>
            
            {close && <span onClick={close} className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg className={`fill-current h-6 w-6 text-blue-500`} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
            </span>}
        </div>)
    }else if(type == 'warning'){
        alert = (<div className={`bg-orange-100 border border-orange-400 text-orange-700 px-4 py-3 rounded relative`} role="alert">
            <strong className="font-bold px-1">Warning!</strong>
            <span className="block sm:inline">{message}</span>
            {children}
            {close && <span onClick={close} className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg className={`fill-current h-6 w-6 text-orange-500`} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
            </span>}
        </div>)
    }

    return alert;
}

export default Alert;
