/* eslint-disable react/prop-types */
import React from 'react';
import {Input} from '../../../components/ui/input';

function InputComponent({type, placeholder, value, onChange}) {
  return (
    <Input type = {type}
      value = {value}
      placeholder = {placeholder}
      onChange = {onChange}
      className="h-full w-full bg-white border border-gray-400 rounded-md mb-2 focus:outline-none"/>

  );
}
export default InputComponent;
