import React, { useState } from "react";
import "./Accordion.css";
import data from "./accordionData";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const Accordion = () => {
  const [selectedAccordion, setSelectedAccordion] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [multipleAccordions, setMultipleAccordions] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const handleSelectAccordion = (currentId) => {
    if (selectedAccordion === currentId) {
      setSelectedAccordion(null);
    } else {
      setSelectedAccordion(currentId);
    }
  };

  const handleSelectMultiAccordion = (currentId) => {
    const tempArray = [...multipleAccordions];
    const currentIdIndex = tempArray.indexOf(currentId);
    if (currentIdIndex === -1) {
      tempArray.push(currentId);
    } else {
      tempArray.splice(currentIdIndex, 1);
    }
    setMultipleAccordions(tempArray);
  };

  const handleMultiSelection = () => {
    setMultiSelection(!multiSelection);
    setMultipleAccordions([]);
  };

  return (
    <>
      <div className="accordion">
        <div className="accordion__wrapper">
          <span
            style={{ margin: "10px", fontSize: "0.875rem", color: "#121212" }}
          >
            {multiSelection && "Multi Selection is enabled"}
          </span>
          <div className="accordion__cta-buttons">
            <button onClick={handleMultiSelection} disabled={isExpanded}>
              {multiSelection ? "Disable" : "Enable"} Multiple Selection{" "}
            </button>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              disabled={multiSelection}
            >
              {isExpanded ? "Collapse All" : "Expand All"}
            </button>
          </div>
          {data && data.length > 0 ? (
            data.map((dataItem, dataIdx) => (
              <div key={dataIdx} className="accordion__item">
                <div
                  onClick={
                    multiSelection
                      ? () => handleSelectMultiAccordion(dataItem.id)
                      : () => handleSelectAccordion(dataItem.id)
                  }
                  className="accordion__title"
                >
                  <h3>{dataItem.FAQ}</h3>
                  <span className="accordion__toggle-icon">
                    {selectedAccordion === dataItem.id || isExpanded ? (
                      <HiChevronUp />
                    ) : (
                      <HiChevronDown />
                    )}
                  </span>
                </div>
                <div
                  className={`accordion__content ${
                    (multiSelection &&
                      multipleAccordions.indexOf(dataItem.id) !== -1) ||
                    selectedAccordion === dataItem.id ||
                    isExpanded
                      ? "show"
                      : ""
                  }`}
                >
                  {isExpanded ? (
                    <div>{dataItem.ans}</div>
                  ) : multiSelection ? (
                    multipleAccordions.indexOf(dataItem.id) !== -1 && (
                      <div>{dataItem.ans}</div>
                    )
                  ) : (
                    selectedAccordion === dataItem.id && (
                      <div>{dataItem.ans}</div>
                    )
                  )}
                </div>
              </div>
            ))
          ) : (
            <div>Oops. No data found!!</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordion;
