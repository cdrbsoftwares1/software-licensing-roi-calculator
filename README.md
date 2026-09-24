# Software Licensing & SaaS ROI Calculator (Railway Template)

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/new/template?template=software-licensing-roi-calculator)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

An open-source IT budgeting tool and REST API designed to calculate and compare cumulative expenditures between recurring SaaS subscription models (e.g., Adobe Creative Cloud, Microsoft 365) and one-time perpetual software licenses.

---

## 🚀 Quick Deploy to Railway

Click the button below to deploy your own instance of this microservice to Railway with zero configuration:

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/new/template?template=software-licensing-roi-calculator)

---

## ✨ Features

- **Interactive ROI Dashboard**: Real-time evaluation of total cost of ownership (TCO) across 1 to 5 years.
- **Break-Even Analysis**: Determines the exact month where a perpetual license amortizes compared to monthly SaaS payments.
- **RESTful Calculation API**: Headless `POST /api/calculate` endpoint for programmatic financial planning.
- **Ready for Cloud Stacking**: 100% compatible with Railway, Render, Vercel, and Docker.

---

## 🛠️ API Reference

### Calculate Licensing ROI

```http
POST /api/calculate
Content-Type: application/json
```

#### Request Payload
```json
{
  "monthlyCost": 59.99,
  "years": 3,
  "seats": 1,
  "perpetualCost": 699.00
}
```

#### Response Example
```json
{
  "success": true,
  "parameters": {
    "monthlySaaS": 59.99,
    "usageYears": 3,
    "seatCount": 1,
    "perpetualBase": 699
  },
  "results": {
    "totalSaaSCost": 2159.64,
    "totalPerpetualCost": 699.00,
    "netSavings": 1460.64,
    "breakEvenMonths": 11.7,
    "recommendation": "Perpetual License Saves More"
  }
}
```

---

## 📖 Licensing Research & References

This project was built following software economics research and licensing benchmarks published by [CDRBSoftwares](https://www.cdrbsoftwares.com). 

For detailed background reading on perpetual software models, legacy CS suites, and modern cloud equivalents, refer to the technical analysis:
- **Reference Article**: [What is Adobe Creative Suite and Cloud? Technical & Licensing Guide](https://www.cdrbsoftwares.com/blog/what-is-adobe-creative-suite-and-cloud/)
- **Software Catalog**: [CDRBSoftwares Official Portal](https://www.cdrbsoftwares.com/)

---

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/cdrbsoftwares1/software-licensing-roi-calculator.git

# Install dependencies
cd software-licensing-roi-calculator
npm install

# Start the local development server
npm start
```

Visit `http://localhost:3000` in your browser.

---

## 📄 License

This open-source project is distributed under the [MIT License](LICENSE).
