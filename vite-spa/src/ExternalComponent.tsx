import { useEffect, useRef } from "react"
// import * as react from "react";
// import * as ReactDOM from "react-dom";
// import * as mantine from "@mantine/core";

// import { createRoot } from "react-dom/client";

// window.React = react;
// window.ReactDOM = ReactDOM;
// window.mantine = mantine;

console.log("Mounted react, react-dom and mantine to window.")


export function ExternalComponent({ src }: { src: string }) {
    const ref = useRef<HTMLDivElement>();

    useEffect(() => {
        let unmount: (() => void) | null = null;
        (async () => {
            const a = await import(/* @vite-ignore */src);
            console.log(a)
            unmount = a.render_app(ref.current);
            console.log(`Rerendered ${src}`)
        })()
        return () => {
            if (typeof unmount === "function") unmount();
        }
    }, [src])

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return <div ref={ref as any}></div>
}
