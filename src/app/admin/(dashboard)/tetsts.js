      {tableRowsData.map(({ img, name }, index) => {
          const isLast = index === tableRowsData.length - 1;
          const classes = isLast
            ? "p-4"
            : "p-4 border-b border-blue-gray-50";

          return (
            <tr key={name}>
              <td className={classes}>
                <div className="flex flex-col">
                  {/* Render your content here, e.g., user index */}
                </div>
              </td>
              <td className={classes}>
                <div className="flex items-center gap-3 justify-center">
                  {/* Render user avatar */}
                </div>
              </td>
              <td className={classes}>
                <div className="flex flex-col">
                  {/* Render user name */}
                </div>
              </td>
              <td className={classes}>
              </td>
            </tr>
          );
      })}