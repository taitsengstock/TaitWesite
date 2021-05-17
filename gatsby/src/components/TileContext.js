import React, { useState } from 'react';

// Create Tile Conetxt


const TileContext = React.createContext();

export function TileContextProvider({ children }) {
    // we need to put the state in here
    const [tilesIsShowing, setTileIsShowing] = useState(true);

    return <TileContext.Provider value={[tilesIsShowing, setTileIsShowing]}> 
        {children}
    </TileContext.Provider>
}

export default TileContext;