export const TravelAgentTour = (tour, pickup, date) => {
  const balance = tour.tour?.price * tour?.guestCount * 0.7;
  const htmlBody = `<div class="u-row-container" style="padding: 0px;background-color: #f5f5f5">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #f5f5f5;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color: #f5f5f5;width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
      <div style="background-color: #f5f5f5;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 0px 0px 10px;font-family:arial,helvetica,sans-serif;" align="left">
            
          <div class='tourCard' style='display: flex; justify-content: space-between; margin-top: 1rem; margin-bottom: 1rem; gap: 0.75rem;'>
          <img 
          src='https:${tour.tour?.mainImage?.file?.url}'
          alt="Logo" width="80" height="80" class='tourImage'>
          <div class='innerDivTourCard' style='padding:0px 0px 0px 10px;'>
            <h1 class='tourName'>${tour.tourName}</h1>
            <div class='tourPriceDiv' style='justify-content: space-between;!important'>
            <p class='paddingLeft' style='color: rgb(75 85 99); padding:0px 0px 0px 10px;'>${
              tour.guestCount
            } pax</p>
        <p class='paddingLeft' style='color: rgb(31 41 55); padding:0px 0px 0px 10px;'><span style='font-weight:700;'>Balance:</span> $${balance.toFixed(
          2,
        )}</p>
        
        </div>
        </div>
        
        </div>
        <div class='tourDateDiv' style='justify-content: space-between;!important'>
        <p style='color: rgb(75 85 99)'>Date: ${date}</p><p class='paddingLeft' style='color: rgb(75 85 99); padding:0px 0px 0px 10px;'>Time: ${pickup} </p>
        </div>
    
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  
  
      `;
  return htmlBody;
};
