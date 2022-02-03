import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
    <div>
        <p>Ooops!!! Page Not Found. Kindly go <Link to="/">Home</Link></p>
    </div>
)

export default NotFoundPage