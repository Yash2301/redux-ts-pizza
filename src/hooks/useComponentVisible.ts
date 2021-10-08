import { useEffect, useRef, useState } from "react";


export default function useComponentVisible(initialIsVisible: boolean) {
	const [ isComponentVisible, setIsComponentVisible ] = useState<boolean>(initialIsVisible);
	const ref = useRef<HTMLDivElement>(null);
	
	const handleClickOutside = (event: Event): void => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			setIsComponentVisible(false);
		}
	};
	
	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, []);
	
	return { ref, isComponentVisible, setIsComponentVisible };
}
