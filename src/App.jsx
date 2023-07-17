import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import axios from "axios";
import ApodMarsTitle from "./components/ApodMarsTitle/ApodMarsTitle";
import ApodMarsDetails from "./components/ApodMarsDetails/ApodMarsDetails";
import Loading from "./components/Loading/Loading";
import ErrorDate from "./components/ErrorDate/ErrorDate";
import "./App.css";
import NMSwitch from "./components/NMSwitch/NMSwitch";

function App() {
  const todayUSA = new Date(Date.now());
  todayUSA.setHours(todayUSA.getHours() - 8);
  const [date, setDate] = useState(todayUSA.toISOString().slice(0, 10));
  const [debouncedDate] = useDebounce(date, 500);
  const maxDate = todayUSA.toISOString().slice(0, 10);
  const minDate = "1995-06-20";
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);
  const NASA_URL = "https://api.nasa.gov/";
  const NASA_API_KEY = "4cpcVd46ftMpS1idjZndiU09dpTiTmrZSrO3KFgO";
  const [apodMars, setApodMars] = useState(false);

  const handleSwitchChange = (e) => {
    setApodMars(e.target.checked);
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setErrorLoading(false);
      try {
        if (!apodMars) {
          const response = await axios.get(
            `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
          );
          setData(response.data);
        } else {
          const response = await axios.get(
            `${NASA_URL}mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}}&api_key=${NASA_API_KEY}`
          );
          setData(response.data);
        }
      } catch (error) {
        setErrorLoading(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [debouncedDate, apodMars]);

  return (
    <>
      <NMSwitch onChange={handleSwitchChange} />
      <ApodMarsTitle selection={apodMars} />
      <main>
        <label id="date-label" htmlFor="date">
          Choose a date:{" "}
        </label>
        <input
          type="date"
          name="date"
          id="date"
          max={maxDate}
          min={minDate}
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />

        {isLoading ? (
          <Loading />
        ) : errorLoading || (apodMars && !data.photos?.length) ? (
          <ErrorDate />
        ) : (
          <ApodMarsDetails selection={apodMars} data={data} date={date} />
        )}
      </main>
    </>
  );
}

export default App;
