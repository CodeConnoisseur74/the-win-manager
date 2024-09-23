import React from 'react';

import WinsByCategory from './WinsByCategory';
import WinsCompletion from "./WinsCompletion";

export default function Dashboard() {
    return (
        <div>
            <WinsByCategory />
            <WinsCompletion />
        </div>
    );
}