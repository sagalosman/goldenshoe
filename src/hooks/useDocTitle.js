import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - Golden Shoe`;
        } else {
            document.title = 'Golden Shoe';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
