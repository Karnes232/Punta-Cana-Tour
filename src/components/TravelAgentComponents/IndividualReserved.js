import React from "react";

const IndividualReserved = ({ client }) => {
  console.log(client);
  return (
    <>
      <table className="mx-auto text-base text-left text-gray-500 shadow rounded-xl overflow-hidden w-5/6 lg:w-1/2 xl:w-1/3">
        <tbody>
          <tr>
            <th className="p-2">Name:</th>
            <td className="capitalize">{client?.formInfo?.name}</td>
          </tr>
          <tr>
            <th className="p-2">Email:</th>
            <td className="">
              <a href={`mailto:${client?.formInfo?.email}`}>
                {client?.formInfo?.email}
              </a>
            </td>
          </tr>
          <tr>
            <th className="p-2">Tel:</th>
            <td className="">
              <a href={`tel:${client?.formInfo?.telephone}`}>
                {client?.formInfo?.phone}
              </a>
            </td>
          </tr>
          <tr>
            <th className="p-2">Hotel:</th>
            <td className="capitalize">{client?.formInfo?.location}</td>
          </tr>
          <tr>
            <th className="p-2">Date:</th>
            <td className="capitalize">{client?.formInfo?.Date}</td>
          </tr>
        </tbody>
      </table>
      <table className="mx-auto text-base text-left text-gray-500 shadow rounded-xl overflow-hidden w-5/6 lg:w-1/2 xl:w-1/3">
        <tbody>
          {client?.formInfo ? (
            <>
              {client.formInfo["Tour 1"] !== "- undefined" ? (
                <>
                  <tr>
                    <th className="p-2">Tour:</th>
                    <td className="capitalize">
                      {client.formInfo["Tour 1"].split("- ")}
                    </td>
                  </tr>
                  <tr>
                    <th className="p-2">Pax:</th>
                    <td className="capitalize">
                      {client.formInfo["Pax 1"].split("- ")}
                    </td>
                  </tr>
                </>
              ) : (
                <></>
              )}
              {client.formInfo["Tour 2"] !== "- undefined" ? (
                <>
                  <tr>
                    <th className="p-2">Tour:</th>
                    <td className="capitalize">
                      {client.formInfo["Tour 2"].split("- ")}
                    </td>
                  </tr>
                  <tr>
                    <th className="p-2">Pax:</th>
                    <td className="capitalize">
                      {client.formInfo["Pax 2"].split("- ")}
                    </td>
                  </tr>
                </>
              ) : (
                <></>
              )}
              {client.formInfo["Tour 3"] !== "- undefined" ? (
                <>
                  <tr>
                    <th className="p-2">Tour:</th>
                    <td className="capitalize">
                      {client.formInfo["Tour 3"].split("- ")}
                    </td>
                  </tr>
                  <tr>
                    <th className="p-2">Pax:</th>
                    <td className="capitalize">
                      {client.formInfo["Pax 3"].split("- ")}
                    </td>
                  </tr>
                </>
              ) : (
                <></>
              )}
              {client.formInfo["Tour 4"] !== "- undefined" ? (
                <>
                  <tr>
                    <th className="p-2">Tour:</th>
                    <td className="capitalize">
                      {client.formInfo["Tour 4"].split("- ")}
                    </td>
                  </tr>
                  <tr>
                    <th className="p-2">Pax:</th>
                    <td className="capitalize">
                      {client.formInfo["Pax 4"].split("- ")}
                    </td>
                  </tr>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </>
  );
};

export default IndividualReserved;
