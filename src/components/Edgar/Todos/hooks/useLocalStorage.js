import moment from 'moment';
import { useState, useEffect } from "react"

export function useLocalStorage(key, defaultValue = []) {
  const [data, setData] = useState(defaultValue);

  useEffect(() => {
    const value = localStorage.getItem(key)
    console.log("value:", value);
    if (value !== null) {
      const result = JSON.parse(value, parser);
      setData(result)
    }
  }, [])

  return [data, setData]
}

function parser(key, value) {
  console.log("value:", value);
  if (key && key === 'registeredDate') {
    return moment(value)
  }
  return value
}