import { useState } from "react";

function useChangeInput(initialValue) {
    const [val, setVal] = useState(initialValue);
    const handleChange = e => {
        setVal(e.target.value);
    }

    const clear = () => {
        setVal('');
    }

    return [val, handleChange, clear];
}

export default useChangeInput;