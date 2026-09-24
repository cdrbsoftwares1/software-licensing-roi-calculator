const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Health Check Endpoint for Railway
app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'online',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

// REST API for Software License ROI Calculations
app.post('/api/calculate', (req, res) => {
    try {
        const { monthlyCost = 59.99, years = 3, seats = 1, perpetualCost = 699 } = req.body;

        const totalSaaS = Number(monthlyCost) * 12 * Number(years) * Number(seats);
        const totalPerpetual = Number(perpetualCost) * Number(seats);
        const netSavings = totalSaaS - totalPerpetual;
        const breakEvenMonths = perpetualCost / (monthlyCost || 1);

        res.json({
            success: true,
            parameters: {
                monthlySaaS: Number(monthlyCost),
                usageYears: Number(years),
                seatCount: Number(seats),
                perpetualBase: Number(perpetualCost)
            },
            results: {
                totalSaaSCost: parseFloat(totalSaaS.toFixed(2)),
                totalPerpetualCost: parseFloat(totalPerpetual.toFixed(2)),
                netSavings: parseFloat(netSavings.toFixed(2)),
                breakEvenMonths: parseFloat(breakEvenMonths.toFixed(1)),
                recommendation: totalSaaS > totalPerpetual ? 'Perpetual License Saves More' : 'SaaS Model Offers Lower Initial Outlay'
            }
        });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Railway App] Software Licensing ROI Calculator running on port ${PORT}`);
});
