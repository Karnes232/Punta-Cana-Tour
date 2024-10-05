import React from "react";

const ProgressBars = () => {
  return (
    <div className="flex flex-col gap-3 md:w-[22rem]">
      <div className="flex items-center justify-between">
        <p className="text-xs">Quality of service</p>
        <div className="flex gap-2">
          <progress
            max={5}
            value={3.5}
            className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-primary-color [&::-moz-progress-bar]:bg-primary-color"
          />
          <p className="text-xs">3.5</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xs">Average response time</p>
        <div className="flex gap-2">
          <progress
            max={5}
            value={4.5}
            className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-primary-color [&::-moz-progress-bar]:bg-primary-color"
          />
          <p className="text-xs">4.5</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xs">Professionalism</p>
        <div className="flex gap-2">
          <progress
            max={5}
            value={2.4}
            className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-primary-color [&::-moz-progress-bar]:bg-primary-color"
          />
          <p className="text-xs">2.4</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xs">Value</p>
        <div className="flex gap-2">
          <progress
            max={5}
            value={4.9}
            className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-primary-color [&::-moz-progress-bar]:bg-primary-color"
          />
          <p className="text-xs">4.9</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xs">Flexibility</p>
        <div className="flex gap-2">
          <progress
            max={5}
            value={4.1}
            className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-primary-color [&::-moz-progress-bar]:bg-primary-color"
          />
          <p className="text-xs">4.1</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBars;
