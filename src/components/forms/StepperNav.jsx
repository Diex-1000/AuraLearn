"use client";

export default function StepperNav({ step, setStep, totalSteps }) {
  return (
    <div className="flex justify-between items-center px-8 pt-6">
      {Array.from({ length: totalSteps }).map((_, i) => {
        const s = i + 1;

        return (
          <div key={s} className="flex-1 flex items-center">
            {/* Círculo clickeable */}
            <button
              type="button"
              onClick={() => setStep(s)}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold transition-colors
                ${
                  s === step
                    ? "bg-gray-800 text-white"
                    : s < step
                    ? "bg-gray-800 text-white hover:bg-gray-700"
                    : "bg-gray-400 text-white hover:bg-gray-500"
                }`}
            >
              {s}
            </button>

            {/* Conector */}
            {s < totalSteps && (
              <div
                className={`flex-1 h-1 mx-2 rounded transition-colors 
                  ${s < step ? "bg-blue-900" : "bg-gray-400"}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
