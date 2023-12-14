import React from "react";

const IndividualReserved = ({ client }) => {
  let purchasedDate = new Date(client.createdAt?.seconds * 1000);
  console.log(client);
  return (
    <>
      <table className="mx-auto text-base text-left text-gray-500 shadow rounded-xl overflow-hidden w-11/12 lg:w-1/2 xl:w-1/3">
        <tbody>
          <tr>
            <th className="p-2">Name:</th>
            <td className="capitalize">{client?.formData?.name}</td>
          </tr>
          <tr>
            <th className="p-2">Email:</th>
            <td className="">
              <a href={`mailto:${client?.formData?.email}`}>
                {client?.formData?.email}
              </a>
            </td>
          </tr>
          <tr>
            <th className="p-2">Tel:</th>
            <td className="">
              <a href={`tel:${client?.formData?.phone}`}>
                {client?.formData?.phone}
              </a>
            </td>
          </tr>
          <tr>
            <th className="p-2">Hotel:</th>
            <td className="capitalize">{client?.formData?.hotelSelect}</td>
          </tr>
          {client.formData?.roomNumber ? (
            <>
              <tr>
                <th className="p-2">Room Number:</th>
                <td className="capitalize">{client?.formData?.roomNumber}</td>
              </tr>
            </>
          ) : (
            <></>
          )}

          <tr>
            <th className="p-2">Additional:</th>
            <td className="capitalize">{client?.formData?.additional}</td>
          </tr>
          <tr>
            <th className="p-2">Total Price:</th>
            <td className="capitalize">${client?.totalPrice}</td>
          </tr>
          <tr>
            <th className="p-2">Deposit:</th>
            <td className="capitalize">${client?.deposit}</td>
          </tr>
          <tr>
            <th className="p-2"> Purchased Date:</th>
            <td className="capitalize">
              {purchasedDate.toLocaleDateString("en-CA")}
            </td>
          </tr>

          {client?.tourRep ? (
            <>
              <tr>
                <th className="p-2">Tour Rep:</th>
                <td className="capitalize">{client?.tourRep}</td>
              </tr>
            </>
          ) : (
            <>
              <tr>
                <th className="p-2">Country</th>
                <td>{client.address?.country_code}</td>
              </tr>
            </>
          )}
        </tbody>
      </table>

      {client?.formData ? (
        <>
          {client.formData["Tour1"] !== "- undefined" ? (
            <>
              <table className="mx-auto text-base text-left text-gray-500 shadow rounded-xl overflow-hidden w-11/12 lg:w-1/2 xl:w-1/3">
                <tbody>
                  <tr className="">
                    <th className="p-2 w-2/5">Tour:</th>
                    <td className="capitalize">
                      {client.formData["Tour1"]?.split("- ")}
                    </td>
                  </tr>
                  <tr>
                    <th className="p-2 w-2/5">Pax:</th>
                    <td className="capitalize">
                      {client.formData["Pax1"]?.split("- ")}
                    </td>
                  </tr>
                  <tr>
                    <th className="p-2 w-2/5">Date:</th>
                    <td className="capitalize">
                      {client.formData["Date1"]?.split("- ")}
                    </td>
                  </tr>
                  <tr>
                    <th className="p-2 w-2/5">Pick Up Time:</th>
                    <td className="">{client.formData["PickUp1"]}</td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            <></>
          )}

          {client.formData["Tour2"] !== "- undefined" ? (
            <>
              {" "}
              <table className="mx-auto text-base text-left text-gray-500 shadow rounded-xl overflow-hidden w-11/12 lg:w-1/2 xl:w-1/3">
                <tbody>
                  <tr>
                    <th className="p-2 w-2/5">Tour:</th>
                    <td className="capitalize">
                      {client.formData["Tour2"]?.split("- ")}
                    </td>
                  </tr>
                  <tr>
                    <th className="p-2 w-2/5">Pax:</th>
                    <td className="capitalize">
                      {client.formData["Pax2"]?.split("- ")}
                    </td>
                  </tr>
                  <tr>
                    <th className="p-2 w-2/5">Date:</th>
                    <td className="capitalize">
                      {client.formData["Date2"]?.split("- ")}
                    </td>
                  </tr>
                  <tr>
                    <th className="p-2 w-2/5">Pick Up Time:</th>
                    <td className="">{client.formData["PickUp2"]}</td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            <></>
          )}
          {client.formData["Tour3"] !== "- undefined" ? (
            <>
              {" "}
              <table className="mx-auto text-base text-left text-gray-500 shadow rounded-xl overflow-hidden w-11/12 lg:w-1/2 xl:w-1/3">
                <tbody>
                  <tr>
                    <th className="p-2 w-2/5">Tour:</th>
                    <td className="capitalize">
                      {client.formData["Tour3"]?.split("- ")}
                    </td>
                  </tr>
                  <tr>
                    <th className="p-2 w-2/5">Pax:</th>
                    <td className="capitalize">
                      {client.formData["Pax3"]?.split("- ")}
                    </td>
                  </tr>
                  <tr>
                    <th className="p-2 w-2/5">Date:</th>
                    <td className="capitalize">
                      {client.formData["Date3"]?.split("- ")}
                    </td>
                  </tr>
                  <tr>
                    <th className="p-2 w-2/5">Pick Up Time:</th>
                    <td className="">{client.formData["PickUp3"]}</td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            <></>
          )}
          {client.formData["Tour4"] !== "- undefined" ? (
            <>
              {" "}
              <table className="mx-auto text-base text-left text-gray-500 shadow rounded-xl overflow-hidden w-11/12 lg:w-1/2 xl:w-1/3">
                <tbody>
                  <tr>
                    <th className="p-2 w-2/5">Tour:</th>
                    <td className="capitalize">
                      {client.formData["Tour4"]?.split("- ")}
                    </td>
                  </tr>
                  <tr>
                    <th className="p-2 w-2/5">Pax:</th>
                    <td className="capitalize">
                      {client.formData["Pax4"]?.split("- ")}
                    </td>
                  </tr>
                  <tr>
                    <th className="p-2 w-2/5">Date:</th>
                    <td className="capitalize">
                      {client.formData["Date4"]?.split("- ")}
                    </td>
                  </tr>
                  <tr>
                    <th className="p-2 w-2/5">Pick Up Time:</th>
                    <td className="">{client.formData["PickUp4"]}</td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default IndividualReserved;
