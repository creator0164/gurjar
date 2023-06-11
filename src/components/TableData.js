import { useState, useEffect } from "react";
import axios from "axios";
import { domain } from "../data/constant";
function TableData() {
  const [sortedCounts, setSortedCounts] = useState({ valid: false, data: [] });

  const selectData = (e) => {
    axios
      .get(domain + "/gurjar/population_search/", {
        params: {
          data: e.target.value,
        },
      })
      .then((response) => {
        if (response.data.valid) {
          setSortedCounts(response.data);
        } else {
          setSortedCounts({ valid: false, data: [] });
        }
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    if (!sortedCounts.valid) {
      axios
        .get(domain + "/gurjar/population_search/", {
          params: {
            data: "nationality",
          },
        })
        .then((response) => {
          if (response.data.valid) {
            setSortedCounts(response.data);
          } else {
            setSortedCounts({ valid: false, data: [] });
          }
        })
        .catch((error) => console.log(error));
    }
  }, []);
  return (
    <div className="shadow-lg overflow-y-auto rounded-lg ">
      <table className="table-auto w-full text-left scrollable-tbody">
        <thead className="bg-[#111] text-white px-4 py-2">
          <tr>
            <th className="px-4 py-2 rounded-tl-lg">
              <div class="flex items-center space-x-4">
                <select
                  title="Category"
                  id="select-dropdown"
                  onChange={selectData}
                  class="px-4 py-2 focus:outline-none bg-[#111] rounded text-white rounded-lg"
                >
                  <option
                    className="p-2 rounded-t-lg"
                    value="country"
                    selected
                  >
                    Country
                  </option>
                  <option className="p-2" value="state">
                    State
                  </option>
                  <option className="p-2" value="city">
                    City
                  </option>
                  <option className="p-2" value="village">
                    Village
                  </option>
                  <option className="p-2 rounded-b-lg" value="gotra">
                    Gotra
                  </option>
                </select>
              </div>
            </th>
            <th className="px-4 py-2 rounded-tr-lg">Population</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {sortedCounts.data.map(({ name, count }) => (
            <tr key={name} className="even:bg-[#A0C1D120]">
              <td className="pl-4 pr-2 py-1">{name}</td>
              <td className="pl-4 pr-2 py-1">{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableData;
