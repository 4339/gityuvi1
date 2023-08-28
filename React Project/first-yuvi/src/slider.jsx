import React, { useState } from 'react';
import Slider from 'react-slider';

const SliderComponent = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  return (
    <div>
      <h2>Slider Example</h2>
      <Slider
        value={sliderValue}
        onChange={handleSliderChange}
        min={0}
        max={100}
      />
      <p>Selected Value: {sliderValue}</p>
    </div>
  );
};

export default SliderComponent;
