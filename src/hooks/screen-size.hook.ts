import { useEffect, useState } from "react";

export default function useScreenSize() {
    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
    function onResizeSizeChange() {
        const { innerWidth, innerHeight } = window;
        setScreenSize({ width: innerWidth, height: innerHeight });
    }
	function onLoadCaptureScreenSize() {
		const { innerWidth, innerHeight } = window;
        setScreenSize({ width: innerWidth, height: innerHeight });
	}
    useEffect(() => {
        window.addEventListener("resize", onResizeSizeChange);
		window.addEventListener("load", onLoadCaptureScreenSize);
		return () => {
			window.removeEventListener("resize", onResizeSizeChange);
			window.removeEventListener("load", onLoadCaptureScreenSize);
		};
    }, []);

    return screenSize;
}
