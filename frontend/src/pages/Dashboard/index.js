import React from 'react';

import WinsCompletion from "./WinsCompletion";
import WinsByCategory from './WinsByCategory';

export default function Dashboard() {
    return (
        <div>
            <WinsByCategory />
            <WinsCompletion />
        </div>
    );
}