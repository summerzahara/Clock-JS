function clock() {
    const now = new Date();
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Setup Canvas
    ctx.save(); // Save default state
    ctx.clearRect(0, 0, 500, 500);
    ctx.translate(250, 250) // Put 0,0 in the middle
    ctx.rotate(-Math.PI / 2) // Rotate -90deg

    // Set default styles
    ctx.strokeStyle = '#000000';
    ctx.fillStyle = '#f4f4f4';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';

    // Draw Clock Face
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#800000';
    ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fill();
    ctx.restore();

    // Draw Hour Marks
    ctx.save();
    for (let i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.rotate(Math.PI / 6)
        ctx.moveTo(100, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();
    }

    // Draw Minute Marks
    ctx.save();
    ctx.lineWidth = 2;
    for (let i = 0; i < 60; i++) {
        if (i % 5 !== 0) {
            ctx.beginPath();
            ctx.moveTo(117, 0);
            ctx.lineTo(120, 0);
            ctx.stroke();
        }
        ctx.rotate(Math.PI / 30)
    }
    ctx.restore();

    // Get Current Time
    const hr = now.getHours() % 12;
    const min = now.getMinutes();
    const sec = now.getSeconds();

    console.log(`${hr}:${min}:${sec}`)

    // Draw Hour Hand
    ctx.save();
    ctx.rotate(
        (Math.PI / 6) * hr + 
        (Math.PI / 360) * min + 
        (Math.PI / 21600) * sec
    );
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(70, 0);
    ctx.stroke();
    ctx.restore();

    // Draw Minute Hand
    ctx.save();
    ctx.rotate(
        (Math.PI / 60) * min + 
        (Math.PI / 1800) * sec
    );
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(115, 0);
    ctx.stroke();
    ctx.restore();

    // Draw Second Hand
    ctx.save();
    ctx.rotate(
        (Math.PI / 30) * sec
    );
    ctx.strokeStyle = '#FF7F50';
    ctx.fillStyle = '#FF7F50'
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(100, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();


    ctx.restore(); // Restore default state
    // requestAnimationFrame(clock);
}

requestAnimationFrame(clock);