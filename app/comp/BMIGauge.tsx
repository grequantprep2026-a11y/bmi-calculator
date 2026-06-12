"use client";

type Gender = "male" | "female";

interface BMIGaugeProps {
  bmi: number;
  category: string;
  categoryColor: string;
  gender?: Gender;
}

const categories = [
  { key: "Underweight", label: "Underweight", range: "< 18.5", color: "#60a5fa" },
  { key: "Normal", label: "Normal", range: "18.5–24.9", color: "#34d399" },
  { key: "Overweight", label: "Overweight", range: "25–29.9", color: "#fbbf24" },
  { key: "Obese", label: "Obese", range: "30–34.9", color: "#f97316" },
  { key: "Severely Obese", label: "Severely Obese", range: "≥ 35", color: "#ef4444" },
];

// Male silhouettes: 5 body shapes from thin to very heavy
function MaleSilhouette({ index, active, color }: { index: number; active: boolean; color: string }) {
  // Body width/shape varies per index (0=thin, 4=very heavy)
  const shapes = [
    // 0 - Underweight: very thin
    <g key="male-0">
      <ellipse cx="50" cy="22" rx="10" ry="11" />
      <rect x="44" y="31" width="12" height="8" rx="3" />
      {/* torso */}
      <path d="M40 39 Q37 55 37 75 Q37 90 39 108 L61 108 Q63 90 63 75 Q63 55 60 39 Z" />
      {/* left arm */}
      <path d="M40 42 Q32 55 31 75 Q30 88 31 100 Q34 103 38 101 Q38 85 39 72 Q40 58 44 45 Z" />
      {/* right arm */}
      <path d="M60 42 Q68 55 69 75 Q70 88 69 100 Q66 103 62 101 Q62 85 61 72 Q60 58 56 45 Z" />
      {/* left leg */}
      <path d="M39 106 Q37 128 36 152 Q35 168 35 188 Q39 192 44 190 Q45 170 46 152 Q47 130 48 108 Z" />
      {/* right leg */}
      <path d="M61 106 Q63 128 64 152 Q65 168 65 188 Q61 192 56 190 Q55 170 54 152 Q53 130 52 108 Z" />
    </g>,

    // 1 - Normal: slim/healthy
    <g key="male-1">
      <ellipse cx="50" cy="22" rx="11" ry="12" />
      <rect x="43" y="32" width="14" height="8" rx="3" />
      <path d="M38 40 Q34 57 34 78 Q34 94 36 112 L64 112 Q66 94 66 78 Q66 57 62 40 Z" />
      <path d="M38 44 Q29 58 28 80 Q27 94 28 107 Q32 110 36 108 Q36 92 37 78 Q38 62 43 47 Z" />
      <path d="M62 44 Q71 58 72 80 Q73 94 72 107 Q68 110 64 108 Q64 92 63 78 Q62 62 57 47 Z" />
      <path d="M36 110 Q34 132 33 158 Q32 175 32 196 Q37 200 43 198 Q44 177 45 157 Q46 133 48 112 Z" />
      <path d="M64 110 Q66 132 67 158 Q68 175 68 196 Q63 200 57 198 Q56 177 55 157 Q54 133 52 112 Z" />
    </g>,

    // 2 - Overweight: slightly heavier torso
    <g key="male-2">
      <ellipse cx="50" cy="22" rx="13" ry="12" />
      <rect x="42" y="32" width="16" height="9" rx="3" />
      <path d="M35 41 Q29 59 28 82 Q27 100 30 118 L70 118 Q73 100 72 82 Q71 59 65 41 Z" />
      <path d="M35 46 Q25 61 24 85 Q23 100 24 114 Q28 118 34 115 Q33 99 34 83 Q36 65 41 49 Z" />
      <path d="M65 46 Q75 61 76 85 Q77 100 76 114 Q72 118 66 115 Q67 99 66 83 Q64 65 59 49 Z" />
      <path d="M30 116 Q28 139 27 166 Q26 184 26 206 Q32 210 39 208 Q40 185 41 163 Q43 138 46 117 Z" />
      <path d="M70 116 Q72 139 73 166 Q74 184 74 206 Q68 210 61 208 Q60 185 59 163 Q57 138 54 117 Z" />
    </g>,

    // 3 - Obese: rounder belly, wider
    <g key="male-3">
      <ellipse cx="50" cy="21" rx="15" ry="13" />
      <rect x="40" y="32" width="20" height="10" rx="4" />
      <path d="M31 42 Q22 63 21 90 Q20 112 24 130 L76 130 Q80 112 79 90 Q78 63 69 42 Z" />
      <path d="M31 47 Q19 65 18 92 Q17 110 18 125 Q23 130 30 127 Q29 109 30 90 Q32 70 38 51 Z" />
      <path d="M69 47 Q81 65 82 92 Q83 110 82 125 Q77 130 70 127 Q71 109 70 90 Q68 70 62 51 Z" />
      <path d="M24 128 Q22 153 21 180 Q20 200 20 222 Q27 227 35 224 Q37 201 38 178 Q40 152 44 129 Z" />
      <path d="M76 128 Q78 153 79 180 Q80 200 80 222 Q73 227 65 224 Q63 201 62 178 Q60 152 56 129 Z" />
    </g>,

    // 4 - Severely Obese: very round, wide
    <g key="male-4">
      <ellipse cx="50" cy="20" rx="17" ry="14" />
      <rect x="38" y="32" width="24" height="11" rx="5" />
      <path d="M26 43 Q14 68 13 100 Q12 126 17 146 L83 146 Q88 126 87 100 Q86 68 74 43 Z" />
      <path d="M26 49 Q12 70 11 103 Q10 125 12 141 Q18 147 27 143 Q25 122 26 100 Q28 76 35 54 Z" />
      <path d="M74 49 Q88 70 89 103 Q90 125 88 141 Q82 147 73 143 Q75 122 74 100 Q72 76 65 54 Z" />
      <path d="M17 144 Q15 172 14 200 Q13 222 13 244 Q22 250 32 246 Q34 222 35 196 Q38 168 43 145 Z" />
      <path d="M83 144 Q85 172 86 200 Q87 222 87 244 Q78 250 68 246 Q66 222 65 196 Q62 168 57 145 Z" />
    </g>,
  ];

  return (
    <svg
      viewBox="0 0 100 260"
      width="100%"
      height="100%"
      fill={active ? color : "#e5e7eb"}
      style={{ transition: "fill 0.4s ease" }}
    >
      {shapes[index]}
    </svg>
  );
}

// Female silhouettes: 5 body shapes from thin to very heavy
function FemaleSilhouette({ index, active, color }: { index: number; active: boolean; color: string }) {
  const shapes = [
    // 0 - Underweight
    <g key="female-0">
      <ellipse cx="50" cy="22" rx="10" ry="11" />
      <rect x="44" y="31" width="12" height="7" rx="3" />
      {/* narrow torso with slight waist */}
      <path d="M40 38 Q37 50 38 62 Q36 72 37 88 Q38 100 40 110 L60 110 Q62 100 63 88 Q64 72 62 62 Q63 50 60 38 Z" />
      {/* bust hint */}
      <ellipse cx="43" cy="52" rx="5" ry="4" />
      <ellipse cx="57" cy="52" rx="5" ry="4" />
      {/* arms */}
      <path d="M40 42 Q32 55 31 72 Q30 85 31 97 Q34 100 38 98 Q37 84 38 70 Q39 56 43 45 Z" />
      <path d="M60 42 Q68 55 69 72 Q70 85 69 97 Q66 100 62 98 Q63 84 62 70 Q61 56 57 45 Z" />
      {/* hips/skirt shape - slight flare */}
      <path d="M40 108 Q36 120 35 138 Q34 155 34 174 Q38 178 43 176 Q44 158 45 138 Q46 120 48 110 Z" />
      <path d="M60 108 Q64 120 65 138 Q66 155 66 174 Q62 178 57 176 Q56 158 55 138 Q54 120 52 110 Z" />
    </g>,

    // 1 - Normal
    <g key="female-1">
      <ellipse cx="50" cy="22" rx="11" ry="12" />
      <rect x="43" y="32" width="14" height="8" rx="3" />
      <path d="M38 40 Q34 54 35 68 Q32 80 33 96 Q34 110 37 120 L63 120 Q66 110 67 96 Q68 80 65 68 Q66 54 62 40 Z" />
      <ellipse cx="43" cy="55" rx="6" ry="5" />
      <ellipse cx="57" cy="55" rx="6" ry="5" />
      <path d="M38 45 Q28 60 27 78 Q26 93 28 106 Q32 110 37 107 Q36 92 37 76 Q39 60 43 48 Z" />
      <path d="M62 45 Q72 60 73 78 Q74 93 72 106 Q68 110 63 107 Q64 92 63 76 Q61 60 57 48 Z" />
      {/* wider hips */}
      <path d="M37 118 Q33 132 31 152 Q30 170 30 192 Q35 196 41 194 Q43 172 44 151 Q46 131 49 119 Z" />
      <path d="M63 118 Q67 132 69 152 Q70 170 70 192 Q65 196 59 194 Q57 172 56 151 Q54 131 51 119 Z" />
    </g>,

    // 2 - Overweight
    <g key="female-2">
      <ellipse cx="50" cy="22" rx="13" ry="12" />
      <rect x="42" y="32" width="16" height="9" rx="3" />
      <path d="M35 41 Q29 57 30 74 Q26 88 27 106 Q28 122 32 134 L68 134 Q72 122 73 106 Q74 88 70 74 Q71 57 65 41 Z" />
      <ellipse cx="43" cy="58" rx="8" ry="6" />
      <ellipse cx="57" cy="58" rx="8" ry="6" />
      <path d="M35 46 Q24 62 23 82 Q22 98 24 113 Q28 118 34 115 Q33 97 34 80 Q36 62 41 49 Z" />
      <path d="M65 46 Q76 62 77 82 Q78 98 76 113 Q72 118 66 115 Q67 97 66 80 Q64 62 59 49 Z" />
      <path d="M32 132 Q29 148 27 170 Q26 190 26 212 Q32 217 40 214 Q42 191 43 168 Q45 146 48 133 Z" />
      <path d="M68 132 Q71 148 73 170 Q74 190 74 212 Q68 217 60 214 Q58 191 57 168 Q55 146 52 133 Z" />
    </g>,

    // 3 - Obese
    <g key="female-3">
      <ellipse cx="50" cy="21" rx="15" ry="13" />
      <rect x="40" y="32" width="20" height="10" rx="4" />
      <path d="M30 42 Q22 61 22 82 Q19 102 21 122 Q23 140 28 154 L72 154 Q77 140 79 122 Q81 102 78 82 Q78 61 70 42 Z" />
      <ellipse cx="42" cy="62" rx="10" ry="8" />
      <ellipse cx="58" cy="62" rx="10" ry="8" />
      <path d="M30 48 Q18 66 17 89 Q16 108 18 124 Q23 130 30 127 Q29 108 30 88 Q32 68 38 52 Z" />
      <path d="M70 48 Q82 66 83 89 Q84 108 82 124 Q77 130 70 127 Q71 108 70 88 Q68 68 62 52 Z" />
      <path d="M28 152 Q25 172 23 196 Q22 218 22 240 Q30 246 40 242 Q42 218 43 192 Q46 168 50 153 Z" />
      <path d="M72 152 Q75 172 77 196 Q78 218 78 240 Q70 246 60 242 Q58 218 57 192 Q54 168 50 153 Z" />
    </g>,

    // 4 - Severely Obese
    <g key="female-4">
      <ellipse cx="50" cy="20" rx="17" ry="14" />
      <rect x="38" y="32" width="24" height="11" rx="5" />
      <path d="M24 43 Q12 66 11 94 Q8 118 12 140 Q15 162 22 178 L78 178 Q85 162 88 140 Q92 118 89 94 Q88 66 76 43 Z" />
      <ellipse cx="40" cy="68" rx="13" ry="10" />
      <ellipse cx="60" cy="68" rx="13" ry="10" />
      <path d="M24 50 Q10 72 9 99 Q8 122 10 140 Q16 147 25 143 Q23 120 24 97 Q26 72 33 56 Z" />
      <path d="M76 50 Q90 72 91 99 Q92 122 90 140 Q84 147 75 143 Q77 120 76 97 Q74 72 67 56 Z" />
      <path d="M22 176 Q19 200 17 226 Q16 250 16 272 Q26 279 38 274 Q40 249 41 222 Q44 196 49 176 Z" />
      <path d="M78 176 Q81 200 83 226 Q84 250 84 272 Q74 279 62 274 Q60 249 59 222 Q56 196 51 176 Z" />
    </g>,
  ];

  return (
    <svg
      viewBox="0 0 100 290"
      width="100%"
      height="100%"
      fill={active ? color : "#e5e7eb"}
      style={{ transition: "fill 0.4s ease" }}
    >
      {shapes[index]}
    </svg>
  );
}

export default function BMIGauge({ bmi, category, categoryColor, gender = "male" }: BMIGaugeProps) {
  // Map category to index
  const activeIndex = categories.findIndex(
    (c) => c.key === category || (category === "Normal" && c.key === "Normal")
  );

  return (
    <div className="w-full">
      {/* Silhouettes row */}
      <div className="flex items-end justify-center gap-1 px-2" style={{ height: 160 }}>
        {categories.map((cat, i) => (
          <div
            key={cat.key}
            className="flex flex-col items-center"
            style={{ flex: 1, maxWidth: 64, height: "100%" }}
          >
            <div
              className="w-full"
              style={{
                height: "100%",
                filter: i === activeIndex ? `drop-shadow(0 0 6px ${cat.color}88)` : "none",
                transform: i === activeIndex ? "scale(1.08)" : "scale(1)",
                transition: "transform 0.3s ease, filter 0.3s ease",
                transformOrigin: "bottom center",
              }}
            >
              {gender === "female" ? (
                <FemaleSilhouette index={i} active={i === activeIndex} color={cat.color} />
              ) : (
                <MaleSilhouette index={i} active={i === activeIndex} color={cat.color} />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Labels row */}
      <div className="flex justify-center gap-1 px-2 mt-2">
        {categories.map((cat, i) => (
          <div
            key={cat.key}
            className="flex-1 text-center"
            style={{ maxWidth: 64 }}
          >
            <div
              className="text-center px-1 py-0.5 rounded-md"
              style={{
                backgroundColor: i === activeIndex ? `${cat.color}22` : "transparent",
              }}
            >
              <p
                className="font-semibold leading-tight"
                style={{
                  fontSize: 8,
                  color: i === activeIndex ? cat.color : "#9ca3af",
                }}
              >
                {cat.label}
              </p>
              <p style={{ fontSize: 7, color: "#9ca3af" }}>{cat.range}</p>
            </div>
          </div>
        ))}
      </div>

      {/* BMI value display */}
      <div className="text-center mt-3">
        <span
          className="text-4xl font-bold"
          style={{ color: categoryColor, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {bmi.toFixed(1)}
        </span>
        <span
          className="ml-2 text-sm font-semibold"
          style={{ color: categoryColor }}
        >
          {category}
        </span>
      </div>
    </div>
  );
}