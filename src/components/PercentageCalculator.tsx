"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const PercentageCalculator = () => {
  const [value, setValue] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [result, setResult] = useState(0);

  const handleCalculate = () => setResult((value * percentage) / 100);

  const handleReset = () => {
    setValue(0);
    setPercentage(0);
    setResult(0);
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Percentage Calculator</h1>

      <div className="space-y-4">
        <Label>
          Value
          <Input
            type="number"
            placeholder="Enter value"
            required
            value={value + ""}
            onChange={(e) => setValue(parseFloat(e.target.value))}
          />
        </Label>

        <Label>
          Percentage
          <Input
            type="number"
            required
            value={percentage + ""}
            onChange={(e) => setPercentage(parseFloat(e.target.value))}
          />
          <span>{percentage}%</span>
        </Label>

        <Button className="w-full" onClick={handleCalculate}>
          Calculate
        </Button>

        <Button
          className="w-full mt-4"
          variant="destructive"
          onClick={handleReset}
          disabled={result === 0}
        >
          Reset
        </Button>

        <Label className="mt-4">
          Result
          <Input type="number" readOnly value={result.toFixed(2)} />
        </Label>
      </div>
    </div>
  );
};

export default PercentageCalculator;
