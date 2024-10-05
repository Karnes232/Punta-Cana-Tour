import React from "react";

const ProgressBars = ({
  qualityOfServiceAvg,
  responsivenessAvg,
  professionalismAvg,
  valueAvg,
  flexibilityAvg,
}) => {
  return (
    <div className="flex flex-col gap-3 md:w-[22rem]">
      <div className="flex items-center justify-between">
        <p className="text-xs">Quality of service</p>
        <div className="flex gap-2">
          <progress
            max={5}
            value={qualityOfServiceAvg}
            className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-primary-color [&::-moz-progress-bar]:bg-primary-color"
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
            value={responsivenessAvg}
            className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-primary-color [&::-moz-progress-bar]:bg-primary-color"
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
            value={professionalismAvg}
            className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-primary-color [&::-moz-progress-bar]:bg-primary-color"
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
            value={valueAvg}
            className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-primary-color [&::-moz-progress-bar]:bg-primary-color"
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
            value={flexibilityAvg}
            className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-primary-color [&::-moz-progress-bar]:bg-primary-color"
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
