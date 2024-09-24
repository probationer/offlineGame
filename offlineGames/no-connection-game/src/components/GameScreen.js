import { useRef, useEffect } from 'react';
// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
function GameScreen(props) {
    const canvasRef = useRef(null);

    const padding = 50;
    const drawGrid = (ctx) => {
        const height = ctx.canvas.height;
        const width = ctx.canvas.width;
        ctx.font = "10px";
        for (let x = 0; x <= width; x += padding) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
        }

        for (let y = 0; y <= height; y += padding) {
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
        }

        ctx.strokeStyle = "grey";
        ctx.stroke();
        
    }

    const atomicBox = (ctx, margin = 10, animationFrameId = 0) => {
        const height = ctx.canvas.height;
        const width = ctx.canvas.width;
        for (let x = 0; x < width; x += padding) {
            for (let y = 0; y < height; y += padding) {
                ctx.fillRect(margin + x, margin + y, padding - 2 * margin, padding - 2 * margin);
            }
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        drawGrid(context);
        atomicBox(context);
        // let animationFrameId;

        // const render = () => {
        //     animationFrameId = window.requestAnimationFrame(render)

        // }
        // render();

        // return () => {
        //     window.cancelAnimationFrame(animationFrameId)
        // }

    }, []);

    return <canvas ref={canvasRef} {...props} />
}

export default GameScreen;