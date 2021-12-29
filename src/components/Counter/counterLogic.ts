import { kea } from "kea";

import type { counterLogicType } from "./counterLogicType";
export const counterLogic = kea<counterLogicType>({
    actions: {
        incrementCounter: true
    },
    reducers: {
        count: [
            0,
            {
                incrementCounter: (state) => state + 1
            }
        ]
    }
});
