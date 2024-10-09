import React from "react";

const ProgressBars = ({
  qualityOfServiceAvg,
  responsivenessAvg,
  professionalismAvg,
  valueAvg,
  flexibilityAvg,
  small,
}) => {
  return (
    <div className="flex flex-col gap-3 md:w-[22rem]">
      <div className="flex items-center justify-between">
        <p className="text-xs">Quality of service</p>
        <div className="flex gap-2">
          <progress
            max={5}
            value={isNaN(qualityOfServiceAvg) ? 4.8 : qualityOfServiceAvg}
            className={`[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-primary-color [&::-moz-progress-bar]:bg-primary-color ${
              small ? "h-3" : "h-4"
            }`}
          />
          <p className="text-xs w-4 text-right">
            {isNaN(qualityOfServiceAvg) ? (
              <></>
            ) : (
              <>{qualityOfServiceAvg.toFixed(1)}</>
            )}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xs">Average response time</p>
        <div className="flex gap-2">
          <progress
            max={5}
            value={isNaN(responsivenessAvg) ? 4.3 : responsivenessAvg}
            className={`[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-primary-color [&::-moz-progress-bar]:bg-primary-color ${
              small ? "h-3" : "h-4"
            }`}
          />
          <p className="text-xs w-4 text-right">
            {isNaN(responsivenessAvg) ? (
              <></>
            ) : (
              <>{responsivenessAvg.toFixed(1)}</>
            )}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xs">Professionalism</p>
        <div className="flex gap-2">
          <progress
            max={5}
            value={isNaN(professionalismAvg) ? 4.6 : professionalismAvg}
            className={`[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-primary-color [&::-moz-progress-bar]:bg-primary-color ${
              small ? "h-3" : "h-4"
            }`}
          />
          <p className="text-xs w-4 text-right">
            {isNaN(professionalismAvg) ? (
              <></>
            ) : (
              <>{professionalismAvg.toFixed(1)}</>
            )}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xs">Value</p>
        <div className="flex gap-2">
          <progress
            max={5}
            value={isNaN(valueAvg) ? 4.7 : valueAvg}
            className={`[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-primary-color [&::-moz-progress-bar]:bg-primary-color ${
              small ? "h-3" : "h-4"
            }`}
          />
          <p className="text-xs w-4 text-right">
            {isNaN(valueAvg) ? <></> : <>{valueAvg.toFixed(1)}</>}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xs">Flexibility</p>
        <div className="flex gap-2">
          <progress
            max={5}
            value={isNaN(flexibilityAvg) ? 4.5 : flexibilityAvg}
            className={`[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-primary-color [&::-moz-progress-bar]:bg-primary-color ${
              small ? "h-3" : "h-4"
            }`}
          />
          <p className="text-xs w-4 text-right">
            {isNaN(flexibilityAvg) ? <></> : <>{flexibilityAvg.toFixed(1)}</>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBars;
