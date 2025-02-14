import React from "react";

const Light = ({ room, on }) => {
    console.log(room, on);
    
    return <div>{on ? "💡" : "⬛"}</div>;
};

// Component가 변경되지 않았다면 재rendering 하지 않음
export default React.memo(Light);
// export default Light;