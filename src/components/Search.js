import React from "react";
import { Search as SearchIcon } from "@material-ui/icons";
const Search = (props) => {
  return (
    <div className="center-content">
      <div>
        <h4>Official info, events, and company updates. Just a search away.</h4>
      </div>
      <div className="search-form">
        <form action="">
          <div className="form-group">
            <input type={"text"}></input>
            <div className="icon">
              <SearchIcon style={{ color: "#000" }} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
