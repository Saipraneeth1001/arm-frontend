import React, { useState } from 'react';


const TaxSlabCalculator = () => {

    const [taxableIncome, setTaxableIncome] = useState(0);

    function calculateTaxOldRegime() {
        let calculatedOldTax = 0;
        if (taxableIncome <= 250000) {
              calculatedOldTax = 0;
            } else if (taxableIncome <= 500000) {
              calculatedOldTax = (taxableIncome - 250000) * 0.05;
            } else if (taxableIncome <= 1000000) {
              calculatedOldTax = 12500 + (taxableIncome - 500000) * 0.2;
            } else {
              calculatedOldTax = 112500 + (taxableIncome - 1000000) * 0.3;
            }

    }

    function calculateTaxOldRegime() {
        let calculatedNewTax = 0;

        if (taxableIncome <= 250000) {
          calculatedNewTax = 0;
        } else if (taxableIncome > 250000 && taxableIncome <= 500000) {
          calculatedNewTax = (taxableIncome - 250000) * 0.05;
        } else if (taxableIncome > 500000 && taxableIncome <= 750000) {
          calculatedNewTax = 12500 + (taxableIncome - 500000) * 0.1;
        } else if (taxableIncome > 750000 && taxableIncome <= 1000000) {
          calculatedNewTax = 37500 + (taxableIncome - 750000) * 0.15;
        } else if (taxableIncome > 1000000 && taxableIncome <= 1250000) {
          calculatedNewTax = 75000 + (taxableIncome - 1000000) * 0.2;
        } else if (taxableIncome > 1250000 && taxableIncome <= 1500000) {
          calculatedNewTax = 125000 + (taxableIncome - 1250000) * 0.25;
        } else {
          calculatedNewTax = 187500 + (taxableIncome - 1500000) * 0.3;
        }

    }

    

    return (

        <div>

        </div>

    );
}