import { createContext, useState } from "react";
import _ from "lodash";

const PanelContext = createContext({
  panels: [],
  addPanel: (panelObj) => {},
  removePanel: (panelObj) => {}
});

export function PanelContextProvider(props) {

  const [panels, setPanels] = useState([]);
  
  const addPanelHandler = (panelObj) => {
    if (!_.some(panels, panelObj)) {
      setPanels((prevPanels) => {
        return [panelObj].concat(prevPanels);
      });
    }
  }

  const removePanelHandler = (panelObj) => {
    setPanels((prevPanels) => {
      return prevPanels.filter(panel => !_.isEqual(panelObj, panel));
    });
  }

  const context = {
    panels: panels,
    addPanel: addPanelHandler,
    removePanel: removePanelHandler
  };

  return <PanelContext.Provider value={context}>
    {props.children}
  </PanelContext.Provider>
}

export default PanelContext;
