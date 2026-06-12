export default function BMIChartTable() {
  const rows = [
    { range: "< 18.5", category: "Underweight", color: "#3b82f6", bg: "#eff6ff" },
    { range: "18.5 – 24.9", category: "Normal Weight", color: "#10b981", bg: "#f0fdf4" },
    { range: "25 – 29.9", category: "Overweight", color: "#f59e0b", bg: "#fffbeb" },
    { range: "30 – 34.9", category: "Obese", color: "#f97316", bg: "#fff7ed" },
    { range: "≥ 35", category: "Severely Obese", color: "#ef4444", bg: "#fef2f2" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100">
      <table className="w-full" aria-label="BMI Classification Chart">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-100">
            <th className="text-left px-6 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-wide">
              BMI Range
            </th>
            <th className="text-left px-6 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-wide">
              Category
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.category}
              className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors"
            >
              <td className="px-6 py-3.5 text-sm font-semibold text-gray-700">{row.range}</td>
              <td className="px-6 py-3.5">
                <span
                  className="text-sm font-bold px-3 py-1 rounded-full"
                  style={{ color: row.color, backgroundColor: row.bg }}
                >
                  {row.category}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}