import { createContext, useState } from "react";
import _ from "lodash";

import { getDocument } from '../api/api';

const PanelContext = createContext({
  panels: [],
  addPanel: (panelObj) => {},
  removePanel: (panelObj) => {}
});

export function PanelContextProvider(props) {

  const [panels, setPanels] = useState([]);

  const panelsAreEqual = (panel1, panel2) => {
    return panel1.type === panel2.type && panel1.id === panel2.id;
  }

  const panelExists = (panelObj) => {
    return panels.find(panel => panelsAreEqual(panel, panelObj)) !== undefined;
  }
  
  const addPanelHandler = async (panelObj) => {
    if (!panelExists(panelObj)) {
      panelObj.content = await getDocument(panelObj.id, panelObj.type);
      setPanels(prevPanels => {
        return [panelObj].concat(prevPanels);
      });
    }
  }

  const removePanelHandler = (panelObj) => {
    setPanels(prevPanels => {
      return prevPanels.filter(panel => !panelsAreEqual(panel, panelObj));
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
