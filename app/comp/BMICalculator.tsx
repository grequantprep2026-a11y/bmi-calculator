"use client";

import { useState, useCallback } from "react";
import BMIGauge from "./BMIGauge";


type Unit = "metric" | "imperial";
type Gender = "male" | "female";

interface BMIResult {
  bmi: number;
  category: string;
  color: string;
  healthyMin: number;
  healthyMax: number;
  bmiPrime: number;
  message: string;
}

function calcBMI(
  unit: Unit,
  height: number,
  heightIn: number,
  weight: number,
  weightLbs: number
): number {
  if (unit === "metric") {
    const hm = height / 100;
    return weight / (hm * hm);
  } else {
    const totalIn = height * 12 + heightIn;
    return (703 * weightLbs) / (totalIn * totalIn);
  }
}

function getCategory(bmi: number): { category: string; color: string; message: string } {
  if (bmi < 18.5)
    return {
      category: "Underweight",
      color: "#3b82f6",
      message: "Your BMI is below the healthy range. Consider consulting a healthcare provider.",
    };
  if (bmi < 25)
    return {
      category: "Normal",
      color: "#10b981",
      message: "You are in the healthy weight range. Great job maintaining your health!",
    };
  if (bmi < 30)
    return {
      category: "Overweight",
      color: "#f59e0b",
      message: "Your BMI is slightly above the healthy range. Diet and exercise can help.",
    };
  if (bmi < 35)
    return {
      category: "Obese",
      color: "#f97316",
      message: "Your BMI indicates obesity. Consulting a healthcare provider is recommended.",
    };
  return {
    category: "Severely Obese",
    color: "#ef4444",
    message: "Your BMI is in the severely obese range. Please consult a healthcare provider.",
  };
}

export default function BMICalculator() {
  const [unit, setUnit] = useState<Unit>("metric");
  const [gender, setGender] = useState<Gender>("male");
  const [heightCm, setHeightCm] = useState<string>("175");
  const [heightFt, setHeightFt] = useState<string>("5");
  const [heightIn, setHeightIn] = useState<string>("9");
  const [weight, setWeight] = useState<string>("70");
  const [weightLbs, setWeightLbs] = useState<string>("154");
  const [age, setAge] = useState<string>("25");
  const [result, setResult] = useState<BMIResult | null>(null);
  const [calculated, setCalculated] = useState(false);

  const handleCalculate = useCallback(() => {
    const h = parseFloat(heightCm);
    const hft = parseFloat(heightFt);
    const hin = parseFloat(heightIn);
    const w = parseFloat(weight);
    const wlbs = parseFloat(weightLbs);

    if (unit === "metric" && (isNaN(h) || isNaN(w) || h <= 0 || w <= 0)) return;
    if (unit === "imperial" && (isNaN(hft) || isNaN(hin) || isNaN(wlbs))) return;

    const bmi = calcBMI(unit, h, hin, w, wlbs);
    const { category, color, message } = getCategory(bmi);

    let healthyMin: number, healthyMax: number;
    if (unit === "metric") {
      const hm = h / 100;
      healthyMin = 18.5 * hm * hm;
      healthyMax = 24.9 * hm * hm;
    } else {
      const totalIn = hft * 12 + hin;
      healthyMin = (18.5 * totalIn * totalIn) / 703;
      healthyMax = (24.9 * totalIn * totalIn) / 703;
    }

    setResult({ bmi, category, color, healthyMin, healthyMax, bmiPrime: bmi / 25, message });
    setCalculated(true);
  }, [unit, heightCm, heightFt, heightIn, weight, weightLbs]);

  const inputClass =
    "w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all placeholder:text-gray-400";
  const selectClass =
    "bg-white border border-gray-200 rounded-lg px-3 py-3 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-black transition-all cursor-pointer";

  return (
    <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white">
      {/* LEFT — Input Panel */}
      <div className="p-8 bg-white">
        <h1 className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Calculate Your BMI
        </h1>
        <p className="text-gray-500 text-sm mb-6">Enter your details to see your Body Mass Index.</p>

        {/* Unit Toggle */}
        <div className="flex rounded-xl overflow-hidden border border-gray-200 mb-6">
          <button
            onClick={() => setUnit("metric")}
            className={`flex-1 py-2.5 text-sm font-semibold transition-all ${
              unit === "metric" ? "bg-black text-white" : "bg-white text-gray-500 hover:bg-gray-50"
            }`}
          >
            Metric (cm, kg)
          </button>
          <button
            onClick={() => setUnit("imperial")}
            className={`flex-1 py-2.5 text-sm font-semibold transition-all ${
              unit === "imperial" ? "bg-black text-white" : "bg-white text-gray-500 hover:bg-gray-50"
            }`}
          >
            Imperial (ft, lbs)
          </button>
        </div>

        {/* Height & Weight */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Height</label>
            {unit === "metric" ? (
              <div className="flex gap-2">
                <input type="number" value={heightCm} onChange={(e) => setHeightCm(e.target.value)} placeholder="175" className={inputClass} min="50" max="250" />
                <select className={selectClass}><option>cm</option></select>
              </div>
            ) : (
              <div className="flex gap-2">
                <div className="flex gap-1">
                  <input type="number" value={heightFt} onChange={(e) => setHeightFt(e.target.value)} placeholder="5" className={`${inputClass} w-16`} />
                  <span className="flex items-center text-xs text-gray-400 font-medium">ft</span>
                  <input type="number" value={heightIn} onChange={(e) => setHeightIn(e.target.value)} placeholder="9" className={`${inputClass} w-16`} />
                  <span className="flex items-center text-xs text-gray-400 font-medium">in</span>
                </div>
              </div>
            )}
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Weight</label>
            {unit === "metric" ? (
              <div className="flex gap-2">
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="70" className={inputClass} min="10" max="300" />
                <select className={selectClass}><option>kg</option></select>
              </div>
            ) : (
              <div className="flex gap-2">
                <input type="number" value={weightLbs} onChange={(e) => setWeightLbs(e.target.value)} placeholder="154" className={inputClass} />
                <select className={selectClass}><option>lbs</option></select>
              </div>
            )}
          </div>
        </div>

        {/* Age */}
        <div className="mb-4">
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Age</label>
          <div className="flex gap-2 items-center">
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className={`${inputClass} max-w-xs`} min="2" max="120" />
            <span className="text-xs text-gray-400">(2 – 120 years)</span>
          </div>
        </div>

        {/* Gender */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Gender</label>
          <div className="flex gap-3">
            <button
              onClick={() => setGender("male")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-semibold transition-all ${
                gender === "male" ? "border-black bg-black text-white" : "border-gray-200 text-gray-600 hover:border-gray-400"
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 2a7 7 0 1 0 4.9 12H16v2h2v-2h2v-2h-4.1A7 7 0 0 0 9 2zm0 2a5 5 0 1 1 0 10A5 5 0 0 1 9 4z" />
              </svg>
              Male
            </button>
            <button
              onClick={() => setGender("female")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-semibold transition-all ${
                gender === "female" ? "border-black bg-black text-white" : "border-gray-200 text-gray-600 hover:border-gray-400"
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm-1 12h2v3h2v2h-2v2h-2v-2H9v-2h2v-3z" />
              </svg>
              Female
            </button>
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={handleCalculate}
          className="w-full bg-black text-white font-semibold py-4 rounded-xl text-sm tracking-wide hover:bg-gray-900 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          Calculate BMI
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        <p className="text-xs text-gray-400 text-center mt-3 flex items-center justify-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Your data is secure and will not be stored.
        </p>
      </div>

      {/* RIGHT — Result Panel */}
      <div className="p-8 bg-gray-50 border-l border-gray-100 flex flex-col">
        <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Your BMI Result
        </h2>

        {calculated && result ? (
          <div className="flex-1 flex flex-col animate-fade-up">
            {/* Body silhouettes */}
            <div className="w-full">
              <BMIGauge
                bmi={result.bmi}
                category={result.category}
                categoryColor={result.color}
                gender={gender}
              />
            </div>


            {/* Message */}
            <div
              className="mt-4 flex items-start gap-2 text-sm py-3 px-4 rounded-xl"
              style={{ backgroundColor: `${result.color}18`, color: result.color }}
            >
              <svg className="w-4 h-4 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">{result.message}</span>
            </div>


          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            {/* Placeholder ghost body */}
            <svg viewBox="0 0 200 295" width="100" height="148" className="opacity-10 mb-4">
              <ellipse cx="100" cy="38" rx="20" ry="21" fill="#111" />
              <rect x="92" y="57" width="16" height="13" rx="4" fill="#111" />
              <path d="M82 70 Q78 82 77 112 Q76 132 79 160 L121 160 Q124 132 123 112 Q122 82 118 70 Z" fill="#111" />
              <path d="M82 73 Q72 82 67 103 Q64 118 65 140 Q68 143 74 141 Q76 120 79 105 Q82 84 88 75 Z" fill="#111" />
              <path d="M118 73 Q128 82 133 103 Q136 118 135 140 Q132 143 126 141 Q124 120 121 105 Q118 84 112 75 Z" fill="#111" />
              <path d="M79 158 Q76 178 74 205 Q72 226 72 252 Q76 256 83 254 Q85 228 88 205 Q91 178 93 158 Z" fill="#111" />
              <path d="M121 158 Q124 178 126 205 Q128 226 128 252 Q124 256 117 254 Q115 228 112 205 Q109 178 107 158 Z" fill="#111" />
            </svg>
            <p className="text-gray-400 text-sm font-medium">Enter your details and click</p>
            <p className="text-gray-400 text-sm">
              <span className="font-bold text-gray-700">Calculate BMI</span> to see your result.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}